import React from 'react';
import { 
  Lightbulb, 
  Palette, 
  Code, 
  Smartphone, 
  Brain, 
  Shield,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { NavigationMenuSub } from '@radix-ui/react-navigation-menu';
import Navigation from '@/components/Navigation';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
        {/* <NavigationMenuSub/> */}
        <Navigation/>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(235,60%,20%)]">
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-cyan-400 blur-[120px] opacity-60" />
        <div className="absolute top-20 right-32 w-80 h-80 rounded-full bg-blue-500 blur-[140px] opacity-50" />
        <div className="absolute bottom-32 left-1/2 w-72 h-72 rounded-full bg-purple-600 blur-[130px] opacity-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pink-600 blur-[150px] opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Digital acceleration services
              <br />
              for <span className="text-green-400">business growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Design. Development. AI. 17 years and counting.
            </p>
          </div>
        </div>
      </section>

      {/* One-stop shop section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            One-stop shop for <span className="text-primary">digital</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
            We help deliver digital excellence at every stage of the product journey, from early ideation to research, prototyping, testing, launch, and ongoing support. Explore our end-to-end services designed to improve business metrics and deliver delightful digital experiences.
          </p>
        </div>
      </section>

      {/* Ideation & Evaluation Section */}
      <ServiceSection
        icon={Lightbulb}
        title="Ideation and"
        highlightedTitle="evaluation"
        description="Ideas can take a while to mature. We're here to speed up the process. Plan and evaluate the essential features of your product to accomplish your business goals and enjoy tangible results."
        caseStudies={[
          {
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
            title: "Product Strategy for Enterprise",
            subtitle: "Streamlined validation process"
          },
          {
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop",
            title: "User Research for Fintech",
            subtitle: "Data-driven insights"
          },
          {
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
            title: "Innovation Workshop",
            subtitle: "Rapid prototyping"
          },
        ]}
        services={[
          {
            title: "Product Validation Sprint",
            description: "A review of product creation essentials such as desirability, usability, feasibility, viability and product/market fit aimed at reducing the risk of bringing a product to the market."
          },
          {
            title: "Product Design Sprint",
            description: "A five-day workshop to shape your product idea, answer crucial business questions, plan the essential features of your product and create initial implementation process."
          },
          {
            title: "UX Review",
            description: "An evaluation which will help you radically improve your product by eliminating all UX issues to get a truly appealing and streamlined experience that users will love."
          },
          {
            title: "Research & Development",
            description: "A validation of your idea in just 6 weeks. Experiment with ideas and technologies to secure cutting-edge products and sustained development."
          },
          {
            title: "User Research",
            description: "Digital excellence calls for dialogue. Improve the design, features, and success of your product by using actionable user insights."
          },
        ]}
      />

      {/* Product Design Section */}
      <ServiceSection
        icon={Palette}
        title="Product"
        highlightedTitle="design"
        description="Craft delightful user experiences that stand out. Solve real problems and improve your vital business metrics through beautiful interfaces."
        caseStudies={[
          {
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
            title: "Mobile App Redesign",
            subtitle: "21% higher conversion"
          },
          {
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
            title: "Design System Creation",
            subtitle: "Unified brand experience"
          },
          {
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop",
            title: "UI/UX Enhancement",
            subtitle: "Improved engagement"
          },
        ]}
        services={[
          {
            title: "Product Design",
            description: "Craft beautiful and engaging digital products that impress your customers from the first moment."
          },
          {
            title: "User Experience Design",
            description: "Humanize your software user experience and provide additional value to your customers and your business."
          },
          {
            title: "User Interface Design",
            description: "Turn potential visitors to customers by delivering responsive and accessible user interface designs for your product."
          },
          {
            title: "Branding",
            description: "Build a strong brand, shape how consumers perceive your company, drive new business, and build trust with consumers."
          },
          {
            title: "Illustrations",
            description: "Establish a unique and unmistakable visual language of your brand and product through custom-built illustrations."
          },
          {
            title: "UX Writing",
            description: "Establish a competitive advantage with frictionless copy that nudges users to take action."
          },
          {
            title: "Design Systems",
            description: "Consistency matters. Create better digital products more efficiently with design systems."
          },
        ]}
      />

      {/* Web Development Section */}
      <ServiceSection
        icon={Code}
        title="Web"
        highlightedTitle="development"
        description="Create user-friendly, light and secure web applications faster. Find the path of least resistance toward your product with our battle-tested lean development processes and methodologies."
        caseStudies={[
          {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
            title: "E-commerce Platform",
            subtitle: "Scalable architecture"
          },
          {
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
            title: "SaaS Application",
            subtitle: "Cloud-native solution"
          },
          {
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
            title: "Enterprise Portal",
            subtitle: "High-performance web app"
          },
        ]}
        services={[
          {
            title: "Web Development",
            description: "Implement beautiful and responsive user interfaces that are highly-interactive and give users a native-like experience."
          },
          {
            title: "React.js",
            description: "Leverage a versatile and state-of-the-art frontend tool with a vast community of proficient developers."
          },
          {
            title: "Node.js",
            description: "Build performant web applications based on Javascript – one language for full-stack development."
          },
          {
            title: "Python",
            description: "Python is currently one of the fastest growing languages to get your job done on time."
          },
          {
            title: "TypeScript",
            description: "Build robust applications with type-safe code that scales with your team and business needs."
          },
          {
            title: "Vue.js",
            description: "Build high-performance web apps with beautiful user interfaces and don't worry about scale or reliability."
          },
          {
            title: "Angular",
            description: "Build top-notch, complex and secure applications with technology trusted by the world's leading enterprises."
          },
        ]}
      />

      {/* Mobile Development Section */}
      <ServiceSection
        icon={Smartphone}
        title="Mobile"
        highlightedTitle="development"
        description="Supercharge app delivery with our team of mission-driven mobile engineers. Enjoy optimized custom mobile solutions with next-gen UX for both iOS and Android."
        caseStudies={[
          {
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
            title: "Native iOS App",
            subtitle: "Award-winning design"
          },
          {
            image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&auto=format&fit=crop",
            title: "Cross-platform Solution",
            subtitle: "Multi-device experience"
          },
          {
            image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&auto=format&fit=crop",
            title: "Mobile Commerce",
            subtitle: "Seamless transactions"
          },
        ]}
        services={[
          {
            title: "Mobile Development",
            description: "Get professional support from the mobile team at every stage of development."
          },
          {
            title: "iOS",
            description: "Develop top-quality iOS apps with cutting edge technology."
          },
          {
            title: "Android",
            description: "Building beautiful and scalable mobile applications with top performance using the Java and Kotlin programming languages."
          },
          {
            title: "Flutter",
            description: "Take your idea to the next stage and accelerate your product's go-to-market with Flutter development."
          },
          {
            title: "React Native",
            description: "Reduce the development time and create applications for multiple platforms all at once."
          },
          {
            title: "Kotlin",
            description: "Boost productivity, developer satisfaction, and safety using Kotlin – a powerful, concise, open-source programming language."
          },
        ]}
      />

      {/* AI & Data Science Section */}
      <ServiceSection
        icon={Brain}
        title="AI, ML, and"
        highlightedTitle="data science"
        description="AI-powered solutions might soon upend entire industries. For now, we are testing how far this digital acceleration leads and turning data science into art. Make data your competitive advantage."
        caseStudies={[
          {
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
            title: "AI-Powered Analytics",
            subtitle: "Predictive insights"
          },
          {
            image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800&auto=format&fit=crop",
            title: "Machine Learning Model",
            subtitle: "Automated decision-making"
          },
          {
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
            title: "Data Visualization",
            subtitle: "Business intelligence"
          },
        ]}
        services={[
          {
            title: "AI Solutions",
            description: "Check how AI can help you solve key business problems, automate tasks, and serve your customers better."
          },
          {
            title: "Machine Learning",
            description: "Personalize your customer experience, automate your processes, and change the way customers interact with your product."
          },
          {
            title: "Data Science",
            description: "Solve business challenges with data-driven solutions, tailored to your organization's needs."
          },
          {
            title: "Generative AI",
            description: "Save time, boost creativity and drive efficiency with AI support that breaks down complexity and automates tasks."
          },
          {
            title: "Natural Language Processing",
            description: "Enhance the accuracy of your apps, unlock hidden insights, scale text and audio, or extract value from complex data."
          },
          {
            title: "Computer Vision",
            description: "Boost business process efficiency and automate tasks by extracting real-time data from videos and images."
          },
          {
            title: "Business Intelligence",
            description: "Transform data into actionable intelligence that informs an organization's strategic and tactical business decisions."
          },
        ]}
      />

      {/* Support & Management Section */}
      <ServiceSection
        icon={Shield}
        title="Support and"
        highlightedTitle="management"
        description="The project may be completed, but the product is never finished. We're here to safeguard product quality and support incremental improvements."
        caseStudies={[
          {
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
            title: "DevOps Implementation",
            subtitle: "Continuous deployment"
          },
          {
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
            title: "Quality Assurance",
            subtitle: "Zero-defect delivery"
          },
          {
            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop",
            title: "Product Management",
            subtitle: "Strategic oversight"
          },
        ]}
        services={[
          {
            title: "Project Management",
            description: "Deliver products on time, create a clear roadmap with defined goals and priorities, and get regular status updates."
          },
          {
            title: "Quality Assurance",
            description: "Deliver accessible and robust digital products your customers will love using."
          },
          {
            title: "DevOps",
            description: "Automate your deployment cycle and monitor your infrastructure to achieve faster time to market."
          },
          {
            title: "Security",
            description: "Secure your application and infrastructure from vulnerabilities and attacks."
          },
          {
            title: "Maintenance",
            description: "Keep your product up-to-date and ensure its optimal performance with regular maintenance and updates."
          },
        ]}
      />

      {/* Testimonials Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            What our clients say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                quote: "Working with this team transformed our digital presence. Their expertise in both design and development is unmatched.",
                author: "Sarah Johnson",
                role: "CEO, TechVision"
              },
              {
                quote: "The level of professionalism and attention to detail exceeded our expectations. Highly recommended for any digital project.",
                author: "Michael Chen",
                role: "CTO, DataFlow"
              },
              {
                quote: "From ideation to launch, they guided us through every step. The result is a product we're incredibly proud of.",
                author: "Emily Rodriguez",
                role: "Product Lead, InnovateCo"
              }
            ].map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>

          {/* Client Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company) => (
              <div key={company} className="text-2xl font-bold text-foreground/30">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to accelerate your business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2">
            Get in touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

// ServiceSection Component
interface ServiceSectionProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  highlightedTitle: string;
  description: string;
  caseStudies: Array<{
    image: string;
    title: string;
    subtitle: string;
  }>;
  services: Array<{
    title: string;
    description: string;
  }>;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ icon: Icon, title, highlightedTitle, description, caseStudies, services }) => {
  return (
    <div className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {title} <span className="text-primary">{highlightedTitle}</span>
            </h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8">Case Studies</h3>
            {caseStudies.map((study, i) => (
              <div key={i} className="group cursor-pointer case-study">
                <div className="flex items-center gap-4 p-6 rounded-lg bg-card hover:bg-accent/5 transition-colors overflow-hidden">
                  <div className="w-20 h-20 rounded-lg overflow-hidden case-img">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1">{study.title}</h4>
                    <p className="text-sm text-muted-foreground">{study.subtitle}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

// ServiceCard Component
interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="service-card group p-6 rounded-lg border border-border hover:border-primary/50 bg-card hover:shadow-lg transition-all">
      <div className="flex items-start gap-3 mb-4">
        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// TestimonialCard Component
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => {
  return (
    <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-all">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-lg mb-6 text-muted-foreground italic">"{quote}"</p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export default Services;
