# Senior Engineer Advisor

**Give cost-effective models "humility" and "judgment"**

Works immediately with OpenCode, Claude Code, Kilo CLI. Automates the Advisor Strategy and integrates with LLM Wiki for knowledge accumulation.

## Features

- ✅ **Interactive Setup** - Configure advisor model during skill installation
- ✅ **Auto-Judgment** - Evaluates task complexity, gets advice when needed
- ✅ **LLM Wiki Integration** - Auto-records and reuses successful patterns
- ✅ **Ready to Use** - Works out-of-the-box with OpenCode/Claude Code/Kilo

## Quick Start

### 1. Install

```bash
# Via OpenClaw
openclaw skill install senior-engineer-advisor

# Or manual
git clone https://github.com/JunSuzuki1973/senior-engineer-advisor.git ~/.openclaw/skills/senior-engineer-advisor
```

### 2. Initial Setup (Interactive)

```bash
# Launch setup wizard
openclaw skill advisor setup

# Configure interactively:
# - Cost-effective model: GLM-4.7 / Kimi / GPT-4o-mini etc.
# - Advisor model: Claude Opus 4.7 / GPT-5.5 etc.
# - API keys
# - LLM Wiki path
```

### 3. Use Immediately

```bash
# With OpenCode
opencode --skill senior-engineer-advisor "Feature to implement"

# With Claude Code
claude --skill senior-engineer-advisor "Feature to implement"

# With Kilo
kilo run --skill senior-engineer-advisor "Feature to implement"
```

## How It Works

### Normal Flow

```
You: "Implement JWT authentication"

AI (GLM-4.7):
"Complexity score: 0.85 (Security + Design needed)
Recognizing my limitations. Consulting advisor..."

→ Consults Opus 4.7 (design only)

AI (GLM-4.7):
"Advisor guidance:
- Use RS256
- Token lifetime 15min/7days
- httpOnly cookies

Implementing according to this guidance."

→ Implementation complete

AI (GLM-4.7):
"Success! Pattern saved to LLM Wiki.
Next time: No advisor needed (cost $0)"
```

### Knowledge Reuse

```
You: "JWT auth for another API"

AI (GLM-4.7):
"Similar pattern found in LLM Wiki (similarity 0.92)
Reusing previous advisor guidance.
No advisor call needed!"

→ Immediate implementation (cost optimized)
```

## AI Behavior When Skill is Active

With this skill active, AI always:

1. **Self-evaluates** - "Can I really do this task?"
2. **Checks Wiki** - "Has there been a similar task before?"
3. **Decides & Executes** - Consults advisor if complex, implements directly if simple
4. **Records Knowledge** - Auto-saves to Wiki on success

## Cost Savings

| Daily Tasks | Traditional (All Opus) | With This Skill | Savings |
|-------------|----------------------|-----------------|---------|
| 10 tasks | $15.00 | $3.50 | **77%** |
| 50 tasks | $75.00 | $12.00 | **84%** |
| 100 tasks | $150.00 | $20.00 | **87%** |

## Supported CLI Tools

| CLI | Usage | Documentation |
|-----|-------|--------------|
| **OpenCode** | `opencode --skill senior-engineer-advisor` | [integrations/opencode.md](integrations/opencode.md) |
| **Claude Code** | `claude --skill senior-engineer-advisor` | [integrations/claude-code.md](integrations/claude-code.md) |
| **Kilo CLI** | `kilo run --skill senior-engineer-advisor` | [integrations/kilo.md](integrations/kilo.md) |
| **OpenClaw** | Auto-applied | [integrations/openclaw.md](integrations/openclaw.md) |

## Documentation

- [SKILL.md](SKILL.md) - Skill definition and technical specs
- [prompts/](prompts/) - Prompt templates used
- [workflows/](workflows/) - Workflow definitions
- [examples/](examples/) - Real-world usage examples

## Configuration

Config file at `~/.openclaw/skills/senior-engineer-advisor/config.yaml`:

```yaml
# Cost-effective model (implementation)
agent:
  model: "glm-4.7"
  provider: "zai"
  api_key: "${ZAI_API_KEY}"

# Advisor model (design)
advisor:
  model: "claude-opus-4.7"
  provider: "anthropic"
  api_key: "${ANTHROPIC_API_KEY}"
  max_tokens: 800

# LLM Wiki integration
knowledge:
  llm_wiki:
    enabled: true
    path: "~/openclaw-wiki"
    auto_save: true
```

## License

MIT License

## Acknowledgments

- Inspired by Anthropic's "Code w/ Claude 2026" advisor strategy
- Integration with Karpathy's LLM Wiki
