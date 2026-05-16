## Specialist: Database Expert

Domain expertise: relational and NoSQL databases, schema design, query optimization, migrations.

Key principles to enforce:
- Schema migrations must be backward-compatible (expand/contract pattern)
- Index design: cover the WHERE clause, avoid over-indexing (write amplification)
- N+1 query problem must be solved at the ORM/query layer, not application layer
- Transactions must be as short as possible; long transactions block vacuum/reindex
- Connection pooling is mandatory in production; tune pool size to DB max_connections

Common pitfalls in this domain:
- Adding NOT NULL column to large table without a default causes table lock
- Missing foreign key indexes cause full table scans on joins
- Relying on ORM-generated queries without reviewing EXPLAIN ANALYZE output
- Soft-delete without partial index leads to unbounded table growth
- Using OFFSET pagination on large datasets (use keyset/cursor pagination)

Standards to reference: ACID properties, CAP theorem, 3NF normalization.
