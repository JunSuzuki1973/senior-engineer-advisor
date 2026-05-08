// Voxel Assault Rifle Disassembly Simulator
// Three.js implementation with smooth animations

class VoxelRifleSimulator {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.rifleGroup = null;
        this.parts = {};
        this.animationState = 'assembled'; // 'assembled', 'disassembled', 'animating'
        this.animationProgress = 0;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.hoveredPart = null;
        
        this.init();
        this.createRifle();
        this.setupEventListeners();
        this.animate();
    }

    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1a1a2e);
        this.scene.fog = new THREE.Fog(0x1a1a2e, 10, 50);

        // Camera setup
        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(8, 5, 8);
        this.camera.lookAt(0, 0, 0);

        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.getElementById('canvas-container').appendChild(this.renderer.domElement);

        // Controls
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 3;
        this.controls.maxDistance = 20;
        this.controls.enablePan = true;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 10, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        this.scene.add(directionalLight);

        const rimLight = new THREE.DirectionalLight(0x00d4ff, 0.5);
        rimLight.position.set(-5, 5, -5);
        this.scene.add(rimLight);

        // Grid
        const gridHelper = new THREE.GridHelper(20, 20, 0x333333, 0x222222);
        this.scene.add(gridHelper);

        // Window resize
        window.addEventListener('resize', () => this.onWindowResize(), false);
    }

    createVoxel(color) {
        const geometry = new THREE.BoxGeometry(0.95, 0.95, 0.95);
        const material = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.7,
            metalness: 0.3
        });
        const voxel = new THREE.Mesh(geometry, material);
        voxel.castShadow = true;
        voxel.receiveShadow = true;
        return voxel;
    }

    createRifle() {
        this.rifleGroup = new THREE.Group();
        this.scene.add(this.rifleGroup);

        // Colors
        const colors = {
            black: 0x1a1a1a,
            darkGray: 0x333333,
            gray: 0x666666,
            lightGray: 0x999999,
            tan: 0x8b7355,
            orange: 0xff6600,
            steel: 0x4a4a4a
        };

        // 1. Lower Receiver
        this.parts.lowerReceiver = new THREE.Group();
        for (let x = 0; x < 2; x++) {
            for (let y = 0; y < 3; y++) {
                for (let z = 0; z < 6; z++) {
                    const voxel = this.createVoxel(colors.black);
                    voxel.position.set(x - 0.5, y, z - 3);
                    this.parts.lowerReceiver.add(voxel);
                }
            }
        }
        // Trigger guard
        for (let z = 0; z < 2; z++) {
            const voxel = this.createVoxel(colors.black);
            voxel.position.set(0, -0.5, z);
            this.parts.lowerReceiver.add(voxel);
        }
        this.parts.lowerReceiver.userData = {
            name: 'ロワーレシーバー',
            desc: '主要なフレーム部品',
            disassemblePos: { x: 0, y: -2, z: 0 },
            disassembleRot: { x: 0, y: 0, z: 0 }
        };
        this.rifleGroup.add(this.parts.lowerReceiver);

        // 2. Upper Receiver
        this.parts.upperReceiver = new THREE.Group();
        for (let x = 0; x < 2; x++) {
            for (let y = 0; y < 3; y++) {
                for (let z = 0; z < 5; z++) {
                    const voxel = this.createVoxel(colors.black);
                    voxel.position.set(x - 0.5, y + 3, z - 2.5);
                    this.parts.upperReceiver.add(voxel);
                }
            }
        }
        // Ejection port
        const ejectionPort = this.createVoxel(colors.darkGray);
        ejectionPort.position.set(0.6, 4, -1);
        ejectionPort.scale.set(0.2, 1, 1.5);
        this.parts.upperReceiver.add(ejectionPort);
        this.parts.upperReceiver.userData = {
            name: 'アッパーレシーバー',
            desc: 'ボルトキャリアを収納',
            disassemblePos: { x: 0, y: 2.5, z: 0 },
            disassembleRot: { x: 0, y: 0, z: 0 }
        };
        this.rifleGroup.add(this.parts.upperReceiver);

        // 3. Barrel
        this.parts.barrel = new THREE.Group();
        for (let z = 0; z < 12; z++) {
            const voxel = this.createVoxel(colors.steel);
            voxel.position.set(0, 4.5, z - 6);
            this.parts.barrel.add(voxel);
        }
        this.parts.barrel.userData = {
            name: 'バレル',
            desc: '銃身 - 弾丸を導く',
            disassemblePos: { x: 0, y: 0, z: -5 },
            disassembleRot: { x: 0, y: 0, z: 0 }
        };
        this.rifleGroup.add(this.parts.barrel);

        // 4. Handguard
        this.parts.handguard = new THREE.Group();
        for (let x = -1; x <= 1; x++) {
            for (let y = 3; y <= 5; y++) {
                for (let z = 0; z < 8; z++) {
                    if (x === 0 && y === 4) continue; // Hollow center
                    const voxel = this.createVoxel(colors.tan);
                    voxel.position.set(x, y, z - 4);
                    this.parts.handguard.add(voxel);
                }
            }
        }
        // Rail segments
        for (let z = 0; z < 8; z += 2) {
            const rail = this.createVoxel(colors.black);
            rail.position.set(0, 5.6, z - 4);
            rail.scale.set(1.5, 0.3, 0.8);
            this.parts.handguard.add(rail);
        }
        this.parts.handguard.userData = {
            name: 'ハンドガード',
            desc: '熱保護とグリップ',
            disassemblePos: { x: 3, y: 0, z: 0 },
            disassembleRot: { x: 0, y: 0, z: 0 }
        };
        this.rifleGroup.add(this.parts.handguard);

        // 5. Stock
        this.parts.stock = new THREE.Group();
        for (let z = 0; z < 6; z++) {
            for (let y = 1; y < 4; y++) {
                const voxel = this.createVoxel(colors.tan);
                voxel.position.set(0, y, z + 3);
                this.parts.stock.add(voxel);
            }
        }
        // Stock adjustment lever
        const lever = this.createVoxel(colors.black);
        lever.position.set(0.6, 2.5, 4);
        lever.scale.set(0.3, 0.5, 0.5);
        this.parts.stock.add(lever);
        // Buttpad
        for (let y = 0; y < 4; y++) {
            const buttpad = this.createVoxel(colors.black);
            buttpad.position.set(0, y + 0.5, 8.5);
            buttpad.scale.set(1.2, 1, 0.3);
            this.parts.stock.add(buttpad);
        }
        this.parts.stock.userData = {
            name: 'ストック',
            desc: '肩当てと反動吸収',
            disassemblePos: { x: 0, y: 0, z: 6 },
            disassembleRot: { x: 0, y: 0, z: 0 }
        };
        this.rifleGroup.add(this.parts.stock);

        // 6. Magazine
        this.parts.magazine = new THREE.Group();
        for (let x = -0.5; x <= 0.5; x += 1) {
            for (let y = -4; y < 0; y++) {
                for (let z = -1; z < 2; z++) {
                    const voxel = this.createVoxel(colors.black);
                    voxel.position.set(x, y, z);
                    this.parts.magazine.add(voxel);
                }
            }
        }
        // Magazine base
        for (let x = -0.5; x <= 0.5; x += 1) {
            for (let z = -1; z < 2; z++) {
                const base = this.createVoxel(colors.gray);
                base.position.set(x, -4.5, z);
                base.scale.set(1, 0.5, 1);
                this.parts.magazine.add(base);
            }
        }
        this.parts.magazine.userData = {
            name: 'マガジン',
            desc: '弾薬を収納',
            disassemblePos: { x: -3, y: -2, z: 0 },
            disassembleRot: { x: 0, y: 0, z: 0.2 }
        };
        this.rifleGroup.add(this.parts.magazine);

        // 7. Bolt Carrier
        this.parts.boltCarrier = new THREE.Group();
        for (let x = -0.3; x <= 0.3; x += 0.6) {
            for (let y = 3.5; y < 5.5; y++) {
                for (let z = -2; z < 2; z++) {
                    const voxel = this.createVoxel(colors.steel);
                    voxel.position.set(x, y, z);
                    voxel.scale.set(0.5, 0.8, 0.8);
                    this.parts.boltCarrier.add(voxel);
                }
            }
        }
        this.parts.boltCarrier.userData = {
            name: 'ボルトキャリア',
            desc: '射撃メカニズムの核心',
            disassemblePos: { x: 0, y: 6, z: 3 },
            disassembleRot: { x: 0.5, y: 0, z: 0 }
        };
        this.rifleGroup.add(this.parts.boltCarrier);

        // 8. Charging Handle
        this.parts.chargingHandle = new THREE.Group();
        for (let z = -3; z < 0; z++) {
            const voxel = this.createVoxel(colors.black);
            voxel.position.set(0.8, 4.5, z);
            voxel.scale.set(0.3, 0.3, 0.8);
            this.parts.chargingHandle.add(voxel);
        }
        // Handle knob
        const knob = this.createVoxel(colors.black);
        knob.position.set(0.8, 4.5, 0.5);
        knob.scale.set(0.5, 0.8, 0.3);
        this.parts.chargingHandle.add(knob);
        this.parts.chargingHandle.userData = {
            name: 'チャージングハンドル',
            desc: '銃を装填するレバー',
            disassemblePos: { x: 4, y: 1, z: 0 },
            disassembleRot: { x: 0, y: 0, z: 1.5 }
        };
        this.rifleGroup.add(this.parts.chargingHandle);

        // 9. Muzzle Brake
        this.parts.muzzle = new THREE.Group();
        for (let z = 0; z < 2; z++) {
            const voxel = this.createVoxel(colors.black);
            voxel.position.set(0, 4.5, z + 5.5);
            voxel.scale.set(1.2, 1.2, 1);
            this.parts.muzzle.add(voxel);
        }
        // Ports
        for (let x of [-0.6, 0.6]) {
            const port = this.createVoxel(colors.darkGray);
            port.position.set(x, 4.5, 6);
            port.scale.set(0.3, 0.5, 0.8);
            this.parts.muzzle.add(port);
        }
        this.parts.muzzle.userData = {
            name: 'マズルブレーキ',
            desc: '反動軽減装置',
            disassemblePos: { x: 0, y: 0, z: -7 },
            disassembleRot: { x: 0, y: 0, z: 0 }
        };
        this.rifleGroup.add(this.parts.muzzle);

        // 10. Sight
        this.parts.sight = new THREE.Group();
        // Rear sight
        for (let y = 0; y < 2; y++) {
            const voxel = this.createVoxel(colors.black);
            voxel.position.set(0, y + 6, -2);
            voxel.scale.set(0.5, 1, 0.5);
            this.parts.sight.add(voxel);
        }
        // Front sight
        for (let y = 0; y < 1; y++) {
            const voxel = this.createVoxel(colors.orange);
            voxel.position.set(0, y + 5.5, 5);
            voxel.scale.set(0.3, 1, 0.3);
            this.parts.sight.add(voxel);
        }
        this.parts.sight.userData = {
            name: 'サイト',
            desc: '照準装置',
            disassemblePos: { x: -3, y: 3, z: 0 },
            disassembleRot: { x: 0, y: 0, z: 0 }
        };
        this.rifleGroup.add(this.parts.sight);

        // Store original positions
        Object.values(this.parts).forEach(part => {
            part.userData.originalPos = part.position.clone();
            part.userData.originalRot = part.rotation.clone();
        });
    }

    setupEventListeners() {
        // Disassemble button
        document.getElementById('btn-disassemble').addEventListener('click', () => {
            if (this.animationState !== 'animating') {
                this.animateDisassembly();
            }
        });

        // Assemble button
        document.getElementById('btn-assemble').addEventListener('click', () => {
            if (this.animationState !== 'animating') {
                this.animateAssembly();
            }
        });

        // Reset button
        document.getElementById('btn-reset').addEventListener('click', () => {
            this.resetView();
        });

        // Parts list hover
        document.querySelectorAll('#parts-list li').forEach(li => {
            li.addEventListener('mouseenter', (e) => {
                const partName = e.target.dataset.part;
                if (this.parts[partName]) {
                    this.highlightPart(this.parts[partName]);
                }
            });
            li.addEventListener('mouseleave', () => {
                this.unhighlightPart();
            });
        });

        // Mouse move for raycasting
        this.renderer.domElement.addEventListener('mousemove', (e) => {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            this.checkIntersection();
        });
    }

    highlightPart(part) {
        part.traverse(child => {
            if (child.isMesh) {
                child.material.emissive = new THREE.Color(0x00d4ff);
                child.material.emissiveIntensity = 0.3;
            }
        });
        
        // Show label
        const label = document.getElementById('part-label');
        const nameEl = document.getElementById('part-name');
        const descEl = document.getElementById('part-desc');
        nameEl.textContent = part.userData.name;
        descEl.textContent = part.userData.desc;
        label.classList.remove('hidden');
    }

    unhighlightPart() {
        Object.values(this.parts).forEach(part => {
            part.traverse(child => {
                if (child.isMesh) {
                    child.material.emissive = new THREE.Color(0x000000);
                    child.material.emissiveIntensity = 0;
                }
            });
        });
        document.getElementById('part-label').classList.add('hidden');
    }

    checkIntersection() {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.rifleGroup.children, true);
        
        if (intersects.length > 0) {
            let object = intersects[0].object;
            while (object.parent && object.parent !== this.rifleGroup) {
                object = object.parent;
            }
            
            if (this.hoveredPart !== object) {
                if (this.hoveredPart) {
                    this.unhighlightPart();
                }
                this.hoveredPart = object;
                this.highlightPart(object);
            }
        } else {
            if (this.hoveredPart) {
                this.unhighlightPart();
                this.hoveredPart = null;
            }
        }
    }

    animateDisassembly() {
        this.animationState = 'animating';
        this.animationProgress = 0;
        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            this.animationProgress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out-cubic)
            const ease = 1 - Math.pow(1 - this.animationProgress, 3);

            Object.values(this.parts).forEach(part => {
                const target = part.userData.disassemblePos;
                const original = part.userData.originalPos;
                
                part.position.x = original.x + (target.x - original.x) * ease;
                part.position.y = original.y + (target.y - original.y) * ease;
                part.position.z = original.z + (target.z - original.z) * ease;

                // Add rotation
                const targetRot = part.userData.disassembleRot;
                part.rotation.x = targetRot.x * ease;
                part.rotation.y = targetRot.y * ease;
                part.rotation.z = targetRot.z * ease;
            });

            // Update progress bar
            document.getElementById('progress-fill').style.width = `${(1 - this.animationProgress) * 100}%`;
            document.getElementById('progress-text').textContent = 
                this.animationProgress >= 1 ? '分解完了' : '分解中...';

            if (this.animationProgress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.animationState = 'disassembled';
            }
        };

        animate();
    }

    animateAssembly() {
        this.animationState = 'animating';
        this.animationProgress = 0;
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            this.animationProgress = Math.min(elapsed / duration, 1);
            
            const ease = 1 - Math.pow(1 - this.animationProgress, 3);

            Object.values(this.parts).forEach(part => {
                const target = part.userData.disassemblePos;
                const original = part.userData.originalPos;
                
                part.position.x = target.x + (original.x - target.x) * ease;
                part.position.y = target.y + (original.y - target.y) * ease;
                part.position.z = target.z + (original.z - target.z) * ease;

                const targetRot = part.userData.disassembleRot;
                part.rotation.x = targetRot.x * (1 - ease);
                part.rotation.y = targetRot.y * (1 - ease);
                part.rotation.z = targetRot.z * (1 - ease);
            });

            document.getElementById('progress-fill').style.width = `${this.animationProgress * 100}%`;
            document.getElementById('progress-text').textContent = 
                this.animationProgress >= 1 ? '組み立て済み' : '組み立て中...';

            if (this.animationProgress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.animationState = 'assembled';
            }
        };

        animate();
    }

    resetView() {
        this.camera.position.set(8, 5, 8);
        this.camera.lookAt(0, 0, 0);
        this.controls.reset();
        
        if (this.animationState === 'disassembled') {
            this.animateAssembly();
        }
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        
        // Subtle idle animation
        if (this.animationState === 'assembled') {
            const time = Date.now() * 0.001;
            this.rifleGroup.rotation.y = Math.sin(time * 0.5) * 0.05;
        }
        
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new VoxelRifleSimulator();
});