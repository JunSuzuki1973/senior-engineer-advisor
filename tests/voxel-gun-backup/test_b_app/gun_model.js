const GunModel = {
  name: "VX-9 Phantom",
  description: "Semi-automatic voxel pistol — tactical sidearm with modular components",
  voxelSize: 0.5,

  parts: {
    slide: {
      id: "slide",
      label: "Slide",
      description: "Upper receiver — houses the firing pin and ejection port",
      order: 1,
      explodeOffset: { x: 0, y: 4, z: 0 },
      voxels: (() => {
        const v = [];
        const c = "#3a3a4a";
        const cDark = "#2a2a3a";
        const cSight = "#1a1a2a";
        const cHighlight = "#4a4a5a";
        for (let z = -1; z <= 1; z++) {
          for (let x = -5; x <= 13; x++) {
            v.push({ x, y: 5, z, color: (x > 11) ? cDark : c });
          }
        }
        for (let z = -1; z <= 1; z++) {
          for (let x = -5; x <= 11; x++) {
            v.push({ x, y: 6, z, color: c });
          }
        }
        for (let z = -1; z <= 1; z++) {
          v.push({ x: -5, y: 7, z, color: cSight });
          v.push({ x: 11, y: 7, z, color: cSight });
        }
        for (let z = -1; z <= 1; z++) {
          v.push({ x: -5, y: 6, z, color: cSight });
          v.push({ x: 11, y: 6, z, color: cSight });
        }
        for (let z = -1; z <= 1; z++) {
          for (let x = 3; x <= 9; x++) {
            v.push({ x, y: 6, z, color: cHighlight });
          }
        }
        for (let x = 9; x <= 11; x++) {
          v.push({ x, y: 5, z: 0, color: cDark });
        }
        return v;
      })()
    },

    barrel: {
      id: "barrel",
      label: "Barrel",
      description: " Rifled barrel — 4.2 inch, polygonal rifling",
      order: 2,
      explodeOffset: { x: 5, y: 2, z: 0 },
      voxels: (() => {
        const v = [];
        const c = "#555566";
        const cBore = "#222233";
        for (let z = -1; z <= 1; z++) {
          for (let y = 3; y <= 5; y++) {
            v.push({ x: -8, y, z, color: c });
            v.push({ x: -7, y, z, color: c });
            v.push({ x: -6, y, z, color: c });
          }
        }
        v.push({ x: -9, y: 4, z: 0, color: cBore });
        v.push({ x: -9, y: 4, z: -1, color: c });
        v.push({ x: -9, y: 4, z: 1, color: c });
        v.push({ x: -9, y: 3, z: 0, color: c });
        v.push({ x: -9, y: 5, z: 0, color: c });
        for (let z = -1; z <= 1; z++) {
          v.push({ x: -9, y: 3, z, color: c });
          v.push({ x: -9, y: 5, z, color: c });
        }
        return v;
      })()
    },

    frame: {
      id: "frame",
      label: "Frame",
      description: "Lower receiver — structural chassis housing the trigger mechanism",
      order: 3,
      explodeOffset: { x: 0, y: -2, z: 0 },
      voxels: (() => {
        const v = [];
        const c = "#2d2d3d";
        const cRail = "#3d3d4d";
        for (let z = -1; z <= 1; z++) {
          for (let x = -4; x <= 12; x++) {
            v.push({ x, y: 4, z, color: c });
          }
        }
        for (let z = -1; z <= 1; z++) {
          for (let x = -4; x <= 8; x++) {
            v.push({ x, y: 3, z, color: c });
          }
        }
        for (let x = -4; x <= 3; x++) {
          v.push({ x, y: 4, z: -2, color: cRail });
          v.push({ x, y: 4, z: 2, color: cRail });
        }
        return v;
      })()
    },

    trigger: {
      id: "trigger",
      label: "Trigger",
      description: "Trigger assembly — single-action with integrated safety",
      order: 4,
      explodeOffset: { x: 0, y: -4, z: 3 },
      voxels: (() => {
        const v = [];
        const c = "#4a3a2a";
        const cGuard = "#333344";
        v.push({ x: 1, y: 3, z: 0, color: c });
        v.push({ x: 1, y: 2, z: 0, color: c });
        v.push({ x: 0, y: 1, z: 0, color: c });
        v.push({ x: 1, y: 1, z: 0, color: cGuard });
        v.push({ x: 2, y: 1, z: 0, color: cGuard });
        v.push({ x: -1, y: 3, z: 0, color: cGuard });
        v.push({ x: 3, y: 3, z: 0, color: cGuard });
        for (let z = -1; z <= 1; z++) {
          v.push({ x: 3, y: 3, z, color: cGuard });
          v.push({ x: -1, y: 3, z, color: cGuard });
        }
        v.push({ x: 3, y: 2, z: -1, color: cGuard });
        v.push({ x: 3, y: 2, z: 1, color: cGuard });
        v.push({ x: -1, y: 2, z: -1, color: cGuard });
        v.push({ x: -1, y: 2, z: 1, color: cGuard });
        v.push({ x: 3, y: 2, z: 0, color: cGuard });
        v.push({ x: -1, y: 2, z: 0, color: cGuard });
        for (let z = -1; z <= 1; z++) {
          v.push({ x: -1, y: 1, z, color: cGuard });
          v.push({ x: 3, y: 1, z, color: cGuard });
          v.push({ x: 2, y: 1, z, color: cGuard });
        }
        return v;
      })()
    },

    grip: {
      id: "grip",
      label: "Grip",
      description: "Ergonomic grip — textured polymer with beavertail",
      order: 5,
      explodeOffset: { x: -3, y: -6, z: 0 },
      voxels: (() => {
        const v = [];
        const c = "#1e1e2e";
        const cTexture = "#282838";
        const cPanel = "#333345";
        for (let y = -3; y <= 2; y++) {
          for (let z = -1; z <= 1; z++) {
            v.push({ x: 1, y, z, color: (z === 0 && y > -2) ? cPanel : c });
            v.push({ x: 2, y, z, color: (z === 0 && y > -2) ? cPanel : c });
            v.push({ x: 3, y, z, color: c });
          }
        }
        for (let y = -3; y <= 2; y++) {
          for (let z = -2; z <= 2; z++) {
            v.push({ x: 4, y, z, color: c });
          }
        }
        for (let y = -4; y <= -3; y++) {
          for (let z = -1; z <= 1; z++) {
            v.push({ x: 2, y, z, color: c });
            v.push({ x: 3, y, z, color: c });
          }
        }
        for (let y = -1; y <= 1; y++) {
          v.push({ x: 1, y, z: 2, color: cTexture });
          v.push({ x: 1, y, z: -2, color: cTexture });
          v.push({ x: 2, y, z: 2, color: cTexture });
          v.push({ x: 2, y, z: -2, color: cTexture });
        }
        return v;
      })()
    },

    magazine: {
      id: "magazine",
      label: "Magazine",
      description: "Double-stack magazine — 15 round capacity, 9x19mm",
      order: 6,
      explodeOffset: { x: -3, y: -9, z: 0 },
      voxels: (() => {
        const v = [];
        const c = "#3a3a22";
        const cBase = "#2a2a1a";
        const cSpring = "#666644";
        for (let y = -3; y <= 2; y++) {
          for (let z = -1; z <= 1; z++) {
            v.push({ x: 1, y, z, color: c });
            v.push({ x: 2, y, z, color: c });
            v.push({ x: 3, y, z, color: c });
          }
        }
        for (let z = -1; z <= 1; z++) {
          v.push({ x: 1, y: -4, z, color: cBase });
          v.push({ x: 2, y: -4, z, color: cBase });
          v.push({ x: 3, y: -4, z, color: cBase });
          v.push({ x: 2, y: -5, z, color: cBase });
        }
        v.push({ x: 2, y: 2, z: 0, color: cSpring });
        v.push({ x: 2, y: 1, z: 0, color: cSpring });
        return v;
      })()
    },

    rearSight: {
      id: "rearSight",
      label: "Rear Sight",
      description: "Adjustable rear sight — white dot, drift adjustable",
      order: 7,
      explodeOffset: { x: -4, y: 7, z: 0 },
      voxels: (() => {
        const v = [];
        const c = "#1a1a2a";
        const cDot = "#ccccdd";
        v.push({ x: -4, y: 7, z: -1, color: c });
        v.push({ x: -4, y: 7, z: 0, color: c });
        v.push({ x: -4, y: 7, z: 1, color: c });
        v.push({ x: -4, y: 8, z: -1, color: c });
        v.push({ x: -4, y: 8, z: 0, color: cDot });
        v.push({ x: -4, y: 8, z: 1, color: c });
        return v;
      })()
    },

    frontSight: {
      id: "frontSight",
      label: "Front Sight",
      description: "Fixed front sight — tritium dot insert",
      order: 8,
      explodeOffset: { x: 7, y: 7, z: 0 },
      voxels: (() => {
        const v = [];
        const c = "#1a1a2a";
        const cDot = "#ccdd44";
        v.push({ x: 11, y: 7, z: -1, color: c });
        v.push({ x: 11, y: 7, z: 0, color: c });
        v.push({ x: 11, y: 7, z: 1, color: c });
        v.push({ x: 11, y: 8, z: 0, color: cDot });
        return v;
      })()
    }
  },

  assemblyOrder: [
    "frame",
    "grip",
    "trigger",
    "magazine",
    "barrel",
    "slide",
    "rearSight",
    "frontSight"
  ],

  disassemblyOrder: [
    "frontSight",
    "rearSight",
    "slide",
    "barrel",
    "magazine",
    "trigger",
    "grip"
  ]
};