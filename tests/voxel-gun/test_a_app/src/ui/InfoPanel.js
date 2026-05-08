import { GunModel } from '../model/GunModel.js';

export class InfoPanel {
  constructor() {
    this.panel = document.getElementById('info-panel');
    this.titleEl = document.getElementById('info-title');
    this.descEl = document.getElementById('info-description');
    this.metaEl = document.getElementById('info-meta');
    this.toggleBtn = document.getElementById('info-toggle');
    this.focusBtn = document.getElementById('info-focus');

    this.onToggle = null;
    this.onFocus = null;

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => {
        if (this.onToggle) this.onToggle(this.currentPartId);
      });
    }

    if (this.focusBtn) {
      this.focusBtn.addEventListener('click', () => {
        if (this.onFocus) this.onFocus(this.currentPartId);
      });
    }

    this.currentPartId = null;
  }

  show(partId) {
    this.currentPartId = partId;
    const partData = GunModel.parts[partId];
    if (!partData) return;

    this.titleEl.textContent = partData.label;
    this.descEl.textContent = partData.description;
    this.metaEl.textContent = 'Part #' + partData.order + ' | Voxels: ' + partData.voxels.length;
    this.panel.classList.add('visible');
  }

  hide() {
    this.currentPartId = null;
    this.panel.classList.remove('visible');
  }
}