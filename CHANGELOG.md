# Changelog

## v4.0.0 (2026-05-09)

### ✨ New Features

#### 1. Dynamic Agent Selection
- Select 3-8 most relevant specialists from 226 available agents
- Task-based analysis for optimal agent assignment
- Eliminates unnecessary consultations

#### 2. Advice Depth Setting (5 Levels)
- Level 1: Simple - High-level guidance only
- Level 2: General - Key points and main decisions  
- Level 3: Standard - Architecture + decisions + pitfalls (default)
- Level 4: Detailed - Comprehensive with implementation suggestions
- Level 5: Comprehensive - Exhaustive analysis with alternatives

#### 3. LLM Wiki Knowledge Cycle
- **Phase 0**: Semantic similarity search (threshold: 0.75)
- **Phase 4**: Automatic pattern saving (no --force required)
- Pattern naming: `pattern-{semantic-name}-{hash}.md`
- Usage history tracking for continuous improvement
- Knowledge spiral: accumulate → reuse → improve

#### 4. Correct Agency Agents Integration
- Proper file paths for all 226 agents
- Fixed: Removed forged paths (*/AGENTS.md)
- Fixed: Correct paths from msitarzewski/agency-agents:
  - engineering/: security, database, devops, frontend, backend, ml
  - testing/: api, performance

### 🔧 Improvements

- Advisor script completely rewritten (v4)
- Better error handling and validation
- Environment variable support (.env.example)
- Improved CLI help documentation
- Wiki directory auto-creation

### 📚 Documentation

- Updated README.md for v4 features
- Updated SKILL.md with new architecture
- Added CHANGELOG.md
- Added VERSION file

### 🐛 Bug Fixes

- Fixed: Specialist paths pointing to non-existent directories
- Fixed: Wiki save requiring --force flag
- Fixed: Hardcoded 8 specialists to dynamic selection

---

## v3.0.0 (Previous)

- Initial programmatic advisor implementation
- Basic Agency Agents integration
- Code review workflow
- LLM Wiki support (manual save)

---

## v2.0.0 (Previous)

- Agency Agents integration concept
- Cost analysis documentation
- Basic specialist assignment

---

## v1.0.0 (Initial)

- Basic concept and documentation
- Prompt templates
- Workflow definitions
