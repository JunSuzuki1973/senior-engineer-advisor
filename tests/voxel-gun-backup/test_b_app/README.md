# VX-9 Phantom — Voxel Gun Disassembly Simulator

A 3D voxel art style firearm disassembly/assembly simulator built with Three.js.

## Quick Start

Open `index.html` in a modern browser (Chrome, Firefox, Edge). No build step or server required — just open the file directly.

For local development with live reload:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Features

- **8 Interchangeable Parts**: Slide, barrel, frame, trigger, grip, magazine, rear sight, front sight
- **Click-to-Select**: Click any part in the 3D viewport to highlight and see details
- **Exploded View**: Toggle all parts to their disassembled positions simultaneously
- **Step-by-Step Guide**: Follow ordered disassembly/assembly steps in the side panel
- **Smooth Animations**: Elastic easing for part movements with adjustable speed
- **Camera Controls**: Drag to rotate, scroll to zoom, preset camera views (Front/Side/Top)
- **Auto-Rotation**: Model rotates slowly by default; toggle on/off
- **Touch Support**: Works on tablets and phones

## Controls

| Action | Input |
|--------|-------|
| Rotate model | Click + drag |
| Zoom | Scroll wheel |
| Select part | Click on part |
| Deselect | Click empty space |

## UI Panels

- **Parts tab**: Lists all 8 parts with status indicators (Ready/Removed/Moving)
- **Steps tab**: Ordered disassembly guide — click a step to animate that part
- **Controls tab**: Explode/Assemble buttons, animation speed slider, camera presets

## File Structure

```
├── index.html      Main entry point (loads Three.js from CDN)
├── styles.css      Dark voxel-themed UI stylesheet
├── app.js          Three.js scene, interaction, animation logic
├── gun_model.js    Voxel gun part definitions and metadata
└── README.md       This file
```

## Browser Support

Requires WebGL 2.0. Tested on Chrome 90+, Firefox 88+, Edge 90+.

## Customization

Edit `gun_model.js` to modify the gun model:
- Add/remove parts in the `parts` object
- Adjust `explodeOffset` for disassembly distance/direction
- Modify `voxels` arrays to change part geometry (each entry: `{x, y, z, color}`)
- Update `assemblyOrder` and `disassemblyOrder` arrays to change step sequence