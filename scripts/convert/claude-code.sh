#!/usr/bin/env bash
# Convert: install advisor as Claude Code slash commands
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
COMMANDS_DIR="${HOME}/.claude/commands"

mkdir -p "${COMMANDS_DIR}"

echo "[advisor] Installing Claude Code commands..."

for cmd_file in "${REPO_DIR}/adapters/claude-code/commands"/*.md; do
    name="$(basename "${cmd_file}")"
    target="${COMMANDS_DIR}/${name}"
    ln -sf "${cmd_file}" "${target}"
    echo "  → ${target}"
done

# Install CLAUDE.md reference in project root if not present
if [[ ! -f "${REPO_DIR}/CLAUDE.md" ]]; then
    cp "${REPO_DIR}/adapters/claude-code/CLAUDE.md" "${REPO_DIR}/CLAUDE.md"
    echo "  → ${REPO_DIR}/CLAUDE.md (created)"
fi

echo "[advisor] Claude Code adapter installed. Restart Claude Code to activate commands."
