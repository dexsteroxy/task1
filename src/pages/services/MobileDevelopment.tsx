import ServicePageTemplate from "@/components/ServicePageTemplate";

const MobileDevelopment = () => {
  return (
    <ServicePageTemplate
      title="Mobile Development"
      subtitle="Build powerful mobile experiences. Native iOS, Android, or cross-platform solutions tailored to your needs."
      deliverables={[
        {
          title: "Native Apps",
          description: "High-performance native applications for iOS and Android with platform-specific optimizations."
        },
        {
          title: "Cross-Platform",
          description: "Cost-effective React Native or Flutter solutions that work seamlessly across platforms."
        },
        {
          title: "App Store Optimization",
          description: "Expert guidance on app store presence, compliance, and optimization for discovery."
        },
        {
          title: "Maintenance & Support",
          description: "Ongoing updates, bug fixes, and feature enhancements to keep your app competitive."
        }
      ]}
      testimonial={{
        logo: "Client Logo",
        quote: "Our mobile app exceeded expectations in both performance and user experience.",
        author: "Mobile Product Lead"
      }}
    />
  );
};

export default MobileDevelopment;
