const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: ["Web Development", "Mobile Development", "UI/UX Design", "Product Strategy"],
    },
    {
      title: "Industries",
      links: ["FinTech", "HealthTech", "E-commerce", "SaaS"],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Blog", "Contact"],
    },
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-background font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-foreground">netguru</span>
            </div>
            <p className="text-muted-foreground">
              Building digital products that matter.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Netguru. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
