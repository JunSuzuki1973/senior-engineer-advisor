#!/usr/bin/env bash
# Import specialist agents from msitarzewski/agency-agents (MIT License)
# This script clones agency-agents and converts Engineering division agents
# into the local agents/ directory format.
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
TMP_DIR="$(mktemp -d)"
AGENTS_DIR="${REPO_DIR}/agents"

echo "[advisor] Cloning agency-agents (MIT License)..."
git clone --depth 1 https://github.com/msitarzewski/agency-agents.git "${TMP_DIR}/agency-agents"

echo "[advisor] Importing Engineering division specialists..."

# Map agency-agents Engineering division files to local agent slugs
declare -A MAPPING=(
    ["engineering/frontend"]="frontend-extended"
    ["engineering/backend"]="backend-extended"
    ["engineering/security"]="security-extended"
    ["engineering/devops"]="devops-extended"
    ["engineering/mobile"]="mobile"
    ["engineering/ai"]="ai-engineer"
)

count=0
for src_path in "${!MAPPING[@]}"; do
    target_name="${MAPPING[$src_path]}"
    # agency-agents stores agents in various formats — try .md first
    for ext in md txt yaml; do
        src="${TMP_DIR}/agency-agents/${src_path}.${ext}"
        if [[ -f "${src}" ]]; then
            cp "${src}" "${AGENTS_DIR}/${target_name}.md"
            echo "  → agents/${target_name}.md"
            (( count++ )) || true
            break
        fi
    done
done

rm -rf "${TMP_DIR}"

echo "[advisor] Imported ${count} specialist agents from agency-agents."
echo "          Run scripts/install.sh to re-register with your tool."
