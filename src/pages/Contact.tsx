
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              We're here to answer your questions and help you achieve your financial goals.
            </p>
          </div>
        </div>
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-700 mb-2">Call us directly:</p>
                <a href="tel:3073872378" className="text-primary font-medium">‪(616) 287-2378‬</a>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-700 mb-2">Send us an email:</p>
                <a href="mailto:fin@vrbest.group" className="text-primary font-medium">fin@vrbest.group</a>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <p className="text-gray-700">Monday - Friday: 9AM - 5PM</p>
                <p className="text-gray-700">Saturday: By appointment</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input type="text" placeholder="First Name" className="w-full px-4 py-2 border border-gray-300 rounded" required />
                    </div>
                    <div>
                      <input type="text" placeholder="Last Name" className="w-full px-4 py-2 border border-gray-300 rounded" required />
                    </div>
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded" required />
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-gray-300 rounded" required />
                  </div>
                  <div>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded" required>
                      <option value="">Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="consultation">Schedule Consultation</option>
                      <option value="services">Services Information</option>
                    </select>
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      className="w-full px-4 py-2 border border-gray-300 rounded h-32" 
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded">
                    Send Message
                  </button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <div className="bg-gray-200 w-full h-72 mb-4 flex items-center justify-center">
                  <p className="text-gray-500 italic">Map Goes Here</p>
                </div>
                <div className="flex items-start mb-4">
                  <MapPin className="text-primary mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold">Office Address</h3>
                    <p className="text-gray-700">
                      PO BOX 3067<br />
                      Camp Hill, PA, 17011<br />
                      United States
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Contact us to schedule a meeting at our office or arrange a virtual consultation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Contact;
