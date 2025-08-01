
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Downtown Apartment',
    rating: 5,
    text: 'Excellent service! The team installed mosquito nets throughout our apartment in just one day. Quality materials and professional installation. Highly recommended!',
    image: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20happy%20woman%20in%20modern%20home%2C%20smiling%20customer%2C%20natural%20lighting%2C%20contemporary%20interior%20background%2C%20satisfied%20homeowner%2C%20quality%20lifestyle&width=100&height=100&seq=testimonial1&orientation=squarish'
  },
  {
    name: 'Mike Chen',
    location: 'Family Villa',
    rating: 5,
    text: 'Amazing work on our villa! The custom balcony nets are perfect and the installation was flawless. No more mosquito problems during evening gatherings.',
    image: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20satisfied%20man%20in%20modern%20home%2C%20happy%20customer%2C%20natural%20lighting%2C%20contemporary%20setting%2C%20successful%20homeowner%2C%20quality%20lifestyle&width=100&height=100&seq=testimonial2&orientation=squarish'
  },
  {
    name: 'Emma Williams',
    location: 'Garden House',
    rating: 5,
    text: 'The garden area nets transformed our outdoor space! We can now enjoy peaceful evenings without worrying about mosquitoes. Great value for money.',
    image: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20happy%20woman%20in%20elegant%20home%2C%20satisfied%20customer%2C%20natural%20lighting%2C%20modern%20interior%2C%20pleased%20homeowner%2C%20quality%20lifestyle&width=100&height=100&seq=testimonial3&orientation=squarish'
  },
  {
    name: 'David Rodriguez',
    location: 'Modern Condo',
    rating: 5,
    text: 'Professional team with attention to detail. The retractable door nets work perfectly and look great. Delivery and installation were right on schedule.',
    image: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20satisfied%20man%20in%20contemporary%20home%2C%20happy%20customer%2C%20natural%20lighting%2C%20modern%20setting%2C%20content%20homeowner%2C%20quality%20lifestyle&width=100&height=100&seq=testimonial4&orientation=squarish'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from satisfied customers who trust our mosquito net solutions
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <div className="mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover object-top"
                      />
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="ri-star-fill text-yellow-400 text-xl w-5 h-5 flex items-center justify-center"></i>
                        ))}
                      </div>
                      <p className="text-lg text-gray-600 mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <h4 className="font-semibold text-gray-800 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            suppressHydrationWarning={true}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-2xl w-6 h-6 flex items-center justify-center"></i>
          </button>
          <button
            suppressHydrationWarning={true}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-2xl w-6 h-6 flex items-center justify-center"></i>
          </button>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                suppressHydrationWarning={true}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
