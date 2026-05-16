# /advisor

Run the full Senior Engineer Advisor pipeline.

## Usage

```
/advisor <task description>
```

## What happens

1. Searches the LLM Wiki for relevant prior knowledge
2. Assesses task complexity using the cheap model
3. If complex: consults Claude Opus for architectural guidance
4. Implements using the cheap model (with or without guidance)
5. Saves the result to the wiki

## Example

```
/advisor Implement JWT refresh token rotation with Redis session store
```

## Implementation

```bash
python -m core.cli "$TASK"
```
