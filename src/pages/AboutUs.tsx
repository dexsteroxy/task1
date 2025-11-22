import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import wallpaper from "/assets/wall-paper.jpeg"


const HeroSectionWithImage = () => {
  return (
    // Main Container
    <div className="relative min-h-screen w-full overflow-hidden flex items-center font-sans bg-[#020047]">
      
      {/* --- Background Image --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={wallpaper} // <--- PUT YOUR IMAGE SOURCE HERE
          alt="Hero Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Optional Overlay: If your image is too bright, uncomment the line below to add a dark tint so text remains readable */}
        {/* <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div> */}
      </div>


      {/* --- Main Content --- */}
      {/* z-10 ensures content sits on top of the background image */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
            <span className="text-[#22e05d]">Digital commerce experts</span>
            <br />
            with record-high NPS
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg text-gray-100 mb-10 leading-relaxed max-w-lg drop-shadow-sm">
            We power digital commerce with AI-driven platforms,
            <br className="hidden md:block" />
            scalable marketplaces, and omnichannel experiences.
          </p>

          {/* CTA Button */}
          <button className="group flex items-center gap-2 bg-[#22e05d] text-[#0a2a12] font-semibold py-3.5 px-6 rounded-md transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105 active:scale-95 shadow-lg shadow-[#22e05d]/20">
            Let's work together!
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
};


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
      
      <HeroSectionWithImage/>
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
