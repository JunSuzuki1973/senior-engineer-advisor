import { easings } from './easings.js';

export class AnimationSequence {
  constructor(engine, stateManager) {
    this.engine = engine;
    this.state = stateManager;
    this.queue = [];
    this.running = false;
    this.onCompleteCallback = null;
  }

  explodeAll(gunModel, delayMs = 120) {
    if (this.running) return;
    this.running = true;

    const order = gunModel.disassemblyOrder;
    const steps = order
      .filter(partId => this.state.isAssembled(partId))
      .map((partId, idx) => ({
        partId,
        explode: true,
        delay: idx * delayMs,
        targetOffset: gunModel.parts[partId].explodeOffset,
        finalStatus: 'exploded'
      }));

    this._executeSequence(steps);
  }

  assembleAll(gunModel, delayMs = 120) {
    if (this.running) return;
    this.running = true;

    const order = gunModel.assemblyOrder;
    const steps = order
      .filter(partId => this.state.isExploded(partId))
      .map((partId, idx) => ({
        partId,
        explode: false,
        delay: idx * delayMs,
        targetOffset: { x: 0, y: 0, z: 0 },
        finalStatus: 'assembled'
      }));

    this._executeSequence(steps);
  }

  goToStep(gunModel, targetStep) {
    if (this.running) return;
    this.running = true;

    const order = gunModel.disassemblyOrder;
    const steps = [];

    for (let i = 0; i <= targetStep; i++) {
      const partId = order[i];
      if (this.state.isAssembled(partId)) {
        steps.push({
          partId,
          explode: true,
          delay: steps.length * 120,
          targetOffset: gunModel.parts[partId].explodeOffset,
          finalStatus: 'exploded'
        });
      }
    }

    for (let i = order.length - 1; i > targetStep; i--) {
      const partId = order[i];
      if (this.state.isExploded(partId)) {
        steps.push({
          partId,
          explode: false,
          delay: steps.length * 120,
          targetOffset: { x: 0, y: 0, z: 0 },
          finalStatus: 'assembled'
        });
      }
    }

    this._executeSequence(steps);
  }

  _executeSequence(steps) {
    if (steps.length === 0) {
      this.running = false;
      if (this.onCompleteCallback) this.onCompleteCallback();
      return;
    }

    const baseDuration = 650;
    let completed = 0;
    const total = steps.length;

    for (const step of steps) {
      setTimeout(() => {
        this.state.markAnimating(step.partId, step.finalStatus);

        const group = this._getGroup(step.partId);
        const from = {
          x: group.position.x,
          y: group.position.y,
          z: group.position.z
        };

        const vs = this._getVoxelSize();
        const scale = this._getExplodeScale();

        const to = step.explode
          ? {
              x: step.targetOffset.x * vs * scale,
              y: step.targetOffset.y * vs * scale,
              z: step.targetOffset.z * vs * scale
            }
          : { x: 0, y: 0, z: 0 };

        const duration = baseDuration * (1 + this._getPartWeight(step.partId) / 200);
        const easingFn = step.explode ? easings.easeOutBack : easings.easeOutElastic;

        this.engine.animate(
          step.partId,
          from,
          to,
          duration,
          easingFn,
          () => {
            if (step.finalStatus === 'exploded') {
              this.state.markExploded(step.partId);
            } else {
              this.state.markAssembled(step.partId);
            }
            this.state.updateMode();
            completed++;
            if (completed >= total) {
              this.running = false;
              if (this.onCompleteCallback) this.onCompleteCallback();
            }
          }
        );
      }, step.delay);
    }
  }

  cancel() {
    this.running = false;
    this.queue = [];
    this.engine.cancelAll();
  }

  onComplete(callback) {
    this.onCompleteCallback = callback;
    return this;
  }
}