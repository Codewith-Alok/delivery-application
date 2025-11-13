import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh organic farm landscape"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Fresh From the Farm <br />
            <span className="text-primary">to Your Table</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover nature's finest selection of organic fruits and vegetables, 
            handpicked daily and delivered fresh to your doorstep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Fresh Picks
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <span className="text-muted-foreground">100% Organic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <span className="text-muted-foreground">Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-muted-foreground">Farm Fresh Daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
