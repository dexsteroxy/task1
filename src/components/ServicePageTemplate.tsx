import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface ServicePageTemplateProps {
  title: string;
  subtitle?: string;
  heroImage?: string;
  deliverables: Array<{
    title: string;
    description: string;
  }>;
  testimonial?: {
    logo: string;
    quote: string;
    author?: string;
  };
}

const ServicePageTemplate = ({
  title,
  subtitle,
  heroImage,
  deliverables,
  testimonial,
}: ServicePageTemplateProps) => {
  const floatingShapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (floatingShapesRef.current) {
      const shapes = floatingShapesRef.current.querySelectorAll(".floating-shape");
      shapes.forEach((shape, index) => {
        gsap.to(shape, {
          y: -30,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2,
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        <div ref={floatingShapesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-shape absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-lg rotate-12" />
          <div className="floating-shape absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-lg -rotate-12" />
          <div className="floating-shape absolute bottom-20 left-1/4 w-24 h-24 bg-accent/10 rounded-lg rotate-45" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-muted-foreground max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {testimonial && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 p-12 rounded-2xl border border-border">
              <blockquote className="text-2xl font-medium mb-6 text-foreground">
                "{testimonial.quote}"
              </blockquote>
              {testimonial.author && (
                <p className="text-muted-foreground">{testimonial.author}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your goals.
          </p>
          <Button size="lg" className="text-lg px-8">
            Estimate project →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
