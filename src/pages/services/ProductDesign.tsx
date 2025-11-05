import ServicePageTemplate from "@/components/ServicePageTemplate";

const ProductDesign = () => {
  return (
    <ServicePageTemplate
      title="Product Design"
      subtitle="Create exceptional digital experiences. End-to-end product design that delights users and drives business results."
      deliverables={[
        {
          title: "Design System",
          description: "Comprehensive design systems that ensure consistency and scalability across your product."
        },
        {
          title: "User Interface Design",
          description: "Beautiful, intuitive interfaces that make complex interactions feel simple."
        },
        {
          title: "Prototyping",
          description: "Interactive prototypes for testing and validation before development begins."
        },
        {
          title: "Design Handoff",
          description: "Detailed specifications and assets ready for seamless developer implementation."
        }
      ]}
      testimonial={{
        logo: "Client Logo",
        quote: "The design quality transformed our product and significantly improved user engagement.",
        author: "Head of Product"
      }}
    />
  );
};

export default ProductDesign;
