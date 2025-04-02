
import React from 'react';
import { Shield, Heart, Calculator, TrendingDown, LineChart, PiggyBank, Coins, GraduationCap, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const serviceItems = [
  {
    id: 1,
    title: 'Will & Trust, Estate Planning',
    description: 'Secure your legacy and protect your loved ones with comprehensive estate planning services.',
    icon: Shield,
  },
  {
    id: 2,
    title: 'Life & Health Insurance',
    description: 'Get the coverage you need to protect yourself and your family against life\'s uncertainties.',
    icon: Heart,
  },
  {
    id: 3,
    title: 'Tax Saving Strategies',
    description: 'Minimize your tax burden with effective strategies designed for your specific financial situation.',
    icon: Calculator,
  },
  {
    id: 4,
    title: 'Down Market Protection',
    description: 'Safeguard your investments during market downturns with our protection strategies.',
    icon: TrendingDown,
  },
  {
    id: 5,
    title: 'Retirement Planning',
    description: 'Plan for a comfortable retirement with personalized strategies to meet your long-term goals.',
    icon: LineChart,
  },
  {
    id: 6,
    title: 'IRA & 401K Rollovers',
    description: 'Optimize your retirement accounts with expert guidance on rollover options and strategies.',
    icon: PiggyBank,
  },
  {
    id: 7,
    title: 'Guaranteed Lifetime Income',
    description: 'Ensure financial stability throughout your retirement with dependable income solutions.',
    icon: Coins,
  },
  {
    id: 8,
    title: 'College Saving Plans',
    description: 'Offers the guidance and tools needed to build a secure financial foundation for academic success',
    icon: GraduationCap,
  },
  {
    id: 9,
    title: 'Business Opportunity',
    description: 'Embrace growth and unlock your business potential with our dedicated tools and support',
    icon: Handshake,
  }
];

const Services = () => {
  return (
    <section className="py-16 px-4 bg-secondary" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Our Financial Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <Card key={service.id} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <service.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-accent">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
