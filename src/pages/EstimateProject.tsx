import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EstimateProject = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    hearAbout: "",
    projectDetails: "",
    needsNDA: "No",
    services: [] as string[],
    agreeToMarketing: false
  });

  const serviceOptions = [
    "Web Development",
    "Mobile Development",
    "UX / UI Design",
    "Generative AI Development",
    "MVP",
    "Staff Augmentation",
    "Rapid Prototyping",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "We'll get back to you shortly to discuss your project.",
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Estimate Your Project
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us about your project and we'll get back to you with an estimate
            </p>
          </div>
        </div>
      </section>

   

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="company">Company name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="hearAbout">How did you hear about us?*</Label>
                <Input
                  id="hearAbout"
                  value={formData.hearAbout}
                  onChange={(e) => setFormData({...formData, hearAbout: e.target.value})}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="projectDetails">Tell us more about your project*</Label>
                <Textarea
                  id="projectDetails"
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                  required
                  rows={6}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Do you need an NDA first?*</Label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="nda"
                      value="Yes"
                      checked={formData.needsNDA === "Yes"}
                      onChange={(e) => setFormData({...formData, needsNDA: e.target.value})}
                      className="w-4 h-4"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="nda"
                      value="No"
                      checked={formData.needsNDA === "No"}
                      onChange={(e) => setFormData({...formData, needsNDA: e.target.value})}
                      className="w-4 h-4"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div>
                <Label>What can we help you with?</Label>
                <div className="grid md:grid-cols-2 gap-3 mt-2">
                  {serviceOptions.map((service) => (
                    <label key={service} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox
                        checked={formData.services.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="marketing"
                  checked={formData.agreeToMarketing}
                  onCheckedChange={(checked) => 
                    setFormData({...formData, agreeToMarketing: checked as boolean})
                  }
                />
                <Label htmlFor="marketing" className="cursor-pointer font-normal">
                  I agree to receive email marketing communications from Netguru.
                </Label>
              </div>

              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                  Submit
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <p className="mb-2">
                  Netguru S.A. will process the information you provide in order to contact you and discuss your project. Some data may also be used for statistical purposes.
                </p>
                <p>
                  You can unsubscribe from these communications at any time. For more information please view our Privacy Policy or contact dpo@netguru.com
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EstimateProject;
