'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface LightPillarProps {
    topColor?: string;
    bottomColor?: string;
    intensity?: number;
    rotationSpeed?: number;
    interactive?: boolean;
    className?: string;
    glowAmount?: number;
    pillarWidth?: number;
    pillarHeight?: number;
    noiseIntensity?: number;
    mixBlendMode?: React.CSSProperties['mixBlendMode'];
    pillarRotation?: number;
    quality?: 'low' | 'medium' | 'high';
}

const LightPillar: React.FC<LightPillarProps> = ({
    topColor = '#5227FF',
    bottomColor = '#FF9FFC',
    intensity = 1.0,
    rotationSpeed = 0.3,
    interactive = false,
    className = '',
    glowAmount = 0.005,
    pillarWidth = 3.0,
    pillarHeight = 0.4,
    noiseIntensity = 0.5,
    mixBlendMode = 'screen',
    pillarRotation = 0,
    quality = 'high',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);

    // 🔧 Relaxed typing
    const rendererRef = useRef<any>(null);
    const materialRef = useRef<any>(null);
    const sceneRef = useRef<any>(null);
    const cameraRef = useRef<any>(null);
    const geometryRef = useRef<any>(null);
    const mouseRef = useRef<any>(new THREE.Vector2(0, 0));

    const timeRef = useRef<number>(0);
    const [webGLSupported, setWebGLSupported] = useState<boolean>(true);

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const gl =
            canvas.getContext('webgl') ||
            canvas.getContext('experimental-webgl');
        if (!gl) setWebGLSupported(false);
    }, []);

    useEffect(() => {
        if (!containerRef.current || !webGLSupported) return;

        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        cameraRef.current = camera;

        let renderer: any;

        try {
            renderer = new THREE.WebGLRenderer({
                antialias: false,
                alpha: true,
            });
        } catch (error) {
            console.error('WebGL renderer failed:', error);
            setWebGLSupported(false);
            return;
        }

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const parseColor = (hex: string) => {
            const color = new THREE.Color(hex);
            return new THREE.Vector3(color.r, color.g, color.b);
        };

        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            uniform float uTime;
            uniform vec2 uResolution;
            uniform vec3 uTopColor;
            uniform vec3 uBottomColor;
            varying vec2 vUv;

            void main() {
                vec2 uv = vUv;
                float glow = abs(sin(uTime + uv.y * 4.0));
                vec3 color = mix(uBottomColor, uTopColor, uv.y);
                gl_FragColor = vec4(color * glow, 1.0);
            }
        `;

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2(width, height) },
                uTopColor: { value: parseColor(topColor) },
                uBottomColor: { value: parseColor(bottomColor) },
            },
            transparent: true,
            depthWrite: false,
            depthTest: false,
        });

        materialRef.current = material;

        const geometry = new THREE.PlaneGeometry(2, 2);
        geometryRef.current = geometry;

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const animate = () => {
            if (!materialRef.current || !rendererRef.current) return;

            timeRef.current += 0.02 * rotationSpeed;
            materialRef.current.uniforms.uTime.value = timeRef.current;

            rendererRef.current.render(sceneRef.current, cameraRef.current);
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        const handleResize = () => {
            if (!rendererRef.current || !containerRef.current) return;
            const newWidth = containerRef.current.clientWidth;
            const newHeight = containerRef.current.clientHeight;
            rendererRef.current.setSize(newWidth, newHeight);
            materialRef.current.uniforms.uResolution.value.set(
                newWidth,
                newHeight
            );
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);

            if (rafRef.current) cancelAnimationFrame(rafRef.current);

            if (rendererRef.current) {
                rendererRef.current.dispose();
                rendererRef.current.forceContextLoss();
                if (container.contains(rendererRef.current.domElement)) {
                    container.removeChild(rendererRef.current.domElement);
                }
            }

            if (materialRef.current) materialRef.current.dispose();
            if (geometryRef.current) geometryRef.current.dispose();

            rendererRef.current = null;
            materialRef.current = null;
            sceneRef.current = null;
            cameraRef.current = null;
            geometryRef.current = null;
            rafRef.current = null;
        };
    }, [topColor, bottomColor, rotationSpeed, webGLSupported]);

    if (!webGLSupported) {
        return (
            <div
                className={`w-full h-full absolute top-0 left-0 flex items-center justify-center text-gray-500 text-sm ${className}`}
                style={{ mixBlendMode }}
            >
                WebGL not supported
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className={`w-full h-full absolute top-0 left-0 ${className}`}
            style={{ mixBlendMode }}
        />
    );
};

export default LightPillar;
