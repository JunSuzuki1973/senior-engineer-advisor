# Agency Assignment Prompt

## Purpose

Assign the most appropriate specialist agent from the Agency Agents network based on task characteristics.

## Available Specialist Types

| Specialist | Expertise | When to Assign |
|------------|-----------|----------------|
| **Security Architect** | Auth, encryption, vulnerabilities | Security-related tasks |
| **Database Expert** | Schema design, optimization, migrations | Database tasks |
| **API Designer** | REST, GraphQL, gRPC design | API development |
| **Performance Engineer** | Optimization, scaling, caching | Performance tasks |
| **DevOps Specialist** | CI/CD, infrastructure, deployment | Infrastructure tasks |
| **Frontend Architect** | UI/UX patterns, component design | Frontend tasks |
| **Backend Architect** | Service design, architecture patterns | Backend tasks |
| **ML Engineer** | Model design, data pipelines | ML/AI tasks |

## Assignment Logic

```
Task Analysis
    │
    ├── Security keywords → Security Architect
    ├── Database keywords → Database Expert
    ├── API/REST keywords → API Designer
    ├── Performance keywords → Performance Engineer
    ├── Infrastructure keywords → DevOps Specialist
    ├── Frontend/UI keywords → Frontend Architect
    ├── Backend/Service keywords → Backend Architect
    └── ML/Data keywords → ML Engineer
```

## Assignment Format

```yaml
assignment:
  specialist: "security-architect"
  reason: "Task involves JWT authentication and token security"
  priority: "high"
  
  # Fallback chain
  fallback:
    - "backend-architect"
    - "general-advisor"
```

## Specialist Profiles

### Security Architect
- **Focus**: Authentication, authorization, encryption, vulnerability assessment
- **Keywords**: auth, jwt, oauth, encrypt, security, vulnerability, tls, ssl, password, token
- **Model**: Claude Opus 4.7 or GPT-5.5

### Database Expert
- **Focus**: Schema design, query optimization, migrations, scaling
- **Keywords**: database, schema, sql, migration, query, index, optimization, nosql, postgres, mysql
- **Model**: Claude Opus 4.7 or GPT-5.5

### API Designer
- **Focus**: API design, REST principles, GraphQL, documentation
- **Keywords**: api, rest, graphql, endpoint, route, swagger, openapi, http
- **Model**: Claude Opus 4.7 or GPT-5.5

### Performance Engineer
- **Focus**: Optimization, caching, scaling, load balancing
- **Keywords**: performance, optimization, cache, scale, benchmark, latency, throughput
- **Model**: Claude Opus 4.7 or GPT-5.5

### DevOps Specialist
- **Focus**: CI/CD, containers, orchestration, monitoring
- **Keywords**: docker, kubernetes, ci/cd, deployment, infrastructure, monitoring, devops
- **Model**: Claude Opus 4.7 or GPT-5.5

### Frontend Architect
- **Focus**: Component design, state management, UI patterns
- **Keywords**: react, vue, angular, component, frontend, ui, css, state-management
- **Model**: Claude Opus 4.7 or GPT-5.5

### Backend Architect
- **Focus**: Service design, patterns, integration, APIs
- **Keywords**: backend, service, microservice, architecture, pattern, integration
- **Model**: Claude Opus 4.7 or GPT-5.5

### ML Engineer
- **Focus**: Model design, training, data pipelines
- **Keywords**: machine learning, model, training, inference, data pipeline, ai
- **Model**: Claude Opus 4.7 or GPT-5.5

## Assignment Process

1. **Analyze task** - Extract keywords and context
2. **Match specialist** - Find best-fit expert
3. **Spawn agent** - Create specialist sub-agent
4. **Monitor** - Track consultation quality
5. **Record** - Save specialist assignment for learning
