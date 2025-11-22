
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import builtlogo from "@/../public/assets/built-logo.png"

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
      {
        name: "Research & Development",
        href: "/services/research-development",
      },
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
    {
      name: "Finance",
      href: "/industries/finance",
      description:
        "We offer tailored fintech software solutions to enhance financial processes and deliver exceptional user experiences for various financial sectors.",
    },
    {
      name: "Composable Commerce",
      href: "/industries/composable-commerce",
      description:
        "Build flexible, scalable commerce experiences with modern composable architecture.",
    },
  ];

  const clientsMenu = [
    { name: "Otodom – Product Design", href: "/clients/otodom" },
    { name: "Vinted – Team Extension", href: "/clients/vinted" },
  ];

  const aboutMenu = [
    {
      name: "About Us",
      href: "/about-us",
      description:
        "We offer tailored fintech software solutions to enhance financial processes and deliver exceptional user experiences for various financial sectors.",
    },
    {
      name: "Sustainability",
      href: "/sustainability",
      description:
        "Build flexible, scalable commerce experiences with modern composable architecture.",
    },
    { name: "Working at Netguru", href: "/join-netguru" },
  ];

  const insightsMenu = [
    {
      name: "Overcoming Integration Challenges in Super App Development",
      href: "/blog/superapp-integration",
    },
    {
      name: "Building Data Foundations: The Key to Scalable Enterprise AI",
      href: "/blog/data-foundations-ai",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-lg"
          : "bg-slate-800"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <img src={builtlogo} className="w-32 h-auto" alt="logo"/>
      
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu className="static">
              <NavigationMenuList>
                {/* --- SERVICES (MEGA MENU) --- */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-green-400 focus:text-green-400 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-green-400 font-medium text-base">
                <Link to="/services"> Services</Link>   
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="!w-[100vw] !max-w-[100vw] !left-0 bg-[#1C2432] border-t p-6 border-gray-800">
                      <div className="grid w-full grid-cols-3 gap-6">
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
                          <h3 className="text-sm font-semibold ml-32 md:ml-0 text-foreground/60 mb-3 uppercase">Software Development</h3>
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

                        {/* COLUMN 3: DESIGN & COOPERATION */}
                        <div className="flex flex-col gap-8 border-r border-gray-800 pr-12 h-full">
                          <div>
                            <h3 className="text-xs font-bold tracking-widest text-gray-400 mb-6 uppercase">
                              Design
                            </h3>
                            <ul className="space-y-4">
                              {[
                                "Product Design",
                                "UX Design",
                                "UI Design",
                                "Design Systems",
                              ].map((item) => (
                                <li key={item}>
                                  <Link
                                    to="#"
                                    className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium block"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-xs font-bold tracking-widest text-gray-400 mb-6 uppercase">
                              Cooperation Models
                            </h3>
                            <ul className="space-y-4">
                              {[
                                "Dedicated Teams",
                                "Staff Augmentation",
                                "Delivery Center",
                              ].map((item) => (
                                <li key={item}>
                                  <Link
                                    to="#"
                                    className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium block"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* COLUMN 4: EMPTY SPACE + ALL SERVICES LINK */}
                        <div className="flex items-end justify-start pl-4">
                          <Link
                            to="#"
                            className="text-sm font-bold text-white border-b border-white hover:text-green-400 hover:border-green-400 transition-colors pb-1"
                          >
                            All services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* --- INDUSTRIES --- */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-green-400 focus:text-green-400 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-green-400 font-medium text-base">
                   <Link to="/industries">
                    Industries
                   </Link>
                   
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!w-[100vw] !max-w-[100vw] !left-0 bg-[#1C2432] border-t border-gray-800">
                    <div className="container mx-auto px-6 py-10">
                      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {industriesMenu.map((item) => (
                          <li key={item.name}>
                            <Link to={item.href} className="block group">
                              <h3 className="text-base font-bold text-white group-hover:text-green-400 transition-colors mb-2">
                                {item.name}
                              </h3>

                              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                {item.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* --- ABOUT US --- */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-green-400 focus:text-green-400 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-green-400 font-medium text-base">
                 <Link to="/about-us">About us</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!w-[100vw] !max-w-[100vw] !left-0 bg-[#1c2432] border-t border-gray-800">
                    <div className="container mx-auto px-6 py-10">
                      {/* Optional: Add a section header like Netguru often does */}
                      <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">
                        Company
                      </h3>

                      {/* Grid Layout for the links */}
                      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {aboutMenu.map((item) => (
                          <li key={item.name}>
                            <Link to={item.href} className="block group">
                              {/* Main Link Text: Bold White, turns Green on hover */}
                              <span className="text-base font-bold text-white group-hover:text-green-400 transition-colors">
                                {item.name}
                              </span>

                              {/* Optional: If your data has descriptions, this renders them. 
                If not, this line is ignored. */}
                              {item.description && (
                                <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">
                                  {item.description}
                                </p>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* --- INSIGHTS --- */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Insights
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-background border border-border">
                      <ul className="space-y-3">
                        {insightsMenu.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className="text-foreground/80 hover:text-primary transition-colors text-sm block"
                            >
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
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-background"
              >
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
              <div className="font-semibold text-muted-foreground text-sm ml-4">
                Services
              </div>

              <div>
                {/* <div className="text-xs uppercase ml-[7px] text-muted-foreground pl-2 mb-1">
          Software Development
        </div> */}
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
                  className="block text-primary ml-[2px] text-sm underline pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All services →
                </Link>
              </div>
            </div>

            {/* INDUSTRIES */}
            <div className="space-y-2">
              <div className="font-semibold text-sm text-muted-foreground ml-4">
                Industries
              </div>
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
              <div className="font-semibold text-muted-foreground text-sm ml-4">
                Clients
              </div>
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
              <div className="font-semibold text-muted-foreground text-sm ml-4">
                About
              </div>
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
            <Link
              to="/estimate-project"
              className=""
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button
                variant="outline"
                className="w-full border-primary text-primary mt-4 md:mt-0 hover:bg-primary hover:text-background"
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
