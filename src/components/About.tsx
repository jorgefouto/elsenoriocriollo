
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="bg-restaurant-muted section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-6">About El Señorío Criollo</h2>
            <div className="w-16 h-1 bg-restaurant-gold mb-6"></div>
            <p className="text-gray-300 mb-6">
              Established in 2010, El Señorío Criollo introduces London to the true taste of Peru. Our family-run restaurant celebrates Peru's rich culinary heritage, from the vibrant coast to the high Andes.
            </p>
            <p className="text-gray-300 mb-6">
              Chef Michael Reyes and our kitchen team craft classic Peruvian dishes—from ceviche to lomo saltado and beyond—using the freshest local and Peruvian ingredients. Each plate is a journey through Peru’s history, tradition, and regional flavors.
            </p>
            <p className="text-gray-300 mb-8">
              Join us to experience Peru’s legendary hospitality and the authentic flavors that have made Peruvian food world-renowned.
            </p>
            <Button className="bg-restaurant-gold text-restaurant-dark hover:bg-restaurant-gold/90">
              <a href="/about">Learn More</a>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-48 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Peruvian restaurant interior with decorations" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-48 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Peruvian chef preparing food in the kitchen" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="mt-8">
              <div className="overflow-hidden rounded-lg h-80 md:h-[28rem]">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Guests enjoying authentic Peruvian food in London" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
