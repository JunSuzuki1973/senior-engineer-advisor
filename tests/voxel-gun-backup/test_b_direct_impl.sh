#!/bin/bash
# Test B: Direct Implementation WITHOUT Advisor
# Voxel Model Gun Simulator - Direct specialist assignment via kilo run

set -e

OUTPUT_DIR="$HOME/.openclaw/skills/senior-engineer-advisor/tests/voxel-gun/test_b_app"
LOG_FILE="$HOME/.openclaw/skills/senior-engineer-advisor/tests/voxel-gun/test_b_output.log"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Clear log file
> "$LOG_FILE"

echo "==========================================" | tee -a "$LOG_FILE"
echo "Test B: Direct Implementation (NO ADVISOR)" | tee -a "$LOG_FILE"
echo "==========================================" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"
echo "Timestamp: $(date)" | tee -a "$LOG_FILE"
echo "Model: opencode-go/glm-5" | tee -a "$LOG_FILE"
echo "Method: Direct specialist assignment via prompts" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

# Task description
TASK="ボクセルアート風のモデルガンの分解組み立てシュミュレーターを作成する。滑らかなアニメーション、美しいオブジェクト、操作性の良いUIを追求する。"

echo "Task: $TASK" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

# Run the task directly with specialist assignment
echo "=== Starting Direct Implementation ===" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"
echo "This implementation does NOT use the senior-engineer-advisor." | tee -a "$LOG_FILE"
echo "Instead, specialist roles are assigned directly in the prompt." | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

# Create a prompt file
PROMPT_FILE="$OUTPUT_DIR/.prompt.txt"
cat > "$PROMPT_FILE" << 'PROMPTEOF'
You are a team of specialists working on a voxel model gun simulator.

# Your Team Composition:
- **Frontend Developer**: Creates beautiful 3D voxel graphics with Three.js/Babylon.js
- **Animation Specialist**: Ensures smooth assembly/disassembly animations
- **UI/UX Designer**: Creates intuitive controls and beautiful interface

# Task:
Create a voxel art style model gun disassembly/assembly simulator.
Requirements:
1. Smooth animations for part movements
2. Beautiful voxel-style gun model
3. Excellent UI/UX with intuitive controls
4. Interactive features:
   - Click parts to select them
   - Animated disassembly/assembly
   - Exploded view mode
   - Step-by-step guide

# Output:
Create a complete web application with:
- index.html (main entry point)
- styles.css (voxel-style dark theme)
- app.js (game logic and animations)
- gun_model.js (voxel gun data)
- README.md (usage instructions)

# Technical Requirements:
- Use Three.js for 3D rendering
- Implement voxel geometry creation
- Add smooth easing animations
- Include ambient and directional lighting
- Make it responsive and touch-friendly
- Add sound effects (optional but nice to have)

Generate all files now.
PROMPTEOF

echo "Prompt saved to: $PROMPT_FILE" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

# Use kilo run with the prompt
echo "Executing kilo run with direct prompt..." | tee -a "$LOG_FILE"
cd "$OUTPUT_DIR"

# Run kilo with the prompt - using proper format
kilo run -m opencode-go/glm-5 --title "Voxel Gun Simulator - Direct Impl" \
  "$(cat "$PROMPT_FILE")" 2>&1 | tee -a "$LOG_FILE"

echo "" | tee -a "$LOG_FILE"
echo "=== Implementation Complete ===" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

# List generated files
echo "Generated files:" | tee -a "$LOG_FILE"
ls -la "$OUTPUT_DIR" | tee -a "$LOG_FILE"

echo "" | tee -a "$LOG_FILE"
echo "==========================================" | tee -a "$LOG_FILE"
echo "Test B Complete - Direct Implementation" | tee -a "$LOG_FILE"
echo "==========================================" | tee -a "$LOG_FILE"
