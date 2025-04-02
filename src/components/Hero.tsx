
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    image: 'https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/family-1.jpg',
    title: 'Secure Tomorrow, Live Confidently Today',
    subtitle: 'LIFE & HEALTH INSURANCE',
    ctaText: 'Get Started',
  },
  {
    id: 2,
    image: 'https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/extra-income-1.jpg',
    title: 'Lifetime Financial Freedom, Guaranteed,
    subtitle: 'GUARANTEED LIFETIME INCOME',
    ctaText: 'Learn More',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920&h=600',
    title: 'Expert Financial Guidance',
    subtitle: 'Personalized advice for your unique needs',
    ctaText: 'Contact Us',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920&h=600',
    title: 'Expert Financial Guidance',
    subtitle: 'Personalized advice for your unique needs',
    ctaText: 'Contact Us',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade">{slide.title}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade">{slide.subtitle}</p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-md animate-fade">
              {slide.ctaText}
            </Button>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-primary' : 'bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
