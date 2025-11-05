import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Finance = () => {
  const solutions = [
    {
      number: "1",
      title: "Personalized banking",
      description: "Retain and attract customers by offering personalized services that cater to their unique financial needs and preferences, while introducing new, comfortable experiences."
    },
    {
      number: "2",
      title: "Next-gen open finance",
      description: "Broaden your range of services and enhance your portfolio by leveraging the power of data analytics, advanced automation technologies, and seamless system integrations."
    },
    {
      number: "3",
      title: "Accelerated operations",
      description: "Optimize and transform your business operations by adopting MLOps frameworks which integrate ML into your workflow for enhanced productivity."
    },
    {
      number: "4",
      title: "Integrated digital environment",
      description: "Enhance the capabilities of your fintech solution by connecting it with digital banking platforms, internal systems, third-party services, and data sources."
    },
    {
      number: "5",
      title: "AI-powered acceleration",
      description: "From generative AI to predictive insights, we assist you in rapidly creating AI solutions, keeping your business at the forefront of innovation."
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
              Finance
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We offer tailored fintech software solutions to enhance financial processes and deliver exceptional user experiences for various financial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex gap-6 group"
              >
                <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {solution.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground text-lg">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">We serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Banks & Financial Services Companies",
              "Fintech Startups",
              "Insurance Companies",
              "Investment Firms",
              "Payment Processors",
              "Cryptocurrency Platforms"
            ].map((sector, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-all"
              >
                <h3 className="text-xl font-semibold">{sector}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your financial services?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build innovative fintech solutions.
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

export default Finance;
