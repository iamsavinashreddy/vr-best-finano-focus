
import React from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-primary text-white relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">VR Best Financials</h3>
            <p className="mb-4">Your trusted partner for comprehensive financial planning and wealth management solutions.</p>
            <p className="mb-4">
              <a href="https://vrbest.group" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center hover:text-secondary">
                Managed by VR Best Solutions
                <ExternalLink size={14} className="ml-1" />
              </a>
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
              <li><Link to="/services" className="hover:text-secondary">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <Phone size={18} className="mr-2" />
              <a href="tel:3073872378" className="hover:text-secondary">307-387-2378</a>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={18} className="mr-2" />
              <a href="mailto:fin@vrbest.group" className="hover:text-secondary">fin@vrbest.group</a>
            </div>
            <div className="flex items-center mb-4">
              <MapPin size={18} className="mr-2" />
              <p>PO BOX 3067, Camp Hill, PA, 17011</p>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <div>
                <p>Mon-Fri: 9AM - 5PM</p>
                <p>Sat: By appointment</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© {currentYear} VR Best Financials. All Rights Reserved.</p>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-secondary hover:bg-secondary/80 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
