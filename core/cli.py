#!/usr/bin/env python3
"""
advisor CLI entry point.
Usage:
    advisor "Your task description"
    advisor --dry-run "Your task"
    advisor --wiki-only "Your task"
    advisor --no-save "Your task"
"""
import argparse
import os
import sys
from pathlib import Path

from dotenv import load_dotenv


def _load_env():
    """Load .env from cwd, script dir, or home."""
    for candidate in [Path.cwd() / ".env", Path(__file__).parent.parent / ".env", Path.home() / ".advisor" / ".env"]:
        if candidate.exists():
            load_dotenv(candidate)
            return


def main():
    _load_env()

    parser = argparse.ArgumentParser(description="Senior Engineer Advisor")
    parser.add_argument("task", nargs="?", help="Task description")
    parser.add_argument("--dry-run", action="store_true", help="Show complexity score only, no implementation")
    parser.add_argument("--wiki-only", action="store_true", help="Only search wiki, no LLM calls")
    parser.add_argument("--no-save", action="store_true", help="Skip saving result to wiki")
    parser.add_argument("--auto", action="store_true", help="Non-interactive mode (no prompts)")
    parser.add_argument("--depth", type=int, choices=[1, 2, 3, 4, 5], help="Advice depth (1-5)")
    args = parser.parse_args()

    task = args.task or (sys.stdin.read().strip() if not sys.stdin.isatty() else None)
    if not task:
        parser.print_help()
        sys.exit(1)

    if args.depth:
        os.environ["ADVICE_DEPTH"] = str(args.depth)

    # Validate required env vars
    required = []
    if not os.environ.get("AGENT_API_KEY"):
        required.append("AGENT_API_KEY")
    if not os.environ.get("ADVISOR_API_KEY"):
        required.append("ADVISOR_API_KEY")
    if required:
        print(f"[advisor] Missing required env vars: {', '.join(required)}", file=sys.stderr)
        print("[advisor] Copy .env.example to .env and fill in your API keys.", file=sys.stderr)
        sys.exit(1)

    from .orchestrator import AdvisorOrchestrator
    from .wiki import LLMWiki

    if args.wiki_only:
        wiki = LLMWiki()
        result = wiki.search(task)
        if result:
            print(result)
        else:
            print("[advisor] No matching entry in wiki.")
        return

    if args.dry_run:
        from .complexity import assess
        score = assess(task)
        threshold = float(os.environ.get("COMPLEXITY_THRESHOLD", "0.5"))
        verdict = "→ would escalate to advisor" if score >= threshold else "→ would implement directly"
        print(f"[advisor] complexity={score:.2f} (threshold={threshold}) {verdict}")
        return

    orch = AdvisorOrchestrator()
    out = orch.process(task, auto_save=not args.no_save)

    print(out["result"])
    print(
        f"\n[advisor] source={out['source']} complexity={out['complexity']:.2f} wiki_saved={out['wiki_saved']}",
        file=sys.stderr,
    )


if __name__ == "__main__":
    main()
