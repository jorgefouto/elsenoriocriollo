
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The atmosphere and food were exceptional. The truffle risotto is a masterpiece - creamy with just the right amount of earthiness. Service was impeccable.",
    author: "Alexandra Thompson",
    title: "Food Critic"
  },
  {
    id: 2,
    text: "An unforgettable dining experience. From the elegant ambiance to the perfectly executed dishes, every detail exceeded our expectations. We'll definitely be back.",
    author: "Michael Rodriguez",
    title: "Local Foodie"
  },
  {
    id: 3,
    text: "Savory perfectly balances innovation and tradition. The aged ribeye was perfectly cooked, and the wine pairing recommendation was spot on. A new favorite.",
    author: "David Chen",
    title: "Wine Enthusiast"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-restaurant-dark section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-3">Guest Experiences</h2>
          <div className="w-16 h-1 bg-restaurant-gold mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="flex justify-center mb-12">
            <Quote size={64} className="text-restaurant-gold/30" />
          </div>
          
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-300 italic mb-8 min-h-[160px]">
              {testimonials[activeIndex].text}
            </p>
            
            <div className="mb-12">
              <h4 className="text-restaurant-gold font-serif text-xl mb-1">
                {testimonials[activeIndex].author}
              </h4>
              <p className="text-gray-400">{testimonials[activeIndex].title}</p>
            </div>
            
            <div className="flex justify-center gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 border border-restaurant-gold/30 rounded-full text-restaurant-gold hover:bg-restaurant-gold/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex 
                        ? "bg-restaurant-gold w-8" 
                        : "bg-restaurant-gold/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 border border-restaurant-gold/30 rounded-full text-restaurant-gold hover:bg-restaurant-gold/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
