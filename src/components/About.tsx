
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="bg-restaurant-muted section-padding border-t border-restaurant-gold/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-0 lg:gap-x-20 items-center">
          {/* LEFT: OUR STORY TEXT */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-md md:max-w-lg xl:max-w-xl px-2 md:px-6 lg:px-4 xl:px-2">
              <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-4 md:mb-6 leading-tight animate-fade-in">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-restaurant-gold mb-5 md:mb-6"></div>
              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed md:text-lg">
                At El Senorio Criollo, we celebrate the vibrant culinary heritage of Peru. From the zesty flavors of ceviche along the Pacific coast to the earthy notes of Andean stews, our dishes reflect the incredible diversity of Peruvian cuisine.
              </p>
              <p className="text-gray-300 mb-4 md:mb-6 md:text-base leading-relaxed">
                Peru’s kitchens are melting pots — blending indigenous ingredients with Spanish, African, Chinese, and Japanese influences to create some of the world’s most exciting and colorful food traditions.
              </p>
              <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed">
                Whether you’re savoring a Lomo Saltado in the heart of Lima or enjoying anticuchos in a bustling street market, eating in Peru is always about sharing — food, stories, and unforgettable moments. Join us and experience Peru’s flavors, right at your table.
              </p>
              <Button className="bg-restaurant-gold text-restaurant-dark hover:bg-restaurant-gold/90 transition-all shadow-none">
                <a href="/about">Learn More</a>
              </Button>
            </div>
          </div>

          {/* RIGHT: IMAGES */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 lg:ml-6 xl:ml-12 2xl:ml-16">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg h-40 md:h-60 xl:h-64 animate-fade-in">
                <img
                  src="/lovable-uploads/051dab95-2340-4da2-b5e5-9ad0f685a991.png"
                  alt="Peruvian festival with dancers and traditional market"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-40 md:h-60 xl:h-64 animate-fade-in">
                <img
                  src="/lovable-uploads/81337808-ac15-4a30-8893-abca6244ff8e.png"
                  alt="Machu Picchu with llamas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="mt-8 lg:mt-0 flex items-center">
              <div className="overflow-hidden rounded-lg h-60 md:h-[18rem] xl:h-[26rem] w-[120%] md:w-[140%] xl:w-[160%] animate-fade-in">
                <img
                  src="/lovable-uploads/562c478f-c33c-41e6-a3cf-90fd444a7b3d.png"
                  alt="Peruvian women with llamas and alpacas"
                  className="w-full h-full object-cover object-top md:object-center hover:scale-100 transition-transform duration-500"
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
