
import { Card, CardContent } from "@/components/ui/card";

const dishes = [
  {
    id: 1,
    name: "Lomo Saltado",
    description: "Chunks of beef steak stir-fried with fresh tomato and red onion, served with fries and white rice.",
    price: 15,
    image: "/lovable-uploads/959be316-6746-4a47-8aa1-6d27afa92bf1.png",
  },
  {
    id: 2,
    name: "Ají de Gallina",
    description: "Shredded chicken in a creamy yellow chili sauce, served with a boiled egg, olives, and white rice. A traditional Peruvian specialty.",
    price: 16,
    image: "/lovable-uploads/1b80307a-4808-454e-9fc0-3f7862bfa0ea.png",
  },
  {
    id: 3,
    name: "Ceviche Mixto",
    description: "Fresh raw fish, baby prawns, mussels, and squid cured in citrus juice (lime), spiced with ají, and mixed with chopped onions, salt, and coriander. Served with sweet potato and Peruvian corn.",
    price: 20,
    image: "/lovable-uploads/99fe47c0-eb19-4c23-abf6-70ee505d7112.png",
  },
];

const FeaturedDishes = () => {
  return (
    <section className="bg-restaurant-dark section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-3">Featured Dishes</h2>
          <div className="w-16 h-1 bg-restaurant-gold mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our chef's selection of exceptional dishes, crafted with premium ingredients and expert technique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <Card key={dish.id} className="bg-restaurant-muted border border-restaurant-gold/20 overflow-hidden hover:shadow-lg hover:shadow-restaurant-gold/10 transition-all duration-300">
              <div className="relative h-60">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-serif text-restaurant-light">{dish.name}</h3>
                  <span className="text-restaurant-gold font-semibold">£{dish.price}.00</span>
                </div>
                <p className="text-gray-400 text-sm">{dish.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
