
import React from 'react';
import { Shield, Heart, Calculator, TrendingDown, LineChart, PiggyBank, Coins, GraduationCap, Handshake } from 'lucide-react';

const serviceItems = [
  {
    id: 1,
    title: 'WILL & TRUST, ESTATE PLANNING',
    icon: Shield,
  },
  {
    id: 2,
    title: 'LIFE & HEALTH INSURANCE',
    icon: Heart,
  },
  {
    id: 3,
    title: 'TAX SAVING STRATEGIES',
    icon: Calculator,
  },
  {
    id: 4,
    title: 'DOWN MARKET PROTECTION',
    icon: TrendingDown,
  },
  {
    id: 5,
    title: 'RETIREMENT PLANNING',
    icon: LineChart,
  },
  {
    id: 6,
    title: 'IRA & 401K ROLLOVERS',
    icon: PiggyBank,
  },
  {
    id: 7,
    title: 'GUARANTEED LIFETIME INCOME',
    icon: Coins,
  },
  {
    id: 8,
    title: 'COLLEGE SAVING PLANS',
    icon: GraduationCap,
  },
  {
    id: 9,
    title: 'BUSINESS OPPORTUNITY',
    icon: Handshake,
  }
];

const Services = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary to-secondary" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Financial Services</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {serviceItems.map((service) => (
            <div key={service.id} className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white hover:bg-opacity-20 transition-all duration-300">
              <div className="bg-primary rounded-full p-2 mr-4 text-white flex-shrink-0">
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="font-bold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
