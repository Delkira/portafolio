import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();

        // Crear el renderer y ajustarlo al tamaño de la ventana
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(new THREE.Color('#2b0a2f')); // Fondo morado oscuro
        mountRef.current.appendChild(renderer.domElement);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Estrellas
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 2000;
        const starPositions = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount * 3; i++) {
            starPositions[i] = (Math.random() - 0.5) * 150;
        }
        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMaterial = new THREE.PointsMaterial({
            color: new THREE.Color('#ff88cc'),
            size: 0.3,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8,
        });
        const starField = new THREE.Points(starGeometry, starMaterial);
        scene.add(starField);

        // Nebulosa: Usar un plano con textura para mejor control
        const textureLoader = new THREE.TextureLoader();
        let nebulaMaterial = null;
        textureLoader.load('/path-to-nebula-texture.png', (texture) => {
            // Textura cargada correctamente
            nebulaMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                opacity: 0.4,
                side: THREE.DoubleSide, // Asegurarse de que sea visible desde todos los ángulos
            });

            const nebulaGeometry = new THREE.PlaneGeometry(120, 120);
            const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
            nebula.position.set(0, 0, -2); // Colocamos la nebulosa un poco más cerca de la cámara
            scene.add(nebula);
        }, undefined, (err) => {
        });

        // Luz ambiental
        const ambientLight = new THREE.AmbientLight(0x6c006c, 0.3);
        scene.add(ambientLight);

        // Efecto de paralaje con mouse
        const mouse = { x: 0, y: 0 };
        const handleMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Ajuste dinámico al tamaño de la ventana
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Animación del fondo
        const animate = () => {
            requestAnimationFrame(animate);

            // Movimiento de las estrellas y efecto de paralaje
            starField.rotation.x += 0.0005;
            starField.rotation.y += 0.0005;

            starField.rotation.x += mouse.y * 0.002;
            starField.rotation.y += mouse.x * 0.002;

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup cuando el componente se desmonta
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
            starGeometry.dispose();
            starMaterial.dispose();
            // Si la textura fue cargada, limpiarla también
            if (nebulaMaterial) {
                nebulaMaterial.map.dispose();
                nebulaMaterial.dispose();
            }
        };
    }, []);

    return (
        <>
        <div ref={mountRef} className="fixed inset-0 -z-1 w-full h-full" />
        </>
    );
}
