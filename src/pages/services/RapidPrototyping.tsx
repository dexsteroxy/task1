import ServicePageTemplate from "@/components/ServicePageTemplate";

const RapidPrototyping = () => {
  return (
    <ServicePageTemplate
      title="Rapid Prototyping"
      subtitle="Transform your ideas into interactive prototypes. We'll help you test, validate, and refine your concept before full-scale development."
      deliverables={[
        {
          title: "Product prototype",
          description: "We'll deliver a clickable prototype, consisting of up to three features, ready to test user behaviour or show to your investors."
        },
        {
          title: "Report",
          description: "We'll offer you all the technical recommendations regarding the architecture. No guesswork needed."
        },
        {
          title: "Comprehensive roadmap",
          description: "You'll get all the technical know-how and usability testing results brought together for a clear picture of how to progress your app as part of an effective, long-term development strategy."
        },
        {
          title: "Further development",
          description: "We'll provide you with an estimate and a plan for continued development services."
        }
      ]}
      testimonial={{
        logo: "Client Logo",
        quote: "Excellence and speed. It's rare to get both, and Netguru delivers.",
        author: "Client Representative"
      }}
    />
  );
};

export default RapidPrototyping;
