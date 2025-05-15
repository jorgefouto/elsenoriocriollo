import { Button } from "@/components/ui/button";
const About = () => {
  return <section className="bg-restaurant-muted section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-6">Our Story</h2>
            <div className="w-16 h-1 bg-restaurant-gold mb-6"></div>
            <p className="text-gray-300 mb-6">At El Senorio Criollo, we celebrate the vibrant culinary heritage of Peru. From the zesty flavors of ceviche along the Pacific coast to the earthy notes of Andean stews, our dishes reflect the incredible diversity of Peruvian cuisine.</p>
            <p className="text-gray-300 mb-6">
              Peru’s kitchens are melting pots — blending indigenous ingredients with Spanish, African, Chinese, and Japanese influences to create some of the world’s most exciting and colorful food traditions.  
            </p>
            <p className="text-gray-300 mb-8">
              Whether you’re savoring a Lomo Saltado in the heart of Lima or enjoying anticuchos in a bustling street market, eating in Peru is always about sharing — food, stories, and unforgettable moments. Join us and experience Peru’s flavors, right at your table.
            </p>
            <Button className="bg-restaurant-gold text-restaurant-dark hover:bg-restaurant-gold/90">
              <a href="/about">Learn More</a>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-48 md:h-64">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" alt="Colorful restaurant streets in Cusco, Peru" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-lg h-48 md:h-64">
                <img src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=900&q=80" alt="Dining room with traditional Peruvian décor" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="mt-8">
              <div className="overflow-hidden rounded-lg h-80 md:h-[28rem]">
                <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80" alt="Peruvian restaurant with local ambience" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;