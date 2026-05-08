class VoxelGunApp {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.raycaster = null;
    this.mouse = new THREE.Vector2();
    this.clock = new THREE.Clock();
    this.partGroups = {};
    this.partStates = {};
    this.selectedPart = null;
    this.hoveredPart = null;
    this.mode = 'assembled';
    this.animationSpeed = 1.0;
    this.animations = [];
    this.isAnimating = false;
    this.currentStep = 0;
    this.gunContainer = null;
    this.centerOffset = new THREE.Vector3();
    this.autoRotate = true;
    this.autoRotateSpeed = 0.3;
    this.targetRotationY = 0;
    this.currentRotationY = 0;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;

    this.init();
  }

  init() {
    this.setupScene();
    this.setupLighting();
    this.setupGround();
    this.buildGun();
    this.setupUI();
    this.setupInteraction();
    this.onResize();
    this.animate();
    this.showToast('Click parts to select • Drag to rotate', 'info');
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a0f);
    this.scene.fog = new THREE.FogExp2(0x0a0a0f, 0.008);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    this.camera.position.set(14, 10, 18);
    this.camera.lookAt(0, 2, 0);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    const container = document.getElementById('viewport-container');
    container.insertBefore(this.renderer.domElement, container.firstChild);

    this.raycaster = new THREE.Raycaster();

    this.gunContainer = new THREE.Group();
    this.scene.add(this.gunContainer);

    window.addEventListener('resize', () => this.onResize());
  }

  setupLighting() {
    const ambient = new THREE.AmbientLight(0x404060, 1.2);
    this.scene.add(ambient);

    const mainLight = new THREE.DirectionalLight(0xeef0ff, 2.5);
    mainLight.position.set(10, 15, 8);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 50;
    mainLight.shadow.camera.left = -15;
    mainLight.shadow.camera.right = 15;
    mainLight.shadow.camera.top = 15;
    mainLight.shadow.camera.bottom = -15;
    this.scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x4466ff, 0.6);
    fillLight.position.set(-8, 5, -10);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x00ccdd, 0.5);
    rimLight.position.set(0, 2, -12);
    this.scene.add(rimLight);

    const spotLight = new THREE.SpotLight(0x4466ff, 0.5, 30, Math.PI / 6, 0.5);
    spotLight.position.set(0, 12, 0);
    spotLight.target.position.set(3, 2, 0);
    this.scene.add(spotLight);
    this.scene.add(spotLight.target);
  }

  setupGround() {
    const gridSize = 40;
    const grid = new THREE.GridHelper(gridSize, gridSize, 0x1a1a44, 0x111128);
    grid.position.y = -5.99;
    grid.material.opacity = 0.35;
    grid.material.transparent = true;
    this.scene.add(grid);

    const planeGeo = new THREE.PlaneGeometry(gridSize, gridSize);
    const planeMat = new THREE.MeshStandardMaterial({
      color: 0x0d0d18,
      roughness: 0.95,
      metalness: 0.05
    });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -6;
    plane.receiveShadow = true;
    this.scene.add(plane);

    const glowGeo = new THREE.PlaneGeometry(14, 14);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x00ccdd,
      transparent: true,
      opacity: 0.025,
      side: THREE.DoubleSide
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = -5.98;
    this.scene.add(glow);
  }

  buildGun() {
    const parts = GunModel.parts;
    const vs = GunModel.voxelSize;

    for (const [partId, partData] of Object.entries(parts)) {
      const group = new THREE.Group();
      group.userData.partId = partId;

      const colorMap = {};
      for (const v of partData.voxels) {
        if (!colorMap[v.color]) colorMap[v.color] = [];
        colorMap[v.color].push(v);
      }

      const voxelGeo = new THREE.BoxGeometry(vs * 0.94, vs * 0.94, vs * 0.94);

      for (const [color, positions] of Object.entries(colorMap)) {
        const threeColor = new THREE.Color(color);
        const luminance = (threeColor.r + threeColor.g + threeColor.b) / 3;
        const isAccent = luminance > 0.5;
        const roughness = isAccent ? 0.25 : 0.65;
        const metalness = isAccent ? 0.7 : 0.35;

        const mat = new THREE.MeshStandardMaterial({
          color: threeColor,
          roughness: roughness,
          metalness: metalness,
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

      const highlightGeo = new THREE.BoxGeometry(vs * 0.98, vs * 0.98, vs * 0.98);
      const highlightMats = [];
      const highlightGroup = new THREE.Group();
      highlightGroup.visible = false;
      highlightGroup.userData.isHighlight = true;

      for (const v of partData.voxels) {
        const hMat = new THREE.MeshBasicMaterial({
          color: 0x00ccdd,
          transparent: true,
          opacity: 0.15,
          depthWrite: false
        });
        highlightMats.push(hMat);
        const hMesh = new THREE.Mesh(highlightGeo, hMat);
        hMesh.position.set(v.x * vs, v.y * vs, v.z * vs);
        highlightGroup.add(hMesh);
      }
      group.add(highlightGroup);
      group.userData.highlightGroup = highlightGroup;
      group.userData.highlightMats = highlightMats;

      this.gunContainer.add(group);
      this.partGroups[partId] = group;

      this.partStates[partId] = {
        status: 'assembled',
        currentOffset: { x: 0, y: 0, z: 0 },
        targetOffset: { x: 0, y: 0, z: 0 },
        originalPositions: group.children
          .filter(c => c.isInstancedMesh)
          .map(m => {
            const pos = new THREE.Vector3();
            m.getWorldPosition(pos);
            return pos.clone();
          })
      };
    }

    this.centerGun();
  }

  centerGun() {
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
      this.gunContainer.position.sub(center);
      this.gunContainer.position.y += 2;
    }
  }

  setupUI() {
    document.getElementById('btn-explode').addEventListener('click', () => this.explodeAll());
    document.getElementById('btn-assemble').addEventListener('click', () => this.assembleAll());
    document.getElementById('btn-exploded-view').addEventListener('click', () => this.toggleExplodedView());
    document.getElementById('btn-reset').addEventListener('click', () => this.resetView());
    document.getElementById('btn-auto-rotate').addEventListener('click', () => this.toggleAutoRotate());

    const speedSlider = document.getElementById('speed-slider');
    if (speedSlider) {
      speedSlider.addEventListener('input', (e) => {
        this.animationSpeed = parseFloat(e.target.value);
        document.getElementById('speed-value').textContent = this.animationSpeed.toFixed(1) + 'x';
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

    document.getElementById('mobile-toggle').addEventListener('click', () => {
      document.getElementById('side-panel').classList.toggle('open');
    });

    this.buildPartList();
    this.buildStepGuide();
    this.updateViewButtons();
  }

  buildPartList() {
    const list = document.getElementById('parts-list');
    if (!list) return;
    list.innerHTML = '';

    const sorted = Object.entries(GunModel.parts).sort((a, b) => a[1].order - b[1].order);

    for (const [partId, partData] of sorted) {
      const card = document.createElement('div');
      card.className = 'part-card';
      card.dataset.partId = partId;
      card.innerHTML =
        '<div class="part-number">' + partData.order + '</div>' +
        '<div class="part-info">' +
          '<div class="part-name">' + partData.label + '</div>' +
          '<div class="part-desc">' + partData.description.split('—')[0].trim() + '</div>' +
        '</div>' +
        '<div class="part-status assembled">Ready</div>';

      card.addEventListener('click', () => {
        this.selectPart(partId);
      });
      list.appendChild(card);
    }
  }

  buildStepGuide() {
    const list = document.getElementById('steps-list');
    if (!list) return;
    list.innerHTML = '';

    GunModel.disassemblyOrder.forEach((partId, idx) => {
      const partData = GunModel.parts[partId];
      const card = document.createElement('div');
      card.className = 'step-card';
      card.dataset.step = idx;
      card.dataset.partId = partId;
      card.innerHTML =
        '<div class="step-header">' +
          '<span class="step-number">Step ' + (idx + 1) + '</span>' +
          '<span class="step-action">Remove ' + partData.label + '</span>' +
        '</div>' +
        '<div class="step-detail">' + partData.description.split('—')[0].trim() + '</div>';

      card.addEventListener('click', () => this.goToStep(idx));
      list.appendChild(card);
    });
  }

  goToStep(targetStep) {
    if (this.isAnimating) return;

    const order = GunModel.disassemblyOrder;
    this.isAnimating = true;

    const chain = [];
    for (let i = 0; i <= targetStep; i++) {
      if (this.partStates[order[i]].status !== 'exploded') {
        chain.push({ partId: order[i], explode: true });
      }
    }
    for (let i = order.length - 1; i > targetStep; i--) {
      if (this.partStates[order[i]].status !== 'assembled') {
        chain.push({ partId: order[i], explode: false });
      }
    }

    this.executeAnimationChain(chain).then(() => {
      this.currentStep = targetStep + 1;
      this.isAnimating = false;
      this.updatePartCards();
      this.updateProgress();
      this.updateViewButtons();
    });
  }

  executeAnimationChain(chain) {
    let promise = Promise.resolve();
    chain.forEach((item, index) => {
      promise = promise.then(() => {
        return new Promise(resolve => {
          setTimeout(() => {
            if (item.explode) {
              this.animatePartTo(item.partId, GunModel.parts[item.partId].explodeOffset, 'exploded', resolve);
            } else {
              this.animatePartTo(item.partId, { x: 0, y: 0, z: 0 }, 'assembled', resolve);
            }
          }, index * 60);
        });
      });
    });
    return promise;
  }

  setupInteraction() {
    const canvas = this.renderer.domElement;

    canvas.addEventListener('mousedown', (e) => {
      this.isDragging = false;
      this.dragStartX = e.clientX;
      this.dragStartY = e.clientY;
    });

    canvas.addEventListener('mousemove', (e) => {
      const dx = e.clientX - this.dragStartX;
      const dy = e.clientY - this.dragStartY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        this.isDragging = true;
      }
      this.onMouseMove(e);
    });

    canvas.addEventListener('click', (e) => {
      if (this.isDragging) return;
      this.onClick(e);
    });

    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.dragStartX = e.touches[0].clientX;
        this.dragStartY = e.touches[0].clientY;
        this.isDragging = false;
      }
    }, { passive: true });

    canvas.addEventListener('touchmove', (e) => {
      const dx = e.touches[0].clientX - this.dragStartX;
      const dy = e.touches[0].clientY - this.dragStartY;
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        this.isDragging = true;
      }
    }, { passive: true });

    canvas.addEventListener('touchend', (e) => {
      if (!this.isDragging && e.changedTouches.length === 1) {
        const touch = e.changedTouches[0];
        this.onClickFromCoords(touch.clientX, touch.clientY);
      }
    });

    canvas.addEventListener('wheel', (e) => {
      const factor = e.deltaY > 0 ? 1.05 : 0.95;
      this.camera.position.multiplyScalar(factor);
      const dist = this.camera.position.length();
      if (dist < 6) this.camera.position.setLength(6);
      if (dist > 45) this.camera.position.setLength(45);
      e.preventDefault();
    }, { passive: false });
  }

  onMouseMove(e) {
    if (this.isDragging) {
      const dx = e.movementX || 0;
      const dy = e.movementY || 0;
      this.targetRotationY += dx * 0.005;
      this.autoRotate = false;
      this.updateViewButtons();
    }

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    this.updateHover();
  }

  onClick(e) {
    this.onClickFromCoords(e.clientX, e.clientY);
  }

  onClickFromCoords(clientX, clientY) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

    const clickedPart = this.getPartUnderMouse();
    if (clickedPart) {
      this.selectPart(clickedPart);
    } else {
      this.deselectPart();
    }
  }

  getPartUnderMouse() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const allMeshes = [];
    for (const [partId, group] of Object.entries(this.partGroups)) {
      group.traverse(child => {
        if (child.isInstancedMesh) {
          allMeshes.push({ mesh: child, partId });
        }
      });
    }
    const meshList = allMeshes.map(m => m.mesh);
    const intersects = this.raycaster.intersectObjects(meshList, false);
    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const found = allMeshes.find(m => m.mesh === hit);
      return found ? found.partId : null;
    }
    return null;
  }

  updateHover() {
    const partId = this.getPartUnderMouse();

    if (this.hoveredPart && this.hoveredPart !== partId && this.hoveredPart !== this.selectedPart) {
      this.setPartHighlight(this.hoveredPart, false);
    }

    if (partId && partId !== this.selectedPart) {
      this.setPartHighlight(partId, true);
    } else if (!partId && this.hoveredPart && this.hoveredPart !== this.selectedPart) {
      this.setPartHighlight(this.hoveredPart, false);
    }

    this.hoveredPart = partId;
    this.renderer.domElement.style.cursor = partId ? 'pointer' : 'grab';
  }

  setPartHighlight(partId, highlighted) {
    const group = this.partGroups[partId];
    if (!group) return;
    const hg = group.userData.highlightGroup;
    if (hg) {
      hg.visible = highlighted;
      if (highlighted) {
        hg.children.forEach(c => {
          if (c.material) c.material.color.setHex(0x4466ff);
        });
      }
    }
  }

  selectPart(partId) {
    if (this.selectedPart === partId) {
      this.deselectPart();
      return;
    }
    if (this.selectedPart) {
      this.setPartSelectedEffect(this.selectedPart, false);
    }
    this.selectedPart = partId;
    this.setPartSelectedEffect(partId, true);
    this.updateInfoPanel(partId);
    this.updatePartCards();
  }

  deselectPart() {
    if (this.selectedPart) {
      this.setPartSelectedEffect(this.selectedPart, false);
    }
    this.selectedPart = null;
    document.getElementById('info-panel').classList.remove('visible');
    this.updatePartCards();
  }

  setPartSelectedEffect(partId, selected) {
    const group = this.partGroups[partId];
    if (!group) return;

    const hg = group.userData.highlightGroup;
    if (hg) {
      hg.visible = selected;
      hg.children.forEach(c => {
        if (c.material) {
          c.material.opacity = selected ? 0.2 : 0.15;
          c.material.color.setHex(selected ? 0x00ccdd : 0x4466ff);
        }
      });
    }

    if (selected) {
      group.traverse(child => {
        if (child.isInstancedMesh && child.material) {
          child.material.emissive = child.material.emissive || new THREE.Color(0);
          child.material.emissiveIntensity = 0.15;
          child.material.emissive.set(0x2244aa);
        }
      });
    } else {
      group.traverse(child => {
        if (child.isInstancedMesh && child.material) {
          child.material.emissiveIntensity = 0;
          child.material.emissive = new THREE.Color(0);
        }
      });
    }
  }

  updateInfoPanel(partId) {
    const partData = GunModel.parts[partId];
    const panel = document.getElementById('info-panel');
    panel.querySelector('.info-title').textContent = partData.label;
    panel.querySelector('.info-description').textContent = partData.description;
    panel.querySelector('.info-meta').textContent =
      'Part #' + partData.order + ' | Voxels: ' + partData.voxels.length;
    panel.classList.add('visible');
  }

  explodeAll() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.mode = 'exploded';
    this.updateViewButtons();

    const order = GunModel.disassemblyOrder;
    let completed = 0;

    order.forEach((partId, idx) => {
      const state = this.partStates[partId];
      if (state.status === 'exploded') {
        completed++;
        if (completed === order.length) {
          this.isAnimating = false;
          this.showToast('Already disassembled', 'info');
        }
        return;
      }

      setTimeout(() => {
        const offset = GunModel.parts[partId].explodeOffset;
        this.animatePartTo(partId, offset, 'exploded', () => {
          state.status = 'exploded';
          state.currentOffset = { ...offset };
          completed++;
          this.updatePartCards();
          this.updateProgress();
          if (completed === order.length) {
            this.isAnimating = false;
            this.mode = 'exploded';
            this.updateViewButtons();
            this.showToast('Disassembly complete', 'success');
          }
        });
      }, idx * 100);
    });
  }

  assembleAll() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentStep = 0;
    this.updateViewButtons();

    const order = GunModel.assemblyOrder;
    let completed = 0;
    const total = order.filter(id => this.partStates[id].status === 'exploded').length;

    if (total === 0) {
      this.isAnimating = false;
      this.showToast('Already assembled', 'info');
      return;
    }

    order.forEach((partId, idx) => {
      const state = this.partStates[partId];
      if (state.status === 'assembled') {
        return;
      }

      setTimeout(() => {
        this.animatePartTo(partId, { x: 0, y: 0, z: 0 }, 'assembled', () => {
          state.status = 'assembled';
          state.currentOffset = { x: 0, y: 0, z: 0 };
          completed++;
          this.updatePartCards();
          this.updateProgress();
          if (completed >= total) {
            this.isAnimating = false;
            this.mode = 'assembled';
            this.currentStep = 0;
            this.updateViewButtons();
            this.showToast('Assembly complete', 'success');
          }
        });
      }, idx * 100);
    });
  }

  toggleExplodedView() {
    if (this.mode === 'exploded') {
      this.assembleAll();
    } else {
      this.explodeAll();
    }
  }

  animatePartTo(partId, targetOffset, finalStatus, onComplete) {
    const vs = GunModel.voxelSize;
    const scale = 3;
    const targetX = targetOffset.x * vs * scale;
    const targetY = targetOffset.y * vs * scale;
    const targetZ = targetOffset.z * vs * scale;

    const group = this.partGroups[partId];
    const startX = group.position.x;
    const startY = group.position.y;
    const startZ = group.position.z;
    const startTime = performance.now();
    const duration = 700 / this.animationSpeed;
    const state = this.partStates[partId];
    state.status = 'animating';
    this.updatePartCards();

    const isExploding = targetOffset.x !== 0 || targetOffset.y !== 0 || targetOffset.z !== 0;
    const easingFn = isExploding ? this.easeOutBack : this.easeOutElastic;

    const anim = {
      partId, startX, startY, startZ,
      targetX, targetY, targetZ,
      startTime, duration,
      finalStatus, onComplete, easingFn
    };

    this.animations.push(anim);
  }

  toggleAutoRotate() {
    this.autoRotate = !this.autoRotate;
    this.updateViewButtons();
    this.showToast(this.autoRotate ? 'Auto-rotation enabled' : 'Auto-rotation disabled', 'info');
  }

  resetView() {
    this.camera.position.set(14, 10, 18);
    this.camera.lookAt(0, 2, 0);
    this.targetRotationY = 0;
    this.currentRotationY = 0;
    this.gunContainer.rotation.set(0, 0, 0);
    this.autoRotate = true;
    this.updateViewButtons();
    this.showToast('View reset', 'info');
  }

  updateViewButtons() {
    const explodeBtn = document.getElementById('btn-explode');
    const assembleBtn = document.getElementById('btn-assemble');
    const explodedBtn = document.getElementById('btn-exploded-view');
    const rotateBtn = document.getElementById('btn-auto-rotate');

    if (explodeBtn) explodeBtn.disabled = this.isAnimating || this.mode === 'exploded';
    if (assembleBtn) assembleBtn.disabled = this.isAnimating || this.mode === 'assembled';

    if (explodedBtn) {
      if (this.mode === 'exploded') {
        explodedBtn.textContent = '⟵ Assemble';
        explodedBtn.classList.add('primary');
      } else {
        explodedBtn.textContent = '⟶ Explode';
        explodedBtn.classList.remove('primary');
      }
    }

    if (rotateBtn) {
      rotateBtn.textContent = this.autoRotate ? '↻ Rotation ON' : '↻ Rotation OFF';
      rotateBtn.classList.toggle('active', this.autoRotate);
    }
  }

  updatePartCards() {
    document.querySelectorAll('.part-card').forEach(card => {
      const partId = card.dataset.partId;
      const statusEl = card.querySelector('.part-status');
      const state = this.partStates[partId];
      if (!state) return;

      card.classList.toggle('selected', partId === this.selectedPart);

      if (state.status === 'assembled') {
        statusEl.className = 'part-status assembled';
        statusEl.textContent = 'Ready';
      } else if (state.status === 'exploded') {
        statusEl.className = 'part-status exploded';
        statusEl.textContent = 'Removed';
      } else {
        statusEl.className = 'part-status animating';
        statusEl.textContent = 'Moving';
      }
    });

    document.querySelectorAll('.step-card').forEach(card => {
      const step = parseInt(card.dataset.step);
      const partId = GunModel.disassemblyOrder[step];
      const state = this.partStates[partId];
      if (!state) return;

      card.classList.toggle('completed', state.status === 'exploded');
      card.classList.toggle('active', step === this.currentStep);
    });
  }

  updateProgress() {
    const total = Object.keys(this.partStates).length;
    let exploded = 0;
    for (const s of Object.values(this.partStates)) {
      if (s.status === 'exploded') exploded++;
    }
    const percent = (exploded / Math.max(1, total - 1)) * 100;
    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = percent + '%';
  }

  showToast(message, type) {
    type = type || 'info';
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    const icons = { success: '✓', info: 'ℹ', warning: '⚠' };
    toast.innerHTML = '<span>' + (icons[type] || '•') + '</span> ' + message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(() => {
        if (toast.parentNode) toast.remove();
      }, 300);
    }, 3000);
  }

  onResize() {
    const container = document.getElementById('viewport-container');
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (w === 0 || h === 0) {
      setTimeout(() => this.onResize(), 100);
      return;
    }
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const now = performance.now();
    const elapsed = this.clock.elapsedTime;

    if (this.autoRotate) {
      this.targetRotationY += delta * this.autoRotateSpeed;
    }

    this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.08;
    this.gunContainer.rotation.y = this.currentRotationY;

    const completedAnims = [];
    for (const anim of this.animations) {
      const t = Math.min((now - anim.startTime) / anim.duration, 1);
      const eased = anim.easingFn.call(this, t);

      const group = this.partGroups[anim.partId];
      group.position.x = anim.startX + (anim.targetX - anim.startX) * eased;
      group.position.y = anim.startY + (anim.targetY - anim.startY) * eased;
      group.position.z = anim.startZ + (anim.targetZ - anim.startZ) * eased;

      if (t >= 1) {
        group.position.set(anim.targetX, anim.targetY, anim.targetZ);
        completedAnims.push(anim);
        const state = this.partStates[anim.partId];
        if (anim.finalStatus) state.status = anim.finalStatus;
        if (anim.onComplete) anim.onComplete();
      }
    }
    this.animations = this.animations.filter(a => !completedAnims.includes(a));

    for (const [partId, group] of Object.entries(this.partGroups)) {
      const state = this.partStates[partId];
      if (state.status === 'animating') {
        const pulse = Math.sin(elapsed * 8) * 0.015 + 1;
        group.scale.set(pulse, pulse, pulse);
      } else {
        const breathe = 1 + Math.sin(elapsed * 1.2 + group.position.x * 0.3) * 0.003;
        group.scale.set(breathe, breathe, breathe);
      }
    }

    if (this.selectedPart) {
      const selGroup = this.partGroups[this.selectedPart];
      if (selGroup && selGroup.userData.highlightGroup) {
        const pulse = Math.sin(elapsed * 3) * 0.08 + 0.18;
        selGroup.userData.highlightGroup.children.forEach(c => {
          if (c.material) c.material.opacity = pulse;
        });
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  easeOutElastic(x) {
    const c4 = (2 * Math.PI) / 3;
    if (x === 0) return 0;
    if (x === 1) return 1;
    return Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
  }

  easeOutBack(x) {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
  }

  easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new VoxelGunApp();
});