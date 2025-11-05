import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const JoinNetguru = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Be part of a team that's shaping the future of digital products. Work on exciting projects with leading brands from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Why Join Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Meaningful Projects",
                description: "Work on impactful projects for global brands and innovative startups that make a real difference."
              },
              {
                title: "Growth & Learning",
                description: "Continuous learning opportunities, mentorship programs, and professional development support."
              },
              {
                title: "Remote-First Culture",
                description: "Work from anywhere with flexible hours that respect your work-life balance."
              },
              {
                title: "Great Team",
                description: "Collaborate with talented professionals who are passionate about what they do."
              },
              {
                title: "Modern Tech Stack",
                description: "Work with cutting-edge technologies and tools that keep your skills sharp."
              },
              {
                title: "Competitive Benefits",
                description: "Attractive salary, benefits package, and opportunities for career advancement."
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

      {/* Roles Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Full-Stack Developers",
              "Frontend Developers",
              "Backend Engineers",
              "Mobile Developers",
              "Product Designers",
              "UX Researchers",
              "Product Managers",
              "DevOps Engineers",
              "QA Engineers"
            ].map((role, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-2">{role}</h3>
                <p className="text-sm text-muted-foreground">View open positions →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to make an impact?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our current openings and find the perfect role for you.
          </p>
          <Button size="lg" className="text-lg px-8">
            View All Positions →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinNetguru;
