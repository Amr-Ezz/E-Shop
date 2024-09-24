import * as THREE from "three";
import {useRef, useEffect} from "react";

interface Image3DProps {
    url: string;
}

const Image3D: React.FC<Image3DProps> = ({url}) => {
    const mountRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;
        const renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current?.appendChild(renderer.domElement);
        const loader = new THREE.TextureLoader();
        const texture = loader.load(url);
        const geometry = new THREE.PlaneGeometry(3, 3);
        const material = new THREE.MeshBasicMaterial({map: texture});
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);
        const animate = () => {
            requestAnimationFrame(animate);
            plane.rotation.x += 0.01;
            plane.rotation.y += 0.01;
            renderer.render(scene, camera);

        };
        animate();
        return () => {
            mountRef.current?.removeChild(renderer.domElement);

        };
    }, [url]);
    return <div ref={mountRef}></div>;
};
export default Image3D;