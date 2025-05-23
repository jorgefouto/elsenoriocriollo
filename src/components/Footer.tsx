import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-restaurant-muted border-t border-restaurant-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif text-restaurant-gold mb-4">El Señorio Criollo</h3>
            <p className="text-gray-400 mb-6">A peruvian dining experience with classic influences, offering innovative cuisine in an elegant atmosphere.</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ElSenorioCriolloOficial"
                className="text-gray-400 hover:text-restaurant-gold transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif text-restaurant-gold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-restaurant-gold mr-2 mt-1 shrink-0" />
                <span className="text-gray-400">12 Peckham Park Road - SE15 6TW</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-restaurant-gold mr-2 shrink-0" />
                <a href="tel:4045551234" className="text-gray-400 hover:text-restaurant-gold transition-colors">+44 2076356683</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-restaurant-gold mr-2 shrink-0" />
                <a href="mailto:info@savoryrestaurant.com" className="text-gray-400 hover:text-restaurant-gold transition-colors">elsenoriocriollo.co.uk</a>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-xl font-serif text-restaurant-gold mb-4">Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={20} className="text-restaurant-gold mr-2 mt-1 shrink-0" />
                <span className="text-gray-400">
                  Monday, Wednesday–Sunday: 12:00 to 22:00<br />
                  <span className="block text-gray-400">Closed Tuesday</span>
                </span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif text-restaurant-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-restaurant-gold transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-restaurant-gold transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-restaurant-gold/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} El Señorio Criollo. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-restaurant-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-restaurant-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
