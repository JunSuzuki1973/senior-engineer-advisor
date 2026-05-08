#!/usr/bin/env bash
# advisor v3 — Programmatic Senior Engineer Advisor
#
# Modes:
#   (default) Smart:   Assess → Advisor if score >= 0.5
#   --force:           Always trigger advisor + Agency Agents specialist assignment
#   --wiki-only:       Only trigger advisor if LLM Wiki has no relevant knowledge
#
# Phase flow:
#   0. Wiki check (if --wiki-only or default)
#   1. Complexity assessment
#   2. Advisor consultation → Specialist identification → Agency Agents assignment
#   3. Implementation with full guidance

set -euo pipefail

SKILL_DIR="${HOME}/.openclaw/skills/senior-engineer-advisor"
AGENT_PROMPT="${SKILL_DIR}/prompts/agent_system.md"
WIKI_DIR="${WIKI_DIR:-${HOME}/openclaw-wiki}"
AA_DIR="${AA_DIR:-${HOME}/.openclaw/agency-agents}"

# Model Configuration
# Default (Implementation): OpenCode Go - GLM-5
DEFAULT_MODEL="${DEFAULT_MODEL:-opencode-go/glm-5}"
# Fallback if OpenCode Go fails: z.ai - GLM-5
FALLBACK_MODEL="${FALLBACK_MODEL:-zai/glm-5}"

# Advisor: Kilo Pass - Claude Opus 4.6
ADVISOR_MODEL="${ADVISOR_MODEL:-kilo/anthropic/claude-opus-4-6}"

# API Keys (should be set in environment)
# OPENCODE_API_KEY - for OpenCode Go
# KILO_PASS_API_KEY - for Kilo Pass
# ZAI_API_KEY - for z.ai fallback (fa03eb885a4e4e099d675879309e70fd.K0G9Ct5hS06v6cQC)
THRESHOLD="0.5"

ARGS=()
TASK=""
HAS_MODEL=false
FORCE_MODE=false
WIKI_ONLY=false
DRY_RUN=false

while [ $# -gt 0 ]; do
  case "$1" in
    -m|--model) HAS_MODEL=true; ARGS+=("$1" "$2"); shift 2 ;;
    --force) FORCE_MODE=true; shift ;;
    --wiki-only) WIKI_ONLY=true; shift ;;
    --agent|-f|--file|--title|--attach|--password|-p|--dir|--port|--variant|--session|-s|--log-level|--format)
      ARGS+=("$1" "$2"); shift 2 ;;
    --auto|--continue|-c|--fork|--share|--thinking|--pure|--print-logs|--dangerously-skip-permissions)
      ARGS+=("$1"); shift ;;
    --dry-run)
      DRY_RUN=true
      shift ;;
    -h|--help)
      cat >&2 << HELP
advisor v3 — Senior Engineer Advisor (Programmatic)

Modes:
  (default) Smart mode:   Assess complexity → Advisor if >= 0.5
  --force                 Always trigger advisor + specialist assignment
  --wiki-only             Trigger advisor only when LLM Wiki lacks knowledge
  --dry-run               Show what would be executed without running

Options:
  -m, --model <model>     Implementation model (default: ${DEFAULT_MODEL})
  --auto                   Auto-approve permissions

Flow:
  Wiki Check → Complexity Assessment → Advisor (Opus 4.7)
  → Specialist Assignment (Agency Agents) → Implementation

Environment:
  WIKI_DIR               Path to LLM Wiki (default: ~/openclaw-wiki/wiki)
  AA_DIR                 Path to Agency Agents (default: ~/.openclaw/agency-agents)
HELP
      exit 0 ;;
    *) TASK="$1"; shift ;;
  esac
done

[ -z "$TASK" ] && { echo "Usage: advisor [--force|--wiki-only] [options] \"task\"" >&2; exit 1; }
[ "$HAS_MODEL" = false ] && ARGS=("-m" "$DEFAULT_MODEL" "${ARGS[@]}")

# ── Phase 0: Wiki Knowledge Check ───────────────────────────────
WIKI_MATCH=false
printf '%s\n' "══════════════════════════════════════════" >&2
printf '%s\n' " Phase 0: LLM Wiki Knowledge Check        " >&2
printf '%s\n' "══════════════════════════════════════════" >&2

WIKI_OUT=$(mktemp)
kilo run -m "${DEFAULT_MODEL}" --auto "Search ${WIKI_DIR}/ for patterns relevant to: ${TASK}

Only output ONE line:
WIKI_MATCH: <YES or NO> | <similarity 0.0-1.0>

If no relevant patterns found, output WIKI_MATCH: NO | 0.0" > "$WIKI_OUT" 2>&1 || true

WIKI_RESULT=$(grep -i "WIKI_MATCH:" "$WIKI_OUT" | tail -1 || echo "WIKI_MATCH: NO | 0.0")
printf '   %s\n' "$WIKI_RESULT" >&2

WIKI_YES=$(echo "$WIKI_RESULT" | grep -c "YES" || true)

# ── Phase 1: Complexity Assessment ──────────────────────────────
printf '%s\n' "══════════════════════════════════════════" >&2
printf '%s\n' " Phase 1: Complexity Assessment           " >&2
printf '%s\n' "══════════════════════════════════════════" >&2

ASSESS_TMP=$(mktemp)
cat > "$ASSESS_TMP" << 'ENDOFPROMPT'
You are a complexity assessment tool. Output exactly ONE line:

COMPLEXITY: <0.0-1.0> | DECISION: CONSULT_ADVISOR | DOMAINS: <comma-separated>

Scoring: +0.30 Architecture, +0.30 Security, +0.25 Database, +0.20 Novel, +0.15 Performance, -0.20 Established path
Threshold: 0.5. If >= 0.5, CONSULT_ADVISOR.
DOMAINS: list specialist domains needed (security,database,api,performance,devops,frontend,backend,ml)

Task:
ENDOFPROMPT

OUT1=$(mktemp)
kilo run "${ARGS[@]}" "$(cat "$ASSESS_TMP")${TASK}" > "$OUT1" 2>&1 || true

SCORE=$(grep -i "COMPLEXITY:" "$OUT1" | tail -1 | grep -o '[0-9]\.[0-9]*' | head -1)
[ -z "$SCORE" ] && SCORE="0"
DOMAINS=$(grep -i "DOMAINS:" "$OUT1" | tail -1 | sed 's/.*DOMAINS:\s*//' | tr -d ' ')
printf '   Complexity: %s | Domains: %s\n' "$SCORE" "${DOMAINS:-none}" >&2

# ── Decide: Advisor needed? ─────────────────────────────────────
NEED_ADVISOR=false
if [ "$FORCE_MODE" = true ]; then
  NEED_ADVISOR=true
  printf '   Mode: FORCED → Advisor always triggered\n' >&2
elif [ "$WIKI_ONLY" = true ]; then
  if [ "$WIKI_YES" = "0" ]; then
    NEED_ADVISOR=true
    printf '   Mode: WIKI-ONLY → No knowledge found, triggering advisor\n' >&2
  else
    printf '   Mode: WIKI-ONLY → Knowledge exists, skipping advisor\n' >&2
  fi
else
  if awk -v s="$SCORE" -v t="$THRESHOLD" 'BEGIN { exit (s+0 >= t+0) ? 0 : 1 }' 2>/dev/null; then
    NEED_ADVISOR=true
  fi
fi

# ── Phase 2: Advisor + Specialist Assignment ────────────────────
if [ "$NEED_ADVISOR" = true ]; then
  printf '%s\n' "══════════════════════════════════════════" >&2
  printf '%s\n' " Phase 2: Advisor + Specialist Assignment " >&2
  printf '%s\n' "══════════════════════════════════════════" >&2

  # Step 2a: Opus 4.7 Architectural Advisor
  printf '   Step 2a: Architectural Advisor (Opus 4.7)\n' >&2
  
  ADV_TMP=$(mktemp)
  cat > "$ADV_TMP" << ENDOFADVISOR
You are a senior architectural advisor (Claude Opus 4.7). Your job:

1. Provide HIGH-LEVEL architectural guidance for the task below
2. Identify which Agency Agents specialists are needed
3. Assign specialists with specific questions

Task: ${TASK}
Complexity: ${SCORE}
Domains identified: ${DOMAINS:-none}

Output format:
## Architecture Approach
[2-3 sentences]

## Key Decisions
[Numbered list]

## Pitfalls to Avoid
[Numbered list]

## Best Practices
[Numbered list]

## Specialist Assignment
For each specialist needed, output:
- SPECIALIST: <type> | QUESTION: <specific question for this specialist>

Available specialists: security, database, api, performance, devops, frontend, backend, ml
ENDOFADVISOR

  ADV_OUT=$(mktemp)
  kilo run -m "${ADVISOR_MODEL}" --auto "$(cat "$ADV_TMP")" > "$ADV_OUT" 2>&1 || true
  ARCH_GUIDANCE=$(cat "$ADV_OUT")
  printf '   Architecture guidance: %s lines\n' "$(echo "$ARCH_GUIDANCE" | wc -l)" >&2

  # Step 2b: Agency Agents Specialist Consultation
  SPECIALIST_GUIDANCE=""
  SPECIALIST_LINES=$(echo "$ARCH_GUIDANCE" | grep "SPECIALIST:" || true)
  
  if [ -n "$SPECIALIST_LINES" ]; then
    printf '   Step 2b: Agency Agents Specialists\n' >&2
    
    while IFS= read -r line; do
      STYPE=$(echo "$line" | sed 's/.*SPECIALIST:\s*//' | sed 's/|.*//' | tr -d ' ')
      SQUERY=$(echo "$line" | sed 's/.*QUESTION:\s*//' | tr -d '\r')
      [ -z "$STYPE" ] && continue
      
      # Find matching Agency Agent
      AADIR=""
      case "$STYPE" in
        security) AADIR="$AA_DIR/security-engineer" ;;
        database) AADIR="$AA_DIR/database-optimizer" ;;
        api) AADIR="$AA_DIR/api-tester" ;;
        performance) AADIR="$AA_DIR/performance-benchmarker" ;;
        devops) AADIR="$AA_DIR/devops-automator" ;;
        frontend) AADIR="$AA_DIR/frontend-developer" ;;
        backend) AADIR="$AA_DIR/backend-architect" ;;
      esac
      
      if [ -n "$AADIR" ] && [ -f "$AADIR/AGENTS.md" ]; then
        printf '     Assigning %s...\n' "$STYPE" >&2
        AA_PROMPT=$(cat "$AADIR/AGENTS.md" 2>/dev/null | head -80)
        
        SPEC_OUT=$(mktemp)
        kilo run -m "$ADVISOR_MODEL" --auto "${AA_PROMPT}

Task: ${TASK}
Your specific question: ${SQUERY}

Provide focused guidance. Keep under 200 words." > "$SPEC_OUT" 2>&1 || true
        
        SPEC_RESP=$(cat "$SPEC_OUT")
        SPECIALIST_GUIDANCE="${SPECIALIST_GUIDANCE}

## ${STYPE} Specialist Guidance
${SPEC_RESP}"
        printf '     ✓ %s guidance received (%s lines)\n' "$STYPE" "$(echo "$SPEC_RESP" | wc -l)" >&2
        rm -f "$SPEC_OUT"
      else
        printf '     ⚠ No agent found for: %s\n' "$STYPE" >&2
      fi
    done <<< "$SPECIALIST_LINES"
  else
    printf '   No specialists assigned by advisor\n' >&2
  fi

  # Combine all guidance
  FULL_GUIDANCE="${ARCH_GUIDANCE}${SPECIALIST_GUIDANCE}"
  rm -f "$ADV_TMP" "$ADV_OUT"
else
  FULL_GUIDANCE=""
fi

rm -f "$ASSESS_TMP" "$OUT1" "$WIKI_OUT"

# ── Phase 3: Implementation ──────────────────────────────────────
printf '%s\n' "══════════════════════════════════════════" >&2
printf '%s\n' " Phase 3: Implementation                  " >&2
printf '%s\n' "══════════════════════════════════════════" >&2

FINAL_TMP=$(mktemp)
cat "$AGENT_PROMPT" > "$FINAL_TMP"

if [ -n "${FULL_GUIDANCE:-}" ]; then
  printf '\n\n---\n\n## COMPLETE ADVISORY GUIDANCE\n\n%s\n\n---\n\n## YOUR TASK\n\nImplement based on ALL guidance above. Follow the architecture, specialist recommendations, and best practices exactly.\n\n%s\n' "$FULL_GUIDANCE" "$TASK" >> "$FINAL_TMP"
  printf '   Mode: WITH full advisory guidance\n' >&2
else
  printf '\n\n---\n\n## YOUR TASK\n\n%s\n' "$TASK" >> "$FINAL_TMP"
  printf '   Mode: Direct implementation\n' >&2
fi

if [ "$DRY_RUN" = true ]; then
  printf '%s\n' "══════════════════════════════════════════" >&2
  printf '%s\n' " DRY RUN — Would execute:                " >&2
  printf '%s\n' "══════════════════════════════════════════" >&2
  printf '   Model: %s\n' "${ARGS[1]}" >&2
  printf '   Task: %s\n' "$TASK" >&2
  printf '   Prompt file: %s\n' "$FINAL_TMP" >&2
  printf '\n%s\n' "--- Final Prompt (first 500 chars) ---" >&2
  head -c 500 "$FINAL_TMP" >&2
  printf '\n%s\n' "..." >&2
  rm -f "$FINAL_TMP"
  exit 0
fi

exec kilo run "${ARGS[@]}" "$(cat "$FINAL_TMP")"