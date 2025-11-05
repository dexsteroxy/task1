import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on hero background
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating boxes animation
      const boxes = document.querySelectorAll('.floating-box');
      boxes.forEach((box, index) => {
        gsap.to(box, {
          y: `${-30 - (index * 10)}`,
          duration: 3 + (index * 0.5),
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.3,
        });
        
        gsap.to(box, {
          rotateX: 10,
          rotateY: 10,
          duration: 4 + (index * 0.3),
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2,
        });
      });

      // Moving spotlight effect
      gsap.to('.spotlight', {
        x: '100vw',
        duration: 8,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });

      // Fade in animation for content
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
      });

      // Animate title words
      gsap.from(".hero-title-word", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      });

      // Animate subtitle
      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
      });

      // Animate CTA buttons
      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
        
        {/* Moving spotlight */}
        <div 
          className="spotlight absolute top-0 left-0 w-[800px] h-full opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        
        {/* Floating 3D boxes */}
        <div className="floating-box absolute top-[20%] left-[15%] w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 opacity-80 rounded-lg shadow-2xl" 
          style={{ transform: 'perspective(1000px) rotateX(10deg) rotateY(-10deg)' }} />
        <div className="floating-box absolute top-[50%] left-[25%] w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 opacity-70 rounded-lg shadow-2xl" 
          style={{ transform: 'perspective(1000px) rotateX(-5deg) rotateY(15deg)' }} />
        <div className="floating-box absolute top-[30%] right-[20%] w-40 h-40 bg-gradient-to-br from-gray-700 to-gray-900 opacity-85 rounded-lg shadow-2xl" 
          style={{ transform: 'perspective(1000px) rotateX(15deg) rotateY(-20deg)' }} />
        <div className="floating-box absolute bottom-[30%] right-[15%] w-28 h-28 bg-gradient-to-br from-gray-600 to-gray-800 opacity-75 rounded-lg shadow-2xl" 
          style={{ transform: 'perspective(1000px) rotateX(-10deg) rotateY(10deg)' }} />
        <div className="floating-box absolute top-[60%] left-[10%] w-36 h-36 bg-gradient-to-br from-gray-700 to-gray-900 opacity-80 rounded-lg shadow-2xl" 
          style={{ transform: 'perspective(1000px) rotateX(5deg) rotateY(-15deg)' }} />
        
        {/* Green accent bracket */}
        <div className="absolute top-[30%] right-[10%] w-32 h-32 border-4 border-primary opacity-80 rounded-lg"
          style={{ 
            borderLeft: 'none', 
            borderTop: 'none',
            transform: 'perspective(1000px) rotateX(10deg) rotateY(-20deg)'
          }} />
      </div>

      <div ref={contentRef} className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="hero-title-word inline-block text-primary">Web Development</span>{" "}
          <span className="hero-title-word inline-block text-foreground">Services</span>
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto">
          We design and build industry-leading web-based products that delight your customers
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <span>4.9 on Clutch</span>
          </div>
          <Button 
            size="lg" 
            className="bg-primary text-background hover:bg-primary/90 font-semibold px-8"
          >
            Estimate project →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
