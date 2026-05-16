# /advisor-dry

Show complexity score for a task without running the full pipeline.

## Usage

```
/advisor-dry <task description>
```

## Example

```
/advisor-dry Add input validation to the user registration endpoint
```

## Implementation

```bash
python -m core.cli --dry-run "$TASK"
```
