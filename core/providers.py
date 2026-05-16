import os
from openai import OpenAI


def get_agent_client() -> OpenAI:
    """Cheap model client for implementation and complexity assessment."""
    return OpenAI(
        base_url=os.environ.get("AGENT_API_BASE", "https://openrouter.ai/api/v1"),
        api_key=os.environ["AGENT_API_KEY"],
    )


def get_advisor_client() -> OpenAI:
    """High-capability model client (Opus) for architectural advice."""
    return OpenAI(
        base_url=os.environ.get("ADVISOR_API_BASE", "https://openrouter.ai/api/v1"),
        api_key=os.environ["ADVISOR_API_KEY"],
    )


def agent_model() -> str:
    return os.environ.get("AGENT_MODEL", "deepseek/deepseek-chat-v3-5")


def advisor_model() -> str:
    return os.environ.get("ADVISOR_MODEL", "anthropic/claude-opus-4.6")
