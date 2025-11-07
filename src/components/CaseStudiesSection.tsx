// import { Card } from "@/components/ui/card";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CaseStudiesSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".case-card", {
//         opacity: 0,
//         y: 60,
//         stagger: 0.2,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const cases = [
//     {
//       logo: "olx",
//       category: "UX/UI",
//       title: "21% higher conversion for a top marketplace",
//       description: "Augmenting a highly demanding team with product design experts for rapid, tangible results",
//       color: "from-blue-500/20 to-purple-500/20",
//     },
//     {
//       logo: "vinted",
//       category: "Web development",
//       title: "Ecommerce boost with on-demand team extension",
//       description: "Supporting rapid growth with scalable development resources",
//       color: "from-primary/20 to-emerald-500/20",
//     },
//     {
//       logo: "zabka",
//       category: "Mobile Development",
//       title: "Transforming retail with mobile innovation",
//       description: "Building cutting-edge mobile solutions for modern retail",
//       color: "from-orange-500/20 to-red-500/20",
//     },
//   ];

//   return (
//     <section ref={sectionRef} className="py-24 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cases.map((caseStudy, index) => (
//             <Card
//               key={index}
//               className={`case-card p-8 bg-gradient-to-br ${caseStudy.color} border-0 hover:scale-105 transition-transform duration-300 cursor-pointer`}
//             >
//               <div className="mb-4">
//                 <div className="text-2xl font-bold text-foreground/80 mb-2">{caseStudy.logo}</div>
//                 <span className="text-sm text-primary">{caseStudy.category}</span>
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-foreground">
//                 {caseStudy.title}
//               </h3>
//               <p className="text-foreground/70">
//                 {caseStudy.description}
//               </p>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudiesSection;






import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import all images
import caseOlx from "../../public/assets/case-olx.jpg";
import caseVinted from "../../public/assets/case-vinted.jpg";
import caseSportano from "../../public/assets/case-sportano.jpg";
import caseMetro from "../../public/assets/case-metro.jpg";
import caseZabka from "../../public/assets/case-zabka.jpg";
import caseUbs from "../../public/assets/case-ubs.jpg";
import iconIdeation from "../../public/assets/icon-ideation.png";
import iconDesign from "../../public/assets/icon-design.png";
import iconDevelopment from "../../public/assets/icon-development.png";
import iconMaintenance from "../../public/assets/icon-maintenance.png";
import iconScaling from "../../public/assets/icon-scaling.png";
import testimonial1 from "../../public/assets/testimonial-1.jpg";
import testimonial2 from "../../public/assets/testimonial-2.jpg";
import testimonial3 from "../../public/assets/testimonial-3.jpg";
import bgStats from "../../public/assets/bg-stats.jpg";
import bgCta from "../../public/assets/bg-cta.jpg";
import insight1 from "../../public/assets/insight-1.jpg";
import insight2 from "../../public/assets/insight-2.jpg";
import insight3 from "../../public/assets/insight-3.jpg";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CaseStudiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".case-card", {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cases-grid",
          start: "top 80%",
        },
      });

      gsap.from(".service-card", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 70%",
        },
      });

      gsap.from(".stat-card", {
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 70%",
        },
      });

      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cases = [
    {
      image: caseOlx,
      logo: "Olx",
      category: "UX/UI",
      title: "21% higher conversion for a top marketplace",
      description: "Augmenting a highly demanding team with product design experts for rapid, tangible results",
    },
    {
      image: caseVinted,
      logo: "Vinted Go",
      category: "WEB DEVELOPMENT",
      title: "Ecommerce boost with on-demand team extension",
      description: "Growing Vinted GO's European marketplace with seamless backend carrier integrations and scalable shipping",
    },
    {
      image: caseSportano,
      logo: "sportano",
      category: "MOBILE APP",
      title: "Cross-platform mobile app for a sports retailer",
      description: "Powering Sportano's omnichannel shopping experience with a cross-platform app built in React Native",
    },
    {
      image: caseMetro,
      logo: "METRO BRAZIL",
      category: "CROSS-PLATFORM DEVELOPMENT",
      title: "Flexible, scalable app for a global ecommerce platform",
      description: "Cross-platform online shopping app that offers a seamless and unified experience across devices",
    },
    {
      image: caseZabka,
      logo: "Żabka",
      category: "CLOUD DEVELOPMENT",
      title: "System architecture for autonomous stores by Zabka",
      description: "Planning, designing, implementing, and maintaining autonomous stores architecture for a major chain",
    },
    {
      image: caseUbs,
      logo: "UBS",
      category: "MOBILE APP REDESIGN",
      title: "Team extension for mobile design revamp at speed",
      description: "Seamless and consistent experience, unified payment flows, and easier in-app navigation",
    },
  ];

  const services = [
    {
      icon: iconIdeation,
      number: "01",
      title: "Ideation",
      description: "Rapid prototyping, research & development, user insights & testing",
    },
    {
      icon: iconDesign,
      number: "02",
      title: "Design",
      description: "Product design, UX & UI design, design system development",
    },
    {
      icon: iconDevelopment,
      number: "03",
      title: "Development",
      description: "Web development, mobile development, AI & GenAI, MVPs, cloud",
    },
    {
      icon: iconMaintenance,
      number: "04",
      title: "Maintenance",
      description: "Quality assurance, product management, end to end software maintenance",
    },
    {
      icon: iconScaling,
      number: "05",
      title: "Scaling",
      description: "Product strategy & expansion, continuous discovery, automation & optimization",
    },
  ];

  const stats = [
    {
      value: "40%",
      label: "growth in international & GCC orders for a global retailer",
    },
    {
      value: "5.0",
      label: "app rating on App Store for a major sports ecommerce platform",
    },
    {
      value: "60%",
      label: "more user engagement with hyper-personalization for a US proptech",
    },
    {
      value: "21%",
      label: "higher conversion for a top global marketplace",
    },
  ];

  const testimonials = [
    {
      company: "kw",
      logo: "kw",
      text: "Netguru has been the best agency we've worked with so far.",
      author: "Adi Pavlovic",
      position: "Director of Innovation",
      image: testimonial1,
    },
    {
      company: "Żabka",
      logo: "Żabka",
      text: "Cooperation with Netguru allowed us to efficiently deliver our vision.",
      author: "Paweł Grabowski",
      position: "Head of Digital B2B at Żabka Future in Żabka Group",
      image: testimonial2,
    },
    {
      company: "Volkswagen",
      logo: "VW",
      text: "Let me put it this way: we have built a grand and impressive building. But without Netguru's insights, we would be stuck on the ground-floor forever.",
      author: "Artur Krysm",
      position: "Team Leader and CX Manager",
      image: testimonial3,
    },
    {
      company: "MERCK",
      logo: "MERCK",
      text: "Excellence and speed. It's rare to get both, and Netguru delivers.",
      author: "Mark Greiner",
      position: "Digital Innovation Manager",
      image: testimonial1,
    },
    {
      company: "sportano",
      logo: "sportano",
      text: "Netguru's mobile experience produced a robust solution that fully meets our objectives.",
      author: "Grzegorz Kupidura",
      position: "Chief Technology Officer",
      image: testimonial2,
    },
    {
      company: "Intellyo",
      logo: "Intellyo",
      text: "With Netguru, we're now releasing many more features than we used to.",
      author: "Marco Deseri",
      position: "Chief Digital Officer",
      image: testimonial3,
    },
  ];

  const whyStats = [
    { value: "17+", label: "Years on market" },
    { value: "400+", label: "People on board" },
    { value: "2500+", label: "Projects delivered" },
    { value: "73", label: "Our current NPS score" },
  ];

  const insights = [
    {
      image: insight1,
      category: "BLOG",
      title: "ChatGPT Just Became a Shop: The Agentic Commerce Revolution",
    },
    {
      image: insight2,
      category: "PODCAST",
      title: "Does AI Wear Sneakers? Adidas's Journey With AI",
    },
    {
      image: insight3,
      category: "BLOG",
      title: "Scaling Microservices: Lessons from Netflix, Uber, Amazon, and Spotify",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full">
      {/* Hero Text */}
      <div className="bg-[#0A0A0A] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Building smarter ecosystems for startups in B2B, and {" "}
            <span className="text-[#00D98A]">retail for the next digital era</span>
          </h2>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="cases-grid bg-[#0A0A0A] py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseStudy, index) => (
              <Card
                key={index}
                className=" group bg-[#1A1A1A] border-0 overflow-hidden hover:transform hover:scale-[1.02] 2xl:w-[580px] transition-all duration-300 cursor-pointer"
              >
        <div className="aspect-[4/3] relative overflow-hidden bg-[#2A2A2A]">
  <img
    src={caseStudy.image}
    alt={caseStudy.title}
    loading="lazy"
    decoding="async"
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />
  {/* Gradient overlay to improve visibility */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
</div>


                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{caseStudy.logo}</h3>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      {caseStudy.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {caseStudy.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {caseStudy.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section bg-[#2A2A2A] py-20">
        
        <div className="container mx-auto px-6">
          <div className="flex items-center lg:gap-20 md:gap-16 justify-center flex-col md:flex-row mx-auto">
            <h2 className="text-4xl">Leverage End-to-End   <span className="text-[#00D98A]">Product Expertise.</span></h2>
            <p className="md:w-[600px] lg:ml-44 mb-12 mt-8 text-lg">From validating your idea to scaling a live product, we help startups move faster.
Whether you need expert consultation, extra hands on your team, or a full product build,
were your partner from concept to launch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card text-center">
                <div className="mb-6 flex justify-center">
                  <img src={service.icon} alt={service.title} loading="lazy" decoding="async" className="w-32 h-32 object-contain" />
                </div>
                <div className="mb-2">
                  <span className="text-[#00D98A] text-sm font-semibold">{service.number}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#0A0A0A] py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 md:mb-0">
              See Real Impact, Not  <span className="text-[#00D98A]">Just Progress</span>
            </h2>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed">
             Our process is built for speed, clarity, and measurable outcomes. We help startups
move from concept to launch fast without cutting corners on quality or creativity.
            </p>
          </div>

          <div className="stats-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="stat-card bg-[#1A1A1A] border-0 p-8 hover:bg-[#252525] transition-colors duration-300"
              >
                <h3 className="text-5xl font-bold text-white mb-4">{stat.value}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section bg-[#2A2A2A] py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
            Check our <span className="text-[#00D98A]">clients' words</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="testimonial-card bg-[#0A0A0A] border-0 p-8 hover:bg-[#151515] transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-6">{testimonial.logo}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    loading="lazy"
                    decoding="async"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-gray-400 text-xs">{testimonial.position}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Netguru Section */}
      <div
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgStats})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/80 to-gray-800/80" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
            <div className="flex-1">
              <div className="text-sm text-[#00D98A] mb-2 uppercase tracking-wider">netguru</div>
              <h2 className="text-3xl md:text-5xl font-light text-white">
                Why  <span className="text-[#00D98A] font-semibold">Choose Us?</span>
              </h2>
              <p className="text-gray-300 mt-6 max-w-md leading-relaxed">
              Were a product team built for startups, fast-moving, collaborative, and obsessed with
results. From idea to launch, we bring the strategy, design, and engineering expertise
you need to build products users love and businesses grow with.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 flex-1">
              {whyStats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/60 backdrop-blur-sm border-0 p-6 hover:bg-gray-700/60 transition-colors duration-300"
                >
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-light text-white mb-8">
              Empowering Startups  <span className="text-[#00D98A]">Across Digital Commerce</span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl leading-relaxed">
            We help ambitious brands and startups reimagine commerce, from B2B platforms to
marketplaces and retail ecosystems. Our team blends strategy, AI innovation, and
scalable technology to create digital experiences that drive growth.
            </p>
            <div className="flex flex-wrap gap-8 items-center opacity-70">
              <span className="text-white text-lg font-bold">IKEA</span>
              <span className="text-white text-lg">VW</span>
              <span className="text-white text-lg italic">sportano</span>
              <span className="text-white text-lg font-bold">Olx</span>
              <span className="text-white text-lg font-bold">Żabka</span>
              <span className="text-white text-lg">METRO BRAZIL</span>
              <span className="text-white text-lg">LEDBURY</span>
              <span className="text-white text-lg">Sareem</span>
              <span className="text-white text-lg">Vinted Go</span>
              <span className="text-white text-lg">Intellyo</span>
              <span className="text-white text-lg">Delivery Hero</span>
              <span className="text-white text-lg">Cosmo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="bg-[#0A0A0A] py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
            Explore insights <span className="text-[#00D98A]">for acceleration</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {insights.map((insight, index) => (
              <Card
                key={index}
                className="group bg-[#1A1A1A] border-0 overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden bg-[#2A2A2A]">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-gray-500 uppercase tracking-wider block mb-3">
                    {insight.category}
                  </span>
                  <h4 className="text-white font-semibold leading-snug group-hover:text-[#00D98A] transition-colors duration-300">
                    {insight.title}
                  </h4>
                  <ArrowRight className="text-[#00D98A] w-5 h-5 mt-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Card>
            ))}
          </div>

          <button className="text-white hover:text-[#00D98A] transition-colors duration-300 flex items-center gap-2 text-sm">
            More disruptive insights <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgCta})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/70 to-gray-900/90" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
            Designing scalable digital  
loyalty. <span className="text-[#00D98A] font-semibold">ecosystems that power revenue,</span> efficiency, and customer
            <br />
            
          </h2>

          <Link to="/estimate-project">
          <Button className="bg-[#00D98A] hover:bg-[#00C17D] text-black font-semibold px-8 py-6 text-lg mt-8">
            Book a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
