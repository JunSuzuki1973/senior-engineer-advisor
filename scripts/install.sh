#!/usr/bin/env bash
# install.sh — Auto-detect AI coding tool and install the advisor adapter
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# ── Tool detection ────────────────────────────────────────────────────────────
detect_tool() {
    if command -v claude &>/dev/null; then echo "claude-code"; return; fi
    if command -v opencode &>/dev/null; then echo "opencode"; return; fi
    if command -v kilo &>/dev/null; then echo "kilo"; return; fi
    if command -v openclaw &>/dev/null; then echo "openclaw"; return; fi
    echo "none"
}

TOOL="${1:-$(detect_tool)}"

echo "[advisor] Detected tool: ${TOOL}"

case "$TOOL" in
    claude-code)
        bash "${REPO_DIR}/scripts/convert/claude-code.sh"
        ;;
    opencode)
        bash "${REPO_DIR}/scripts/convert/opencode.sh"
        ;;
    kilo)
        bash "${REPO_DIR}/scripts/convert/kilo.sh"
        ;;
    openclaw)
        bash "${REPO_DIR}/scripts/convert/openclaw.sh"
        ;;
    none)
        echo "[advisor] No supported tool detected."
        echo "          Install one of: claude, opencode, kilo, openclaw"
        echo "          Or run: bash scripts/install.sh <tool-name>"
        exit 1
        ;;
    *)
        echo "[advisor] Unknown tool '${TOOL}'. Supported: claude-code, opencode, kilo, openclaw"
        exit 1
        ;;
esac

# ── Python dependencies ───────────────────────────────────────────────────────
echo "[advisor] Installing Python dependencies..."
if command -v pip3 &>/dev/null; then
    pip3 install -q -r "${REPO_DIR}/requirements.txt"
elif command -v pip &>/dev/null; then
    pip install -q -r "${REPO_DIR}/requirements.txt"
else
    echo "[advisor] WARNING: pip not found. Install dependencies manually:"
    echo "          pip install -r requirements.txt"
fi

# ── .env setup ───────────────────────────────────────────────────────────────
if [[ ! -f "${REPO_DIR}/.env" ]]; then
    cp "${REPO_DIR}/.env.example" "${REPO_DIR}/.env"
    echo "[advisor] Created .env from .env.example — fill in your API keys."
fi

echo ""
echo "[advisor] Installation complete."
echo "          Next: edit .env with your API keys, then try:"
echo "          python -m core.cli --dry-run 'Implement JWT authentication'"
