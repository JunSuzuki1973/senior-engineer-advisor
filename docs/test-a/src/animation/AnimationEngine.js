import { easings } from './easings.js';

export class AnimationEngine {
  constructor() {
    this.active = new Map();
    this.speedMultiplier = 1.0;
  }

  animate(partId, from, to, duration, easingFn, onComplete) {
    this.cancel(partId);

    const handle = {
      partId,
      from: { ...from },
      to: { ...to },
      startTime: performance.now(),
      duration: duration / this.speedMultiplier,
      easing: easingFn,
      onComplete,
      cancelled: false
    };

    this.active.set(partId, handle);
    return handle;
  }

  cancel(partId) {
    const handle = this.active.get(partId);
    if (handle) {
      handle.cancelled = true;
      this.active.delete(partId);
    }
  }

  cancelAll() {
    for (const handle of this.active.values()) {
      handle.cancelled = true;
    }
    this.active.clear();
  }

  tick(now, applyFn) {
    const completed = [];

    for (const [partId, handle] of this.active) {
      if (handle.cancelled) {
        this.active.delete(partId);
        continue;
      }

      const elapsed = now - handle.startTime;
      const t = Math.min(elapsed / handle.duration, 1);
      const eased = handle.easing(t);

      applyFn(partId, handle.from, handle.to, eased);

      if (t >= 1) {
        completed.push(handle);
      }
    }

    for (const handle of completed) {
      this.active.delete(handle.partId);
      if (handle.onComplete) handle.onComplete();
    }

    return completed.length > 0;
  }

  setSpeed(speed) {
    this.speedMultiplier = speed;
  }

  isActive(partId) {
    return this.active.has(partId);
  }
}