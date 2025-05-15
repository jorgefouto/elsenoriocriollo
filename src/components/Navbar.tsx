import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111]/95 backdrop-blur-lg shadow-lg border-b border-[#222]'
          : 'bg-transparent'
      }`}
      style={{
        // Optionally, you can add more custom styles here if needed.
      }}
    >
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
            <a 
              href="#reservation" 
              className="px-4 py-2 border border-restaurant-gold text-restaurant-gold hover:bg-restaurant-gold hover:text-restaurant-dark transition-colors text-sm uppercase tracking-wider"
            >
              Reserve
            </a>
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
              <a 
                href="#reservation" 
                className="inline-block px-4 py-2 border border-restaurant-gold text-restaurant-gold hover:bg-restaurant-gold hover:text-restaurant-dark transition-colors text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Reserve
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
