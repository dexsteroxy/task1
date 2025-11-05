import ServicePageTemplate from "@/components/ServicePageTemplate";

const ProductStrategy = () => {
  return (
    <ServicePageTemplate
      title="Product Strategy Consulting"
      subtitle="Define a winning product strategy. We help you align your vision with market opportunities and user needs."
      deliverables={[
        {
          title: "Market Analysis",
          description: "Comprehensive analysis of your market, competitors, and opportunities for differentiation."
        },
        {
          title: "Product Roadmap",
          description: "Strategic roadmap that outlines your product evolution and key milestones."
        },
        {
          title: "Business Model",
          description: "Clear definition of how your product creates, delivers, and captures value."
        },
        {
          title: "Go-to-Market Strategy",
          description: "Detailed plan for launching and scaling your product successfully."
        }
      ]}
      testimonial={{
        logo: "Client Logo",
        quote: "They helped us transform a vision into a clear, actionable product strategy.",
        author: "CEO"
      }}
    />
  );
};

export default ProductStrategy;
