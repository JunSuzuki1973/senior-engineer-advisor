# OpenCode Integration

Use Senior Engineer Advisor with OpenCode CLI.

## Setup

### 1. Install the skill

```bash
# Via OpenClaw
openclaw skill install senior-engineer-advisor

# Or manual
git clone https://github.com/JunSuzuki1973/senior-engineer-advisor.git \
  ~/.openclaw/skills/senior-engineer-advisor
```

### 2. Configure

```bash
# Run setup wizard
openclaw skill advisor setup

# Or edit config directly
nano ~/.openclaw/skills/senior-engineer-advisor/config.yaml
```

Example configuration:
```yaml
agent:
  model: "glm-4.7"
  provider: "zai"
  api_key: "${ZAI_API_KEY}"

advisor:
  model: "claude-opus-4.7"
  provider: "anthropic"
  api_key: "${ANTHROPIC_API_KEY}"
```

### 3. Use with OpenCode

```bash
# Method 1: Direct usage
opencode --skill senior-engineer-advisor "Implement JWT authentication"

# Method 2: Set as default
export OPENCODE_SKILL=senior-engineer-advisor
opencode "Your task here"

# Method 3: In OpenCode config
# ~/.config/opencode/config.json
{
  "default_skill": "senior-engineer-advisor"
}
```

## How It Works

When you use OpenCode with this skill:

1. **Before execution** - Agent system prompt is prepended
2. **Task analysis** - OpenCode evaluates complexity
3. **Auto-escalation** - Complex tasks trigger advisor consultation
4. **Implementation** - OpenCode uses your configured model
5. **Knowledge saving** - Successful patterns saved to Wiki

## Example Session

```bash
$ opencode --skill senior-engineer-advisor "Design database schema for e-commerce"

OpenCode (GLM-4.7):
"Complexity: 0.9 (Database Design + Architecture)
This exceeds my implementation capabilities.

Consulting Claude Opus 4.7 for architectural guidance...

[Opus response received]

Advisor recommends:
- Use normalized schema with separate tables
- Implement soft deletes
- Add indexing strategy
- Consider read replicas

Implementing based on this guidance..."

[Implementation proceeds]

"Pattern saved to LLM Wiki as e-commerce-schema-001"
```

## Configuration Options

### Model Override

Override the agent model for specific tasks:

```bash
opencode --skill senior-engineer-advisor --model kimi-k2.5 "Task"
```

### Disable Advisor

Skip advisor for this task:

```bash
opencode --skill senior-engineer-advisor --no-advisor "Simple task"
```

### Force Advisor

Always consult advisor:

```bash
opencode --skill senior-engineer-advisor --force-advisor "Task"
```

## Troubleshooting

### "Skill not found"

```bash
# Verify installation
ls ~/.openclaw/skills/senior-engineer-advisor/

# Reinstall if needed
openclaw skill install senior-engineer-advisor --force
```

### "Advisor API key not set"

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
# Or add to ~/.bashrc
```

### "LLM Wiki not found"

```bash
# Install LLM Wiki
git clone https://github.com/karpathy/llm-wiki.git ~/openclaw-wiki

# Or update config path
openclaw skill advisor setup
```

## Advanced Usage

### Custom Complexity Function

Create `~/.openclaw/skills/senior-engineer-advisor/custom.py`:

```python
def evaluate_complexity(task, files):
    score = 0.0
    # Your custom logic
    return score
```

### Pre/Post Hooks

```yaml
# config.yaml
hooks:
  pre_advisor: "echo 'Consulting advisor...'"
  post_implementation: "echo 'Implementation complete'"
```

## See Also

- [Main README](../README.md)
- [SKILL.md](../SKILL.md)
- [Claude Code Integration](claude-code.md)
