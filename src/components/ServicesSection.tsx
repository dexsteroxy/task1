import { useEffect, useRef } from "react";
import { Globe, ShoppingCart, FileText, Code2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import gsap from "gsap";

const ServicesSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.service-card');
    if (cards) {
      cards.forEach((card, index) => {
        gsap.to(card, {
          y: -15,
          duration: 2 + (index * 0.2),
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2,
        });
      });
    }
  }, []);
  const services = [
    {
      icon: Globe,
      title: "Websites",
      description: "A well-designed website is a powerful marketing and communication tool that helps build trust and generate leads.",
      link: "#websites",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce",
      description: "With eCommerce solutions, businesses can operate 24/7 and reach customers in any time zone.",
      link: "#ecommerce",
    },
    {
      icon: FileText,
      title: "Content Management Systems",
      description: "A dedicated CMS designed to your specific needs will save time and optimize internal workflows.",
      link: "#cms",
    },
    {
      icon: Code2,
      title: "Web Applications",
      description: "Web applications can reach a global audience. They're interactive and engaging to hold users' attention.",
      link: "#web-apps",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achieve your business goals<br />
            with <span className="text-primary">web development solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our battle-tested developers specialize in a wide range of web development services. Here's what we deliver.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="service-card bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
