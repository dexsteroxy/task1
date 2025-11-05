import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Otodom = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Otodom – Product Design Excellence
            </h1>
            <p className="text-xl text-muted-foreground">
              Otodom is the leading Polish real estate marketplace where sellers, landlords, buyers, and renters connect to find their perfect property.
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
              OLX Group has exceedingly high standards when it comes to their digital products, and it shines through in every brand, including Otodom. With high standards comes the demand for expert talent, and in this ongoing collaboration, we help satisfy that demand with top-notch Product Designers.
            </p>
            <p className="text-lg text-muted-foreground">
              New team members are vetted by us, then vetted by the Otodom team, and only then they can join the project. Starting as consultants, our experts were taking on increasingly more responsibilities over different design aspects of Otodom.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Project Challenges</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Low availability of talent that meets the high requirements of Otodom stakeholders.",
              "Recruitment couldn't fully satisfy the demands of the fast-changing Otodom development environment.",
              "Product Designers need to have a vast product background, but also understand how design influences OKRs of different teams.",
              "High level of agility required from designers, with an ability to jump into different projects and quickly create added value.",
              "Complex design process involving cooperation with many stakeholders and multiple teams."
            ].map((challenge, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Impact & Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Seamless Integration",
                description: "Our designers integrated smoothly into Otodom's existing teams and processes."
              },
              {
                title: "Enhanced User Experience",
                description: "Improved product design leading to better user engagement and satisfaction."
              },
              {
                title: "Scalable Design Systems",
                description: "Established design systems that support rapid product iteration and growth."
              }
            ].map((result, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">{result.title}</h3>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Want similar results?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our design expertise can help elevate your product.
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

export default Otodom;
