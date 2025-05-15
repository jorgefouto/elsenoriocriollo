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
                  Savory was founded in 2010 by Chef Michael Reyes, whose passion for culinary excellence and innovative flavors drove him to create a restaurant that would redefine dining in Atlanta.
                </p>
                <p className="text-gray-300 mb-6">
                  Beginning as a small bistro with just 10 tables, Savory quickly gained recognition for its exceptional cuisine, attentive service, and intimate atmosphere. As word spread, loyal patrons and food critics alike celebrated Chef Reyes' creative approach to classic dishes.
                </p>
                <p className="text-gray-300">
                  In 2015, Savory expanded to its current location, a beautifully renovated historic building in the heart of downtown Atlanta. The expanded space allowed Chef Reyes to further develop his culinary vision while maintaining the intimate atmosphere that had become Savory's signature.
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
                <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-3">Our Chef</h2>
                <div className="w-16 h-1 bg-restaurant-gold mb-6"></div>
                <h3 className="text-xl font-serif text-restaurant-gold mb-4">Michael Reyes, Executive Chef & Founder</h3>
                <p className="text-gray-300 mb-6">
                  Chef Michael Reyes brings over 20 years of culinary experience to Savory. After training at the Culinary Institute of America and working in Michelin-starred restaurants across Europe and Asia, he returned to his hometown of Atlanta to create a restaurant that would honor classic techniques while embracing innovation.
                </p>
                <p className="text-gray-300 mb-6">
                  His approach combines respect for traditional methods with a willingness to experiment with flavor combinations and presentation. He is particularly known for his creative use of local, seasonal ingredients and his ability to elevate familiar dishes with unexpected elements.
                </p>
                <p className="text-gray-300">
                  Chef Reyes has been recognized with numerous awards, including Atlanta Chef of the Year (2018) and a James Beard Foundation nomination. He regularly participates in culinary education programs and food festivals throughout the Southeast.
                </p>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="bg-restaurant-gold/10 absolute -inset-4 rounded-lg -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Chef Michael Reyes" 
                  className="rounded-lg shadow-xl"
                />
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#reservation" 
                className="px-6 py-3 bg-restaurant-gold text-restaurant-dark font-medium rounded hover:bg-restaurant-gold/90 transition-colors"
              >
                Reserve a Table
              </a>
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
