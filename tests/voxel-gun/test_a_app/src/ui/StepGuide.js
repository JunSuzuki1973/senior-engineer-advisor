import { GunModel } from '../model/GunModel.js';

export class StepGuide {
  constructor() {
    this.container = document.getElementById('steps-list');
    this.currentStep = 0;
    this.onStepClick = null;
    this._build();
  }

  _build() {
    if (!this.container) return;
    this.container.innerHTML = '';

    GunModel.disassemblyOrder.forEach((partId, idx) => {
      const partData = GunModel.parts[partId];
      const card = document.createElement('div');
      card.className = 'step-card';
      card.dataset.step = idx;
      card.dataset.partId = partId;
      card.innerHTML =
        '<div class="step-header">' +
          '<span class="step-number">Step ' + (idx + 1) + '</span>' +
          '<span class="step-action">Remove ' + partData.label + '</span>' +
        '</div>' +
        '<div class="step-detail">' + partData.description.split('—')[0].trim() + '</div>';

      card.addEventListener('click', () => {
        if (this.onStepClick) this.onStepClick(idx);
      });

      this.container.appendChild(card);
    });
  }

  update(stateManager, currentStep) {
    this.currentStep = currentStep;

    const cards = this.container.querySelectorAll('.step-card');
    cards.forEach(card => {
      const step = parseInt(card.dataset.step);
      const partId = GunModel.disassemblyOrder[step];
      const state = stateManager.partStates[partId];
      if (!state) return;

      card.classList.toggle('completed', state.status === 'exploded');
      card.classList.toggle('active', step === currentStep);
    });
  }
}