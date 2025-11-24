// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const HomeHeroSection = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Floating triangular shapes animation
//       const shapes = document.querySelectorAll(".floating-shape");
//       shapes.forEach((shape, index) => {
//         gsap.to(shape, {
//           y: `${-40 - index * 15}`,
//           x: `${10 + index * 5}`,
//           rotation: `${5 + index * 3}`,
//           duration: 4 + index * 0.5,
//           ease: "power1.inOut",
//           yoyo: true,
//           repeat: -1,
//           delay: index * 0.4,
//         });

//         gsap.to(shape, {
//           scale: 1.1,
//           duration: 3 + index * 0.3,
//           ease: "power1.inOut",
//           yoyo: true,
//           repeat: -1,
//           delay: index * 0.2,
//         });
//       });

//       // Fade in animation for content
//       gsap.from(contentRef.current, {
//         opacity: 0,
//         y: 50,
//         duration: 1.2,
//         ease: "power3.out",
//       });

//       // Animate title words
//       gsap.from(".home-title-word", {
//         opacity: 0,
//         y: 30,
//         stagger: 0.15,
//         duration: 0.8,
//         ease: "power3.out",
//         delay: 0.3,
//       });

//       // Animate subtitle
//       gsap.from(".home-subtitle", {
//         opacity: 0,
//         y: 20,
//         duration: 0.8,
//         ease: "power3.out",
//         delay: 1,
//       });

//       // Animate logos
//       gsap.from(".trusted-logos", {
//         opacity: 0,
//         y: 20,
//         duration: 0.8,
//         ease: "power3.out",
//         delay: 1.3,
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
//     >
//       {/* Animated background shapes */}
//       <div className="absolute inset-0">
//         {/* Large geometric background */}
//         <div className="absolute top-0 right-0 w-full h-full opacity-30">
//           <svg
//             width="100%"
//             height="100%"
//             viewBox="0 0 1920 1080"
//             preserveAspectRatio="xMidYMid slice"
//           >
//             <path d="M1920,0 L1920,1080 L800,1080 Z" fill="url(#grad1)" />
//             <defs>
//               <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop
//                   offset="0%"
//                   style={{ stopColor: "#374151", stopOpacity: 0.3 }}
//                 />
//                 <stop
//                   offset="100%"
//                   style={{ stopColor: "#1f2937", stopOpacity: 0.5 }}
//                 />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>

//         {/* Floating triangular shapes */}
//         <div
//           className="floating-shape absolute top-[15%] right-[15%] w-64 h-64 opacity-80"
//           style={{
//             clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
//             background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
//             filter: "blur(1px)",
//           }}
//         />
//         <div
//           className="floating-shape absolute top-[35%] right-[25%] w-48 h-48 opacity-70"
//           style={{
//             clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
//             background: "linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)",
//             filter: "blur(1px)",
//           }}
//         />
//         <div
//           className="floating-shape absolute top-[55%] right-[10%] w-56 h-56 opacity-75"
//           style={{
//             clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
//             background: "linear-gradient(135deg, #34d399 0%, #059669 100%)",
//             filter: "blur(1px)",
//           }}
//         />

//         {/* Glow effects */}
//         <div
//           className="absolute top-[30%] right-[20%] w-96 h-96 opacity-20"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
//             filter: "blur(60px)",
//           }}
//         />
//       </div>

//       <div ref={contentRef} className="relative z-10 container mx-auto px-6">
//         <div className="max-w-4xl">
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
//             <span className="home-title-word inline-block text-foreground">
//               {" "}
//               Building the Next Generation of
//             </span>
//             <span className="home-title-word inline-block text-primary">
//               Digital Startups
//             </span>
//           </h1>

//           <p className="home-subtitle text-xl md:text-2xl text-foreground/90 mb-12 max-w-2xl">
//             From web apps to AI-driven platforms, we build solutions that move
//             startups forward, fast, scalable, and built to adapt to the
//             ever-changing digital landscape.
//           </p>

//           <div className="trusted-logos">
//             <p className="text-sm text-foreground/60 mb-4">Trusted by:</p>
//             <div className="flex flex-wrap items-center gap-8">
//               <div className="text-foreground/60 font-bold text-2xl">IKEA</div>
//               <div className="text-foreground/60 font-bold text-2xl">
//                 volkswagen
//               </div>
//               <div className="text-foreground/60 font-bold text-2xl">olx</div>
//               <div className="text-foreground/60 font-bold text-2xl">żabka</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeHeroSection;






import React from 'react'

const HomeHeroSection = () => {
  return (
    <div className=' text-5xl font-extrabold justify-center mt-32 text-white text-center'>Not Interested again: Sorry this page is not available again</div>
  )
}

export default HomeHeroSection