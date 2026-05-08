import * as THREE from 'three';
import { GunModel } from '../model/GunModel.js';

export class VoxelBuilder {
  constructor(sceneManager) {
    this.scene = sceneManager;
    this.partGroups = {};
    this.voxelSize = GunModel.voxelSize;
    this.explodeScale = GunModel.explodeScale;
  }

  buildAll() {
    for (const [partId, partData] of Object.entries(GunModel.parts)) {
      const group = this._buildPart(partId, partData);
      this.partGroups[partId] = group;
      this.scene.gunContainer.add(group);
    }

    this._centerGun();
  }

  _buildPart(partId, partData) {
    const group = new THREE.Group();
    group.userData.partId = partId;

    const colorMap = {};
    for (const v of partData.voxels) {
      if (!colorMap[v.color]) colorMap[v.color] = [];
      colorMap[v.color].push(v);
    }

    const vs = this.voxelSize;
    const voxelGeo = new THREE.BoxGeometry(vs * 0.94, vs * 0.94, vs * 0.94);

    for (const [color, positions] of Object.entries(colorMap)) {
      const threeColor = new THREE.Color(color);
      const luminance = (threeColor.r + threeColor.g + threeColor.b) / 3;
      const isAccent = luminance > 0.5;
      const roughness = isAccent ? 0.25 : 0.65;
      const metalness = isAccent ? 0.7 : 0.35;

      const mat = new THREE.MeshStandardMaterial({
        color: threeColor,
        roughness,
        metalness,
        flatShading: true
      });

      const instancedMesh = new THREE.InstancedMesh(voxelGeo, mat, positions.length);
      instancedMesh.castShadow = true;
      instancedMesh.receiveShadow = true;
      instancedMesh.userData.partId = partId;

      const dummy = new THREE.Object3D();
      positions.forEach((v, i) => {
        dummy.position.set(v.x * vs, v.y * vs, v.z * vs);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
      });
      instancedMesh.instanceMatrix.needsUpdate = true;
      group.add(instancedMesh);
    }

    const highlightGroup = this._buildHighlight(partData.voxels, vs);
    group.add(highlightGroup);
    group.userData.highlightGroup = highlightGroup;

    return group;
  }

  _buildHighlight(voxels, vs) {
    const highlightGeo = new THREE.BoxGeometry(vs * 0.98, vs * 0.98, vs * 0.98);
    const highlightGroup = new THREE.Group();
    highlightGroup.visible = false;
    highlightGroup.userData.isHighlight = true;

    const defaultMat = new THREE.MeshBasicMaterial({
      color: 0x00ccdd,
      transparent: true,
      opacity: 0.15,
      depthWrite: false
    });

    for (const v of voxels) {
      const hMesh = new THREE.Mesh(highlightGeo, defaultMat.clone());
      hMesh.position.set(v.x * vs, v.y * vs, v.z * vs);
      highlightGroup.add(hMesh);
    }

    return highlightGroup;
  }

  _centerGun() {
    const box = new THREE.Box3();
    for (const group of Object.values(this.partGroups)) {
      group.traverse(child => {
        if (child.isInstancedMesh) {
          child.computeBoundingBox();
          box.union(child.boundingBox);
        }
      });
    }

    if (!box.isEmpty()) {
      const center = new THREE.Vector3();
      box.getCenter(center);
      this.scene.gunContainer.position.sub(center);
      this.scene.gunContainer.position.y += 2;
    }
  }

  getGroup(partId) {
    return this.partGroups[partId];
  }

  getAllGroups() {
    return this.partGroups;
  }

  getAllMeshesWithPartIds() {
    const result = [];
    for (const [partId, group] of Object.entries(this.partGroups)) {
      group.traverse(child => {
        if (child.isInstancedMesh) {
          result.push({ mesh: child, partId });
        }
      });
    }
    return result;
  }
}