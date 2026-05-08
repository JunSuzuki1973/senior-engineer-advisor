import * as THREE from 'three';

export class SceneManager {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.gunContainer = null;
    this.clock = new THREE.Clock();

    this._initScene();
    this._initLighting();
    this._initGround();
  }

  _initScene() {
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

    this.gunContainer = new THREE.Group();
    this.scene.add(this.gunContainer);
  }

  _initLighting() {
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

  _initGround() {
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

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onResize() {
    const container = document.getElementById('viewport-container');
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (w === 0 || h === 0) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  getCanvas() {
    return this.renderer.domElement;
  }
}