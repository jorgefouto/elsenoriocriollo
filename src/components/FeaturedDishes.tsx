
import { Card, CardContent } from "@/components/ui/card";

const dishes = [
  {
    id: 1,
    name: "Herb-Crusted Sea Bass",
    description: "Fresh sea bass with a blend of herbs, served with lemon butter and seasonal vegetables",
    price: 32,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  {
    id: 2,
    name: "Truffle Risotto",
    description: "Creamy Arborio rice with wild mushrooms, shaved black truffle, and aged Parmesan",
    price: 28,
    image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  {
    id: 3,
    name: "Aged Prime Ribeye",
    description: "28-day dry-aged ribeye with roasted garlic butter, served with truffle fries",
    price: 45,
    image: "https://images.unsplash.com/photo-1546241072-48010ad2862c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
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
                  <span className="text-restaurant-gold font-semibold">${dish.price}</span>
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
