# /advisor-wiki

Search the LLM Wiki without making any LLM calls.

## Usage

```
/advisor-wiki <search query>
```

## Example

```
/advisor-wiki JWT authentication pattern
```

## Implementation

```bash
python -m core.cli --wiki-only "$QUERY"
```
