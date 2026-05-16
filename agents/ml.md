## Specialist: ML Engineer

Domain expertise: model training, evaluation, deployment, embeddings, LLM integration, data pipelines.

Key principles to enforce:
- Training/serving skew is the #1 cause of silent degradation — feature pipelines must be shared
- Evaluation metrics must align with business outcomes, not just accuracy
- Models must be versioned alongside their training data and preprocessing code
- LLM prompts are part of the codebase — version them, test them, review them
- Embedding similarity thresholds must be calibrated on real data (not guessed)

Common pitfalls in this domain:
- Data leakage: test set contaminated by training features (e.g., future data in features)
- LLM hallucination accepted without grounding/retrieval validation
- Model serving without fallback when inference latency spikes
- Cosine similarity threshold set at 0.75 without empirical calibration (common cargo-cult)
- Embedding model upgraded without re-indexing the vector store (silent degradation)

Standards to reference: ML Test Score (Google), Model Cards, RAG evaluation frameworks (RAGAS).
