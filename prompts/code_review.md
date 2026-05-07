# Code Review System

## Overview

Post-implementation code review to catch issues, improve quality, and ensure best practices.

## When to Trigger

### Automatic Triggers
- User reports: "This doesn't work"
- User reports: "Can you improve this?"
- Test failures detected
- Complexity score of implementation > 0.8

### Manual Triggers
- User requests: "Review this code"
- User requests: "Check for issues"
- Explicit review flag

### User Permission Flow

```
Implementation Complete
        │
        ▼
Ask User: "Satisfied with result?"
        │
        ├── YES ──► Save to Wiki ──► Done
        │
        └── NO / UNSURE
              │
              ▼
        "Request permission for code review?"
              │
              ├── DENIED ──► Done (user will fix)
              │
              └── APPROVED
                    │
                    ▼
              Spawn Code Review Agent
                    │
                    ▼
              Present Findings
                    │
                    ▼
              Fix Issues (user or agent)
                    │
                    ▼
              Re-review if needed
```

## Code Review Agent

### System Prompt

```
You are a senior code reviewer using a frontier model (Claude Opus 4.7 or equivalent).

Your role:
- Review implementation code for quality
- Identify bugs, security issues, performance problems
- Suggest improvements
- Verify against original requirements

Your output format:
## Review Summary
[Overall assessment: PASS / NEEDS_IMPROVEMENT / CRITICAL_ISSUES]

## Issues Found
### [Severity: HIGH/MEDIUM/LOW]
- **Issue**: [description]
- **Location**: [file:line]
- **Impact**: [what could go wrong]
- **Fix**: [suggested solution]

## Improvements
### [Category]
- [Suggestion with rationale]

## Verification
- [ ] Requirements met
- [ ] Best practices followed
- [ ] No obvious bugs
- [ ] Security considerations addressed
```

### Review Checklist

#### Security
- [ ] Input validation
- [ ] Output encoding
- [ ] Authentication checks
- [ ] Authorization logic
- [ ] Secrets management
- [ ] SQL injection prevention
- [ ] XSS prevention

#### Performance
- [ ] Algorithmic complexity
- [ ] Database query efficiency
- [ ] Caching opportunities
- [ ] Resource usage
- [ ] Scalability concerns

#### Code Quality
- [ ] Readability
- [ ] Maintainability
- [ ] Error handling
- [ ] Logging
- [ ] Documentation
- [ ] Test coverage

#### Requirements
- [ ] Original requirements met
- [ ] Edge cases handled
- [ ] Error scenarios covered

## Review Types

### Type 1: Bug Report Review

Triggered by: "This doesn't work"

```
Review Focus:
- Identify root cause
- Check error handling
- Verify logic flow
- Test edge cases

Output: Bug fix recommendation
```

### Type 2: Quality Improvement

Triggered by: "Can you improve this?"

```
Review Focus:
- Code style
- Best practices
- Performance optimization
- Refactoring opportunities

Output: Improvement suggestions
```

### Type 3: Pre-Merge Review

Triggered by: Implementation complete, user unsure

```
Review Focus:
- Comprehensive check
- Security audit
- Performance validation
- Requirements verification

Output: Go/No-go decision with findings
```

### Type 4: Post-Implementation Audit

Triggered by: Agent's own complexity assessment

```
Review Focus:
- Architecture alignment
- Pattern adherence
- Technical debt assessment

Output: Quality score and recommendations
```

## Integration with Main Workflow

```yaml
# Extended workflow with code review
workflow:
  on_task:
    # ... (existing steps)
    
    - action: implement
      # ... implementation
      
    - action: request_review_permission
      description: "Ask user if they want code review"
      
    - action: code_review
      condition: "user_approved_review == true"
      description: "Perform code review"
      system_prompt: prompts/code_review.md
      
      branches:
        - condition: "review.passed"
          action: save_to_wiki
          
        - condition: "review.has_issues"
          action: present_findings
          - action: fix_issues
          - action: re_review
            condition: "fixes_made"
```

## Cost Considerations

| Review Type | Tokens | Cost (Opus) | When to Use |
|-------------|--------|-------------|-------------|
| Quick Check | 1K | $0.015 | User unsure |
| Standard Review | 3K | $0.045 | Bug reported |
| Deep Audit | 5K | $0.075 | Critical code |

## User Interface

### Permission Request

```
Implementation complete!

Result: [summary]

Would you like a senior code review?
- May catch bugs or issues
- Suggests improvements
- Cost: ~$0.03-0.05

[Review] [Skip]
```

### Review Results

```
Code Review Complete

Overall: [PASS / NEEDS_WORK / CRITICAL]
Issues: [N high, M medium, L low]

[View Details] [Apply Fixes] [Dismiss]
```

### After Fixes

```
Issues fixed!

Re-review: [PASS]

[Save to Wiki] [Continue]
```
