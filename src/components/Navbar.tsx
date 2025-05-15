import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper for smooth scroll to reservation section
  const handleReserveClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("reservation");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
        // Also update the hash without reloading or jumping
        window.history.replaceState(null, "", "#reservation");
      }
    }
    // else, allow default nav (if on another page)
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-restaurant-dark shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-serif text-restaurant-gold">
            El Señorio Criollo
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm uppercase tracking-wider hover:text-restaurant-gold transition-colors">
              Home
            </Link>
            <Link to="/menu" className="text-sm uppercase tracking-wider hover:text-restaurant-gold transition-colors">
              Menu
            </Link>
            <Link to="/about" className="text-sm uppercase tracking-wider hover:text-restaurant-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm uppercase tracking-wider hover:text-restaurant-gold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-restaurant-light"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-restaurant-muted absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sm uppercase tracking-wider py-2 hover:text-restaurant-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="text-sm uppercase tracking-wider py-2 hover:text-restaurant-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="text-sm uppercase tracking-wider py-2 hover:text-restaurant-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-sm uppercase tracking-wider py-2 hover:text-restaurant-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
