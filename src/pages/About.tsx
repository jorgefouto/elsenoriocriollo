import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChefHat, Clock, Trophy, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-restaurant-dark text-restaurant-light">
      <Navbar />
      <ScrollArea className="h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative bg-image">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Restaurant interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-restaurant-dark/90 to-restaurant-dark/80"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-serif text-restaurant-light mb-4">Our Story</h1>
              <div className="w-16 h-1 bg-restaurant-gold mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                A decade of culinary excellence, passionate innovation, and unforgettable dining experiences.
              </p>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-16 md:py-24 bg-restaurant-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-6">Our Beginning</h2>
                <div className="w-16 h-1 bg-restaurant-gold mb-6"></div>
                <p className="text-gray-300 mb-6">
                  The story of Peruvian cuisine is a journey across vibrant landscapes and ancient cultures. From the Pacific coast to the soaring heights of the Andes, Peru’s table is set with flavors and traditions as diverse as its geography.
                </p>
                <p className="text-gray-300 mb-6">
                  Centuries of native ingredients—quinoa, potatoes, aji peppers, and fresh seafood—blend with influences from Spain, Africa, China, Italy, and Japan, creating one of the world’s most unique and celebrated kitchens.
                </p>
                <p className="text-gray-300">
                  At El Senorio Criollo, we honor this heritage by sharing classic dishes like ceviche, lomo saltado, and anticuchos, crafted with love and a respect for the Peruvian spirit of hospitality. To dine with us is to embark on a flavorful adventure through Peru’s rich culinary legacy.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-restaurant-gold/10 absolute -inset-4 rounded-lg -z-10"></div>
                <img 
                  src="/lovable-uploads/2edde999-d32b-4d93-b776-a1312091aa73.png" 
                  alt="Peruvian chef cooking traditional food" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="py-16 md:py-24 bg-restaurant-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-3">Our Philosophy</h2>
              <div className="w-16 h-1 bg-restaurant-gold mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                At the heart of Savory is our dedication to exceptional ingredients, creative technique, and memorable experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-restaurant-dark p-8 rounded-lg border border-restaurant-gold/20 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-restaurant-gold/10 text-restaurant-gold">
                  <ChefHat size={32} />
                </div>
                <h3 className="text-xl font-serif text-restaurant-gold mb-4">Culinary Craft</h3>
                <p className="text-gray-400">
                  We blend traditional techniques with innovative approaches, treating cooking as both an art and a science.
                </p>
              </div>
              
              <div className="bg-restaurant-dark p-8 rounded-lg border border-restaurant-gold/20 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-restaurant-gold/10 text-restaurant-gold">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-serif text-restaurant-gold mb-4">Seasonal Focus</h3>
                <p className="text-gray-400">
                  Our menu evolves with the seasons, showcasing ingredients at their peak flavor and freshness.
                </p>
              </div>
              
              <div className="bg-restaurant-dark p-8 rounded-lg border border-restaurant-gold/20 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-restaurant-gold/10 text-restaurant-gold">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-serif text-restaurant-gold mb-4">Community Connection</h3>
                <p className="text-gray-400">
                  We partner with local farmers, artisans, and purveyors to support our community and ensure quality.
                </p>
              </div>
              
              <div className="bg-restaurant-dark p-8 rounded-lg border border-restaurant-gold/20 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-restaurant-gold/10 text-restaurant-gold">
                  <Trophy size={32} />
                </div>
                <h3 className="text-xl font-serif text-restaurant-gold mb-4">Excellence in Service</h3>
                <p className="text-gray-400">
                  We believe dining is an experience, with attentive, knowledgeable service as essential as the cuisine.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Chef Section */}
        <section className="py-16 md:py-24 bg-restaurant-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-3">Discover Peru</h2>
                <div className="w-16 h-1 bg-restaurant-gold mb-6"></div>
                <h3 className="text-xl font-serif text-restaurant-gold mb-4">A Culinary Journey like No Other</h3>
                <p className="text-gray-300 mb-6">
                  Peru is a treasure trove of flavors, where every meal is a celebration of its diverse landscapes and rich history. From the Pacific coast’s fresh seafood to the hearty comfort of Andean mountain stews and the vibrant spices of the Amazon, Peruvian cuisine is truly a reflection of its people and places.
                </p>
                <p className="text-gray-300 mb-6">
                  Peruvian food is renowned for its fusion of cultures—melding ancient Incan traditions with ingredients and techniques brought by Spanish, African, Chinese, and Japanese communities. Staples like ceviche, anticuchos, and aji de gallina delight with each bite, carrying stories of both ancestry and innovation.
                </p>
                <p className="text-gray-300">
                  At El Senorio Criollo, we proudly bring the spirit of Peru to your table, inviting you to experience a world of color, taste, and tradition that has earned Peruvian cuisine recognition among the world’s finest.
                </p>
              </div>
              
              <div className="order-1 lg:order-2 relative flex justify-center">
                <div className="bg-restaurant-gold/10 absolute -inset-4 rounded-lg -z-10"></div>
                <div className="w-4/5 max-w-xs md:max-w-md lg:max-w-md xl:max-w-lg">
                  <img 
                    src="/lovable-uploads/a6a33cd6-610a-4350-9cda-08d4c93a0bb6.png"
                    alt="Andean women and child in traditional Peruvian dress"
                    className="rounded-lg shadow-xl w-full h-[32rem] md:h-[36rem] object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-image">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Restaurant ambiance" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-restaurant-dark/90 to-restaurant-dark/80"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-6">
              Join Us for an Unforgettable Experience
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We invite you to experience the passion, creativity, and exceptional flavors that define Savory.
            </p>
            <div className="flex justify-center">
              <a 
                href="/contact" 
                className="px-6 py-3 border border-restaurant-gold text-restaurant-gold font-medium rounded hover:bg-restaurant-gold/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
        
        <Footer />
      </ScrollArea>
    </div>
  );
};

export default About;
