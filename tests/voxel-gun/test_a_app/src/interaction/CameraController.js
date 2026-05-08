export class CameraController {
  constructor(sceneManager) {
    this.scene = sceneManager;
    this.autoRotate = true;
    this.autoRotateSpeed = 0.3;
    this.targetRotationY = 0;
    this.currentRotationY = 0;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.smoothing = 0.08;
  }

  enableAutoRotate(enabled) {
    this.autoRotate = enabled;
  }

  toggleAutoRotate() {
    this.autoRotate = !this.autoRotate;
    return this.autoRotate;
  }

  resetView() {
    this.scene.camera.position.set(14, 10, 18);
    this.scene.camera.lookAt(0, 2, 0);
    this.targetRotationY = 0;
    this.currentRotationY = 0;
    this.scene.gunContainer.rotation.set(0, 0, 0);
    this.autoRotate = true;
  }

  startDrag(x, y) {
    this.isDragging = false;
    this.dragStartX = x;
    this.dragStartY = y;
  }

  updateDrag(dx, dy) {
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      this.isDragging = true;
    }
    if (this.isDragging) {
      this.targetRotationY += dx * 0.005;
      this.autoRotate = false;
    }
  }

  handleZoom(deltaY) {
    const factor = deltaY > 0 ? 1.05 : 0.95;
    this.scene.camera.position.multiplyScalar(factor);
    const dist = this.scene.camera.position.length();
    if (dist < 6) this.scene.camera.position.setLength(6);
    if (dist > 45) this.scene.camera.position.setLength(45);
  }

  handlePinchZoom(distance) {
    const factor = distance > 0 ? 0.97 : 1.03;
    this.scene.camera.position.multiplyScalar(factor);
    const dist = this.scene.camera.position.length();
    if (dist < 6) this.scene.camera.position.setLength(6);
    if (dist > 45) this.scene.camera.setLength(45);
  }

  update(delta) {
    if (this.autoRotate) {
      this.targetRotationY += delta * this.autoRotateSpeed;
    }

    this.currentRotationY += (this.targetRotationY - this.currentRotationY) * this.smoothing;
    this.scene.gunContainer.rotation.y = this.currentRotationY;
  }

  isDraggingNow() {
    return this.isDragging;
  }
}