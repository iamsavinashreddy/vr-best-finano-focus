
import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to help you achieve your goals and secure your future.
            </p>
          </div>
        </div>
        
        <Services />
        
        <section className="py-16 px-4 bg-white" id="consultation">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Personalized Approach</h3>
                <p className="text-gray-700 mb-6">
                  We take the time to understand your unique financial situation, goals, and concerns before recommending any strategies or solutions.
                </p>
                
                <h3 className="text-xl font-bold mb-4">Comprehensive Planning</h3>
                <p className="text-gray-700 mb-6">
                  Our holistic approach considers all aspects of your financial life to create integrated strategies that work together efficiently.
                </p>
                
                <h3 className="text-xl font-bold mb-4">Ongoing Support</h3>
                <p className="text-gray-700">
                  We provide continuous guidance and regular reviews to ensure your financial plan stays aligned with your changing goals and circumstances.
                </p>
              </div>
              
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Schedule a Consultation</h3>
                <p className="text-white/90 mb-6">
                  Ready to take control of your financial future? Contact us today to schedule a complimentary consultation with one of our expert advisors.
                </p>
                
                <form className="space-y-4" id="consultation-form">
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded" required />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded" required />
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-gray-300 rounded" required />
                  </div>
                  <div>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded" required>
                      <option value="">Select Service</option>
                      <option value="estate-planning">Estate Planning</option>
                      <option value="life-insurance">Life & Health Insurance</option>
                      <option value="tax-strategies">Tax Strategies</option>
                      <option value="market-protection">Down Market Protection</option>
                      <option value="retirement">Retirement Planning</option>
                      <option value="rollovers">IRA & 401K Rollovers</option>
                      <option value="income">Guaranteed Lifetime Income</option>
                      <option value="college">College Saving Plans</option>
                      <option value="business">Business Opportunity</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded">
                    Request Consultation
                  </button>
                </form>
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

export default ServicesPage;
