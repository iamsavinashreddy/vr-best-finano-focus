
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">VR Best Financials</h3>
            <p className="mb-4">Your trusted partner for comprehensive financial planning and wealth management solutions.</p>
            <div className="flex items-center mb-2">
              <Phone size={18} className="mr-2" />
              <a href="tel:3073872378" className="hover:text-secondary">307-387-2378</a>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={18} className="mr-2" />
              <a href="mailto:fin@vrbest.group" className="hover:text-secondary">fin@vrbest.group</a>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="mr-2" />
              <p>PO BOX 3067, Camp Hill, PA, 17011</p>
            </div>
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
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#estate" className="hover:text-secondary">Estate Planning</Link></li>
              <li><Link to="/services#insurance" className="hover:text-secondary">Life & Health Insurance</Link></li>
              <li><Link to="/services#tax" className="hover:text-secondary">Tax Strategies</Link></li>
              <li><Link to="/services#retirement" className="hover:text-secondary">Retirement Planning</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© {currentYear} VR Best Financials. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
