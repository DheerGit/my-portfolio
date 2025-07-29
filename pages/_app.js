// import "@/styles/globals.css";
// import ParticlesBackground from "@/components/ParticlesBackground";

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <ParticlesBackground />
//       <div style={{ position: "relative", zIndex: 1 }}>
//         <Component {...pageProps} />
//       </div>
//     </>
//   );
// }
// import "@/styles/globals.css";
// import ThreePointCloud from "@/components/ThreePointCloud";

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <ThreePointCloud />
//       <div style={{ position: "relative", zIndex: 1 }}>
//         <Component {...pageProps} />
//       </div>
//     </>
//   );
// }
// pages/_app.js

import '../styles/globals.css';
import ThreePointCloud from '@/components/ThreePointCloud';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThreePointCloud />
      <Navbar />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}


