# Senior Engineer Advisor v4

> **Dynamic specialist assignment + LLM Wiki knowledge cycling for cost-effective AI coding.**

Teach your agent to consult the optimal specialist team from 226 available agents, accumulate knowledge in LLM Wiki, and reuse patterns for continuous improvement.

## Overview

This skill provides:

1. **Dynamic Agent Selection** - Select 3-8 most relevant specialists from 226 agents based on task analysis
2. **Advice Depth Control** - 5 levels of advisory detail (1=Simple to 5=Comprehensive)
3. **LLM Wiki Integration** - Semantic similarity search (threshold 0.75) and automatic pattern saving
4. **Quality Assurance** - Post-implementation code review with user permission

## Key Features

- ✅ **Agency Agents Integration** - Auto-assign specialists (Security, Database, API, etc.)
- ✅ **Pre-Implementation Advisory** - Get architectural guidance before coding
- ✅ **Post-Implementation Review** - Code review on demand with user permission
- ✅ **LLM Wiki Integration** - Accumulate and reuse organizational knowledge
- ✅ **Cost Optimization** - 70-85% cost reduction vs. using frontier models for everything

## How It Works

### 1. Task Reception

User submits a task to the agent (GLM-4.7, Kimi, etc.)

### 2. Complexity Assessment

Agent evaluates: "Can I handle this alone?"

```
Complexity Score: 0.0-1.0
Threshold: 0.7
```

### 3. Specialist Assignment (Agency Agents)

If complex, assign appropriate specialist:

| Task Type | Assigned Specialist |
|-----------|---------------------|
| Security (Auth, encryption) | Security Architect |
| Database (Schema, optimization) | Database Expert |
| API Design (REST, GraphQL) | API Designer |
| Performance (Scaling, caching) | Performance Engineer |
| Infrastructure (CI/CD, Docker) | DevOps Specialist |
| Frontend (React, Vue patterns) | Frontend Architect |
| Backend (Services, patterns) | Backend Architect |
| ML/AI (Models, pipelines) | ML Engineer |

### 4. Advisory Consultation

Specialist provides high-level guidance:
- Architecture approach
- Key pitfalls
- Best practices
- Design decisions

### 5. Implementation

Agent implements following guidance.

### 6. Code Review (Optional)

```
Agent: "Implementation complete. Would you like a code review?"

User: [Yes] / [No]

If Yes:
  - Spawn Code Review Agent (Opus/GPT-5.5)
  - Review for bugs, security, performance
  - Present findings
  - Fix if needed
  - Re-review

If No:
  - Proceed to save
```

### 7. Knowledge Capture

Save successful pattern to LLM Wiki for reuse.

## Configuration

```yaml
# ~/.openclaw/skills/senior-engineer-advisor/config.yaml

# Cost-effective implementation agent
agent:
  model: "glm-4.7"
  provider: "zai"
  api_key: "${ZAI_API_KEY}"

# Advisor configuration
advisor:
  # General advisor (fallback)
  general:
    model: "claude-opus-4.7"
    provider: "anthropic"
    api_key: "${ANTHROPIC_API_KEY}"
  
  # Agency Agents specialists
  agency_agents:
    enabled: true
    specialists:
      security:
        model: "claude-opus-4.7"
        description: "Security Architect"
      database:
        model: "claude-opus-4.7"
        description: "Database Expert"
      # ... (other specialists)

# Code review configuration
code_review:
  enabled: true
  require_permission: true  # Ask user before review
  reviewer_model: "claude-opus-4.7"
  trigger_on:
    - "user_dissatisfied"
    - "bug_reported"
    - "high_complexity"

# Knowledge base
knowledge:
  llm_wiki:
    enabled: true
    path: "~/openclaw-wiki"
    auto_save: true
```

## Usage Examples

### Example 1: Security Task with Specialist

```
User: "Implement OAuth2 authentication"

Agent (GLM-4.7):
"Complexity: 0.88 (Security + Architecture)
Assigning Security Architect from Agency Agents..."

[Spawns Security Architect (Opus)]

Security Architect:
"Guidance:
- Use authorization code flow with PKCE
- Implement refresh token rotation
- Store tokens in httpOnly cookies
- Add state parameter for CSRF protection"

Agent (GLM-4.7):
"Implementing with security guidance..."

[Implementation complete]

Agent:
"Implementation complete. Code review recommended for security-critical code.
Request permission for review?"

User: "Yes"

[Code Review Agent reviews]

Code Review Agent:
"Issues found:
- HIGH: Missing input validation on redirect_uri
- MEDIUM: Token expiration not checked

Fixes applied. Re-reviewed: PASS"

Agent:
"Pattern saved to Wiki as oauth2-security-pattern"
```

### Example 2: Simple Task (No Advisory)

```
User: "Write unit tests for this function"

Agent (GLM-4.7):
"Complexity: 0.2 (Routine implementation)
Within my capabilities. Proceeding directly."

[Implementation]

Agent:
"Tests written. No advisory needed."
```

### Example 3: Bug Report with Review

```
User: "The JWT auth you implemented isn't working"

Agent:
"Bug reported. Initiating emergency code review..."

[Code Review Agent analyzes]

Code Review Agent:
"Issue found:
- HIGH: Algorithm mismatch - using HS256 instead of RS256
- Cause: Library default not overridden"

Agent:
"Fixing issue..."

[Fix applied]

Agent:
"Fixed and re-reviewed. Pattern updated in Wiki."
```

## Cost Analysis

### With This Skill

| Scenario | Traditional | With Skill | Savings |
|----------|-------------|------------|---------|
| Simple task | $0.15 (Opus) | $0.03 (Agent) | 80% |
| Complex with specialist | $0.15 (Opus) | $0.038 (Agent + Specialist) | 75% |
| With code review | $0.15 (Opus) | $0.053 (Agent + Specialist + Review) | 65% |
| Wiki reuse | $0.15 (Opus) | $0.03 (Agent only) | 80% |

### Monthly Projection (50 tasks/day)

- **All Opus**: $225/month
- **With this skill**: $50-70/month (depending on review usage)
- **Savings**: $155-175/month (70-78%)

## Agency Agents Specialists

### Security Architect
- **Expertise**: Authentication, authorization, encryption, vulnerability assessment
- **When assigned**: Security-related tasks
- **Keywords**: auth, jwt, oauth, encrypt, security, vulnerability

### Database Expert
- **Expertise**: Schema design, optimization, migrations, scaling
- **When assigned**: Database tasks
- **Keywords**: database, schema, sql, migration, query, index

### API Designer
- **Expertise**: REST, GraphQL, API contracts, documentation
- **When assigned**: API development
- **Keywords**: api, rest, graphql, endpoint, swagger

### Performance Engineer
- **Expertise**: Optimization, caching, scaling, benchmarking
- **When assigned**: Performance tasks
- **Keywords**: performance, optimization, cache, scale, benchmark

### DevOps Specialist
- **Expertise**: CI/CD, containers, orchestration, infrastructure
- **When assigned**: Infrastructure tasks
- **Keywords**: docker, kubernetes, ci/cd, deployment, infrastructure

### Frontend Architect
- **Expertise**: UI patterns, component design, state management
- **When assigned**: Frontend tasks
- **Keywords**: react, vue, component, frontend, ui, state-management

### Backend Architect
- **Expertise**: Service design, architecture patterns, integration
- **When assigned**: Backend tasks
- **Keywords**: backend, service, microservice, architecture, pattern

### ML Engineer
- **Expertise**: Model design, training, data pipelines
- **When assigned**: ML/AI tasks
- **Keywords**: machine learning, model, training, inference, ai

## Code Review Flow

### Trigger Conditions

1. **Post-implementation**: Agent asks "Need review?"
2. **Bug report**: User says "Not working"
3. **Improvement request**: User says "Can you improve?"
4. **High complexity**: Implementation score > 0.8

### Review Process

```
1. Request permission (if configured)
2. Spawn Code Review Agent (Opus/GPT-5.5)
3. Review for:
   - Bugs
   - Security issues
   - Performance problems
   - Best practices
4. Present findings
5. Get user approval for fixes
6. Apply fixes
7. Re-review if needed
8. Save updated pattern
```

## Prompts

See [prompts/](prompts/) directory:

- `agent_system.md` - Implementation agent behavior
- `advisor_system.md` - Advisor guidance format
- `agency_assignment.md` - Specialist assignment logic
- `code_review.md` - Code review system

## Workflows

See [workflows/main.yaml](workflows/main.yaml) for complete workflow definition.

## Integrations

- [OpenCode](integrations/opencode.md)
- [Claude Code](integrations/claude-code.md)
- [Kilo CLI](integrations/kilo.md)

## Best Practices

### For Users

1. **Enable Agency Agents** - Specialists give better guidance
2. **Use code review** - Catch issues early
3. **Build Wiki** - Accumulate organizational knowledge
4. **Review specialists** - Understand who was assigned and why

### For Agents

1. **Be humble** - Better to escalate than fail
2. **Assign correctly** - Match specialist to task
3. **Review thoroughly** - Quality over speed
4. **Save knowledge** - Build institutional memory

## Troubleshooting

### "No specialist assigned"

Check: `advisor.agency_agents.enabled: true`

### "Code review never triggered"

Check: `code_review.enabled: true` and trigger conditions

### "Review too expensive"

Adjust: Use cheaper reviewer model or disable for simple tasks

## Contributing

Contributions welcome:
- New specialist types
- Review criteria improvements
- Cost optimization strategies
- Documentation

## License

MIT License

## Acknowledgments

- Anthropic "Code w/ Claude 2026" advisor strategy
- Agency Agents concept
- Karpathy's LLM Wiki integration
