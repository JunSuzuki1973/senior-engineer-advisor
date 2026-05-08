import * as THREE from 'three';

export class SelectionManager {
  constructor(sceneManager, voxelBuilder) {
    this.scene = sceneManager;
    this.builder = voxelBuilder;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.selectedPart = null;
    this.hoveredPart = null;
    this.onSelect = null;
    this.onDeselect = null;
    this.onHoverStart = null;
    this.onHoverEnd = null;
    this.onDoubleClick = null;

    this._lastClickTime = 0;
    this._lastClickPart = null;
  }

  getPartAtCoords(clientX, clientY) {
    const rect = this.scene.getCanvas().getBoundingClientRect();
    this.mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    return this._castRay();
  }

  _castRay() {
    this.raycaster.setFromCamera(this.mouse, this.scene.camera);
    const meshes = this.builder.getAllMeshesWithPartIds();
    const meshList = meshes.map(m => m.mesh);
    const intersects = this.raycaster.intersectObjects(meshList, false);
    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const found = meshes.find(m => m.mesh === hit);
      return found ? found.partId : null;
    }
    return null;
  }

  handleClick(clientX, clientY) {
    const partId = this.getPartAtCoords(clientX, clientY);
    const now = performance.now();

    if (partId && partId === this._lastClickPart && now - this._lastClickTime < 400) {
      this._lastClickTime = 0;
      this._lastClickPart = null;
      if (this.onDoubleClick) this.onDoubleClick(partId);
      return;
    }

    this._lastClickTime = now;
    this._lastClickPart = partId;

    if (partId) {
      if (this.selectedPart === partId) {
        this.deselect();
      } else {
        this.select(partId);
      }
    } else {
      this.deselect();
    }
  }

  select(partId) {
    if (this.selectedPart && this.selectedPart !== partId) {
      if (this.onDeselect) this.onDeselect(this.selectedPart);
    }
    this.selectedPart = partId;
    if (this.onSelect) this.onSelect(partId);
  }

  deselect() {
    if (this.selectedPart) {
      const prev = this.selectedPart;
      this.selectedPart = null;
      if (this.onDeselect) this.onDeselect(prev);
    }
  }

  updateHover(clientX, clientY) {
    const partId = this.getPartAtCoords(clientX, clientY);

    if (this.hoveredPart && this.hoveredPart !== partId && this.hoveredPart !== this.selectedPart) {
      if (this.onHoverEnd) this.onHoverEnd(this.hoveredPart);
    }

    if (partId && partId !== this.selectedPart) {
      this.hoveredPart = partId;
      if (this.onHoverStart) this.onHoverStart(partId);
    } else if (!partId && this.hoveredPart && this.hoveredPart !== this.selectedPart) {
      if (this.onHoverEnd) this.onHoverEnd(this.hoveredPart);
      this.hoveredPart = null;
    }

    this.scene.getCanvas().style.cursor = partId ? 'pointer' : 'grab';
  }

  getSelectedPart() {
    return this.selectedPart;
  }
}