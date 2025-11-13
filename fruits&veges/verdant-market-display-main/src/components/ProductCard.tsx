import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
}

export const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-card hover:-translate-y-1 animate-scale-in">
      <div className="relative overflow-hidden bg-secondary/30">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <span className="text-sm text-muted-foreground">per kg</span>
        </div>
        
        <Button 
          variant="default" 
          className="w-full group/btn"
          size="default"
        >
          <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
