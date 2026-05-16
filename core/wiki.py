import os
import re
from datetime import datetime
from pathlib import Path


def _wiki_path() -> Path:
    raw = os.environ.get("WIKI_DIR") or os.environ.get("OBSIDIAN_VAULT")
    if raw:
        return Path(raw)
    return Path.home() / ".advisor" / "wiki"


def _keyword_score(query: str, text: str) -> float:
    """Jaccard similarity over lowercased word sets."""
    q = set(re.findall(r"\w+", query.lower()))
    t = set(re.findall(r"\w+", text.lower()))
    if not q:
        return 0.0
    return len(q & t) / len(q | t)


class LLMWiki:
    def __init__(self):
        self.path = _wiki_path()
        self.path.mkdir(parents=True, exist_ok=True)

    def search(self, query: str, threshold: float | None = None) -> str | None:
        """Return the best-matching note content or None if below threshold."""
        if threshold is None:
            threshold = float(os.environ.get("WIKI_THRESHOLD", "0.25"))

        best_score = 0.0
        best_content: str | None = None

        for f in self.path.glob("*.md"):
            content = f.read_text(encoding="utf-8")
            score = _keyword_score(query, content)
            if score > best_score:
                best_score = score
                best_content = content

        return best_content if best_score >= threshold else None

    def save(self, title: str, content: str) -> Path:
        """Save or overwrite a note (Karpathy pattern: rewrite, don't append)."""
        slug = re.sub(r"[^\w\-]", "-", title.lower())[:50].strip("-")
        ts = datetime.now().strftime("%Y%m%d")
        # Overwrite existing note with same slug if present
        existing = list(self.path.glob(f"*-{slug}.md"))
        target = existing[0] if existing else self.path / f"{ts}-{slug}.md"
        target.write_text(f"# {title}\n\n{content}", encoding="utf-8")
        return target
