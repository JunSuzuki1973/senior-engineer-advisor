import { GunModel } from '../model/GunModel.js';

export class PartList {
  constructor() {
    this.container = document.getElementById('parts-list');
    this.onPartClick = null;
    this._build();
  }

  _build() {
    if (!this.container) return;
    this.container.innerHTML = '';

    const sorted = Object.entries(GunModel.parts).sort((a, b) => a[1].order - b[1].order);

    for (const [partId, partData] of sorted) {
      const card = document.createElement('div');
      card.className = 'part-card';
      card.dataset.partId = partId;
      card.innerHTML =
        '<div class="part-number">' + partData.order + '</div>' +
        '<div class="part-info">' +
          '<div class="part-name">' + partData.label + '</div>' +
          '<div class="part-desc">' + partData.description.split('—')[0].trim() + '</div>' +
        '</div>' +
        '<div class="part-status assembled">Ready</div>';

      card.addEventListener('click', () => {
        if (this.onPartClick) this.onPartClick(partId);
      });

      this.container.appendChild(card);
    }
  }

  update(stateManager, selectedPart) {
    const cards = this.container.querySelectorAll('.part-card');
    cards.forEach(card => {
      const partId = card.dataset.partId;
      const statusEl = card.querySelector('.part-status');
      const state = stateManager.partStates[partId];
      if (!state) return;

      card.classList.toggle('selected', partId === selectedPart);

      if (state.status === 'assembled') {
        statusEl.className = 'part-status assembled';
        statusEl.textContent = 'Ready';
      } else if (state.status === 'exploded') {
        statusEl.className = 'part-status exploded';
        statusEl.textContent = 'Removed';
      } else {
        statusEl.className = 'part-status animating';
        statusEl.textContent = 'Moving';
      }
    });
  }
}