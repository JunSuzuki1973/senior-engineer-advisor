# Senior Engineer Advisor v4.1

**On-Demand Architectural Guidance for Cost-Effective AI Coding**

A token-efficient approach that lets implementation agents try first, consults specialists only when stuck, and accumulates knowledge in LLM Wiki for reuse.

---

## 🎯 Philosophy

Traditional approaches: *"Design everything upfront, then implement"*

**Our approach**: *"Implement first, consult experts on-demand, accumulate knowledge"*

This philosophy is based on the observation that:
- **Modern mid-tier models (GLM-5)** can self-direct many tasks effectively
- **Frontier model consultation** is most valuable when the agent is genuinely stuck
- **Knowledge accumulation** through LLM Wiki provides compounding returns

---

## ✨ Key Features

### 1. On-Demand Advisor (v4.1)
```bash
advisor --on-demand --auto "your task"
```

**Flow**:
1. Implementation agent (GLM-5) attempts task first
2. Self-assesses complexity/confidence
3. **Only if stuck** (complexity >= 0.5): Consult advisor + specialists
4. Continue with guidance
5. Save successful patterns to Wiki

### 2. Dynamic Specialist Selection
From **226 available agents** in Agency Agents repository, select 3-8 most relevant based on task analysis:
- Keyword-based heuristic selection (fast, reliable)
- No unnecessary consultations
- Fallback to opencode CLI if kilo unavailable

### 3. Advice Depth Control (5 Levels)
```bash
advisor --depth 4 --auto "complex task"
```

| Level | Detail | Use Case |
|-------|--------|----------|
| 1 | Simple - Big picture only | Routine tasks |
| 2 | General - Key decisions | Standard features |
| 3 | **Standard** - Architecture + pitfalls + best practices | **Default** |
| 4 | Detailed - Implementation suggestions | Complex systems |
| 5 | Comprehensive - Exhaustive analysis | Critical architecture |

### 4. LLM Wiki Knowledge Cycle
```
Task → Wiki Search (similarity >= 0.75) → Implementation → Wiki Save → Reuse
```

**Benefits**:
- 1st occurrence: Full consultation
- 2nd+ occurrences: Reuse patterns (87% cost reduction)
- Continuous improvement through usage history

---

## 🚀 Quick Start

### Installation
```bash
# Clone repository
git clone https://github.com/JunSuzuki1973/senior-engineer-advisor.git
cd senior-engineer-advisor

# Create symlink
ln -sf $(pwd)/integrations/advisor.sh ~/.local/bin/advisor

# Setup environment
export WIKI_DIR="$HOME/openclaw-wiki"
export AA_DIR="$HOME/agency-agents"
export PATH="$HOME/.local/bin:$PATH"
```

### Usage Examples

```bash
# Recommended: On-demand mode (smart consultation)
advisor --on-demand --auto "Build a JWT authentication system"

# Standard: Auto-detect complexity
advisor --auto "Create a React component"

# Experimental: Force advisor (for testing)
advisor --force --depth 5 --auto "Design microservices architecture"

# Conditional: Only if no Wiki knowledge
advisor --wiki-only --auto "Investigate new technology"

# Preview mode
advisor --dry-run --auto "Your task here"
```

---

## 📊 System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Task Input                           │
└──────────────────┬──────────────────────────────────────┘
                   │
    ┌──────────────▼──────────────┐
    │   Phase 0: Wiki Search      │
    │   (Similarity >= 0.75)      │
    │   ↓ Match found: Reuse      │
    └──────────────┬──────────────┘
                   │ No match
    ┌──────────────▼──────────────┐
    │   Phase 1: Implementation   │
    │   Agent tries task          │
    └──────────────┬──────────────┘
                   │
        ┌─────────┴─────────┐
        ↓                   ↓
   [Confident]         [Stuck/Complex]
        ↓                   ↓
   Complete        Consult Advisor
                        ↓
                   Select Specialists
                        ↓
                   Continue & Save
```

---

## 💰 Cost Analysis

| Scenario | Traditional (Opus) | advisor v4.1 | Savings |
|----------|-------------------|--------------|---------|
| Simple task (GLM-5 handles) | $0.15 | $0.03 | 80% |
| Complex task (on-demand consult) | $0.15 | $0.05-0.08 | 47-67% |
| Pattern reuse (Wiki hit) | $0.15 | $0.02 | **87%** |
| **50 tasks/day, 30% reuse** | $225 | **$35-50** | **78-84%** |

---

## 🔬 Experimental Results

### Test: Voxel Assault Rifle Simulator

**Task**: Create a voxel art style assault rifle disassembly/assembly simulator with smooth animations and interactive controls.

| Metric | With Advisor (Depth 5) | Direct Implementation |
|--------|----------------------|----------------------|
| Time | 8m 1s | **4m 18s** |
| Tokens | 60.0k | **31.1k** |
| Code Lines | ~600 | **911** |
| Quality | High | **High** |
| Architecture | Glass-morphism UI | Multi-light rendering |

**Key Finding**: Direct implementation was **2x faster, 50% cheaper** with comparable quality.

**Insight**: The advisor's value is not immediate quality boost but **knowledge accumulation** for reuse.

---

## 📁 Repository Structure

```
senior-engineer-advisor/
├── integrations/
│   └── advisor.sh          # Main script (v4.1)
├── prompts/
│   └── agent_system.md     # Implementation agent prompt
├── tests/                  # Test results & reports
│   ├── assault-rifle-v4/   # v4.0 test results
│   └── [future-tests]/
├── docs/                   # GitHub Pages deployment
│   ├── index.html          # Test comparison report
│   ├── test-a-v4/          # Test A application
│   └── test-b-v4/          # Test B application
├── README.md               # This file (English)
├── README_JA.md            # Japanese documentation
├── CHANGELOG.md            # Release history
├── VERSION                 # Current version
└── config.yaml             # Configuration template
```

---

## ⚙️ Configuration

### Environment Variables
```bash
# Required
export WIKI_DIR="$HOME/openclaw-wiki"              # LLM Wiki path
export AA_DIR="$HOME/agency-agents"                # Agency Agents path

# Optional
export ADVICE_DEPTH="3"                            # Default depth (1-5)
export DEFAULT_MODEL="opencode-go/glm-5"          # Implementation model
export ADVISOR_MODEL="kilo/anthropic/claude-opus-4-6"  # Advisor model
```

### Config File (config.yaml)
```yaml
advisor:
  general:
    model: "kilo/anthropic/claude-opus-4-6"
    max_tokens: 800
  advice_depth: 3                    # 1-5
  
  code_review:
    enabled: true
    require_permission: true

knowledge:
  llm_wiki:
    enabled: true
    path: "~/openclaw-wiki"
    auto_save: true
```

---

## 🔗 Related Projects

- **[Agency Agents](https://github.com/msitarzewski/agency-agents)** - 226 specialized AI agents
- **[LLM Wiki](https://github.com/karpathy/llm-wiki)** - Knowledge management philosophy

---

## 📝 Version History

See [CHANGELOG.md](CHANGELOG.md) for detailed release history.

**Current**: v4.1.0 - On-demand advisor consultation

---

## 📄 License

MIT License

---

*Built with the philosophy: "Accumulate knowledge, don't just consume it."*
