# Claude Code Integration

Use Senior Engineer Advisor with Claude Code CLI.

## Setup

### 1. Install the skill

```bash
openclaw skill install senior-engineer-advisor
```

### 2. Configure Claude Code

Add to `~/.claude-code/settings.json`:

```json
{
  "skills": ["senior-engineer-advisor"],
  "agent": {
    "model": "claude-sonnet-4.5"
  },
  "advisor": {
    "model": "claude-opus-4.7"
  }
}
```

Or use environment variables:

```bash
export CLAUDE_CODE_AGENT_MODEL="claude-sonnet-4.5"
export CLAUDE_CODE_ADVISOR_MODEL="claude-opus-4.7"
export ANTHROPIC_API_KEY="sk-ant-..."
```

### 3. Use with Claude Code

```bash
# Method 1: With skill flag
claude --skill senior-engineer-advisor "Design microservices architecture"

# Method 2: Auto-applied (if configured as default)
claude "Your task here"

# Method 3: Per-project config
# Create .claude-code/skills.yaml in your project
echo "skills:\n  - senior-engineer-advisor" > .claude-code/skills.yaml
```

## How It Works

Claude Code with this skill:

1. **Self-identifies** as cost-effective implementation model
2. **Evaluates** each task's complexity
3. **Escalates** to Opus when needed (within Anthropic ecosystem)
4. **Implements** with guidance
5. **Saves** patterns to Wiki

## Example Session

```bash
$ claude --skill senior-engineer-advisor "Implement OAuth2 flow"

Claude (Sonnet 4.5):
"Evaluating task complexity...
Score: 0.88 (Security + Authentication)
This is beyond my implementation scope.

Spawning Opus 4.7 for architectural guidance..."

[Internal advisor consultation]

"Opus recommends:
- Use authorization code flow (not implicit)
- PKCE for mobile/SPAs
- Refresh token rotation
- State parameter for CSRF protection

Proceeding with implementation..."

[Code generation...]

"Implementation complete. Pattern saved to Wiki."
```

## Benefits of Using with Claude Code

### 1. Seamless Escalation
- Same Anthropic ecosystem
- No additional API keys needed
- Smooth handoff between models

### 2. Cost Optimization
- Sonnet for routine work ($3/1M)
- Opus only for complex decisions ($15/1M)
- Typical savings: 70-80%

### 3. Knowledge Accumulation
- Patterns saved automatically
- Reuse across projects
- Team-wide knowledge sharing

## Configuration

### Default Agent Model

```json
// ~/.claude-code/settings.json
{
  "agent": {
    "model": "claude-sonnet-4.5",
    "max_tokens": 4000
  }
}
```

### Default Advisor Model

```json
{
  "advisor": {
    "model": "claude-opus-4.7",
    "max_tokens": 800
  }
}
```

### Complexity Threshold

```json
{
  "skill_config": {
    "senior-engineer-advisor": {
      "complexity_threshold": 0.7
    }
  }
}
```

## Per-Project Configuration

Create `.claude-code/skills.yaml`:

```yaml
skills:
  - senior-engineer-advisor

agent:
  model: claude-sonnet-4.5

advisor:
  model: claude-opus-4.7
  
knowledge:
  llm_wiki:
    path: ./project-wiki
```

## Example Use Cases

### Architecture Decisions

```bash
claude --skill senior-engineer-advisor "Should we use microservices or monolith?"

→ Spawns Opus for architectural guidance
→ Implements recommendation
→ Documents decision
```

### Security Implementation

```bash
claude --skill senior-engineer-advisor "Implement API authentication"

→ Recognizes security complexity
→ Consults Opus for best practices
→ Implements secure solution
```

### Database Design

```bash
claude --skill senior-engineer-advisor "Design schema for new feature"

→ Evaluates schema complexity
→ Gets advisor input on relationships
→ Implements optimized design
```

## Troubleshooting

### "Cannot spawn advisor"

Check API permissions:
```bash
# Verify Opus access
anthropic models list
```

### "Skill not applied"

Check configuration:
```bash
cat ~/.claude-code/settings.json
# Or
cat .claude-code/skills.yaml
```

### "Wiki save failed"

Verify path:
```bash
ls -la ~/openclaw-wiki/
# Or your configured path
```

## Best Practices

### 1. Trust the Escalation

Don't override the skill's judgment:
```bash
# Good
claude --skill senior-engineer-advisor "Design system"

# Avoid
claude --skill senior-engineer-advisor --no-advisor "Complex design task"
```

### 2. Review Wiki Regularly

```bash
# Check saved patterns
ls -la ~/openclaw-wiki/advisor-patterns/

# Review before new projects
```

### 3. Provide Context

Help the skill make better decisions:
```bash
claude --skill senior-engineer-advisor --file README.md "Design system"
```

## See Also

- [Main README](../README.md)
- [SKILL.md](../SKILL.md)
- [OpenCode Integration](opencode.md)
