// import { Canvas } from "@react-three/fiber";

// export default function ThreePointCloud() {
//   return (
//     <Canvas
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: -1,
//         width: "100vw",
//         height: "100vh",
//         background: "#000"
//       }}
//     >
//       <mesh>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color="red" />
//       </mesh>≠
//       <ambientLight />
//     </Canvas>
//   );
// }
// components/PointCloudBackground.js



import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";

function SparsePointCloud() {
  const points = useMemo(() => {
    const arr = [];
    const count = 2000;
    const spread = 40;
    for (let i = 0; i < count; i++) {
      arr.push(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread
      );
    }
    return new Float32Array(arr);
  }, []);

  const group = useRef();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const autoRotationY = useRef(0);  // accumulate auto rotation here

  useEffect(() => {
    function onMouseMove(e) {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  useFrame(() => {
    if (group.current) {
      // Increase auto rotation angle steadily
      autoRotationY.current += 0.002;

      // Target rotations = autoRotation + mouse offset
      const targetRotY = autoRotationY.current + mouse.x * Math.PI * 0.25;
      const targetRotX = mouse.y * Math.PI * 0.1;

      // Smoothly lerp current rotation toward target rotation
      group.current.rotation.y = lerp(group.current.rotation.y, targetRotY, 0.1);
      group.current.rotation.x = lerp(group.current.rotation.x, targetRotX, 0.1);

      // Clamp x rotation
      const maxX = Math.PI / 6;
      group.current.rotation.x = Math.min(
        maxX,
        Math.max(-maxX, group.current.rotation.x)
      );
    }
  });

  return (
    <group ref={group}>
      <Points positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#7fbcff"
          size={0.04}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function TestThree() {
  return (
    <Canvas
      gl={{ alpha: true }}
      style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: -1, background: "linear-gradient(135deg, #0B0C10 50%, #1a1f3a 100%)" }}
      camera={{ position: [0, 0, 15], fov: 60 }}
    >
      <ambientLight intensity={0.4} />
      <SparsePointCloud />
    </Canvas>
  );
}