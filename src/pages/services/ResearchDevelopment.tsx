import ServicePageTemplate from "@/components/ServicePageTemplate";

const ResearchDevelopment = () => {
  return (
    <ServicePageTemplate
      title="Research & Development"
      subtitle="Explore new technologies and innovative solutions. We help you stay ahead of the curve with cutting-edge R&D services."
      deliverables={[
        {
          title: "Technology Assessment",
          description: "Comprehensive evaluation of emerging technologies and their potential application to your business needs."
        },
        {
          title: "Proof of Concept",
          description: "Validate your ideas with working prototypes that demonstrate feasibility and potential value."
        },
        {
          title: "Innovation Strategy",
          description: "Strategic roadmap for implementing new technologies and staying competitive in your market."
        },
        {
          title: "Technical Documentation",
          description: "Detailed documentation of research findings, recommendations, and implementation guidelines."
        }
      ]}
      testimonial={{
        logo: "Client Logo",
        quote: "Their R&D expertise helped us identify and implement game-changing technologies.",
        author: "Technology Director"
      }}
    />
  );
};

export default ResearchDevelopment;
