import { useEffect, useRef } from "react";
import gsap from "gsap";

const TechStackSection = () => {
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const badges = techRef.current?.querySelectorAll('.tech-badge');
    if (badges) {
      badges.forEach((badge, index) => {
        gsap.to(badge, {
          y: -10,
          duration: 1.5 + (index * 0.1),
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.1,
        });
      });
    }
  }, []);

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Next.js", category: "Framework" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "PostgreSQL", category: "Database" },
    { name: "GraphQL", category: "API" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "MongoDB", category: "Database" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Python", category: "Backend" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Technologies</span> we master
          </h2>
          <p className="text-xl text-muted-foreground">
            We work with modern, battle-tested technologies to build products that scale.
          </p>
        </div>

        <div ref={techRef} className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-badge px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
                <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
