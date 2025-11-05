const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business needs, target audience, and project goals to create a solid foundation.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Our designers craft intuitive, visually stunning interfaces that align with your brand identity.",
    },
    {
      number: "03",
      title: "Development",
      description: "We build scalable, high-performance solutions using cutting-edge technologies and best practices.",
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Rigorous quality assurance ensures your product is bug-free and ready to make an impact.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our proven <span className="text-primary">development process</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From concept to launch, we follow a structured approach that ensures success at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
