export class Toolbar {
  constructor() {
    this.explodeBtn = document.getElementById('btn-explode');
    this.assembleBtn = document.getElementById('btn-assemble');
    this.explodedViewBtn = document.getElementById('btn-exploded-view');
    this.resetBtn = document.getElementById('btn-reset');
    this.autoRotateBtn = document.getElementById('btn-auto-rotate');
    this.stepPrevBtn = document.getElementById('btn-step-prev');
    this.stepNextBtn = document.getElementById('btn-step-next');
    this.speedSlider = document.getElementById('speed-slider');
    this.speedValue = document.getElementById('speed-value');

    this.onExplode = null;
    this.onAssemble = null;
    this.onToggleExploded = null;
    this.onReset = null;
    this.onToggleAutoRotate = null;
    this.onStepPrev = null;
    this.onStepNext = null;
    this.onSpeedChange = null;

    this._bindEvents();
  }

  _bindEvents() {
    if (this.explodeBtn) this.explodeBtn.addEventListener('click', () => { if (this.onExplode) this.onExplode(); });
    if (this.assembleBtn) this.assembleBtn.addEventListener('click', () => { if (this.onAssemble) this.onAssemble(); });
    if (this.explodedViewBtn) this.explodedViewBtn.addEventListener('click', () => { if (this.onToggleExploded) this.onToggleExploded(); });
    if (this.resetBtn) this.resetBtn.addEventListener('click', () => { if (this.onReset) this.onReset(); });
    if (this.autoRotateBtn) this.autoRotateBtn.addEventListener('click', () => { if (this.onToggleAutoRotate) this.onToggleAutoRotate(); });
    if (this.stepPrevBtn) this.stepPrevBtn.addEventListener('click', () => { if (this.onStepPrev) this.onStepPrev(); });
    if (this.stepNextBtn) this.stepNextBtn.addEventListener('click', () => { if (this.onStepNext) this.onStepNext(); });

    if (this.speedSlider) {
      this.speedSlider.addEventListener('input', (e) => {
        const speed = parseFloat(e.target.value);
        if (this.speedValue) this.speedValue.textContent = speed.toFixed(1) + 'x';
        if (this.onSpeedChange) this.onSpeedChange(speed);
      });
    }

    document.querySelectorAll('.panel-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        const tabName = e.target.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
        const tabEl = document.getElementById('tab-' + tabName);
        if (tabEl) tabEl.classList.remove('hidden');
      });
    });

    const mobileToggle = document.getElementById('mobile-toggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        document.getElementById('side-panel').classList.toggle('open');
      });
    }
  }

  update(mode, isAnimating, autoRotate, currentStep, maxSteps) {
    if (this.explodeBtn) this.explodeBtn.disabled = isAnimating || mode === 'exploded';
    if (this.assembleBtn) this.assembleBtn.disabled = isAnimating || mode === 'assembled';

    if (this.explodedViewBtn) {
      if (mode === 'exploded') {
        this.explodedViewBtn.textContent = '⟵ Assemble';
        this.explodedViewBtn.classList.add('primary');
      } else {
        this.explodedViewBtn.textContent = '⟶ Explode';
        this.explodedViewBtn.classList.remove('primary');
      }
    }

    if (this.autoRotateBtn) {
      this.autoRotateBtn.textContent = autoRotate ? '↻ Auto ON' : '↻ Auto OFF';
      this.autoRotateBtn.classList.toggle('active', autoRotate);
    }

    if (this.stepPrevBtn) this.stepPrevBtn.disabled = isAnimating || currentStep <= 0;
    if (this.stepNextBtn) this.stepNextBtn.disabled = isAnimating || currentStep >= maxSteps;
  }
}