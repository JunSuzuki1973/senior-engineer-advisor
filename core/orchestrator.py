import os
from pathlib import Path

from .complexity import assess
from .providers import get_agent_client, get_advisor_client, agent_model, advisor_model
from .wiki import LLMWiki

_PROMPTS = Path(__file__).parent.parent / "prompts"
_AGENTS = Path(__file__).parent.parent / "agents"


def _read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def _load_specialist(name: str) -> str | None:
    path = _AGENTS / f"{name}.md"
    return path.read_text(encoding="utf-8") if path.exists() else None


def _pick_specialist(task: str) -> str | None:
    """Simple keyword routing to a specialist agent definition."""
    task_lower = task.lower()
    routing = [
        (["security", "auth", "jwt", "oauth", "xss", "injection", "encrypt"], "security"),
        (["database", "sql", "schema", "migration", "index", "query"], "database"),
        (["api", "rest", "graphql", "grpc", "endpoint", "openapi"], "api"),
        (["performance", "latency", "cache", "optimization", "profil"], "performance"),
        (["devops", "docker", "kubernetes", "ci/cd", "deploy", "infra"], "devops"),
        (["frontend", "react", "vue", "css", "ui", "ux", "component"], "frontend"),
        (["machine learning", "ml", "model", "training", "dataset", "llm"], "ml"),
    ]
    for keywords, specialist in routing:
        if any(k in task_lower for k in keywords):
            return _load_specialist(specialist)
    return _load_specialist("backend")  # default


class AdvisorOrchestrator:
    def __init__(self):
        self.agent_client = get_agent_client()
        self.advisor_client = get_advisor_client()
        self.wiki = LLMWiki()
        self.threshold = float(os.environ.get("COMPLEXITY_THRESHOLD", "0.5"))
        self.advice_depth = int(os.environ.get("ADVICE_DEPTH", "3"))

    # ── Public API ────────────────────────────────────────────────────────────

    def process(self, task: str, auto_save: bool = True) -> dict:
        """
        Returns:
            {
                "result": str,
                "complexity": float,
                "source": "wiki" | "advisor" | "direct",
                "wiki_saved": bool,
            }
        """
        # 1. Check knowledge base first
        cached = self.wiki.search(task)
        if cached:
            result = self._implement_with_cache(task, cached)
            return {"result": result, "complexity": 0.0, "source": "wiki", "wiki_saved": False}

        # 2. Assess complexity with cheap model
        complexity = assess(task)

        # 3. Route
        if complexity >= self.threshold:
            specialist = _pick_specialist(task)
            advice = self._consult_advisor(task, specialist)
            result = self._implement_with_advice(task, advice)
            source = "advisor"
        else:
            result = self._implement_direct(task)
            source = "direct"

        # 4. Persist to wiki (Karpathy rewrite pattern)
        saved = False
        if auto_save:
            self.wiki.save(task[:60], result)
            saved = True

        return {"result": result, "complexity": complexity, "source": source, "wiki_saved": saved}

    # ── Private helpers ───────────────────────────────────────────────────────

    def _chat_agent(self, system: str, user: str) -> str:
        resp = self.agent_client.chat.completions.create(
            model=agent_model(),
            messages=[{"role": "system", "content": system}, {"role": "user", "content": user}],
            max_tokens=4096,
        )
        return resp.choices[0].message.content

    def _chat_advisor(self, system: str, user: str) -> str:
        max_tokens = {1: 200, 2: 400, 3: 600, 4: 800, 5: 1200}.get(self.advice_depth, 600)
        resp = self.advisor_client.chat.completions.create(
            model=advisor_model(),
            messages=[{"role": "system", "content": system}, {"role": "user", "content": user}],
            max_tokens=max_tokens,
        )
        return resp.choices[0].message.content

    def _implement_direct(self, task: str) -> str:
        system = _read(_PROMPTS / "agent_system.md")
        return self._chat_agent(system, task)

    def _implement_with_cache(self, task: str, cached: str) -> str:
        system = _read(_PROMPTS / "agent_system.md")
        user = f"## Relevant knowledge from wiki\n\n{cached}\n\n## Task\n\n{task}"
        return self._chat_agent(system, user)

    def _consult_advisor(self, task: str, specialist: str | None) -> str:
        base = _read(_PROMPTS / "advisor_system.md")
        system = f"{base}\n\n{specialist}" if specialist else base
        return self._chat_advisor(system, task)

    def _implement_with_advice(self, task: str, advice: str) -> str:
        system = _read(_PROMPTS / "agent_system.md")
        user = f"## Architectural advice from senior advisor\n\n{advice}\n\n## Task\n\n{task}"
        return self._chat_agent(system, user)
