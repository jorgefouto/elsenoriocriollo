
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-restaurant-dark text-restaurant-light">
      <Navbar />
      <ScrollArea className="h-screen">
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
          <h1 className="text-6xl md:text-8xl font-serif text-restaurant-gold mb-4">404</h1>
          <div className="w-16 h-1 bg-restaurant-gold mb-6"></div>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-md">
            The page you're looking for isn't on our menu.
          </p>
          <Button className="bg-restaurant-gold text-restaurant-dark hover:bg-restaurant-gold/90">
            <a href="/">Return to Home</a>
          </Button>
        </div>
        <Footer />
      </ScrollArea>
    </div>
  );
};

export default NotFound;
