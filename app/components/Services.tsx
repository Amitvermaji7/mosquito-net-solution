
'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: 'ri-home-line',
    title: 'Window Net Installation',
    description: 'Custom-fit mosquito nets for all window types with premium quality materials and professional installation.',
    color: 'blue'
  },
  {
    icon: 'ri-door-line',
    title: 'Door Net Solutions',
    description: 'Retractable and fixed door nets that provide seamless protection while maintaining easy access.',
    color: 'green'
  },
  {
    icon: 'ri-building-line',
    title: 'Balcony Protection',
    description: 'Complete balcony enclosure systems for outdoor comfort without mosquito interference.',
    color: 'blue'
  },
  {
    icon: 'ri-plant-line',
    title: 'Garden Area Nets',
    description: 'Outdoor dining and garden area protection with weather-resistant materials.',
    color: 'green'
  },
  {
    icon: 'ri-tools-line',
    title: 'Maintenance Service',
    description: 'Regular cleaning, repair, and replacement services to keep your nets in perfect condition.',
    color: 'blue'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Custom Solutions',
    description: 'Tailored mosquito protection for unique spaces and specific requirements.',
    color: 'green'
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive mosquito net solutions for every space in your home or business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-full ${
                service.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
              } mb-4`}>
                <i className={`${service.icon} text-2xl w-6 h-6 flex items-center justify-center ${
                  service.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                }`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <button 
                suppressHydrationWarning={true}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
