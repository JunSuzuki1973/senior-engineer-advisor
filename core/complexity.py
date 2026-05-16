import json
import os
from pathlib import Path

from .providers import get_agent_client, agent_model

_PROMPT_PATH = Path(__file__).parent.parent / "prompts" / "complexity.md"


def _load_prompt() -> str:
    return _PROMPT_PATH.read_text(encoding="utf-8")


def assess(task: str) -> float:
    """Return a complexity score 0.0–1.0 using the cheap agent model."""
    client = get_agent_client()
    response = client.chat.completions.create(
        model=agent_model(),
        messages=[
            {"role": "system", "content": _load_prompt()},
            {"role": "user", "content": task},
        ],
        max_tokens=200,
        temperature=0,
    )
    raw = response.choices[0].message.content.strip()
    # Strip markdown code fences if present
    if raw.startswith("```"):
        raw = raw.split("```")[1]
        if raw.startswith("json"):
            raw = raw[4:]
    try:
        data = json.loads(raw)
        score = float(data.get("score", 0.5))
        return max(0.0, min(1.0, score))
    except (json.JSONDecodeError, ValueError, KeyError):
        # Fallback: escalate on parse failure to be safe
        return 0.8
