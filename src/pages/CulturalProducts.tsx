import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Info, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";

const CulturalProducts = () => {
  const products = [
    {
      id: 1,
      name: "Traditional Palestinian Embroidery",
      description: "Hand-crafted embroidery with traditional Palestinian patterns, made by local artisans using techniques passed down through generations.",
      price: 45.99,
      category: "Textiles",
      image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Olive Wood Carvings",
      description: "Beautiful hand-carved items made from olive wood, including religious symbols, kitchen utensils, and decorative pieces.",
      price: 32.50,
      category: "Crafts",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Palestinian Olive Oil",
      description: "Premium extra virgin olive oil from ancient olive trees in Palestinian territories, cold-pressed and bottled with care.",
      price: 24.99,
      category: "Food",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-2">
          <div className="inline-block mb-3">
            <Badge className="bg-yellow-500 text-yellow-950 border-yellow-600 text-sm px-4 py-1 font-medium">
              Cultural Heritage
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            Palestinian Cultural Products
          </h1>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Discover the rich cultural heritage of Palestine through these authentic handcrafted products. 
            Each item represents centuries of tradition and craftsmanship passed down through generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group bg-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-yellow-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <Badge 
                  className="absolute top-4 right-4 bg-yellow-500 text-yellow-950 font-medium border-none"
                >
                  {product.category}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold text-yellow-300 group-hover:text-yellow-400 transition-colors">
                  {product.name}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 line-clamp-3 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                  <span className="text-xl font-semibold text-yellow-300">
                    ${product.price}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2 border-t border-white/10">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
                >
                  <Info className="mr-2 h-4 w-4" />
                  Details
                </Button>
                <Button 
                  size="sm"
                  className="bg-yellow-500 hover:bg-yellow-600 text-yellow-950 border-none font-medium"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Explore Our Collection</h2>
            <p className="text-gray-200 mb-4">
              Our products are ethically sourced and support local Palestinian artisans and their communities.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-yellow-950 border-none font-medium">
              View All Products
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-24 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-300">
            © 2025 Palestinian Heritage Explorer. All products support authentic Palestinian artisans.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CulturalProducts;
