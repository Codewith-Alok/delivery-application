import { Users, Award, Leaf, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Customers",
  },
  {
    icon: Award,
    value: "5 Star",
    label: "Average Rating",
  },
  {
    icon: Leaf,
    value: "100%",
    label: "Organic Products",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Fresh Delivery",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our growing community of health-conscious customers who choose fresh, 
            organic produce delivered directly from local farms.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-card">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-fresh flex items-center justify-center text-4xl">
                ⭐
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg md:text-xl text-foreground italic mb-4">
                "The quality of fruits and vegetables is exceptional! Everything arrives 
                fresh and perfectly packaged. I've been a customer for over a year and 
                couldn't be happier with the service."
              </p>
              <div className="font-semibold text-primary">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">Verified Customer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
