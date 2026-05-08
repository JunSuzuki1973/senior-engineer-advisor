(function () {
    'use strict';

    const V = 0.15;

    const PALETTE = {
        darkMetal: 0x2d333b,
        metal: 0x3d444d,
        lightMetal: 0x545d68,
        steel: 0x4a5568,
        wood: 0x92712a,
        darkWood: 0x6e541a,
        magazine: 0x27272a,
        grip: 0x1c1c20,
        sight: 0x2a2e35,
        muzzle: 0x22252b,
    };

    const PARTS = [
        {
            name: 'Stock',
            color: PALETTE.darkWood,
            edgeColor: 0x1a1208,
            boxes: [
                { x: -1.35, y: 0.04, z: 0, w: 0.55, h: 0.42, d: 0.38 },
                { x: -2.3, y: 0.02, z: 0, w: 1.4, h: 0.32, d: 0.28 },
                { x: -3.35, y: -0.02, z: 0, w: 0.65, h: 0.38, d: 0.3 },
                { x: -2.6, y: -0.16, z: 0, w: 1.2, h: 0.12, d: 0.2 },
                { x: -1.6, y: 0.22, z: 0, w: 0.3, h: 0.12, d: 0.34 },
            ],
            disassembledOffset: { x: -2.8, y: -0.4, z: 0.8 },
            disassembledRotation: { x: 0, y: 0.15, z: -0.08 },
            delay: 0.10,
        },
        {
            name: 'Receiver',
            color: PALETTE.metal,
            edgeColor: 0x1a1d22,
            boxes: [
                { x: -0.1, y: 0.0, z: 0, w: 2.4, h: 0.48, d: 0.4 },
                { x: 0.0, y: 0.3, z: 0, w: 2.2, h: 0.14, d: 0.36 },
                { x: 0.35, y: -0.32, z: 0, w: 0.6, h: 0.18, d: 0.2 },
                { x: -0.45, y: -0.32, z: 0, w: 0.4, h: 0.18, d: 0.2 },
                { x: -0.8, y: 0.22, z: 0, w: 0.5, h: 0.1, d: 0.28 },
            ],
            disassembledOffset: { x: 0, y: 0.6, z: -0.4 },
            disassembledRotation: { x: 0.03, y: -0.05, z: 0 },
            delay: 0.50,
        },
        {
            name: 'Dust Cover',
            color: PALETTE.lightMetal,
            edgeColor: 0x1a2028,
            boxes: [
                { x: 0.1, y: 0.4, z: 0, w: 1.9, h: 0.1, d: 0.34 },
                { x: -0.8, y: 0.39, z: 0, w: 0.3, h: 0.08, d: 0.32 },
                { x: 0.9, y: 0.4, z: 0, w: 0.15, h: 0.12, d: 0.3 },
            ],
            disassembledOffset: { x: 0.1, y: 2.0, z: 0.6 },
            disassembledRotation: { x: -0.1, y: 0.08, z: 0.02 },
            delay: 0.18,
        },
        {
            name: 'Rear Sight',
            color: PALETTE.sight,
            edgeColor: 0x0a0d10,
            boxes: [
                { x: -0.85, y: 0.42, z: 0, w: 0.2, h: 0.18, d: 0.2 },
                { x: -0.85, y: 0.56, z: 0, w: 0.08, h: 0.22, d: 0.08 },
                { x: -0.85, y: 0.68, z: 0, w: 0.14, h: 0.06, d: 0.06 },
            ],
            disassembledOffset: { x: -0.6, y: 2.2, z: 0.7 },
            disassembledRotation: { x: -0.12, y: 0.1, z: 0.05 },
            delay: 0.22,
        },
        {
            name: 'Barrel',
            color: PALETTE.darkMetal,
            edgeColor: 0x11141a,
            boxes: [
                { x: 2.5, y: 0.15, z: 0, w: 4.2, h: 0.12, d: 0.12 },
                { x: 5.55, y: 0.15, z: 0, w: 0.4, h: 0.16, d: 0.16 },
                { x: 5.72, y: 0.15, z: 0, w: 0.12, h: 0.18, d: 0.18 },
                { x: 1.5, y: 0.15, z: 0, w: 0.3, h: 0.14, d: 0.14 },
            ],
            disassembledOffset: { x: 4.5, y: 0.3, z: -0.5 },
            disassembledRotation: { x: 0.02, y: 0.04, z: 0.01 },
            delay: 0.38,
        },
        {
            name: 'Gas Tube',
            color: PALETTE.steel,
            edgeColor: 0x151920,
            boxes: [
                { x: 2.9, y: 0.44, z: 0, w: 2.6, h: 0.1, d: 0.1 },
                { x: 4.1, y: 0.4, z: 0, w: 0.22, h: 0.18, d: 0.18 },
                { x: 1.55, y: 0.4, z: 0, w: 0.18, h: 0.16, d: 0.16 },
            ],
            disassembledOffset: { x: 3.2, y: 2.6, z: 0.7 },
            disassembledRotation: { x: -0.06, y: 0.12, z: 0.03 },
            delay: 0.33,
        },
        {
            name: 'Handguard',
            color: PALETTE.wood,
            edgeColor: 0x2a1e08,
            boxes: [
                { x: 2.4, y: 0.33, z: 0, w: 2.4, h: 0.2, d: 0.3 },
                { x: 2.4, y: -0.02, z: 0, w: 2.2, h: 0.18, d: 0.28 },
                { x: 1.55, y: 0.28, z: 0, w: 0.55, h: 0.22, d: 0.32 },
                { x: 3.3, y: 0.3, z: 0, w: 0.6, h: 0.16, d: 0.26 },
                { x: 2.5, y: -0.05, z: 0, w: 0.15, h: 0.14, d: 0.24 },
            ],
            disassembledOffset: { x: 2.8, y: 1.8, z: 0.6 },
            disassembledRotation: { x: -0.08, y: 0.06, z: 0.04 },
            delay: 0.28,
        },
        {
            name: 'Front Sight',
            color: PALETTE.sight,
            edgeColor: 0x0a0d10,
            boxes: [
                { x: 4.8, y: 0.32, z: 0, w: 0.16, h: 0.22, d: 0.16 },
                { x: 4.8, y: 0.48, z: 0, w: 0.06, h: 0.28, d: 0.06 },
                { x: 4.8, y: 0.64, z: 0, w: 0.12, h: 0.05, d: 0.06 },
                { x: 4.8, y: 0.22, z: 0, w: 0.2, h: 0.06, d: 0.2 },
            ],
            disassembledOffset: { x: 4.8, y: 2.4, z: 0.8 },
            disassembledRotation: { x: -0.1, y: 0.15, z: -0.05 },
            delay: 0.42,
        },
        {
            name: 'Magazine',
            color: PALETTE.magazine,
            edgeColor: 0x08080a,
            boxes: [
                { x: 0.3, y: -0.62, z: 0, w: 0.42, h: 0.55, d: 0.2 },
                { x: 0.18, y: -1.18, z: 0, w: 0.38, h: 0.55, d: 0.18 },
                { x: 0.1, y: -1.58, z: 0, w: 0.34, h: 0.28, d: 0.16 },
                { x: 0.08, y: -1.78, z: 0, w: 0.28, h: 0.14, d: 0.14 },
                { x: 0.3, y: -0.35, z: 0, w: 0.44, h: 0.1, d: 0.22 },
            ],
            disassembledOffset: { x: 0.4, y: -2.8, z: 0.4 },
            disassembledRotation: { x: 0.15, y: 0.1, z: -0.05 },
            delay: 0.0,
        },
        {
            name: 'Grip',
            color: PALETTE.grip,
            edgeColor: 0x060608,
            boxes: [
                { x: -0.7, y: -0.4, z: 0, w: 0.28, h: 0.34, d: 0.3 },
                { x: -0.76, y: -0.78, z: 0.1, w: 0.26, h: 0.42, d: 0.28 },
                { x: -0.8, y: -1.08, z: 0.14, w: 0.24, h: 0.22, d: 0.26 },
                { x: -0.82, y: -1.25, z: 0.16, w: 0.22, h: 0.14, d: 0.24 },
                { x: -0.5, y: -0.36, z: 0, w: 0.16, h: 0.12, d: 0.2 },
            ],
            disassembledOffset: { x: -0.6, y: -2.5, z: 0.6 },
            disassembledRotation: { x: 0.08, y: -0.12, z: -0.1 },
            delay: 0.05,
        },
    ];

    const ANIMATION_DURATION = 2.8;
    const PART_ANIM_SPAN = 0.18;

    let scene, camera, renderer;
    let partGroups = [];
    let pivotGroup;
    let state = 'assembled';
    let animProgress = 0;
    let animDirection = 0;
    let hoveredPart = null;

    let isDragging = false;
    let isPanning = false;
    let prevMouse = { x: 0, y: 0 };
    let orbitTheta = 0.3;
    let orbitPhi = 1.1;
    let orbitDistance = 14;
    let orbitTarget = new THREE.Vector3(1.0, -0.2, 0);
    let panOffset = new THREE.Vector3(0, 0, 0);

    function init() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0c0c14);
        scene.fog = new THREE.FogExp2(0x0c0c14, 0.035);

        camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
        updateCamera();

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        renderer.outputEncoding = THREE.sRGBEncoding;

        document.getElementById('canvas-container').appendChild(renderer.domElement);

        setupLights();
        createGround();
        buildRifle();
        setupEvents();
    }

    function setupLights() {
        const ambient = new THREE.AmbientLight(0x404868, 0.6);
        scene.add(ambient);

        const keyLight = new THREE.DirectionalLight(0xffeedd, 1.0);
        keyLight.position.set(5, 8, 6);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.width = 2048;
        keyLight.shadow.mapSize.height = 2048;
        keyLight.shadow.camera.near = 0.5;
        keyLight.shadow.camera.far = 30;
        keyLight.shadow.camera.left = -8;
        keyLight.shadow.camera.right = 8;
        keyLight.shadow.camera.top = 8;
        keyLight.shadow.camera.bottom = -8;
        keyLight.shadow.bias = -0.001;
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0x8899bb, 0.4);
        fillLight.position.set(-4, 3, -4);
        scene.add(fillLight);

        const rimLight = new THREE.DirectionalLight(0x6688cc, 0.5);
        rimLight.position.set(-2, 4, -6);
        scene.add(rimLight);

        const bottomLight = new THREE.PointLight(0x334466, 0.3, 20);
        bottomLight.position.set(0, -4, 2);
        scene.add(bottomLight);

        const spotLight = new THREE.SpotLight(0xffd4a0, 0.3, 20, Math.PI / 5, 0.5);
        spotLight.position.set(0, 6, 0);
        spotLight.target.position.set(0, 0, 0);
        scene.add(spotLight);
        scene.add(spotLight.target);
    }

    function createGround() {
        const gridSize = 40;
        const gridDiv = 40;
        const gridHelper = new THREE.GridHelper(gridSize, gridDiv, 0x1a2030, 0x111820);
        gridHelper.position.y = -2.5;
        gridHelper.material.opacity = 0.3;
        gridHelper.material.transparent = true;
        scene.add(gridHelper);

        const groundGeo = new THREE.PlaneGeometry(50, 50);
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x0a0e18,
            roughness: 0.95,
            metalness: 0.05,
        });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -2.5;
        ground.receiveShadow = true;
        scene.add(ground);

        const glowGeo = new THREE.PlaneGeometry(12, 12);
        const glowMat = new THREE.MeshBasicMaterial({
            color: 0x1a3050,
            transparent: true,
            opacity: 0.15,
        });
        const glow = new THREE.Mesh(glowGeo, glowMat);
        glow.rotation.x = -Math.PI / 2;
        glow.position.y = -2.49;
        scene.add(glow);
    }

    function box(w, h, d) {
        return new THREE.BoxGeometry(
            Math.max(0.001, w),
            Math.max(0.001, h),
            Math.max(0.001, d)
        );
    }

    function buildRifle() {
        pivotGroup = new THREE.Group();
        scene.add(pivotGroup);

        PARTS.forEach(function (partDef, index) {
            var group = new THREE.Group();
            group.userData = {
                name: partDef.name,
                index: index,
                originalPositions: [],
                disassembledOffset: new THREE.Vector3(
                    partDef.disassembledOffset.x,
                    partDef.disassembledOffset.y,
                    partDef.disassembledOffset.z
                ),
                disassembledRotation: new THREE.Euler(
                    partDef.disassembledRotation.x,
                    partDef.disassembledRotation.y,
                    partDef.disassembledRotation.z
                ),
                delay: partDef.delay,
                baseColor: partDef.color,
            };

            var mainMat = new THREE.MeshStandardMaterial({
                color: partDef.color,
                flatShading: true,
                roughness: 0.55,
                metalness: 0.4,
            });

            var edgeMat = new THREE.LineBasicMaterial({
                color: partDef.edgeColor,
                transparent: true,
                opacity: 0.6,
            });

            partDef.boxes.forEach(function (b) {
                var geo = box(b.w, b.h, b.d);
                var mesh = new THREE.Mesh(geo, mainMat.clone());
                mesh.position.set(b.x, b.y, b.z);
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                group.add(mesh);

                var edgesGeo = new THREE.EdgesGeometry(geo);
                var edges = new THREE.LineSegments(edgesGeo, edgeMat.clone());
                edges.position.set(b.x, b.y, b.z);
                group.add(edges);

                group.userData.originalPositions.push({
                    x: b.x,
                    y: b.y,
                    z: b.z
                });
            });

            pivotGroup.add(group);
            partGroups.push(group);
        });
    }

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function easeOutBack(t) {
        var c1 = 1.4;
        var c3 = c1 + 1;
        return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }

    function getPartProgress(globalProgress, delay) {
        var start = delay;
        var end = Math.min(delay + PART_ANIM_SPAN, 1.0);
        if (globalProgress <= start) return 0;
        if (globalProgress >= end) return 1;
        return (globalProgress - start) / (end - start);
    }

    function updatePartPositions(progress) {
        partGroups.forEach(function (group) {
            var data = group.userData;
            var rawP = getPartProgress(progress, data.delay);
            var p = easeInOutCubic(rawP);

            var offset = data.disassembledOffset;
            group.position.x = offset.x * p;
            group.position.y = offset.y * p;
            group.position.z = offset.z * p;

            group.rotation.x = data.disassembledRotation.x * p;
            group.rotation.y = data.disassembledRotation.y * p;
            group.rotation.z = data.disassembledRotation.z * p;
        });
    }

    function startDisassembly() {
        if (state === 'disassembling' || state === 'assembling') return;
        if (state === 'disassembled') return;
        animProgress = state === 'assembled' ? 0 : animProgress;
        state = 'disassembling';
        animDirection = 1;
    }

    function startAssembly() {
        if (state === 'assembling' || state === 'disassembling') return;
        if (state === 'assembled') return;
        animProgress = state === 'disassembled' ? 1 : animProgress;
        state = 'assembling';
        animDirection = -1;
    }

    function resetView() {
        state = 'assembled';
        animProgress = 0;
        animDirection = 0;
        updatePartPositions(0);
        orbitTheta = 0.3;
        orbitPhi = 1.1;
        orbitDistance = 14;
        orbitTarget.set(1.0, -0.2, 0);
        updateCamera();
    }

    function updateCamera() {
        var x = orbitDistance * Math.sin(orbitPhi) * Math.cos(orbitTheta);
        var y = orbitDistance * Math.cos(orbitPhi);
        var z = orbitDistance * Math.sin(orbitPhi) * Math.sin(orbitTheta);
        camera.position.set(
            orbitTarget.x + x,
            orbitTarget.y + y,
            orbitTarget.z + z
        );
        camera.lookAt(orbitTarget);
    }

    function setupEvents() {
        var canvas = renderer.domElement;

        canvas.addEventListener('mousedown', function (e) {
            if (e.button === 0) isDragging = true;
            if (e.button === 2) isPanning = true;
            prevMouse.x = e.clientX;
            prevMouse.y = e.clientY;
        });

        canvas.addEventListener('mousemove', function (e) {
            var dx = e.clientX - prevMouse.x;
            var dy = e.clientY - prevMouse.y;
            prevMouse.x = e.clientX;
            prevMouse.y = e.clientY;

            if (isDragging) {
                orbitTheta -= dx * 0.008;
                orbitPhi = Math.max(0.2, Math.min(Math.PI - 0.2, orbitPhi - dy * 0.008));
                updateCamera();
            }

            if (isPanning) {
                var right = new THREE.Vector3();
                var up = new THREE.Vector3();
                camera.getWorldDirection(new THREE.Vector3());
                right.crossVectors(camera.up, new THREE.Vector3().subVectors(camera.position, orbitTarget)).normalize();
                up.copy(camera.up).normalize();
                orbitTarget.add(right.multiplyScalar(dx * 0.02));
                orbitTarget.add(up.multiplyScalar(-dy * 0.02));
                updateCamera();
            }

            handleRaycast(e);
        });

        canvas.addEventListener('mouseup', function () {
            isDragging = false;
            isPanning = false;
        });

        canvas.addEventListener('mouseleave', function () {
            isDragging = false;
            isPanning = false;
        });

        canvas.addEventListener('wheel', function (e) {
            e.preventDefault();
            orbitDistance = Math.max(5, Math.min(30, orbitDistance + e.deltaY * 0.01));
            updateCamera();
        }, { passive: false });

        canvas.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        var touchStartDist = 0;
        var touchStartAngle = 0;

        canvas.addEventListener('touchstart', function (e) {
            if (e.touches.length === 1) {
                isDragging = true;
                prevMouse.x = e.touches[0].clientX;
                prevMouse.y = e.touches[0].clientY;
            } else if (e.touches.length === 2) {
                isDragging = false;
                var dx = e.touches[1].clientX - e.touches[0].clientX;
                var dy = e.touches[1].clientY - e.touches[0].clientY;
                touchStartDist = Math.sqrt(dx * dx + dy * dy);
                touchStartAngle = Math.atan2(dy, dx);
            }
        });

        canvas.addEventListener('touchmove', function (e) {
            e.preventDefault();
            if (e.touches.length === 1 && isDragging) {
                var dx = e.touches[0].clientX - prevMouse.x;
                var dy = e.touches[0].clientY - prevMouse.y;
                orbitTheta -= dx * 0.008;
                orbitPhi = Math.max(0.2, Math.min(Math.PI - 0.2, orbitPhi - dy * 0.008));
                prevMouse.x = e.touches[0].clientX;
                prevMouse.y = e.touches[0].clientY;
                updateCamera();
            } else if (e.touches.length === 2) {
                var dx = e.touches[1].clientX - e.touches[0].clientX;
                var dy = e.touches[1].clientY - e.touches[0].clientY;
                var dist = Math.sqrt(dx * dx + dy * dy);
                orbitDistance = Math.max(5, Math.min(30, orbitDistance * (touchStartDist / dist)));
                touchStartDist = dist;
                updateCamera();
            }
        }, { passive: false });

        canvas.addEventListener('touchend', function () {
            isDragging = false;
        });

        document.getElementById('btn-disassemble').addEventListener('click', startDisassembly);
        document.getElementById('btn-assemble').addEventListener('click', startAssembly);
        document.getElementById('btn-reset').addEventListener('click', resetView);

        window.addEventListener('resize', function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    function handleRaycast(e) {
        var rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(pivotGroup.children, true);

        var newHovered = null;
        if (intersects.length > 0) {
            var obj = intersects[0].object;
            while (obj.parent && obj.parent !== pivotGroup) {
                obj = obj.parent;
            }
            if (obj.parent === pivotGroup) {
                newHovered = obj;
            }
        }

        if (newHovered !== hoveredPart) {
            if (hoveredPart) {
                setPartHighlight(hoveredPart, false);
            }
            hoveredPart = newHovered;
            if (hoveredPart) {
                setPartHighlight(hoveredPart, true);
            }
        }

        var label = document.getElementById('part-label');
        var nameSpan = document.getElementById('part-name');
        if (hoveredPart && state !== 'assembling' && state !== 'disassembling') {
            nameSpan.textContent = hoveredPart.userData.name.toUpperCase();
            label.classList.add('visible');
        } else {
            label.classList.remove('visible');
        }
    }

    function setPartHighlight(group, highlight) {
        group.traverse(function (child) {
            if (child instanceof THREE.Mesh && child.material) {
                if (highlight) {
                    child.material.emissive = new THREE.Color(0x334466);
                    child.material.emissiveIntensity = 0.3;
                } else {
                    child.material.emissive = new THREE.Color(0x000000);
                    child.material.emissiveIntensity = 0;
                }
            }
        });
    }

    function updateButtonStates() {
        var disBtn = document.getElementById('btn-disassemble');
        var asmBtn = document.getElementById('btn-assemble');

        if (state === 'disassembling' || state === 'disassembled') {
            disBtn.disabled = true;
        } else {
            disBtn.disabled = false;
        }

        if (state === 'assembling' || state === 'assembled') {
            asmBtn.disabled = true;
        } else {
            asmBtn.disabled = false;
        }
    }

    var lastTime = 0;

    function animate(time) {
        requestAnimationFrame(animate);

        var dt = lastTime ? (time - lastTime) / 1000 : 1 / 60;
        lastTime = time;
        dt = Math.min(dt, 0.05);

        if (state === 'disassembling') {
            animProgress += dt / ANIMATION_DURATION;
            if (animProgress >= 1) {
                animProgress = 1;
                state = 'disassembled';
            }
            updatePartPositions(animProgress);
        } else if (state === 'assembling') {
            animProgress -= dt / ANIMATION_DURATION;
            if (animProgress <= 0) {
                animProgress = 0;
                state = 'assembled';
            }
            updatePartPositions(animProgress);
        }

        updateButtonStates();

        pivotGroup.rotation.y += dt * 0.06;

        renderer.render(scene, camera);
    }

    init();
    requestAnimationFrame(animate);
})();