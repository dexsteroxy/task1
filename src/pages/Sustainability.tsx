import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Sustainability
            </h1>
            <p className="text-xl text-muted-foreground">
              Building a better future through responsible business practices and meaningful environmental and social impact.
            </p>
          </div>
        </div>
      </section>

      {/* B Corp Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Certified B Corporation®</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We're proud to be a certified B Corporation®, meeting the highest standards of verified social and environmental performance, public transparency, and legal accountability to balance profit and purpose.
            </p>
            <p className="text-lg text-muted-foreground">
              B Corps are businesses that meet the highest standards of verified social and environmental performance, public transparency, and legal accountability, and aspire to use the power of markets to solve social and environmental problems.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Commitments</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Environmental Responsibility",
                description: "Minimizing our carbon footprint through remote-first operations, sustainable office practices, and conscious technology choices."
              },
              {
                title: "Social Impact",
                description: "Supporting our communities through volunteer programs, pro-bono work, and partnerships with social enterprises."
              },
              {
                title: "Ethical Business",
                description: "Maintaining transparency, fairness, and integrity in all our business relationships and practices."
              },
              {
                title: "Employee Wellbeing",
                description: "Creating a supportive, inclusive workplace where our team can thrive both professionally and personally."
              }
            ].map((commitment, index) => (
              <div
                key={index}
                className="bg-muted/30 p-8 rounded-lg border border-border"
              >
                <h3 className="text-2xl font-bold mb-4">{commitment.title}</h3>
                <p className="text-muted-foreground">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Making a Difference</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Remote-First Culture",
                description: "Reducing commute-related emissions while supporting work-life balance"
              },
              {
                title: "Green Technology",
                description: "Helping clients build sustainable digital solutions"
              },
              {
                title: "Continuous Improvement",
                description: "Regularly measuring and improving our impact"
              }
            ].map((impact, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border text-center">
                <h3 className="text-xl font-bold mb-4">{impact.title}</h3>
                <p className="text-muted-foreground text-sm">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;
