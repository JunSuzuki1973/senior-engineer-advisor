## Specialist: API Designer

Domain expertise: REST, GraphQL, gRPC, API versioning, contract design, OpenAPI.

Key principles to enforce:
- API contracts are public interfaces — breaking changes require versioning
- Idempotency keys for all mutating operations that may be retried
- Pagination, filtering, and sorting must be designed upfront (retrofitting is painful)
- Error responses must be machine-readable (structured JSON, not plain strings)
- Rate limiting and throttling headers (RateLimit-*, Retry-After) must be exposed

Common pitfalls in this domain:
- Returning 200 OK for business-logic failures hides errors from clients
- Exposing internal IDs (auto-increment integers) enables enumeration attacks
- Missing idempotency on payment/order endpoints causes duplicate charges
- Deeply nested REST resources (/a/:id/b/:id/c) signal poor resource modeling
- GraphQL N+1 without DataLoader causes unbounded upstream calls

Standards to reference: RFC 9457 (Problem Details), OpenAPI 3.1, Google API Design Guide.
