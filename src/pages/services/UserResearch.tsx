import ServicePageTemplate from "@/components/ServicePageTemplate";

const UserResearch = () => {
  return (
    <ServicePageTemplate
      title="User Research & Testing"
      subtitle="Understand your users deeply. Make data-driven decisions with comprehensive user research and testing methodologies."
      deliverables={[
        {
          title: "User Interviews",
          description: "In-depth qualitative research to understand user needs, behaviors, and pain points."
        },
        {
          title: "Usability Testing",
          description: "Observe real users interacting with your product to identify usability issues and opportunities."
        },
        {
          title: "Research Reports",
          description: "Detailed findings and actionable insights from all research activities."
        },
        {
          title: "User Personas",
          description: "Well-defined personas based on real user data to guide design and development decisions."
        }
      ]}
      testimonial={{
        logo: "Client Logo",
        quote: "The user insights we gained were invaluable in shaping our product strategy.",
        author: "Product Manager"
      }}
    />
  );
};

export default UserResearch;
