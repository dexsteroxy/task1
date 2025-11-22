import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import heroBg from '/assets/hero-background.jpg';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  image: string;
  title: string;
  link: string;
}

interface Testimonial {
  logo: string;
  company: string;
  quote: string;
}

interface IndustrySection {
  title: string;
  highlight: string;
  description: string;
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
}

const Industry = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.from(heroRef.current.querySelector('h1'), {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          heroRef.current.querySelector('p'),
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          heroRef.current.querySelector('button'),
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        );
    }

    // Section animations
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const industries: IndustrySection[] = [
    {
      title: 'Finance and',
      highlight: 'banking',
      description:
        'The global financial landscape is constantly shifting. Your success will depend on the ability to adjust to the evolving environment and provide your clients with an amazing digital experience.',
      caseStudies: [
        {
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=800&fit=crop',
          title: 'Multi-Layered Security Solution For Fintech Applications',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=800&fit=crop',
          title: 'Driving Backend Security and Scalability for Credit Solutions',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop',
          title: 'Building Mobile Banking Apps for Global Expansion',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=800&fit=crop',
          title: 'Team Extension for Mobile Design Revamp at Speed',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=800&fit=crop',
          title: 'Enabling In-App Payment Solutions for Fintech Unicorns',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=800&fit=crop',
          title: 'Developing Payment App Design Based on User Feedback',
          link: '#',
        },
      ],
      testimonials: [
        {
          logo: 'MF',
          company: 'Modern Finance',
          quote:
            'Netguru helped us choose the right tools, tech stack, and processes to build a product that makes users happy and is scalable.',
        },
        {
          logo: 'SC',
          company: 'Secure Capital',
          quote:
            'Our cooperation is a true partnership. Whenever we faced challenges, we could rely on them for urgent staffing needs and time-critical deliverables.',
        },
        {
          logo: 'FM',
          company: 'Fair Money',
          quote:
            "The team has been instrumental in creating a resilient and adaptable solution that supports our expansion. Their expertise has enabled us to focus on delivering secure financial services.",
        },
      ],
    },
    {
      title: 'Retail and',
      highlight: 'ecommerce',
      description:
        'Implement an AI-powered and customer-centred approach and stay competitive. Build delightful customer experiences, engagement, and loyalty with a new level of personalization, conversational technology, and AR.',
      caseStudies: [
        {
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop',
          title: 'Cross-platform Mobile App for Sports Retailer',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1612831200103-e4d8f8e8e2a6?w=800&h=800&fit=crop',
          title: 'Joyful Customer Experience with Virtual Try-On',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=800&fit=crop',
          title: 'Flexible Scalable App for Global E-commerce Platform',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop',
          title: 'Customer Service Process with Product Design Consulting',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=800&fit=crop',
          title: 'Sleek UX for Luxury Fashion E-commerce Platform',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=800&fit=crop',
          title: 'Top-Notch UX for Automotive Trading Platform',
          link: '#',
        },
      ],
      testimonials: [
        {
          logo: 'VW',
          company: 'Volkswagen',
          quote:
            'Let me put it this way: we have built a grand and impressive building. But without their insights, we would be stuck on the ground-floor forever.',
        },
        {
          logo: 'AR',
          company: 'Artemest',
          quote:
            'Working with the team was an amazing experience. They have been very responsive and flexible. We definitely increased the pace of development.',
        },
        {
          logo: 'LB',
          company: 'Ledbury',
          quote:
            'You guys have been excellent to work with; we really appreciate how well the projects are managed and run. You have built a great team.',
        },
      ],
    },
    {
      title: '',
      highlight: 'Healthcare',
      description:
        'Be at the forefront of digital acceleration in healthcare. Make the most of automated administrative management, cost reduction, and remote patient diagnosis and treatment.',
      caseStudies: [
        {
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop',
          title: "Speeding Up R&D Process from 6 Months to 6 Hours with AI Assistant",
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=800&fit=crop',
          title: 'Scalability with Modern Design: Healthcare Platform Website',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=800&fit=crop',
          title: 'Leveraging Generative AI for Growth in Digital Healthcare',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=800&fit=crop',
          title: 'Awarded Mental Health App with Outstanding User Experience',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=800&fit=crop',
          title: 'Mobile App Development for Healthcare Startup',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&h=800&fit=crop',
          title: 'Successful Cloud Migration for Voice-Controlled Medical Assistant',
          link: '#',
        },
      ],
      testimonials: [
        {
          logo: 'MK',
          company: 'Merck',
          quote:
            'If I had to choose two words it would be speed and efficiency. They provided us with a POC within the 5 weeks deadline and now we can complete our tasks in a fraction of the time.',
        },
        {
          logo: 'SH',
          company: 'Shine',
          quote:
            'I have really appreciated the flexibility and breadth of experience. While most of our work has been in React Native, we have easily gotten support in QA, design, UX, iOS and Android as well.',
        },
        {
          logo: 'ND',
          company: 'Nodus',
          quote:
            'What convinced us is the success story – it is an interesting startup that has undergone tremendous growth. They have a great team that can really deliver what is needed.',
        },
      ],
    },
    {
      title: '',
      highlight: 'Edtech',
      description:
        'Education is going digital, with online platforms, VR, AR, and AI tools being utilized to support students and teachers. Build next-gen digital learning experiences to foster user engagement and attract broad audiences.',
      caseStudies: [
        {
          image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop',
          title: 'Boosting EdTech Content Creation with GenAI from Hours to Seconds',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop',
          title: 'Web App Redesign for EdTech SaaS Solutions Provider',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=800&fit=crop',
          title: 'Expanding Language Learning App for B2B Market',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=800&fit=crop',
          title: 'Interactive Learning Platform with AI-Powered Features',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=800&fit=crop',
          title: 'Building Virtual Classroom Solutions for Global Education',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop',
          title: 'Student Assessment Platform with Real-Time Analytics',
          link: '#',
        },
      ],
      testimonials: [
        {
          logo: 'NG',
          company: 'New Globe',
          quote:
            'The solution dramatically transformed our content creation, reducing timelines from over 4 hours per guide to just 45 seconds while ensuring quality and consistency.',
        },
        {
          logo: 'BB',
          company: 'Babbel',
          quote:
            'I have had a long-lasting partnership with them. Happy that it works so well and hopeful that we can cooperate on more projects in the future.',
        },
        {
          logo: 'AG',
          company: 'Apps for Good',
          quote:
            'The designers understood our users needs and their developers were passionate, skilled, and conscientious about the work and project goals. Total partner engagement!',
        },
      ],
    },
    {
      title: '',
      highlight: 'Proptech',
      description:
        'Real estate is accelerating digital. From data-rich investment analytics to AI-powered marketing, next-gen recommendation engines, and IoT-enabled automation – the sector is booming with cutting-edge technology.',
      caseStudies: [
        {
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop',
          title: '60% More Engagement With Hyper-Personalization for US Proptech',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=800&fit=crop',
          title: 'Consistency Across Products with Comprehensive Design System',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=800&fit=crop',
          title: '21% Higher Conversion for Top Real Estate Marketplace',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop',
          title: 'Smart Home Integration for Modern Property Management',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=800&fit=crop',
          title: 'AI-Powered Property Valuation Platform',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=800&fit=crop',
          title: 'Virtual Tours and 3D Property Visualization',
          link: '#',
        },
      ],
      testimonials: [
        {
          logo: 'NZ',
          company: 'NewZip',
          quote:
            'It is difficult as a startup to divide your time between evolving your product and experimenting with new technologies. We partnered to help beef up our AI exploration.',
        },
        {
          logo: 'HM',
          company: 'HomeMade',
          quote:
            'I recommend them to every person I can who is looking for top-of-the-market development with competent, dedicated, and pleasant to work with development team.',
        },
        {
          logo: 'RE',
          company: 'RealEstate Co',
          quote:
            'They offered immense value by bringing experienced senior engineers who have produced quality code and built reliable systems that will serve our customers for a long time.',
        },
      ],
    },
    {
      title: '',
      highlight: 'Greentech',
      description:
        'Going green is not a choice - it is a priority. United Nations name climate change as the defining crisis of our time. Consumers demand greener solutions and investors are increasingly focusing on the green transition. Technology plays a crucial role in this shift.',
      caseStudies: [
        {
          image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=800&fit=crop',
          title: 'UX/UI Design and Prototyping for Green Energy Sharing Platform',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=800&fit=crop',
          title: 'Forecasting and Visualizing Data for Energy Management System',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=800&fit=crop',
          title: 'Rapid MVP Development Leveraging Innovation to Combat Food Waste',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=800&fit=crop',
          title: 'Smart Grid Solutions for Renewable Energy Distribution',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=800&fit=crop',
          title: 'Carbon Footprint Tracking App for Sustainable Living',
          link: '#',
        },
        {
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop',
          title: 'Electric Vehicle Charging Network Management Platform',
          link: '#',
        },
      ],
      testimonials: [
        {
          logo: 'ZB',
          company: 'Żabka',
          quote:
            "We wanted to introduce a positive change and we wanted to do it fast. They ensured we had a successful MVP within weeks and an optimized version for phase two.",
        },
        {
          logo: 'NE',
          company: 'Need Energy',
          quote:
            'They have been our biggest investor into our product development. The partnership allows us to build the best in class product for increasing clean energy access.',
        },
        {
          logo: 'FR',
          company: 'Forum Razem',
          quote:
            'The team was very committed to making this happen as quickly as possible. Despite such a hectic situation, after a few months we had a ready product that streamlines our work immensely.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">

        <Navigation/>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hero-start/95 via-hero-start/80 to-transparent" />
        <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cross-industry experience
              <br />
              in{' '}
              <span className="text-accent">
                digital acceleration
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              We help businesses across industries drive profitability and customer satisfaction.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primar font-semibold px-8 py-6 text-lg group"
            >
              Let's work together!
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Industry Sections */}
      <div className="bg-background">
        {industries.map((industry, index) => (
          <section
            key={index}
            ref={(el: HTMLElement | null) => {
              if (el) sectionsRef.current[index] = el as HTMLDivElement;
            }}
            className="py-24 px-6 lg:px-8"
          >
            <div className="container max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {industry.title} <span className="bg-accent/20 px-3 py-1 rounded">{industry.highlight}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mb-8">{industry.description}</p>
                <Button variant="link" className="text-primary font-semibold p-0 h-auto group">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Case Studies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {industry.caseStudies.map((study, studyIndex) => (
                  <motion.div
                    key={studyIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: studyIndex * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group overflow-hidden border-border hover:border-accent transition-all duration-300 cursor-pointer h-full">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                          {study.title}
                        </h3>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {industry.testimonials.map((testimonial, testIndex) => (
                  <motion.div
                    key={testIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: testIndex * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-muted/50 p-8 rounded-lg border border-border"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6 text-accent font-bold text-xl">
                      {testimonial.logo}
                    </div>
                    <blockquote className="text-foreground/80 leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Industry;
