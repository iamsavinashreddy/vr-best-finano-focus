
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">About VR Best Financials</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At VR Best Financials, we're dedicated to helping our clients achieve financial security and peace of mind through personalized planning and expert guidance. Our mission is to empower individuals and families to make informed financial decisions that align with their unique goals and values.
              </p>
              <p className="text-gray-700">
                We believe in building lasting relationships based on trust, integrity, and transparency, ensuring that our clients' best interests are always our top priority.
              </p>
            </div>
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <p className="text-gray-500 italic">Company Image</p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Integrity</h3>
                <p className="text-gray-700">We adhere to the highest ethical standards in all our client interactions and business practices.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Excellence</h3>
                <p className="text-gray-700">We strive for excellence in our services, continuously expanding our knowledge and expertise.</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Client-Focused</h3>
                <p className="text-gray-700">We put our clients' needs first, providing personalized solutions tailored to their unique situations.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">John Smith</h3>
                <p className="text-gray-600 mb-2">Financial Advisor</p>
                <p className="text-gray-700">Over 15 years of experience in retirement planning and wealth management.</p>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                <p className="text-gray-600 mb-2">Estate Planning Specialist</p>
                <p className="text-gray-700">Expert in creating comprehensive estate plans and trust strategies.</p>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Michael Williams</h3>
                <p className="text-gray-600 mb-2">Tax Strategist</p>
                <p className="text-gray-700">Specializes in tax-efficient investing and retirement income planning.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
