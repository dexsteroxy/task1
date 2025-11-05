import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to bring your <span className="text-primary">vision to life?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-background hover:bg-primary/90 font-semibold px-8"
            >
              Get a free estimate →
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-background font-semibold px-8"
            >
              See our work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
