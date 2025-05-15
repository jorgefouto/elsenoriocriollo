
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <section className="relative hero-height w-full bg-image overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Updated to a more Peruvian representative photo */}
        <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
             alt="Traditional Peruvian cuisine in a restaurant setting"
             className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-restaurant-dark via-restaurant-dark/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative h-full z-10 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Emphasize authentic Peruvian food */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-up">
            <span className="text-restaurant-gold">Authentic Peruvian Cuisine</span> in London
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-xl animate-fade-up [animation-delay:200ms]">
            Discover the colors, flavors, and soul of Peru with traditional dishes like ceviche, lomo saltado, and ají de gallina—prepared true to Peruvian heritage, in an elegant and welcoming setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:400ms]">
            <Button className="bg-restaurant-gold text-restaurant-dark hover:bg-restaurant-gold/90 hover:text-restaurant-dark">
              <a href="#reservation">Reserve a Table</a>
            </Button>
            <Button variant="outline" className="text-restaurant-gold border-restaurant-gold hover:bg-restaurant-gold hover:text-restaurant-dark">
              <a href="/menu">View Menu</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
