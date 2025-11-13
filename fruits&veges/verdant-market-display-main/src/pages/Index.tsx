import { useState } from "react";
import { Hero } from "@/components/Hero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";

import appleImage from "@/assets/apple.jpg";
import bananaImage from "@/assets/banana.jpg";
import carrotImage from "@/assets/carrot.jpg";
import broccoliImage from "@/assets/broccoli.jpg";
import strawberryImage from "@/assets/strawberry.jpg";
import tomatoImage from "@/assets/tomato.jpg";

const products = [
  {
    id: 1,
    name: "Fresh Red Apples",
    price: "$4.99",
    image: appleImage,
    category: "Fruits",
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: "$2.99",
    image: bananaImage,
    category: "Fruits",
  },
  {
    id: 3,
    name: "Fresh Carrots",
    price: "$3.49",
    image: carrotImage,
    category: "Vegetables",
  },
  {
    id: 4,
    name: "Green Broccoli",
    price: "$3.99",
    image: broccoliImage,
    category: "Vegetables",
  },
  {
    id: 5,
    name: "Sweet Strawberries",
    price: "$5.99",
    image: strawberryImage,
    category: "Seasonal",
  },
  {
    id: 6,
    name: "Ripe Tomatoes",
    price: "$4.49",
    image: tomatoImage,
    category: "Organic",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Handpicked selection of the freshest fruits and vegetables, 
              delivered daily from certified organic farms.
            </p>
          </div>

          <CategoryFilter onCategoryChange={setSelectedCategory} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
