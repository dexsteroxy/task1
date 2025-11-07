import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesMenu = {
    ideation: [
      { name: "Rapid Prototyping", href: "/services/rapid-prototyping" },
      { name: "Research & Development", href: "/services/research-development" },
      { name: "User Research & Testing", href: "/services/user-research" },
      { name: "Product Strategy", href: "/services/product-strategy" },
    ],
    softwareDevelopment: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Development", href: "/services/mobile-development" },
      { name: "MVPs", href: "/services/mvp" },
      { name: "Cloud Strategy", href: "/services/cloud-strategy" },
    ],
    design: [
      { name: "Product Design", href: "/services/product-design" },
      { name: "UX Design", href: "/services/ux-design" },
      { name: "UI Design", href: "#" },
      { name: "Design Systems", href: "#" },
    ],
    generativeAI: [
      { name: "AI Development", href: "#" },
      { name: "AI Agent Development", href: "#" },
      { name: "Machine Learning", href: "#" },
      { name: "Data Engineering", href: "#" },
    ],
    maintenance: [
      { name: "Quality Assurance", href: "#" },
      { name: "Product Management", href: "#" },
      { name: "Software Maintenance Services", href: "#" },
    ],
    cooperation: [
      { name: "Dedicated Teams", href: "#" },
      { name: "Staff Augmentation", href: "#" },
      { name: "Delivery Center", href: "#" },
    ],
  };

  const industriesMenu = [
    { name: "Finance", href: "/industries/finance", description: "We offer tailored fintech software solutions to enhance financial processes and deliver exceptional user experiences for various financial sectors." },
    { name: "Composable Commerce", href: "/industries/composable-commerce", description: "Build flexible, scalable commerce experiences with modern composable architecture." },
  ];

  const clientsMenu = [
    { name: "Otodom – Product Design", href: "/clients/otodom" },
    { name: "Vinted – Team Extension", href: "/clients/vinted" },
  ];

  const aboutMenu = [
    { name: "About Us", href: "/about-us" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Working at Netguru", href: "/join-netguru" },
  ];

  const insightsMenu = [
    { name: "Overcoming Integration Challenges in Super App Development", href: "/blog/superapp-integration" },
    { name: "Building Data Foundations: The Key to Scalable Enterprise AI", href: "/blog/data-foundations-ai" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-slate-800"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
           <Link to={"/"}>   <span className="text-background font-bold text-xl">N</span></Link>
            </div>
          <Link to={"/"}>  <span className="text-xl font-bold text-foreground">netguru</span></Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6 bg-background border border-border">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-sm font-semibold text-foreground/60 mb-3 uppercase">Ideation</h3>
                          <ul className="space-y-2">
                            {servicesMenu.ideation.map((item) => (
                              <li key={item.name}>
                                <Link to={item.href} className="text-foreground/80 hover:text-primary transition-colors text-sm">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground/60 mb-3 uppercase">Software Development</h3>
                          <ul className="space-y-2">
                            {servicesMenu.softwareDevelopment.map((item) => (
                              <li key={item.name}>
                                <Link to={item.href} className="text-foreground/80 hover:text-primary transition-colors text-sm">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <h3 className="text-sm font-semibold text-foreground/60 mb-3 mt-6 uppercase">Maintenance</h3>
                          <ul className="space-y-2">
                            {servicesMenu.maintenance.map((item) => (
                              <li key={item.name}>
                                <Link to={item.href} className="text-foreground/80 hover:text-primary transition-colors text-sm">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground/60 mb-3 uppercase">Design</h3>
                          <ul className="space-y-2">
                            {servicesMenu.design.map((item) => (
                              <li key={item.name}>
                                <Link to={item.href} className="text-foreground/80 hover:text-primary transition-colors text-sm">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <h3 className="text-sm font-semibold text-foreground/60 mb-3 mt-6 uppercase">Generative AI and Data</h3>
                          <ul className="space-y-2">
                            {servicesMenu.generativeAI.map((item) => (
                              <li key={item.name}>
                                <Link to={item.href} className="text-foreground/80 hover:text-primary transition-colors text-sm">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <h3 className="text-sm font-semibold text-foreground/60 mb-3 mt-6 uppercase">Cooperation Models</h3>
                          <ul className="space-y-2">
                            {servicesMenu.cooperation.map((item) => (
                              <li key={item.name}>
                                <Link to={item.href} className="text-foreground/80 hover:text-primary transition-colors text-sm">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-border text-right">
                        <Link to="#" className="text-sm text-foreground hover:text-primary transition-colors underline">
                          All services
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-background border border-border">
                      <ul className="space-y-4">
                        {industriesMenu.map((item) => (
                          <li key={item.name}>
                            <Link to={item.href} className="block group">
                              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                {item.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Clients
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-6 bg-background border border-border">
                      <ul className="space-y-2">
                        {clientsMenu.map((item) => (
                          <li key={item.name}>
                            <Link to={item.href} className="text-foreground/80 hover:text-primary transition-colors text-sm block py-1">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    About us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-6 bg-background border border-border">
                      <ul className="space-y-2">
                        {aboutMenu.map((item) => (
                          <li key={item.name}>
                            <Link to={item.href} className="text-foreground/80 hover:text-primary transition-colors text-sm block py-1">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Insights
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-background border border-border">
                      <ul className="space-y-3">
                        {insightsMenu.map((item) => (
                          <li key={item.name}>
                            <Link to={item.href} className="text-foreground/80 hover:text-primary transition-colors text-sm block">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/estimate-project">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background">
               Start Your Project →
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

  {isMobileMenuOpen && (
  <div className="lg:hidden mt-4 pb-4 space-y-6">
    {/* SERVICES */}
    <div className="space-y-3">
      <div className="font-semibold text-sm">Services</div>

      <div>
        <div className="text-xs uppercase text-muted-foreground pl-2 mb-1">
          Software Development
        </div>
        {servicesMenu.softwareDevelopment.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="block text-foreground/80 hover:text-foreground transition-colors pl-4 text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="pt-2">
        <Link
          to="#"
          className="block text-primary text-sm underline pl-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          All services →
        </Link>
      </div>
    </div>

    {/* INDUSTRIES */}
    <div className="space-y-2">
      <div className="font-semibold text-sm">Industries</div>
      {industriesMenu.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="block text-foreground/80 hover:text-foreground transition-colors pl-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </div>

    {/* CLIENTS */}
    <div className="space-y-2">
      <div className="font-semibold text-sm">Clients</div>
      {clientsMenu.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="block text-foreground/80 hover:text-foreground transition-colors pl-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </div>

    {/* ABOUT */}
    <div className="space-y-2">
      <div className="font-semibold text-sm">About</div>
      {aboutMenu.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="block text-foreground/80 hover:text-foreground transition-colors pl-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </div>

    {/* CTA Button */}
    <Link to="/estimate-project" onClick={() => setIsMobileMenuOpen(false)}>
      <Button
        variant="outline"
        className="w-full border-primary text-primary hover:bg-primary hover:text-background"
      >
        Estimate project →
      </Button>
    </Link>
  </div>
)}


      </div>
    </nav>
  );
};

export default Navigation;
