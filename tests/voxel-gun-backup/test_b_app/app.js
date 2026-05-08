class VoxelGunApp {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.raycaster = null;
    this.mouse = null;
    this.clock = null;
    this.partMeshes = {};
    this.partGroups = {};
    this.partStates = {};
    this.selectedPart = null;
    this.mode = "assembled";
    this.animationSpeed = 1.0;
    this.animations = [];
    this.currentStep = 0;
    this.isAnimating = false;
    this.isDragRotation = false;
    this.autoRotate = true;
    this.autoRotateSpeed = 0.3;
    this.targetRotationY = 0;
    this.targetRotationX = 0.3;
    this.currentRotationY = 0;
    this.currentRotationX = 0.3;
    this.mouseStartX = 0;
    this.mouseStartY = 0;
    this.gunContainer = null;
    this hoveredPart = null;
    this.groundPlane = null;

    this.init();
  }

  init() {
    this.setupScene();
    this.setupLighting();
    this.buildGun();
    this.setupInteraction();
    this.setupUI();
    this.animate();
    this.showToast("VX-9 Phantom loaded — click parts or use controls", "info");
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a0f);
    this.scene.fog = new THREE.FogExp2(0x0a0a0f, 0.008);

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(12, 10, 18);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    const container = document.getElementById("viewport-container");
    container.appendChild(this.renderer.domElement);

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.clock = new THREE.Clock();

    this.gunContainer = new THREE.Group();
    this.scene.add(this.gunContainer);

    window.addEventListener("resize", () => this.onResize());
  }

  setupLighting() {
    const ambient = new THREE.AmbientLight(0x3040608, 1.5);
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

    const fillLight = new THREE.DirectionalLight(0x4466ff, 0.8);
    fillLight.position.set(-8, 5, -10);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x00ccdd, 0.6);
    rimLight.position.set(0, -5, -15);
    this.scene.add(rimLight);

    const pointLight = new THREE.PointLight(0x4466ff, 1.0, 30);
    pointLight.position.set(-5, 8, 5);
    this.scene.add(pointLight);

    const groundGeo = new THREE.PlaneGeometry(60, 60);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0d0d18,
      roughness: 0.95,
      metalness: 0.05,
    });
    this.groundPlane = new THREE.Mesh(groundGeo, groundMat);
    this.groundPlane.rotation.x = -Math.PI / 2;
    this.groundPlane.position.y = -6;
    this.groundPlane.receiveShadow = true;
    this.scene.add(this.groundPlane);

    const gridHelper = new THREE.GridHelper(40, 40, 0x1a1a30, 0x111120);
    gridHelper.position.y = -5.99;
    this.scene.add(gridHelper);
  }

  buildGun() {
    const parts = GunModel.parts;
    const voxelSize = GunModel.voxelSize;

    for (const [partId, partData] of Object.entries(parts)) {
      const group = new THREE.Group();
      group.userData = { partId };

      const material = new THREE.MeshStandardMaterial({
        roughness: 0.7,
        metalness: 0.3,
        flatShading: true,
      });

      const mergedGeo = this.createMergedVoxelGeometry(
        partData.voxels,
        voxelSize,
        material,
        partId
      );

      if (mergedGeo) {
        mergedGeo.castShadow = true;
        mergedGeo.receiveShadow = true;
        group.add(mergedGeo);
      }

      const outlineMat = new THREE.MeshBasicMaterial({
        color: 0x4466ff,
        wireframe: true,
        transparent: true,
        opacity: 0,
      });
      const outlineMesh = new THREE.Mesh(mergedGeo.geometry.clone(), outlineMat);
      outlineMesh.scale.setScalar(1.02);
      group.add(outlineMesh);

      group.position.set(0, 0, 0);
      this.gunContainer.add(group);

      this.partGroups[partId] = group;
      this.partMeshes[partId] = mergedGeo;
      this.partStates[partId] = {
        status: "assembled",
        currentOffset: { x: 0, y: 0, z: 0 },
        targetOffset: { x: 0, y: 0, z: 0 },
        originalEmissive: mergedGeo.material.emissive.clone(),
      };
    }
  }

  createMergedVoxelGeometry(voxels, voxelSize, baseMaterial, partId) {
    const geo = new THREE.BoxGeometry(voxelSize, voxelSize, voxelSize);
    const meshes = [];
    const colorMap = {};

    for (const v of voxels) {
      if (!colorMap[v.color]) {
        colorMap[v.color] = [];
      }
      colorMap[v.color].push(v);
    }

    const parentGroup = new THREE.Group();

    for (const [color, positions] of Object.entries(colorMap)) {
      const mat = baseMaterial.clone();
      mat.color = new THREE.Color(color);

      const instancedMesh = new THREE.InstancedMesh(
        geo,
        mat,
        positions.length
      );

      const matrix = new THREE.Matrix4();
      positions.forEach((v, i) => {
        matrix.setPosition(
          v.x * voxelSize,
          v.y * voxelSize,
          v.z * voxelSize
        );
        instancedMesh.setMatrixAt(i, matrix);
      });

      instancedMesh.instanceMatrix.needsUpdate = true;
      instancedMesh.castShadow = true;
      instancedMesh.receiveShadow = true;
      instancedMesh.userData = { partId };
      parentGroup.add(instancedMesh);
    }

    const allMeshes = parentGroup.children.map((m) => m);
    return {
      group: parentGroup,
      mesh: parentGroup,
      material: allMeshes[0].material,
      geometry: geo,
      getColorMeshes: () => parentGroup.children,
    };
  }

  setupInteraction() {
    const canvas = this.renderer.domElement;

    canvas.addEventListener("mousemove", (e) => this.onMouseMove(e));
    canvas.addEventListener("click", (e) => this.onClick(e));
    canvas.addEventListener("mousedown", (e) => this.onMouseDown(e));
    canvas.addEventListener("mouseup", (e) => this.onMouseUp(e));
    canvas.addEventListener("wheel", (e) => this.onWheel(e));

    canvas.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        this.onMouseDown({ clientX: touch.clientX, clientY: touch.clientY });
      }
    });
    canvas.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        this.onMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
        e.preventDefault();
      }
    }, { passive: false });
    canvas.addEventListener("touchend", (e) => {
      if (e.changedTouches.length === 1) {
        const touch = e.changedTouches[0];
        this.onMouseUp({ clientX: touch.clientX, clientY: touch.clientY });
        this.onClick({ clientX: touch.clientX, clientY: touch.clientY });
      }
    });
  }

  onMouseDown(e) {
    this.isDragRotation = true;
    this.mouseStartX = e.clientX;
    this.mouseStartY = e.clientY;
  }

  onMouseUp(e) {
    const dx = e.clientX - this.mouseStartX;
    const dy = e.clientY - this.mouseStartY;
    if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
      this.isDragRotation = false;
    } else {
      setTimeout(() => {
        this.isDragRotation = false;
      }, 50);
    }
  }

  onMouseMove(e) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    if (this.isDragRotation) {
      const dx = e.clientX - this.mouseStartX;
      const dy = e.clientY - this.mouseStartY;
      this.targetRotationY += dx * 0.005;
      this.targetRotationX += dy * 0.003;
      this.targetRotationX = Math.max(-0.5, Math.min(1.2, this.targetRotationX));
      this.mouseStartX = e.clientX;
      this.mouseStartY = e.clientY;
      this.autoRotate = false;
    }

    this.updateHover();
  }

  onWheel(e) {
    const zoomSpeed = 0.05;
    this.camera.position.multiplyScalar(1 + e.deltaY * zoomSpeed * 0.001);
    const dist = this.camera.position.length();
    if (dist < 8) this.camera.position.setLength(8);
    if (dist > 40) this.camera.position.setLength(40);
  }

  onClick(e) {
    if (this.isDragRotation) return;

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

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
    for (const [partId, meshData] of Object.entries(this.partMeshes)) {
      const colorMeshes = meshData.getColorMeshes
        ? meshData.getColorMeshes()
        : [meshData];
      for (const m of colorMeshes) {
        allMeshes.push({ mesh: m, partId });
      }
    }

    const meshList = allMeshes.map((m) => m.mesh);
    const intersects = this.raycaster.intersectObjects(meshList, false);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const found = allMeshes.find((m) => m.mesh === hit);
      return found ? found.partId : null;
    }
    return null;
  }

  updateHover() {
    const partId = this.getPartUnderMouse();

    if (this.hoveredPart && this.hoveredPart !== partId) {
      this.setPartHighlight(this.hoveredPart, false);
      this.hoveredPart = null;
    }

    if (partId && partId !== this.hoveredPart) {
      this.setPartHighlight(partId, true);
      this.hoveredPart = partId;
      this.renderer.domElement.style.cursor = "pointer";
    } else if (!partId) {
      this.renderer.domElement.style.cursor = "grab";
    }
  }

  setPartHighlight(partId, highlighted) {
    const group = this.partGroups[partId];
    if (!group) return;
    const outlineMesh = group.children.find(
      (c) => c.material && c.material.wireframe === true
    );
    if (outlineMesh) {
      outlineMesh.material.opacity = highlighted ? 0.4 : 0;
    }
  }

  selectPart(partId) {
    if (this.selectedPart === partId) return;

    if (this.selectedPart) {
      this.setPartSelected(this.selectedPart, false);
    }

    this.selectedPart = partId;
    this.setPartSelected(partId, true);
    this.updateInfoPanel(partId);
    this.updatePartCards();
  }

  deselectPart() {
    if (this.selectedPart) {
      this.setPartSelected(this.selectedPart, false);
      this.selectedPart = null;
    }
    document.getElementById("info-panel").classList.remove("visible");
    this.updatePartCards();
  }

  setPartSelected(partId, selected) {
    const group = this.partGroups[partId];
    if (!group) return;

    const meshes = this.partMeshes[partId].getColorMeshes
      ? this.partMeshes[partId].getColorMeshes()
      : [this.partMeshes[partId]];

    for (const mesh of meshes) {
      if (mesh.material && !mesh.material.wireframe) {
        if (selected) {
          mesh.material.emissive.set(0x2244aa);
        } else {
          mesh.material.emissive.copy(this.partStates[partId].originalEmissive);
        }
      }
    }

    const outlineMesh = group.children.find(
      (c) => c.material && c.material.wireframe === true
    );
    if (outlineMesh) {
      outlineMesh.material.opacity = selected ? 0.6 : 0;
      outlineMesh.material.color.set(selected ? 0x00ccdd : 0x4466ff);
    }
  }

  updateInfoPanel(partId) {
    const partData = GunModel.parts[partId];
    const panel = document.getElementById("info-panel");
    const titleEl = panel.querySelector(".info-title");
    const descEl = panel.querySelector(".info-description");
    const metaEl = panel.querySelector(".info-meta");

    titleEl.textContent = partData.label;
    descEl.textContent = partData.description;
    metaEl.textContent = `Part #${partData.order} | Voxels: ${partData.voxels.length}`;

    panel.classList.add("visible");
  }

  setupUI() {
    document.getElementById("btn-explode").addEventListener("click", () => this.explodeAll());
    document.getElementById("btn-assemble").addEventListener("click", () => this.assembleAll());
    document.getElementById("btn-exploded-view").addEventListener("click", () => this.toggleExplodedView());
    document.getElementById("btn-reset").addEventListener("click", () => this.resetView());
    document.getElementById("btn-auto-rotate").addEventListener("click", () => this.toggleAutoRotate());
    document.getElementById("speed-slider").addEventListener("input", (e) => {
      this.animationSpeed = parseFloat(e.target.value);
      document.getElementById("speed-value").textContent = this.animationSpeed.toFixed(1) + "x";
    });

    document.querySelectorAll(".panel-tab").forEach((tab) => {
      tab.addEventListener("click", (e) => {
        document.querySelectorAll(".panel-tab").forEach((t) => t.classList.remove("active"));
        e.target.classList.add("active");
        const tabName = e.target.dataset.tab;
        document.querySelectorAll(".tab-content").forEach((c) => c.classList.add("hidden"));
        document.getElementById(`tab-${tabName}`).classList.remove("hidden");
      });
    });

    document.getElementById("mobile-toggle").addEventListener("click", () => {
      document.getElementById("side-panel").classList.toggle("open");
    });

    this.buildPartList();
    this.buildStepGuide();
    this.updateViewButtons();
  }

  buildPartList() {
    const list = document.getElementById("parts-list");
    list.innerHTML = "";

    const sortedParts = Object.entries(GunModel.parts).sort(
      (a, b) => a[1].order - b[1].order
    );

    for (const [partId, partData] of sortedParts) {
      const card = document.createElement("div");
      card.className = "part-card";
      card.dataset.partId = partId;
      card.innerHTML = `
        <div class="part-number">${partData.order}</div>
        <div class="part-info">
          <div class="part-name">${partData.label}</div>
          <div class="part-desc">${partData.description.split("—")[0]}</div>
        </div>
        <div class="part-status assembled">Ready</div>
      `;
      card.addEventListener("click", () => this.selectPart(partId));
      list.appendChild(card);
    }
  }

  buildStepGuide() {
    const list = document.getElementById("steps-list");
    list.innerHTML = "";

    GunModel.disassemblyOrder.forEach((partId, idx) => {
      const partData = GunModel.parts[partId];
      const card = document.createElement("div");
      card.className = "step-card";
      card.dataset.step = idx;
      card.dataset.partId = partId;
      card.innerHTML = `
        <div class="step-header">
          <span class="step-number">Step ${idx + 1}</span>
          <span class="step-action">Remove ${partData.label}</span>
        </div>
        <div class="step-detail">${partData.description.split("—")[0]}</div>
      `;
      card.addEventListener("click", () => this.animateStep(idx));
      list.appendChild(card);
    });
  }

  updatePartCards() {
    document.querySelectorAll(".part-card").forEach((card) => {
      const partId = card.dataset.partId;
      const statusEl = card.querySelector(".part-status");
      const state = this.partStates[partId];

      card.classList.toggle("selected", partId === this.selectedPart);

      if (state.status === "assembled") {
        statusEl.className = "part-status assembled";
        statusEl.textContent = "Ready";
      } else if (state.status === "exploded") {
        statusEl.className = "part-status exploded";
        statusEl.textContent = "Removed";
      } else {
        statusEl.className = "part-status animating";
        statusEl.textContent = "Moving";
      }
    });

    document.querySelectorAll(".step-card").forEach((card) => {
      const step = parseInt(card.dataset.step);
      const partId = GunModel.disassemblyOrder[step];
      const state = this.partStates[partId];

      card.classList.toggle("completed", state.status === "exploded");
      card.classList.toggle("active", step === this.currentStep);
    });
  }

  updateProgress() {
    const total = Object.keys(this.partStates).length;
    const exploded = Object.values(this.partStates).filter(
      (s) => s.status === "exploded"
    ).length;
    const percent = (exploded / (total - 1)) * 100;
    document.getElementById("progress-fill").style.width = `${percent}%`;
  }

  explodeAll() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.mode = "exploded";

    const parts = Object.keys(GunModel.parts);
    let completed = 0;

    parts.forEach((partId, idx) => {
      const offset = GunModel.parts[partId].explodeOffset;
      const state = this.partStates[partId];
      const delay = idx * 80;

      setTimeout(() => {
        state.targetOffset = { ...offset };
        state.status = "animating";
        this.animatePart(partId, offset, () => {
          state.status = "exploded";
          state.currentOffset = { ...offset };
          completed++;
          if (completed === parts.length) {
            this.isAnimating = false;
            this.updateViewButtons();
            this.showToast("Disassembly complete", "success");
          }
          this.updatePartCards();
          this.updateProgress();
        });
      }, delay);
    });

    this.updateViewButtons();
  }

  assembleAll() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.mode = "assembled";

    const parts = [...GunModel.assemblyOrder];
    let completed = 0;

    parts.forEach((partId, idx) => {
      const delay = idx * 80;

      setTimeout(() => {
        const state = this.partStates[partId];
        state.targetOffset = { x: 0, y: 0, z: 0 };
        state.status = "animating";

        this.animatePart(partId, { x: 0, y: 0, z: 0 }, () => {
          state.status = "assembled";
          state.currentOffset = { x: 0, y: 0, z: 0 };
          completed++;
          if (completed === parts.length) {
            this.isAnimating = false;
            this.updateViewButtons();
            this.showToast("Assembly complete", "success");
          }
          this.updatePartCards();
          this.updateProgress();
        });
      }, delay);
    });

    this.updateViewButtons();
  }

  toggleExplodedView() {
    if (this.mode === "exploded") {
      this.assembleAll();
    } else {
      this.explodeAll();
    }
  }

  animateStep(stepIndex) {
    if (this.isAnimating) return;

    const isDisassembly = this.mode !== "exploded";
    const partId = GunModel.disassemblyOrder[stepIndex];
    const state = this.partStates[partId];

    if (isDisassembly && state.status === "assembled") {
      this.isAnimating = true;
      state.status = "animating";
      this.currentStep = stepIndex;
      this.updatePartCards();

      const offset = GunModel.parts[partId].explodeOffset;
      state.targetOffset = { ...offset };

      this.animatePart(partId, offset, () => {
        state.status = "exploded";
        state.currentOffset = { ...offset };
        this.isAnimating = false;
        this.currentStep = stepIndex + 1;
        this.updatePartCards();
        this.updateProgress();

        if (this.currentStep >= GunModel.disassemblyOrder.length) {
          this.mode = "exploded";
          this.showToast("Full disassembly complete", "success");
        }
      });
    } else if (!isDisassembly && state.status === "exploded") {
      this.isAnimating = true;
      state.status = "animating";
      this.currentStep = stepIndex;
      this.updatePartCards();

      state.targetOffset = { x: 0, y: 0, z: 0 };

      this.animatePart(partId, { x: 0, y: 0, z: 0 }, () => {
        state.status = "assembled";
        state.currentOffset = { x: 0, y: 0, z: 0 };
        this.isAnimating = false;
        this.updatePartCards();
        this.updateProgress();
      });
    }
  }

  animatePart(partId, targetOffset, onComplete) {
    const offset = GunModel.parts[partId].explodeOffset;
    const vs = GunModel.voxelSize;
    const targetX = targetOffset.x * vs * 3;
    const targetY = targetOffset.y * vs * 3;
    const targetZ = targetOffset.z * vs * 3;

    const group = this.partGroups[partId];
    const startX = group.position.x;
    const startY = group.position.y;
    const startZ = group.position.z;

    const startTime = performance.now();
    const duration = 600 / this.animationSpeed;

    const anim = {
      partId,
      startX,
      startY,
      startZ,
      targetX,
      targetY,
      targetZ,
      startTime,
      duration,
      onComplete,
    };

    this.animations.push(anim);
  }

  toggleAutoRotate() {
    this.autoRotate = !this.autoRotate;
    this.updateViewButtons();
  }

  resetView() {
    this.targetRotationY = 0;
    this.targetRotationX = 0.3;
    this.currentRotationY = 0;
    this.currentRotationX = 0.3;
    this.camera.position.set(12, 10, 18);
    this.camera.lookAt(0, 0, 0);
    this.autoRotate = true;
    this.gunContainer.rotation.set(0, 0, 0);
    this.updateViewButtons();
  }

  updateViewButtons() {
    const explodeBtn = document.getElementById("btn-explode");
    const assembleBtn = document.getElementById("btn-assemble");
    const explodedBtn = document.getElementById("btn-exploded-view");
    const rotateBtn = document.getElementById("btn-auto-rotate");

    if (this.isAnimating) {
      explodeBtn.disabled = true;
      assembleBtn.disabled = true;
      explodedBtn.disabled = true;
    } else {
      explodeBtn.disabled = this.mode === "exploded";
      assembleBtn.disabled = this.mode === "assembled";
      explodedBtn.disabled = false;
    }

    if (this.mode === "exploded") {
      explodedBtn.textContent = "⟵ Assemble";
      explodedBtn.classList.add("primary");
    } else {
      explodedBtn.textContent = "⟶ Explode";
      explodedBtn.classList.remove("primary");
    }

    rotateBtn.classList.toggle("active", this.autoRotate);
    rotateBtn.textContent = this.autoRotate ? "↻ Rotation ON" : "↻ Rotation OFF";
  }

  showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    const icons = {
      success: "✓",
      info: "ℹ",
      warning: "⚠",
    };
    toast.innerHTML = `<span>${icons[type] || "•"}</span> ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s";
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  onResize() {
    const sidePanel = document.getElementById("side-panel");
    const isMobile = window.innerWidth <= 768;
    const panelWidth = isMobile ? 0 : (sidePanel.classList.contains("open") || !isMobile ? 300 : 0);

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const now = performance.now();

    if (this.autoRotate && !this.isDragRotation) {
      this.targetRotationY += delta * this.autoRotateSpeed;
    }

    this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.08;
    this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.08;

    this.gunContainer.rotation.y = this.currentRotationY;
    this.gunContainer.rotation.x = this.currentRotationX;

    const completedAnims = [];
    for (const anim of this.animations) {
      const elapsed = now - anim.startTime;
      const t = Math.min(elapsed / anim.duration, 1);
      const eased = this.easeOutElastic(t);

      const group = this.partGroups[anim.partId];
      group.position.x = anim.startX + (anim.targetX - anim.startX) * eased;
      group.position.y = anim.startY + (anim.targetY - anim.startY) * eased;
      group.position.z = anim.startZ + (anim.targetZ - anim.startZ) * eased;

      if (t >= 1) {
        completedAnims.push(anim);
        if (anim.onComplete) anim.onComplete();
      }
    }
    this.animations = this.animations.filter((a) => !completedAnims.includes(a));

    const time = this.clock.elapsedTime;
    for (const [partId, group] of Object.entries(this.partGroups)) {
      if (this.partStates[partId].status === "exploded") {
        group.position.y += Math.sin(time * 1.5 + group.position.x) * 0.001;
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

  easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.app = new VoxelGunApp();
});