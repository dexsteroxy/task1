import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Vinted = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Vinted – Marketplace Team Extension
            </h1>
            <p className="text-xl text-muted-foreground">
              Scaling Europe's leading secondhand fashion marketplace with dedicated development teams and on-demand expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Vinted is a leading online marketplace for buying, selling, and exchanging new or secondhand items, primarily focusing on fashion. As one of Europe's fastest-growing platforms, Vinted needed to scale their development capabilities rapidly.
            </p>
            <p className="text-lg text-muted-foreground">
              We provided dedicated development teams and on-demand expertise to support Vinted's growth, helping them ship features faster and maintain their competitive edge in the marketplace space.
            </p>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Contribution</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Dedicated Teams",
                description: "Full-stack development teams working as an extension of Vinted's in-house engineering organization."
              },
              {
                title: "Mobile Development",
                description: "Enhanced mobile app experiences for both iOS and Android platforms."
              },
              {
                title: "Backend Engineering",
                description: "Scalable backend systems to handle millions of users and transactions."
              },
              {
                title: "Quality Assurance",
                description: "Comprehensive testing strategies ensuring platform reliability and performance."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-muted/30 p-8 rounded-lg border border-border hover:border-primary/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Project Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "Faster",
                label: "Feature Delivery",
                description: "Accelerated development cycles with dedicated teams"
              },
              {
                metric: "Scalable",
                label: "Architecture",
                description: "Infrastructure supporting millions of active users"
              },
              {
                metric: "Seamless",
                label: "Integration",
                description: "Our teams integrated perfectly with Vinted's culture"
              }
            ].map((impact, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">{impact.metric}</div>
                <div className="text-xl font-semibold mb-2">{impact.label}</div>
                <p className="text-muted-foreground text-sm">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Need to scale your team?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our team extension services can accelerate your growth.
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

export default Vinted;
