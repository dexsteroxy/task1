import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const values = [
    {
      number: "01",
      title: "Exceed expectations",
      description: "Never settle for 'good enough' when you know you can and should do better."
    },
    {
      number: "02",
      title: "Take ownership and question the status quo",
      description: "Trust your gut and your knowledge even if you need to question your team leader or CEO. Make sure your feedback is constructive."
    },
    {
      number: "03",
      title: "Be brave, curious, and experiment",
      description: "Learn from failures and celebrate success. Share your knowledge and grow together."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Accelerate <span className="text-primary">digital</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We empower leading brands to transform B2B solutions, marketplaces, and retail ecosystems with cutting-edge technology, AI-powered personalization, and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "17+", label: "years in the market" },
              { number: "400+", label: "people on board" },
              { number: "2500+", label: "projects delivered" },
              { number: "73", label: "our current NPS" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl leading-relaxed text-muted-foreground mb-8">
              Since 2008, we've supported forward-thinking businesses in driving growth across the US, UK, DACH, and MENA regions. A certified B Corporation®, we're trusted by major brands including IKEA, VW, OLX, Żabka, Careem, and Vinted.
            </p>
            <blockquote className="text-2xl font-medium border-l-4 border-primary pl-6 italic">
              "As we go from one fundamental technology shift to another, one thing is clear—top-notch user experience is at the heart of product success. And it just so happens that it's where we excel."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-lg border border-border"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">{value.number}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's work together!</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to accelerate your digital transformation? Let's discuss your project.
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

export default AboutUs;
