import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Fruits", "Vegetables", "Seasonal", "Organic"];

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ onCategoryChange }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="default"
          onClick={() => handleCategoryClick(category)}
          className="min-w-[100px]"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
