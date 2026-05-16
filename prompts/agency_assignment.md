# Specialist Routing

The orchestrator routes tasks to specialist agents based on keyword matching.
Each specialist provides domain-specific context appended to the advisor system prompt.

## Routing table

| Keywords | Specialist |
|---|---|
| security, auth, jwt, oauth, xss, injection, encrypt, csrf | security |
| database, sql, schema, migration, index, query, orm | database |
| api, rest, graphql, grpc, endpoint, openapi, swagger | api |
| performance, latency, cache, optimization, profiling, throughput | performance |
| devops, docker, kubernetes, ci/cd, deploy, infrastructure, helm | devops |
| frontend, react, vue, css, ui, ux, component, accessibility | frontend |
| machine learning, ml, model, training, dataset, llm, embedding | ml |
| (default fallback) | backend |

## Fallback chain

If the primary specialist file is missing:
1. Try `backend.md`
2. Proceed without specialist context (advisor_system.md only)

## Adding agency-agents specialists

Run `scripts/convert/agency-agents.sh` to import the full set of 144+ specialists
from the msitarzewski/agency-agents repository into the `agents/` directory.
