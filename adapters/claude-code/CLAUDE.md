# Senior Engineer Advisor — Claude Code Adapter

This adapter integrates the advisor orchestrator into Claude Code as slash commands.

## Available commands

| Command | Description |
|---|---|
| `/advisor` | Run full advisor pipeline for current task |
| `/advisor-wiki` | Search wiki only (no LLM calls) |
| `/advisor-dry` | Complexity score only |
| `/advisor-save` | Save current conversation result to wiki |

## Setup

```bash
# From the repo root
bash scripts/convert/claude-code.sh
```

This symlinks the command files into `~/.claude/commands/`.

## Environment variables

Set these in your shell profile or `.env` file:

```bash
export AGENT_API_KEY="your-key"
export AGENT_API_BASE="https://openrouter.ai/api/v1"
export AGENT_MODEL="deepseek/deepseek-chat-v3-5"

export ADVISOR_API_KEY="your-key"
export ADVISOR_API_BASE="https://openrouter.ai/api/v1"
export ADVISOR_MODEL="anthropic/claude-opus-4.6"

export WIKI_DIR="$HOME/.advisor/wiki"
export COMPLEXITY_THRESHOLD="0.5"
export ADVICE_DEPTH="3"
```

## How it works

1. Claude Code agent assesses your task complexity via the cheap model
2. If complexity ≥ threshold, Opus provides architectural guidance
3. The cheap model implements using that guidance
4. Result is saved to the wiki for future reuse
