
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Reservation = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    time: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.guests || !formData.time || !date) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Form submission logic would go here
    
    toast({
      title: "Reservation Requested",
      description: "We'll confirm your reservation shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      time: "",
      message: ""
    });
    setDate(undefined);
  };

  return (
    <section id="reservation" className="bg-image section-padding">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Restaurant ambiance" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-restaurant-light mb-3">Make a Reservation</h2>
          <div className="w-16 h-1 bg-restaurant-gold mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Reserve your table to experience our culinary creations in an elegant atmosphere.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-restaurant-dark/80 backdrop-blur-sm p-8 rounded-lg border border-restaurant-gold/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-restaurant-muted border-restaurant-gold/20 focus:border-restaurant-gold"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-restaurant-muted border-restaurant-gold/20 focus:border-restaurant-gold"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-restaurant-muted border-restaurant-gold/20 focus:border-restaurant-gold"
                    placeholder="Your phone"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guests">Guests</Label>
                  <Select onValueChange={(value) => handleSelectChange("guests", value)}>
                    <SelectTrigger className="bg-restaurant-muted border-restaurant-gold/20 focus:border-restaurant-gold">
                      <SelectValue placeholder="Number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                      <SelectItem value="9+">9+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-restaurant-muted border-restaurant-gold/20 hover:bg-restaurant-muted hover:text-restaurant-light focus:border-restaurant-gold"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span className="text-muted-foreground">Select a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-restaurant-muted border-restaurant-gold/20">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="bg-restaurant-muted text-restaurant-light"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Select onValueChange={(value) => handleSelectChange("time", value)}>
                    <SelectTrigger className="bg-restaurant-muted border-restaurant-gold/20 focus:border-restaurant-gold">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"].map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Special Requests (Optional)</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full h-24 px-3 py-2 text-restaurant-light bg-restaurant-muted border border-restaurant-gold/20 rounded-md focus:outline-none focus:border-restaurant-gold"
                  placeholder="Any special requests or dietary restrictions?"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-restaurant-gold text-restaurant-dark hover:bg-restaurant-gold/90"
              >
                Request Reservation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
