import ServicePageTemplate from "@/components/ServicePageTemplate";

const CloudStrategy = () => {
  return (
    <ServicePageTemplate
      title="Cloud Strategy"
      subtitle="Optimize your cloud infrastructure. From migration to optimization, we help you leverage cloud technologies effectively."
      deliverables={[
        {
          title: "Cloud Assessment",
          description: "Evaluate your current infrastructure and identify opportunities for cloud adoption."
        },
        {
          title: "Migration Planning",
          description: "Detailed strategy for migrating workloads to the cloud with minimal disruption."
        },
        {
          title: "Cost Optimization",
          description: "Reduce cloud spending through architecture optimization and resource management."
        },
        {
          title: "Security & Compliance",
          description: "Ensure your cloud infrastructure meets security standards and regulatory requirements."
        }
      ]}
      testimonial={{
        logo: "Client Logo",
        quote: "Their cloud expertise saved us significant costs while improving performance.",
        author: "CTO"
      }}
    />
  );
};

export default CloudStrategy;
