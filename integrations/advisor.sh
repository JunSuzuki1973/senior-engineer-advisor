#!/usr/bin/env bash
# advisor v4 — Programmatic Senior Engineer Advisor (MANDATORY Specialists)
#
# Modes:
#   (default) Smart:   Assess → Advisor if score >= 0.5 + MANDATORY specialists
#   --force:           Always advisor + ALL specialists + Wiki save
#   --wiki-only:       Advisor only if Wiki lacks knowledge
#
# Phase flow:
#   0. Wiki check → Load patterns if exists
#   1. Complexity assessment + ALL specialists assignment
#   2. Advisor consultation → Architectural guidance
#   3. Specialist consultation (MANDATORY - all 8 domains)
#   4. Implementation with full guidance
#   5. Save results to Wiki (if --force or new knowledge)

set -euo pipefail

SKILL_DIR="${HOME}/.openclaw/skills/senior-engineer-advisor"
AGENT_PROMPT="${SKILL_DIR}/prompts/agent_system.md"
WIKI_DIR="${WIKI_DIR:-${HOME}/openclaw-wiki}"
AA_DIR="${AA_DIR:-${HOME}/agency-agents}"

# Models
DEFAULT_MODEL="${DEFAULT_MODEL:-opencode-go/glm-5}"
ADVISOR_MODEL="${ADVISOR_MODEL:-kilo/anthropic/claude-opus-4-6}"

# Constants
THRESHOLD="0.5"
# Available agent categories from agency-agents (226 total agents)
AGENT_CATEGORIES="engineering testing product design marketing sales strategy finance game-development spatial-computing project-management support specialized academic integrations"

# Advisor Depth Setting (1-5)
# 1=Simple, 2=General, 3=Standard, 4=Detailed, 5=Comprehensive
ADVICE_DEPTH="${ADVICE_DEPTH:-3}"

ARGS=()
TASK=""
HAS_MODEL=false
FORCE_MODE=false
WIKI_ONLY=false
DRY_RUN=false

# Parse args
while [ $# -gt 0 ]; do
  case "$1" in
    -m|--model) HAS_MODEL=true; ARGS+=("$1" "$2"); shift 2 ;;
    --depth|--advice-depth) ADVICE_DEPTH="$2"; shift 2 ;;
    --force) FORCE_MODE=true; shift ;;
    --wiki-only) WIKI_ONLY=true; shift ;;
    --dry-run) DRY_RUN=true; shift ;;
    --auto) ARGS+=("$1"); shift ;;
    *) TASK="$1"; shift ;;
  esac
done

# Validate advice depth
if ! [[ "$ADVICE_DEPTH" =~ ^[1-5]$ ]]; then
  echo "⚠️  Invalid ADVICE_DEPTH: $ADVICE_DEPTH. Using default (3)." >&2
  ADVICE_DEPTH="3"
fi

[ -z "$TASK" ] && { 
  echo "Usage: advisor [--force|--wiki-only|--depth N] [options] \"task\"" >&2
  echo "" >&2
  echo "Options:" >&2
  echo "  --depth N      Advice depth level (1-5, default: 3)" >&2
  echo "                   1=Simple, 2=General, 3=Standard, 4=Detailed, 5=Comprehensive" >&2
  echo "  --force        Always use advisor + save to Wiki" >&2
  echo "  --wiki-only    Use advisor only if Wiki lacks knowledge" >&2
  echo "  --dry-run      Show what would be executed" >&2
  echo "  -m, --model    Specify implementation model" >&2
  exit 1
}
[ "$HAS_MODEL" = false ] && ARGS=("-m" "$DEFAULT_MODEL" "${ARGS[@]}")

# ═══════════════════════════════════════════════════════════════
# Phase 0: LLM Wiki Knowledge Retrieval (LLM Wiki Philosophy)
# ═══════════════════════════════════════════════════════════════
printf '\n%s\n' "═══════════════════════════════════════════════════════════════"
printf '%s\n' " Phase 0: LLM Wiki Knowledge Retrieval"
printf '%s\n' "═══════════════════════════════════════════════════════════════"

WIKI_MATCH=false
WIKI_CONTENT=""
SIMILARITY="0.0"

if [ -d "${WIKI_DIR}/patterns" ]; then
  printf '   🔍 Searching patterns in LLM Wiki...\n' >&2
  
  WIKI_OUT=$(mktemp)
  kilo run -m "${DEFAULT_MODEL}" --auto "Search ${WIKI_DIR}/patterns/ for relevant knowledge to:

TASK: ${TASK}

Instructions:
1. Read pattern files in ${WIKI_DIR}/patterns/
2. Calculate semantic similarity to the task
3. Return best match if similarity >= 0.75

Output EXACTLY:
SIMILARITY: <0.00-1.00>
PATTERN_ID: <filename or NONE>
RELEVANCE: <one line explanation or NONE>

If no pattern >= 0.75 similarity, return SIMILARITY: 0.0" > "$WIKI_OUT" 2>&1 || true

  SIMILARITY=$(grep "^SIMILARITY:" "$WIKI_OUT" | tail -1 | grep -o '[0-9]\.[0-9]*' | head -1)
  [ -z "$SIMILARITY" ] && SIMILARITY="0.0"
  
  printf '   📊 Best match similarity: %s\n' "$SIMILARITY" >&2
  
  # LLM Wiki threshold: 0.75 for pattern reuse
  if awk -v s="$SIMILARITY" 'BEGIN { exit (s+0 >= 0.75) ? 0 : 1 }' 2>/dev/null; then
    WIKI_MATCH=true
    PATTERN_ID=$(grep "^PATTERN_ID:" "$WIKI_OUT" | tail -1 | sed 's/PATTERN_ID: //' | tr -d ' ')
    if [ -n "$PATTERN_ID" ] && [ "$PATTERN_ID" != "NONE" ]; then
      WIKI_FILE="${WIKI_DIR}/patterns/${PATTERN_ID}"
      if [ -f "$WIKI_FILE" ]; then
        WIKI_CONTENT=$(cat "$WIKI_FILE")
        printf '   ✅ Pattern found: %s\n' "$PATTERN_ID" >&2
        printf '   💡 Will enhance with existing knowledge\n' >&2
      fi
    fi
  else
    printf '   📖 No matching pattern (threshold: 0.75)\n' >&2
    printf '   🆕 Will create new pattern after execution\n' >&2
  fi
  rm -f "$WIKI_OUT"
elif [ -d "$WIKI_DIR" ]; then
  printf '   📁 Wiki exists but no patterns directory yet\n' >&2
  printf '   🆕 Creating patterns directory...\n' >&2
  mkdir -p "${WIKI_DIR}/patterns"
else
  printf '   ⚠️  Wiki directory not configured\n' >&2
fi

# ═══════════════════════════════════════════════════════════════
# Phase 1: Complexity Assessment + MANDATORY Specialist Assignment
# ═══════════════════════════════════════════════════════════════
printf '\n%s\n' "═══════════════════════════════════════════════════════════════"
printf '%s\n' " Phase 1: Complexity Assessment + MANDATORY Specialist Assignment"
printf '%s\n' "═══════════════════════════════════════════════════════════════"

ASSESS_TMP=$(mktemp)
cat > "$ASSESS_TMP" << 'ENDOFPROMPT'
You are a complexity assessment tool. Output exactly ONE line:

COMPLEXITY: <0.0-1.0> | DECISION: <CONSULT_ADVISOR or PROCEED> | DOMAINS: <comma-separated>

Scoring: +0.30 Architecture, +0.30 Security, +0.25 Database, +0.20 Novel, +0.15 Performance, -0.20 Established path
Threshold: 0.5. If >= 0.5, CONSULT_ADVISOR.
DOMAINS: ALWAYS list all 8 specialists: security,database,api,performance,devops,frontend,backend,ml

Task:
ENDOFPROMPT

OUT1=$(mktemp)
kilo run "${ARGS[@]}" "$(cat "$ASSESS_TMP")${TASK}" > "$OUT1" 2>&1 || true

SCORE=$(grep -i "COMPLEXITY:" "$OUT1" | tail -1 | grep -o '[0-9]\.[0-9]*' | head -1)
[ -z "$SCORE" ] && SCORE="0.0"
DOMAINS=$(grep -i "DOMAINS:" "$OUT1" | tail -1 | sed 's/.*DOMAINS:\s*//' | tr -d ' ')

printf '   📊 Complexity: %s\n' "$SCORE" >&2
printf '   🎯 Domains: %s\n' "${DOMAINS:-all}" >&2

# Determine if advisor needed
NEED_ADVISOR=false
if [ "$FORCE_MODE" = true ]; then
  NEED_ADVISOR=true
  printf '   🚀 Mode: FORCED → Advisor + ALL specialists\n' >&2
elif [ "$WIKI_ONLY" = true ]; then
  if [ "$WIKI_MATCH" = false ]; then
    NEED_ADVISOR=true
    printf '   📖 Mode: WIKI-ONLY → No knowledge, triggering advisor\n' >&2
  else
    printf '   ✅ Mode: WIKI-ONLY → Knowledge exists (%s)\n' "$PATTERN_ID" >&2
  fi
else
  if awk -v s="$SCORE" -v t="$THRESHOLD" 'BEGIN { exit (s+0 >= t+0) ? 0 : 1 }' 2>/dev/null; then
    NEED_ADVISOR=true
  fi
fi

rm -f "$ASSESS_TMP" "$OUT1"

# ═══════════════════════════════════════════════════════════════
# Phase 2: Advisor + MANDATORY Specialist Consultation
# ═══════════════════════════════════════════════════════════════
FULL_GUIDANCE=""
SPECIALIST_GUIDANCE=""

if [ "$NEED_ADVISOR" = true ]; then
  printf '\n%s\n' "═══════════════════════════════════════════════════════════════"
  printf '%s\n' " Phase 2: Advisor + MANDATORY Specialist Consultation"
  printf '%s\n' "═══════════════════════════════════════════════════════════════"
  
  # Step 2a: Architectural Advisor
  printf '   Step 2a: Architectural Advisor (Opus 4.6)\n' >&2
  
  # Set advisor depth instructions
  DEPTH_INSTRUCTION=""
  case "$ADVICE_DEPTH" in
    1) DEPTH_INSTRUCTION="Provide SIMPLE, HIGH-LEVEL advice only. Focus on the big picture. Keep responses brief (1-2 sentences per section)." ;;
    2) DEPTH_INSTRUCTION="Provide GENERAL advice with key points. Cover main architecture decisions without deep detail." ;;
    3) DEPTH_INSTRUCTION="Provide STANDARD detailed advice. Include architecture, key decisions, pitfalls, and best practices with moderate detail." ;;
    4) DEPTH_INSTRUCTION="Provide DETAILED, comprehensive advice. Include specific implementation suggestions, detailed architecture diagrams in text, thorough analysis." ;;
    5) DEPTH_INSTRUCTION="Provide COMPREHENSIVE, in-depth advice. Include exhaustive analysis, multiple alternative approaches with trade-offs, specific code patterns, detailed implementation guidance." ;;
  esac
  
  printf '   📊 Advice Depth Level: %s/5\n' "$ADVICE_DEPTH" >&2
  
  ADV_TMP=$(mktemp)
  cat > "$ADV_TMP" << ENDOFADVISOR
You are a senior architectural advisor (Claude Opus 4.6). ${DEPTH_INSTRUCTION}

Task: ${TASK}
Complexity: ${SCORE}
${WIKI_CONTENT:+Existing Wiki Knowledge:}
${WIKI_CONTENT}

Output format:
## Architecture Approach

## Key Decisions
[Numbered list]

## Pitfalls to Avoid
[Numbered list]

## Best Practices
[Numbered list]
ENDOFADVISOR
  
  ADV_OUT=$(mktemp)
  kilo run -m "${ADVISOR_MODEL}" --auto "$(cat "$ADV_TMP")" > "$ADV_OUT" 2>&1 || true
  ARCH_GUIDANCE=$(cat "$ADV_OUT")
  printf '   ✓ Architecture guidance received (%s lines)\n' "$(echo "$ARCH_GUIDANCE" | wc -l)" >&2
  
  # Step 2b: Task-Based Agent Selection (from 226 available agents)
  printf '\n   Step 2b: Task-Based Agent Selection from Agency Agents\n' >&2
  
  # Select relevant agents based on task
  SELECTED_AGENTS=$(mktemp)
  cat > "$SELECTED_AGENTS" << AGENTSELECT
Based on the task below, select the MOST RELEVANT agents from the agency-agents repository.

Task: ${TASK}
Complexity: ${SCORE}
Domains: ${DOMAINS:-general}

Available categories: ${AGENT_CATEGORIES}

Output format - list the specific agent files to use (one per line):
AGENT: <category>/<agent-filename.md>
REASON: <one line why this agent is relevant>

Example:
AGENT: engineering/engineering-frontend-developer.md
REASON: UI/UX development required

Select 3-8 most relevant agents for this task.
AGENTSELECT

  AGENT_LIST=$(mktemp)
  kilo run -m "${ADVISOR_MODEL}" --auto "$(cat "$SELECTED_AGENTS")" > "$AGENT_LIST" 2>&1 || true
  
  # Parse selected agents
  printf '   📋 Selected agents for this task:\n' >&2
  grep "^AGENT:" "$AGENT_LIST" | while read -r line; do
    AGENT_FILE=$(echo "$line" | sed 's/AGENT: //' | tr -d ' ')
    AGENT_PATH="$AA_DIR/$AGENT_FILE"
    
    if [ -f "$AGENT_PATH" ]; then
      AGENT_NAME=$(basename "$AGENT_FILE" .md)
      printf '     ✓ %s\n' "$AGENT_NAME" >&2
    else
      printf '     ⚠️  %s not found\n' "$AGENT_FILE" >&2
    fi
  done
  
  # Consult each selected agent
  printf '\n   🔍 Consulting selected agents...\n' >&2
  
  grep "^AGENT:" "$AGENT_LIST" | while read -r line; do
    AGENT_FILE=$(echo "$line" | sed 's/AGENT: //' | tr -d ' ')
    AGENT_PATH="$AA_DIR/$AGENT_FILE"
    
    if [ ! -f "$AGENT_PATH" ]; then
      continue
    fi
    
    AGENT_NAME=$(basename "$AGENT_FILE" .md)
    AA_PROMPT=$(cat "$AGENT_PATH" 2>/dev/null | head -150)
    
    printf '     👤 Consulting %s... ' "$AGENT_NAME" >&2
    
    SPEC_OUT=$(mktemp)
    cat > "$SPEC_OUT" << SPECPROMPT
${AA_PROMPT}

---

TASK: ${TASK}
ARCHITECTURAL GUIDANCE: ${ARCH_GUIDANCE}

Provide FOCUSED guidance for your domain expertise on this task.
Keep under 300 words and actionable.
SPECPROMPT
    
    SPEC_RESP_OUT=$(mktemp)
    kilo run -m "${ADVISOR_MODEL}" --auto "$(cat "$SPEC_OUT")" > "$SPEC_RESP_OUT" 2>&1 || true
    
    SPEC_RESP=$(cat "$SPEC_RESP_OUT")
    if [ -n "$SPEC_RESP" ]; then
      WORD_COUNT=$(echo "$SPEC_RESP" | wc -w)
      printf '(%s words)\n' "$WORD_COUNT" >&2
      SPECIALIST_GUIDANCE="${SPECIALIST_GUIDANCE}

## ${AGENT_NAME}
${SPEC_RESP}"
    else
      printf 'No response\n' >&2
    fi
    
    rm -f "$SPEC_OUT" "$SPEC_RESP_OUT"
  done
  
  rm -f "$SELECTED_AGENTS" "$AGENT_LIST"
  
  # Combine all guidance
  FULL_GUIDANCE="## Architectural Guidance

${ARCH_GUIDANCE}

## Specialist Consultations (ALL 8 MANDATORY)
${SPECIALIST_GUIDANCE}"
  
  rm -f "$ADV_TMP" "$ADV_OUT"
  
  printf '\n   ✅ Total guidance: %s lines\n' "$(echo "$FULL_GUIDANCE" | wc -l)" >&2
fi

# ═══════════════════════════════════════════════════════════════
# Phase 3: Implementation (With Full Guidance + MANDATORY Specialists)
# ═══════════════════════════════════════════════════════════════
printf '\n%s\n' "═══════════════════════════════════════════════════════════════"
printf '%s\n' " Phase 3: Implementation"
printf '%s\n' "═══════════════════════════════════════════════════════════════"

FINAL_TMP=$(mktemp)
cat "$AGENT_PROMPT" > "$FINAL_TMP"

# Add specialist assignment instructions for implementation agent
SPECIALIST_ASSIGNMENT="

## ⚠️ MANDATORY: Specialist Assignment for Implementation

You MUST consult with ALL 8 specialists during implementation:
- **Security Engineer**: Review all security-related code
- **Database Optimizer**: Review data models and queries
- **API Designer**: Review all API contracts
- **Performance Engineer**: Review optimization opportunities
- **DevOps Automator**: Review deployment and infrastructure
- **Frontend Developer**: Review UI/UX and client-side code
- **Backend Architect**: Review server-side architecture
- **ML Engineer**: Review any ML/data pipeline components

Use your tools to spawn sub-agents for specialist review when needed.
"

if [ -n "${FULL_GUIDANCE:-}" ]; then
  printf '\n\n---\n\n## COMPLETE ADVISORY GUIDANCE\n\n%s\n\n%s\n\n---\n\n## YOUR TASK\n\nImplement based on ALL guidance above. Follow the architecture, specialist recommendations, and best practices exactly.\n\n%s\n' "$FULL_GUIDANCE" "$SPECIALIST_ASSIGNMENT" "$TASK" >> "$FINAL_TMP"
  printf '   📝 Mode: WITH full advisory guidance + MANDATORY specialists\n' >&2
else
  printf '\n\n---\n\n%s\n\n## YOUR TASK\n\n%s\n' "$SPECIALIST_ASSIGNMENT" "$TASK" >> "$FINAL_TMP"
  printf '   📝 Mode: Direct implementation + MANDATORY specialists\n' >&2
fi

# ═══════════════════════════════════════════════════════════════
# Phase 4: Save to Wiki (LLM Wiki Philosophy)
# ═══════════════════════════════════════════════════════════════
printf '\n%s\n' "═══════════════════════════════════════════════════════════════"
printf '%s\n' " Phase 4: Knowledge Persistence (LLM Wiki)"
printf '%s\n' "═══════════════════════════════════════════════════════════════"

if [ -d "$WIKI_DIR" ]; then
  printf '   💾 Saving pattern to LLM Wiki...\n' >&2
  
  # Generate semantic pattern ID
  TASK_HASH=$(echo "$TASK" | sha256sum | cut -c1-8)
  PATTERN_NAME=$(echo "$TASK" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-*$//' | cut -c1-40)
  PATTERN_ID="pattern-${PATTERN_NAME}-${TASK_HASH}"
  WIKI_FILE="${WIKI_DIR}/patterns/${PATTERN_ID}.md"
  
  # Ensure patterns directory exists
  mkdir -p "${WIKI_DIR}/patterns"
  
  # Build knowledge entry following LLM Wiki philosophy
  cat > "$WIKI_FILE" << WIKICONTENT
---
id: ${PATTERN_ID}
title: ${TASK}
complexity: ${SCORE}
domains: ${DOMAINS:-general}
date: $(date -Iseconds)
similarity_threshold: 0.75
---

# ${TASK}

## Context
**Complexity Score**: ${SCORE}
**Selected Agents**: ${SELECTED_AGENTS:-N/A}

## Architectural Pattern
${ARCH_GUIDANCE}

## Specialist Knowledge
${SPECIALIST_GUIDANCE}

## Implementation Notes
- **Status**: Generated
- **Next Review**: After 3 uses or 30 days

## Related Patterns
- [To be linked by similarity search]

## Usage History
- $(date -Iseconds): Created from task execution
WIKICONTENT
  
  printf '   ✅ Pattern saved: %s\n' "$PATTERN_ID" >&2
  printf '   📍 Location: %s\n' "$WIKI_FILE" >&2
  printf '\n   💡 This pattern will be searchable in future Wiki queries\n' >&2
else
  printf '   ⚠️  Wiki directory not found: %s\n' "$WIKI_DIR" >&2
  printf '   Set WIKI_DIR environment variable to enable knowledge persistence\n' >&2
fi

# ═══════════════════════════════════════════════════════════════
# Execute Implementation
# ═══════════════════════════════════════════════════════════════

if [ "$DRY_RUN" = true ]; then
  printf '\n%s\n' "═══════════════════════════════════════════════════════════════"
  printf '%s\n' " DRY RUN — Would execute:"
  printf '%s\n' "═══════════════════════════════════════════════════════════════"
  printf '   Model: %s\n' "${ARGS[1]}"
  printf '   Task: %s\n' "$TASK"
  printf '   Prompt: %s lines\n' "$(wc -l < "$FINAL_TMP")"
  printf '\n   First 1000 chars of prompt:\n'
  head -c 1000 "$FINAL_TMP"
  printf '\n   ...\n'
  rm -f "$FINAL_TMP"
  exit 0
fi

printf '\n🚀 Starting implementation...\n\n'
exec kilo run "${ARGS[@]}" "$(cat "$FINAL_TMP")"
