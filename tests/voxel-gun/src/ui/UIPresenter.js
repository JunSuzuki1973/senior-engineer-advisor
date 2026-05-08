import { PartList } from './PartList.js';
import { StepGuide } from './StepGuide.js';
import { InfoPanel } from './InfoPanel.js';
import { Toolbar } from './Toolbar.js';
import { Toast } from './Toast.js';

export class UIPresenter {
  constructor() {
    this.partList = new PartList();
    this.stepGuide = new StepGuide();
    this.infoPanel = new InfoPanel();
    this.toolbar = new Toolbar();
    this.toast = new Toast();
  }

  update(stateManager, selectedPart, currentStep) {
    this.partList.update(stateManager, selectedPart);
    this.stepGuide.update(stateManager, currentStep);

    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
      progressFill.style.width = stateManager.getProgress() + '%';
    }
  }

  updateToolbar(mode, isAnimating, autoRotate, currentStep, maxSteps) {
    this.toolbar.update(mode, isAnimating, autoRotate, currentStep, maxSteps);
  }
}