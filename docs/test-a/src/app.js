import { GunModel } from './model/GunModel.js';
import { StateManager } from './model/StateManager.js';
import { SceneManager } from './renderer/SceneManager.js';
import { VoxelBuilder } from './renderer/VoxelBuilder.js';
import { HighlightSystem } from './renderer/HighlightSystem.js';
import { AnimationEngine } from './animation/AnimationEngine.js';
import { AnimationSequence } from './animation/AnimationSequence.js';
import { SelectionManager } from './interaction/SelectionManager.js';
import { CameraController } from './interaction/CameraController.js';
import { InputHandler } from './interaction/InputHandler.js';
import { UIPresenter } from './ui/UIPresenter.js';
import { easings } from './animation/easings.js';

export class VoxelGunApp {
  constructor() {
    this.scene = new SceneManager();
    this.state = new StateManager(GunModel);
    this.builder = new VoxelBuilder(this.scene);
    this.highlights = new HighlightSystem(this.builder);
    this.animEngine = new AnimationEngine();
    this.animSequence = new AnimationSequence(this.animEngine, this.state);
    this.camera = new CameraController(this.scene);
    this.selection = new SelectionManager(this.scene, this.builder);
    this.ui = new UIPresenter();

    this.currentStep = 0;

    this._wireEvents();
    this.builder.buildAll();
    this.input = new InputHandler(this.scene.getCanvas(), this.camera, this.selection);
    this.scene.onResize();
    this._animate();
    this.ui.toast.show('Click parts to select • Drag to rotate', 'info');
  }

  _wireEvents() {
    this.selection.onSelect = (partId) => this._onSelect(partId);
    this.selection.onDeselect = (partId) => this._onDeselect(partId);
    this.selection.onHoverStart = (partId) => this._onHoverStart(partId);
    this.selection.onHoverEnd = (partId) => this._onHoverEnd(partId);
    this.selection.onDoubleClick = (partId) => this._onDoubleClick(partId);

    this.ui.partList.onPartClick = (partId) => this._onSelect(partId);
    this.ui.stepGuide.onStepClick = (step) => this._goToStep(step);

    this.ui.infoPanel.onToggle = (partId) => this._togglePart(partId);
    this.ui.infoPanel.onFocus = (partId) => this._focusPart(partId);

    this.ui.toolbar.onExplode = () => this._explodeAll();
    this.ui.toolbar.onAssemble = () => this._assembleAll();
    this.ui.toolbar.onToggleExploded = () => this._toggleExploded();
    this.ui.toolbar.onReset = () => this._resetView();
    this.ui.toolbar.onToggleAutoRotate = () => this._toggleAutoRotate();
    this.ui.toolbar.onStepPrev = () => this._stepPrev();
    this.ui.toolbar.onStepNext = () => this._stepNext();
    this.ui.toolbar.onSpeedChange = (speed) => this._setSpeed(speed);

    window.addEventListener('resize', () => this.scene.onResize());
  }

  _onSelect(partId) {
    this.highlights.setSelected(partId, true);
    this.ui.infoPanel.show(partId);
    this._refreshUI();
  }

  _onDeselect(partId) {
    this.highlights.setSelected(partId, false);
    this.ui.infoPanel.hide();
    this._refreshUI();
  }

  _onHoverStart(partId) {
    this.highlights.setHighlight(partId, true, false);
  }

  _onHoverEnd(partId) {
    this.highlights.setHighlight(partId, false, false);
  }

  _onDoubleClick(partId) {
    this._togglePart(partId);
  }

  _togglePart(partId) {
    if (this.state.isAnyAnimating()) return;
    if (this.state.isAssembled(partId)) {
      this._animateSinglePart(partId, true);
    } else if (this.state.isExploded(partId)) {
      this._animateSinglePart(partId, false);
    }
  }

  _focusPart(partId) {
    const group = this.builder.getGroup(partId);
    if (group) {
      this.camera.resetView();
    }
  }

  _animateSinglePart(partId, explode) {
    const vs = GunModel.voxelSize;
    const scale = GunModel.explodeScale;
    const group = this.builder.getGroup(partId);
    const from = {
      x: group.position.x,
      y: group.position.y,
      z: group.position.z
    };

    const targetOffset = explode
      ? GunModel.parts[partId].explodeOffset
      : { x: 0, y: 0, z: 0 };
    const to = explode
      ? { x: targetOffset.x * vs * scale, y: targetOffset.y * vs * scale, z: targetOffset.z * vs * scale }
      : { x: 0, y: 0, z: 0 };

    const finalStatus = explode ? 'exploded' : 'assembled';
    this.state.markAnimating(partId, finalStatus);

    const duration = 650;
    const easingFn = explode ? easings.easeOutBack : easings.easeOutElastic;

    this.animEngine.animate(partId, from, to, duration, easingFn, () => {
      if (finalStatus === 'exploded') {
        this.state.markExploded(partId);
      } else {
        this.state.markAssembled(partId);
      }
      this.state.updateMode();
      this._refreshUI();
    });

    this._refreshUI();
  }

  _explodeAll() {
    if (this.state.isAnyAnimating()) return;

    this.animSequence.onComplete(() => {
      this.state.updateMode();
      this._refreshUI();
      this.ui.toast.show('Disassembly complete', 'success');
    });

    this.animSequence.explodeAll(GunModel);
    this._refreshUI();
  }

  _assembleAll() {
    if (this.state.isAnyAnimating()) return;

    this.animSequence.onComplete(() => {
      this.state.updateMode();
      this.currentStep = 0;
      this._refreshUI();
      this.ui.toast.show('Assembly complete', 'success');
    });

    this.animSequence.assembleAll(GunModel);
    this._refreshUI();
  }

  _toggleExploded() {
    if (this.state.mode === 'exploded') {
      this._assembleAll();
    } else {
      this._explodeAll();
    }
  }

  _goToStep(targetStep) {
    if (this.state.isAnyAnimating()) return;

    this.animSequence.onComplete(() => {
      this.currentStep = targetStep + 1;
      this.state.updateMode();
      this._refreshUI();
    });

    this.animSequence.goToStep(GunModel, targetStep);
    this._refreshUI();
  }

  _stepPrev() {
    if (this.currentStep > 0) {
      this._goToStep(this.currentStep - 1);
    }
  }

  _stepNext() {
    if (this.currentStep < GunModel.disassemblyOrder.length - 1) {
      this._goToStep(this.currentStep + 1);
    } else if (this.currentStep === GunModel.disassemblyOrder.length - 1) {
      this._goToStep(this.currentStep);
    }
  }

  _resetView() {
    this.camera.resetView();
    this._refreshUI();
    this.ui.toast.show('View reset', 'info');
  }

  _toggleAutoRotate() {
    const enabled = this.camera.toggleAutoRotate();
    this._refreshUI();
    this.ui.toast.show(enabled ? 'Auto-rotation enabled' : 'Auto-rotation disabled', 'info');
  }

  _setSpeed(speed) {
    this.animEngine.setSpeed(speed);
  }

  _refreshUI() {
    this.ui.update(this.state, this.selection.getSelectedPart(), this.currentStep);
    this.ui.updateToolbar(
      this.state.mode,
      this.state.isAnyAnimating(),
      this.camera.autoRotate,
      this.currentStep,
      GunModel.disassemblyOrder.length - 1
    );
  }

  _animate() {
    requestAnimationFrame(() => this._animate());

    const delta = this.scene.clock.getDelta();
    const now = performance.now();
    const elapsed = this.scene.clock.elapsedTime;

    this.camera.update(delta);

    this.animEngine.tick(now, (partId, from, to, eased) => {
      const group = this.builder.getGroup(partId);
      if (group) {
        group.position.x = from.x + (to.x - from.x) * eased;
        group.position.y = from.y + (to.y - from.y) * eased;
        group.position.z = from.z + (to.z - from.z) * eased;
      }
    });

    for (const [partId, group] of Object.entries(this.builder.getAllGroups())) {
      const animState = this.state.partStates[partId];
      if (animState.status === 'animating') {
        const pulse = Math.sin(elapsed * 8) * 0.015 + 1;
        group.scale.set(pulse, pulse, pulse);
      } else {
        const breathe = 1 + Math.sin(elapsed * 1.2 + group.position.x * 0.3) * 0.003;
        group.scale.set(breathe, breathe, breathe);
      }
    }

    if (this.selection.getSelectedPart()) {
      this.highlights.pulseSelected(this.selection.getSelectedPart(), elapsed);
    }

    this.scene.render();
    this._refreshUI();
  }
}