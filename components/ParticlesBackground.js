// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

// export default function ParticlesBackground() {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: true, zIndex: -1 },
//         background: { color: { value: "transparent" } },
//         fpsLimit: 60,
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },
//             onClick: { enable: true, mode: "push" }
//           },
//           modes: {
//             repulse: { distance: 120, duration: 0.4 },
//             push: { quantity: 3 }
//           }
//         },
//         particles: {
//           color: { value: "#60a5fa" },
//           links: { enable: true, color: "#60a5fa", distance: 150, opacity: 0.25, width: 1 },
//           collisions: { enable: true },
//           move: { enable: true, speed: 1.5, outModes: { default: "bounce" } },
//           number: { value: 60, density: { enable: true, area: 800 } },
//           opacity: { value: 0.55 },
//           shape: { type: "circle" },
//           size: { value: { min: 2, max: 4 } }
//         },
//         detectRetina: true
//       }}
//     />
//   );
// }