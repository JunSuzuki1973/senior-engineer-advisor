#!/usr/bin/env bash
# Integration test for advisor

set -euo pipefail

echo "🧪 Senior Engineer Advisor Integration Test"
echo "================================"
echo ""

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command -v kilo &> /dev/null; then
    echo "❌ kilo not found in PATH"
    exit 1
fi
echo "✅ kilo found: $(kilo --version 2>/dev/null || echo 'version unknown')"

if ! command -v advisor &> /dev/null; then
    echo "❌ advisor not found in PATH"
    echo "   Run: ./setup.sh"
    exit 1
fi
echo "✅ advisor found in PATH"

# Check environment
echo ""
echo "📁 Environment:"
echo "  WIKI_DIR: ${WIKI_DIR:-$HOME/openclaw-wiki}"
echo "  AA_DIR: ${AA_DIR:-$HOME/agency-agents}"

if [ -d "${WIKI_DIR:-$HOME/openclaw-wiki}" ]; then
    echo "  ✅ Wiki directory exists"
else
    echo "  ⚠️  Wiki directory not found"
fi

if [ -d "${AA_DIR:-$HOME/agency-agents}" ]; then
    echo "  ✅ Agency Agents directory exists"
else
    echo "  ⚠️  Agency Agents directory not found"
fi

# Dry run test
echo ""
echo "🧪 Dry Run Test:"
advisor --dry-run --auto "Create a simple calculator app"

echo ""
echo "================================"
echo "✅ Integration test complete!"
echo ""
echo "Ready for real tests:"
echo "  advisor --auto \"Your task here\""
echo "  advisor --force --auto \"Complex task\""
