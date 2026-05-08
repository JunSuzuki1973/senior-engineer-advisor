import * as THREE from 'three';

export class HighlightSystem {
  constructor(voxelBuilder) {
    this.builder = voxelBuilder;
  }

  setHighlight(partId, highlighted, isSelected = false) {
    const group = this.builder.getGroup(partId);
    if (!group) return;

    const hg = group.userData.highlightGroup;
    if (hg) {
      hg.visible = highlighted || isSelected;
      hg.children.forEach(c => {
        if (c.material) {
          c.material.color.setHex(isSelected ? 0x00ccdd : 0x4466ff);
          c.material.opacity = isSelected ? 0.2 : 0.15;
        }
      });
    }
  }

  setSelected(partId, selected) {
    const group = this.builder.getGroup(partId);
    if (!group) return;

    if (selected) {
      group.traverse(child => {
        if (child.isInstancedMesh && child.material) {
          child.material.emissive = child.material.emissive || new THREE.Color(0);
          child.material.emissiveIntensity = 0.15;
          child.material.emissive.set(0x2244aa);
        }
      });
    } else {
      group.traverse(child => {
        if (child.isInstancedMesh && child.material) {
          child.material.emissiveIntensity = 0;
          child.material.emissive = new THREE.Color(0);
        }
      });
    }

    this.setHighlight(partId, selected, selected);
  }

  pulseSelected(partId, elapsed) {
    const group = this.builder.getGroup(partId);
    if (!group || !group.userData.highlightGroup) return;

    const pulse = Math.sin(elapsed * 3) * 0.08 + 0.18;
    group.userData.highlightGroup.children.forEach(c => {
      if (c.material) c.material.opacity = pulse;
    });
  }

  animatePulse(partId, elapsed) {
    const group = this.builder.getGroup(partId);
    if (!group) return;

    const state = group.userData._animPulse;
    if (state) {
      const pulse = Math.sin(elapsed * 8) * 0.015 + 1;
      group.scale.set(pulse, pulse, pulse);
    } else {
      const breathe = 1 + Math.sin(elapsed * 1.2 + group.position.x * 0.3) * 0.003;
      group.scale.set(breathe, breathe, breathe);
    }
  }
}