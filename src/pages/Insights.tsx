import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  link: string;
}

const Insights = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      title: 'Building Scalable Applications with Modern Architecture',
      excerpt: 'Discover the best practices for creating applications that grow with your business',
      category: 'Engineering',
      readTime: '8 min read',
      link: '#',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'How artificial intelligence is transforming business operations',
      category: 'Innovation',
      readTime: '6 min read',
      link: '#',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      title: 'Design Systems That Scale',
      excerpt: 'Creating consistent user experiences across multiple platforms',
      category: 'Design',
      readTime: '10 min read',
      link: '#',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop',
      title: 'Mobile-First Development Strategies',
      excerpt: 'Why mobile-first approach is crucial for modern applications',
      category: 'Development',
      readTime: '7 min read',
      link: '#',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
      title: 'Cloud Infrastructure Best Practices',
      excerpt: 'Optimizing your cloud architecture for performance and cost',
      category: 'Infrastructure',
      readTime: '9 min read',
      link: '#',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
      title: 'User Experience in Financial Applications',
      excerpt: 'Creating trust and ease of use in fintech products',
      category: 'UX/UI',
      readTime: '5 min read',
      link: '#',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
      title: 'Agile Transformation in Large Organizations',
      excerpt: 'Successfully implementing agile methodologies at scale',
      category: 'Management',
      readTime: '12 min read',
      link: '#',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      title: 'Cybersecurity in Modern Web Applications',
      excerpt: 'Essential security practices every developer should know',
      category: 'Security',
      readTime: '8 min read',
      link: '#',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop',
      title: 'Data Analytics for Business Growth',
      excerpt: 'Leveraging data to make informed business decisions',
      category: 'Analytics',
      readTime: '6 min read',
      link: '#',
    },
  ];

  useEffect(() => {
    // Hero title animation
    if (titleRef.current && highlightRef.current) {
      const tl = gsap.timeline({ delay: 0.2 });
      
      tl.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      });

      gsap.from(highlightRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        ease: 'back.out(1.2)',
      });
    }

    // Subtitle animation
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelector('.subtitle'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: 'power3.out',
      });
    }

    // Grid cards animation
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.blog-card');
      
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
        <Navigation/>
      {/* Hero Section */}
      <section ref={heroRef} className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            <span className="inline-block">Fuel your </span>
            <span 
              ref={highlightRef}
              className="inline-block relative bg-accent/20 px-6 py-2 rounded-full"
            >
              <span className="relative text-foreground">innovation fire</span>
            </span>
          </h1>
          <p className="subtitle text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Hand-picked, actionable insights for design, engineering, and innovation leaders at companies of all sizes
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section ref={gridRef} className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="blog-card group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <a href={post.link} className="block h-full">
                <Card className="overflow-hidden border-0 bg-muted/30 hover:bg-muted/50 transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                      {post.title}
                    </h3>

                    <div className="flex items-center justify-end mt-4">
                      <ArrowRight className="w-5 h-5 text-foreground group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pagination Section */}
      <section className="container mx-auto px-6 pb-16">
        <div className="flex justify-center">
          <Pagination>
            <PaginationContent className="gap-1">
              <PaginationItem>
                <PaginationPrevious href="#" className="rounded-md" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="rounded-md">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="rounded-md">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="rounded-md">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="rounded-md">8</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="rounded-md">9</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="rounded-md">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="rounded-md" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Insights;
