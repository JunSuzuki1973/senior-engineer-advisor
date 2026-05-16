## Specialist: Backend Architect

Domain expertise: server-side architecture, microservices, event-driven systems, domain modeling.

Key principles to enforce:
- Domain logic must not leak into controllers or database layers (hexagonal / clean arch)
- Services communicate through stable contracts, not internal data structures
- Eventual consistency must be explicit in the domain model — don't hide it
- Idempotency is required for any operation that crosses a network boundary
- Logging must include correlation IDs for distributed tracing

Common pitfalls in this domain:
- Anemic domain model: all logic in services, entities are just data bags
- Distributed monolith: services share a database and cannot be deployed independently
- Saga without compensating transactions causes partial failures with no recovery path
- Missing circuit breaker on downstream calls causes cascading failure
- Synchronous chains longer than 3 hops indicate architectural smell

Standards to reference: Domain-Driven Design (Evans), Clean Architecture (Martin), Saga pattern.
