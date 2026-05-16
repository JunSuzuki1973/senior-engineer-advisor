# Senior Engineer Advisor

> A cheap model implements. Opus advises. The wiki remembers.

**Senior Engineer Advisor** is a multi-model AI orchestration system for software development.  
Cheap, fast models handle everyday implementation. Claude Opus steps in only when architectural guidance is needed. Every solution is stored in an LLM Wiki — so recurring tasks cost nothing the second time.

📖 [日本語ドキュメント](README_JA.md)

---

## How it works

```
Task
 └─► Wiki search ──── hit ──► Implement (zero LLM cost)
          │
         miss
          │
          └─► Complexity score (cheap model)
                    │
               score ≥ 0.5          score < 0.5
                    │                    │
                    ▼                    ▼
             Opus advises        Implement directly
                    │                    │
                    └──────┬────────────┘
                           ▼
                     Save to wiki
```

---

## Supported tools

| Tool | Status |
|---|---|
| Claude Code | ✅ |
| OpenCode | ✅ |
| Kilo CLI | ✅ |
| OpenClaw | ✅ |

---

## Supported providers (OpenAI-compatible)

All providers share the same OpenAI-compatible interface.  
Mix and match: use a cheap provider for the agent, Anthropic/OpenRouter for Opus.

| Provider | Agent model example | Advisor model example |
|---|---|---|
| [OpenRouter](https://openrouter.ai) | `deepseek/deepseek-chat-v3-5` | `anthropic/claude-opus-4.6` |
| [Kilo Pass](https://kilocode.ai) | `deepseek/deepseek-v3` | `anthropic/claude-opus-4.6` |
| [Together.ai](https://together.ai) | `Qwen/Qwen3-235B-A22B` | — |
| Anthropic Direct | — | `claude-opus-4-5-20251001` |
| Ollama (local) | `qwen2.5-coder:32b` | — |

> **No vendor lock-in.** Switch providers by changing two lines in `.env`.

---

## Quick start

### 1. Clone

```bash
git clone https://github.com/JunSuzuki1973/senior-engineer-advisor
cd senior-engineer-advisor
```

### 2. Configure

```bash
cp .env.example .env
```

Minimum config (OpenRouter — one key covers both agent and advisor):

```bash
AGENT_API_KEY=sk-or-xxxx
AGENT_MODEL=deepseek/deepseek-chat-v3-5

ADVISOR_API_KEY=sk-or-xxxx
ADVISOR_MODEL=anthropic/claude-opus-4.6
```

See [`.env.example`](.env.example) for all provider options.

### 3. Install

```bash
# Auto-detect your tool (claude, opencode, kilo, openclaw)
bash scripts/install.sh

# Or specify explicitly
bash scripts/install.sh claude-code
```

### 4. Verify

```bash
# Complexity check only (minimal API usage)
python -m core.cli --dry-run "Implement JWT refresh token rotation with Redis"

# Full run
python -m core.cli "Add rate limiting to the login endpoint"
```

---

## Usage

### CLI

```bash
advisor "task description"           # Full pipeline
advisor --dry-run "task"             # Complexity score only
advisor --wiki-only "keyword"        # Search wiki, no LLM calls
advisor --no-save "task"            # Skip wiki save
advisor --depth 5 "task"            # Detailed Opus advice (1–5)
```

### Claude Code slash commands

```
/advisor   Implement JWT refresh token rotation
/advisor-wiki   JWT authentication
/advisor-dry    Add rate limiting to the login endpoint
```

---

## LLM Wiki — knowledge that grows

Every solution is stored as a Markdown file in `$WIKI_DIR` (default: `~/.advisor/wiki/`).  
When a similar task arrives, the wiki is checked first — no model calls needed.

**Karpathy pattern**: new knowledge *overwrites* the existing note rather than appending.  
Notes stay current instead of accumulating stale layers.

### Obsidian integration (optional)

```bash
OBSIDIAN_VAULT=/path/to/your/vault   # in .env
```

Point the wiki at an Obsidian vault to get graph view, backlinks, and search UI.

---

## Specialist agents

### Built-in (8 domains)

Defined in [`agents/`](agents/):

| File | Domain |
|---|---|
| `security.md` | Auth, JWT, OWASP, cryptography |
| `database.md` | Schema design, migrations, query optimization |
| `api.md` | REST, GraphQL, gRPC, OpenAPI |
| `performance.md` | Caching, profiling, concurrency |
| `devops.md` | Docker, Kubernetes, CI/CD, IaC |
| `frontend.md` | React/Vue, accessibility, Core Web Vitals |
| `backend.md` | Clean architecture, microservices, DDD |
| `ml.md` | LLM integration, embeddings, RAG |

### Extended: agency-agents (optional)

Import 144+ specialist agents from [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) (MIT):

```bash
bash scripts/convert/agency-agents.sh
```

---

## Project structure

```
senior-engineer-advisor/
├── core/
│   ├── providers.py        # OpenAI-compatible client factory
│   ├── complexity.py       # Complexity scoring via cheap model
│   ├── wiki.py             # LLM Wiki (Karpathy rewrite pattern)
│   ├── orchestrator.py     # Main pipeline
│   └── cli.py              # advisor CLI entry point
├── prompts/
│   ├── complexity.md       # Scoring prompt (JSON output)
│   ├── advisor_system.md   # Opus role: guidance only, no code
│   ├── agent_system.md     # Implementation agent rules
│   └── agency_assignment.md  # Specialist routing table
├── agents/                 # 8 built-in specialist definitions
├── adapters/
│   ├── claude-code/        # CLAUDE.md + slash commands
│   ├── opencode/           # config.yaml
│   ├── kilo/               # config.yaml
│   └── openclaw/           # config.yaml
├── scripts/
│   ├── install.sh          # Auto-detect tool and install
│   └── convert/            # Per-tool conversion scripts
├── .env.example            # All provider options documented
├── config.yaml             # Structural settings
└── requirements.txt        # openai, python-dotenv, pyyaml
```

---

## Requirements

- Python 3.10+
- One API key for the agent model (any OpenAI-compatible provider)
- One API key for the advisor model (OpenRouter, Kilo Pass, or Anthropic direct)
- Obsidian app (optional — for wiki UI)

---

## License

MIT License — Copyright 2026 Jun Suzuki

This project references and integrates with:
- [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) (MIT)
- [eugeniughelbur/obsidian-second-brain](https://github.com/eugeniughelbur/obsidian-second-brain) (MIT)
- Andrey Karpathy's [LLM Wiki pattern](https://x.com/karpathy)
