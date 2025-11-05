import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ComposableCommerce = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Composable Commerce
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Build flexible, scalable commerce experiences with modern composable architecture. Choose best-of-breed solutions and adapt quickly to changing market demands.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Why Composable Commerce?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Flexibility & Agility",
                description: "Adapt quickly to market changes by swapping out components without rebuilding your entire system."
              },
              {
                title: "Best-of-Breed Solutions",
                description: "Choose the best tools for each function instead of settling for an all-in-one compromise."
              },
              {
                title: "Faster Time-to-Market",
                description: "Launch new features and experiences faster with modular, API-first architecture."
              },
              {
                title: "Future-Proof Technology",
                description: "Stay ahead with a modern tech stack that evolves with your business needs."
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-muted/30 p-8 rounded-lg border border-border hover:border-primary/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Our Composable Commerce Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Architecture Design",
              "Platform Selection",
              "API Integration",
              "Headless CMS Implementation",
              "Payment Gateway Integration",
              "Order Management Systems",
              "Search & Personalization",
              "Performance Optimization",
              "Migration Services"
            ].map((service, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border border-border"
              >
                <h3 className="text-lg font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to go composable?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build a flexible commerce platform that grows with your business.
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

export default ComposableCommerce;
