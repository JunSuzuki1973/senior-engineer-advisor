export class InputHandler {
  constructor(canvas, camera, selection) {
    this.canvas = canvas;
    this.camera = camera;
    this.selection = selection;

    this._bindEvents();
  }

  _bindEvents() {
    this.canvas.addEventListener('mousedown', (e) => {
      this.camera.startDrag(e.clientX, e.clientY);
    });

    this.canvas.addEventListener('mousemove', (e) => {
      if (this.camera.isDraggingNow()) {
        this.camera.updateDrag(e.movementX || 0, e.movementY || 0);
      }
      this.selection.updateHover(e.clientX, e.clientY);
    });

    this.canvas.addEventListener('mouseup', (e) => {
      if (!this.camera.isDraggingNow()) {
        this.selection.handleClick(e.clientX, e.clientY);
      }
    });

    this.canvas.addEventListener('click', (e) => {
      if (!this.camera.isDraggingNow()) {
        this.selection.handleClick(e.clientX, e.clientY);
      }
    });

    this.canvas.addEventListener('wheel', (e) => {
      this.camera.handleZoom(e.deltaY);
      e.preventDefault();
    }, { passive: false });

    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.camera.startDrag(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    this.canvas.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        const dx = e.touches[0].clientX - this.camera.dragStartX;
        const dy = e.touches[0].clientY - this.camera.dragStartY;
        this.camera.updateDrag(dx, dy);
      } else if (e.touches.length === 2) {
        this.camera.updateDrag(0, 0);
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        this._lastPinchDist = this._lastPinchDist || dist;
        const delta = dist - this._lastPinchDist;
        this._lastPinchDist = dist;
        if (Math.abs(delta) > 1) {
          this.camera.handleZoom(-delta * 2);
        }
      }
    }, { passive: true });

    this.canvas.addEventListener('touchend', (e) => {
      if (e.touches.length === 0 && e.changedTouches.length === 1) {
        if (!this.camera.isDraggingNow()) {
          const touch = e.changedTouches[0];
          this.selection.handleClick(touch.clientX, touch.clientY);
        }
      }
      this._lastPinchDist = null;
    });
  }
}