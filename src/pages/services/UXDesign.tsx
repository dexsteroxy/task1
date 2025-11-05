import ServicePageTemplate from "@/components/ServicePageTemplate";

const UXDesign = () => {
  return (
    <ServicePageTemplate
      title="UX Design"
      subtitle="Design experiences that convert. User-centered design backed by research, testing, and data-driven insights."
      deliverables={[
        {
          title: "User Journey Mapping",
          description: "Visualize and optimize every touchpoint in your user's journey."
        },
        {
          title: "Information Architecture",
          description: "Structure content and features for optimal findability and usability."
        },
        {
          title: "Wireframing",
          description: "Detailed wireframes that define layout, hierarchy, and interaction patterns."
        },
        {
          title: "Usability Testing",
          description: "Validate design decisions with real users before final implementation."
        }
      ]}
      testimonial={{
        logo: "Client Logo",
        quote: "Their UX expertise dramatically improved our conversion rates and user satisfaction.",
        author: "Director of UX"
      }}
    />
  );
};

export default UXDesign;
