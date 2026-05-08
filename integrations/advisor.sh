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
ALL_SPECIALISTS="security database api performance devops frontend backend ml"

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
# Phase 0: Wiki Knowledge Check
# ═══════════════════════════════════════════════════════════════
printf '\n%s\n' "═══════════════════════════════════════════════════════════════"
printf '%s\n' " Phase 0: LLM Wiki Knowledge Check"
printf '%s\n' "═══════════════════════════════════════════════════════════════"

WIKI_MATCH=false
WIKI_CONTENT=""

if [ -d "$WIKI_DIR" ]; then
  WIKI_OUT=$(mktemp)
  kilo run -m "${DEFAULT_MODEL}" --auto "Search ${WIKI_DIR}/ for patterns relevant to: ${TASK}

Output format:
WIKI_MATCH: <YES or NO> | <similarity 0.0-1.0>
PATTERN_ID: <pattern filename if YES, else NONE>
SUMMARY: <one line description if YES, else NONE>" > "$WIKI_OUT" 2>&1 || true

  WIKI_RESULT=$(grep -i "WIKI_MATCH:" "$WIKI_OUT" | tail -1 || echo "WIKI_MATCH: NO | 0.0")
  printf '   📚 %s\n' "$WIKI_RESULT" >&2
  
  if echo "$WIKI_RESULT" | grep -q "YES"; then
    WIKI_MATCH=true
    PATTERN_ID=$(grep -i "PATTERN_ID:" "$WIKI_OUT" | tail -1 | sed 's/.*PATTERN_ID:\s*//' || echo "NONE")
    if [ -n "$PATTERN_ID" ] && [ "$PATTERN_ID" != "NONE" ]; then
      WIKI_FILE="${WIKI_DIR}/${PATTERN_ID}"
      [ -f "$WIKI_FILE" ] && WIKI_CONTENT=$(cat "$WIKI_FILE")
    fi
  fi
  rm -f "$WIKI_OUT"
else
  printf '   ⚠️  Wiki directory not found: %s\n' "$WIKI_DIR" >&2
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
  
  # Step 2b: MANDATORY - All 8 Specialists
  printf '\n   Step 2b: MANDATORY - All 8 Agency Agents Specialists\n' >&2
  
  for STYPE in $ALL_SPECIALISTS; do
    # Map specialist type to directory
    AADIR=""
    case "$STYPE" in
      security) AADIR="$AA_DIR/security-engineer" ;;
      database) AADIR="$AA_DIR/database-optimizer" ;;
      api) AADIR="$AA_DIR/api-tester" ;;
      performance) AADIR="$AA_DIR/performance-benchmarker" ;;
      devops) AADIR="$AA_DIR/devops-automator" ;;
      frontend) AADIR="$AA_DIR/frontend-developer" ;;
      backend) AADIR="$AA_DIR/backend-architect" ;;
      ml) AADIR="$AA_DIR/ml-engineer" ;;
    esac
    
    # Load AGENTS.md if exists
    AA_PROMPT=""
    if [ -n "$AADIR" ] && [ -f "$AADIR/AGENTS.md" ]; then
      AA_PROMPT=$(cat "$AADIR/AGENTS.md" 2>/dev/null | head -100)
      printf '     👤 %s: ' "$STYPE" >&2
    else
      printf '     ⚠️  %s: No AGENTS.md found\n' "$STYPE" >&2
      continue
    fi
    
    # Consult specialist
    SPEC_OUT=$(mktemp)
    cat > "$SPEC_OUT" << SPECPROMPT
${AA_PROMPT}

---

TASK: ${TASK}
ARCHITECTURAL GUIDANCE: ${ARCH_GUIDANCE}

Your role: As the ${STYPE} specialist, provide FOCUSED guidance on:
1. What ${STYPE} considerations apply to this task?
2. What are the best practices for ${STYPE} in this context?
3. What pitfalls should be avoided?
4. Specific recommendations (3-5 bullet points)

Keep your response under 300 words and actionable.
SPECPROMPT
    
    SPEC_RESP_OUT=$(mktemp)
    kilo run -m "${ADVISOR_MODEL}" --auto "$(cat "$SPEC_OUT")" > "$SPEC_RESP_OUT" 2>&1 || true
    
    SPEC_RESP=$(cat "$SPEC_RESP_OUT")
    if [ -n "$SPEC_RESP" ]; then
      printf 'Guidance received (%s words)\n' "$(echo "$SPEC_RESP" | wc -w)" >&2
      SPECIALIST_GUIDANCE="${SPECIALIST_GUIDANCE}

## ${STYPE^} Specialist
${SPEC_RESP}"
    else
      printf 'No response\n' >&2
    fi
    
    rm -f "$SPEC_OUT" "$SPEC_RESP_OUT"
  done
  
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
# Phase 4: Save to Wiki (If --force or new knowledge)
# ═══════════════════════════════════════════════════════════════
printf '\n%s\n' "═══════════════════════════════════════════════════════════════"
printf '%s\n' " Phase 4: Knowledge Persistence"
printf '%s\n' "═══════════════════════════════════════════════════════════════"

if [ "$FORCE_MODE" = true ] && [ -d "$WIKI_DIR" ]; then
  printf '   💾 Saving results to LLM Wiki...\n' >&2
  
  # Generate pattern ID
  PATTERN_ID="$(date +%Y%m%d)-$(echo "$TASK" | tr ' ' '-' | tr '[:upper:]' '[:lower:]' | cut -c1-30)"
  WIKI_FILE="${WIKI_DIR}/${PATTERN_ID}.md"
  
  cat > "$WIKI_FILE" << WIKICONTENT
# Pattern: ${TASK}

**Date**: $(date -Iseconds)
**Complexity**: ${SCORE}
**Domains**: ${ALL_SPECIALISTS}

## Task Description
${TASK}

## Architectural Guidance
${ARCH_GUIDANCE}

## Specialist Guidance
${SPECIALIST_GUIDANCE}

## Key Decisions
- [To be filled after implementation]

## Lessons Learned
- [To be filled after implementation]
WIKICONTENT
  
  printf '   ✅ Saved to: %s\n' "$WIKI_FILE" >&2
else
  printf '   ⏭️  Skipping Wiki save (use --force to save)\n' >&2
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
