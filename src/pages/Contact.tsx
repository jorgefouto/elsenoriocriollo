import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Form submission logic would go here

    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return <div className="min-h-screen bg-restaurant-dark text-restaurant-light">
      <Navbar />
      <ScrollArea className="h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative bg-image">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Restaurant interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-restaurant-dark/90 to-restaurant-dark/80"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-serif text-restaurant-light mb-4">Contact Us</h1>
              <div className="w-16 h-1 bg-restaurant-gold mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                We'd love to hear from you. Reach out with questions, feedback, or to plan your next visit.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16 bg-restaurant-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-restaurant-muted p-8 rounded-lg border border-restaurant-gold/20 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-restaurant-gold/10 text-restaurant-gold">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-serif text-restaurant-gold mb-4">Address</h3>
                <p className="text-gray-300">
                  12 Peckham Park Road<br />
                  SE15 6TW
                </p>
              </div>
              
              <div className="bg-restaurant-muted p-8 rounded-lg border border-restaurant-gold/20 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-restaurant-gold/10 text-restaurant-gold">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-serif text-restaurant-gold mb-4">Phone</h3>
                <p className="text-gray-300 mb-2">
                  <a href="tel:+442076356683" className="hover:text-restaurant-gold transition-colors">
                    +44 2076356683
                  </a>
                </p>
                <p className="text-gray-400 text-sm">
                  Available during business hours
                </p>
              </div>
              
              <div className="bg-restaurant-muted p-8 rounded-lg border border-restaurant-gold/20 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-restaurant-gold/10 text-restaurant-gold">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-serif text-restaurant-gold mb-4">Email</h3>
                <p className="text-gray-300 mb-2">
                  <a href="mailto:info@savoryrestaurant.com" className="hover:text-restaurant-gold transition-colors">
                    info@savoryrestaurant.com
                  </a>
                </p>
                <p className="text-gray-400 text-sm">
                  We'll respond within 24 hours
                </p>
              </div>
              
              <div className="bg-restaurant-muted p-8 rounded-lg border border-restaurant-gold/20 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-restaurant-gold/10 text-restaurant-gold">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-serif text-restaurant-gold mb-4">Hours</h3>
                <p className="text-gray-300 mb-1">Mon-Thu: 5PM-10PM</p>
                <p className="text-gray-300 mb-1">Fri-Sat: 5PM-11PM</p>
                <p className="text-gray-300">Sun: 5PM-9PM</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Map */}
        <section className="py-16 bg-restaurant-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-serif text-restaurant-light mb-6">Send Us a Message</h2>
                <div className="w-16 h-1 bg-restaurant-gold mb-6"></div>
                <p className="text-gray-400 mb-8">
                  Have a question or comment? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} className="bg-restaurant-dark border-restaurant-gold/20 focus:border-restaurant-gold" placeholder="Your name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className="bg-restaurant-dark border-restaurant-gold/20 focus:border-restaurant-gold" placeholder="Your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} className="bg-restaurant-dark border-restaurant-gold/20 focus:border-restaurant-gold" placeholder="Subject" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="w-full h-32 px-3 py-2 text-restaurant-light bg-restaurant-dark border border-restaurant-gold/20 rounded-md focus:outline-none focus:border-restaurant-gold" placeholder="Your message" />
                  </div>
                  
                  <Button type="submit" className="w-full bg-restaurant-gold text-restaurant-dark hover:bg-restaurant-gold/90">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Map */}
              <div>
                <h2 className="text-3xl font-serif text-restaurant-light mb-6">Find Us</h2>
                <div className="w-16 h-1 bg-restaurant-gold mb-6"></div>
                <p className="text-gray-400 mb-8">
                  Located in the heart of Peckham, London, El Señorio Criollo is easily accessible by public transportation and offers convenient parking for guests.
                </p>
                
                <div className="w-full h-80 md:h-96 bg-restaurant-dark rounded-lg overflow-hidden border border-restaurant-gold/20">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.703204177482!2d-0.06325998414949798!3d51.472168979631246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876036c2d4df0cf%3A0xd6d4bac0f100849c!2s12%20Peckham%20Park%20Rd%2C%20London%20SE15%206TW%2C%20UK!5e0!3m2!1sen!2suk!4v1715798421531!5m2!1sen!2suk" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" title="Restaurant location"></iframe>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-restaurant-dark p-4 rounded-lg border border-restaurant-gold/20">
                    <h3 className="text-lg font-serif text-restaurant-gold mb-2">Parking</h3>
                    <p className="text-gray-400 text-sm">
                      Complimentary valet parking is available during dinner service. Public parking garages are also located within walking distance.
                    </p>
                  </div>
                  
                  <div className="bg-restaurant-dark p-4 rounded-lg border border-restaurant-gold/20">
                    <h3 className="text-lg font-serif text-restaurant-gold mb-2">Public Transit</h3>
                    <p className="text-gray-400 text-sm">
                      We're located two blocks from the Peachtree Center MARTA station, making us easily accessible via Atlanta's public transit system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-image">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Restaurant ambiance" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-restaurant-dark/90 to-restaurant-dark/80"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-6">Ready to Experience Peruvian Food?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Make a reservation today and join us for an unforgettable dining experience.
            </p>
            <Button className="bg-restaurant-gold text-restaurant-dark hover:bg-restaurant-gold/90 px-8 py-6 text-lg">
              <a href="#reservation">Reserve a Table</a>
            </Button>
          </div>
        </section>
        
        <Footer />
      </ScrollArea>
    </div>;
};
export default Contact;