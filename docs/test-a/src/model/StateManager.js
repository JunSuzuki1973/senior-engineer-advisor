export class StateManager {
  constructor(gunModel) {
    this.model = gunModel;
    this.partStates = {};
    this.mode = 'assembled';
    this.currentStep = 0;

    for (const partId of Object.keys(gunModel.parts)) {
      this.partStates[partId] = {
        status: 'assembled',
        currentOffset: { x: 0, y: 0, z: 0 }
      };
    }
  }

  isAssembled(partId) {
    return this.partStates[partId].status === 'assembled';
  }

  isExploded(partId) {
    return this.partStates[partId].status === 'exploded';
  }

  isAnimating(partId) {
    return this.partStates[partId].status === 'animating';
  }

  isAnyAnimating() {
    return Object.values(this.partStates).some(s => s.status === 'animating');
  }

  getExplodedCount() {
    return Object.values(this.partStates).filter(s => s.status === 'exploded').length;
  }

  getTotalParts() {
    return Object.keys(this.partStates).length;
  }

  getProgress() {
    const total = this.getTotalParts() - 1;
    if (total === 0) return 0;
    return (this.getExplodedCount() / total) * 100;
  }

  markAnimating(partId, targetStatus) {
    this.partStates[partId].status = 'animating';
    this.partStates[partId]._targetStatus = targetStatus;
  }

  markExploded(partId) {
    const offset = this.model.parts[partId].explodeOffset;
    this.partStates[partId] = {
      status: 'exploded',
      currentOffset: { ...offset }
    };
  }

  markAssembled(partId) {
    this.partStates[partId] = {
      status: 'assembled',
      currentOffset: { x: 0, y: 0, z: 0 }
    };
  }

  updateOffset(partId, offset) {
    this.partStates[partId].currentOffset = { ...offset };
  }

  updateMode() {
    const allExploded = Object.values(this.partStates).every(s => s.status === 'exploded');
    const allAssembled = Object.values(this.partStates).every(s => s.status === 'assembled');
    if (allExploded) this.mode = 'exploded';
    else if (allAssembled) this.mode = 'assembled';
  }
}