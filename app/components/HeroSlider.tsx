
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Premium Mosquito Net Solutions",
    subtitle: "Protect your family with our professional installation services",
    image: "https://readdy.ai/api/search-image?query=modern%20bedroom%20with%20elegant%20white%20mosquito%20net%20over%20bed%2C%20peaceful%20home%20interior%20with%20natural%20lighting%2C%20clean%20minimalist%20design%2C%20professional%20installation%2C%20cozy%20atmosphere%2C%20high%20quality%20residential%20setting&width=1920&height=1080&seq=hero1&orientation=landscape"
  },
  {
    id: 2,
    title: "Custom-Fit Protection",
    subtitle: "Tailored mosquito nets for windows, doors, and outdoor spaces",
    image: "https://readdy.ai/api/search-image?query=beautiful%20living%20room%20with%20mosquito%20net%20on%20large%20windows%2C%20modern%20home%20interior%20with%20natural%20light%2C%20professional%20window%20net%20installation%2C%20clean%20contemporary%20design%2C%20family-friendly%20space%2C%20premium%20quality%20materials&width=1920&height=1080&seq=hero2&orientation=landscape"
  },
  {
    id: 3,
    title: "Expert Installation Service",
    subtitle: "Professional team ensuring perfect fit and lasting protection",
    image: "https://readdy.ai/api/search-image?query=outdoor%20patio%20area%20with%20mosquito%20net%20protection%2C%20comfortable%20seating%20area%20with%20professional%20net%20installation%2C%20peaceful%20garden%20setting%2C%20high-quality%20materials%2C%20modern%20outdoor%20living%20space%2C%20evening%20ambiance&width=1920&height=1080&seq=hero3&orientation=landscape"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('product-gallery');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={scrollToContact} suppressHydrationWarning={true} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">
              Get Free Quote
            </button>
            <button onClick={scrollToProducts} suppressHydrationWarning={true} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer">
              View Products
            </button>
          </motion.div>
        </div>
      </div>

      <button
        suppressHydrationWarning={true}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300 cursor-pointer"
      >
        <i className="ri-arrow-left-s-line text-2xl w-6 h-6 flex items-center justify-center"></i>
      </button>
      <button
        suppressHydrationWarning={true}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300 cursor-pointer"
      >
        <i className="ri-arrow-right-s-line text-2xl w-6 h-6 flex items-center justify-center"></i>
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            suppressHydrationWarning={true}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
