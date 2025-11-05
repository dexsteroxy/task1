import ServicePageTemplate from "@/components/ServicePageTemplate";

const MVP = () => {
  return (
    <ServicePageTemplate
      title="MVP Development Services"
      subtitle="Launch faster, learn quicker. Build a Minimum Viable Product that validates your concept and attracts early users."
      deliverables={[
        {
          title: "Core Features",
          description: "Focus on essential functionality that delivers maximum value to early adopters."
        },
        {
          title: "Rapid Development",
          description: "Get to market quickly with agile development practices and prioritized feature sets."
        },
        {
          title: "User Feedback Loop",
          description: "Built-in analytics and feedback mechanisms to learn from real users."
        },
        {
          title: "Scaling Plan",
          description: "Architecture and roadmap designed for easy scaling as your product grows."
        }
      ]}
      testimonial={{
        logo: "Client Logo",
        quote: "They helped us launch our MVP in record time without compromising on quality.",
        author: "Startup Founder"
      }}
    />
  );
};

export default MVP;
