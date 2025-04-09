
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
        <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white opacity-100 shadow-md py-1"
          : "bg-white/40 backdrop-blur-sm opacity-40 py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}  
          <Link 
            to="/" 
            className="flex items-center gap-1 py-1" 
            aria-label="VR Best Group Home">
            <img 
              src="https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/vr-best-fin-logo-1.png"
              alt="VR Best Solutions - IT Enabled Services" 
              className="logo-container object-contain"
              width="180"
              height="60"
            />
          </Link>
          
          {/* Call Button - Desktop */}
          <div className="hidden md:flex items-center">
            <a href="tel:3073872378" className="flex flex-row items-center group space-x-2">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-md mb-1">
                CALL TODAY
              </Button>
              <div className="flex items-center text-sm text-gray-700">
                <Phone size={16} className="mr-1" />
                <span>307-3 <span className="font-bold">VR BEST</span></span>
              </div>
            </a>
          </div>
          
          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-primary font-medium">Home</Link>
            <Link to="/services" className="text-gray-800 hover:text-primary font-medium">Services</Link>
            <Link to="/about" className="text-gray-800 hover:text-primary font-medium">About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-primary font-medium">Contact</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <a href="tel:3073872378" className="mr-4 flex items-center">
              <Phone size={20} className="text-primary" />
            </a>
            <button 
              onClick={toggleMenu} 
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 animate-fade">
            <div className="flex flex-col space-y-4 pb-4">
              <Link to="/" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>Home</Link>
              <Link to="/services" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>Services</Link>
              <Link to="/about" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="text-gray-800 hover:text-primary" onClick={toggleMenu}>Contact</Link>
              
              {/* Call Button - Mobile */}
              <div className="pt-2">
                <a href="tel:3073872378" className="flex flex-col">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-md w-full mb-1">
                    CALL TODAY
                  </Button>
                  <div className="flex items-center justify-center text-sm text-gray-700 mt-1">
                    <Phone size={16} className="mr-1" />
                    <span>307-3 <span className="font-bold">VR BEST</span></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
