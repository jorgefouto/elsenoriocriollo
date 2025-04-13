
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="bg-restaurant-muted section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-6">Our Story</h2>
            <div className="w-16 h-1 bg-restaurant-gold mb-6"></div>
            <p className="text-gray-300 mb-6">
              Founded in 2010, Savory began as a small family-owned bistro with a passion for exceptional ingredients and memorable dining experiences.
            </p>
            <p className="text-gray-300 mb-6">
              Over the years, under the guidance of award-winning Chef Michael Reyes, we've evolved into a destination for food enthusiasts seeking innovative dishes with classic foundations.
            </p>
            <p className="text-gray-300 mb-8">
              Our commitment to quality remains unchanged - we source locally when possible, collaborate with artisan producers, and create each dish with meticulous attention to detail.
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
                  alt="Restaurant interior" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-48 md:h-64">
                <img 
                  src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Chef preparing food" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="mt-8">
              <div className="overflow-hidden rounded-lg h-80 md:h-[28rem]">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Dining area" 
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
