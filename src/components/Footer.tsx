
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">VR Best Financials</h3>
            <p className="mb-4">Your trusted partner for comprehensive financial planning and wealth management solutions.</p>
            <div className="flex items-center mb-2">
              <Phone size={18} className="mr-2" />
              <a href="tel:3073872378" className="hover:text-primary-foreground">307-387-2378</a>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={18} className="mr-2" />
              <a href="mailto:info@vrbestfinancials.com" className="hover:text-primary-foreground">info@vrbestfinancials.com</a>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="mr-2" />
              <p>123 Financial District, New York, NY</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-foreground">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#estate" className="hover:text-primary-foreground">Estate Planning</Link></li>
              <li><Link to="/services#insurance" className="hover:text-primary-foreground">Life & Health Insurance</Link></li>
              <li><Link to="/services#tax" className="hover:text-primary-foreground">Tax Strategies</Link></li>
              <li><Link to="/services#retirement" className="hover:text-primary-foreground">Retirement Planning</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="mb-4">Stay updated with our latest news and services</p>
            <form className="flex flex-col">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-4 py-2 mb-2 text-black rounded"
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {currentYear} VR Best Financials. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
