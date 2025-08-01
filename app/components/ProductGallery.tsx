
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductModal from './ProductModal';

const products = [
  {
    title: 'Premium Window Nets',
    image: 'https://readdy.ai/api/search-image?query=elegant%20white%20mosquito%20net%20installed%20on%20large%20bedroom%20window%2C%20modern%20home%20interior%20with%20natural%20light%2C%20clean%20minimalist%20design%2C%20high-quality%20materials%2C%20professional%20installation%2C%20comfortable%20living%20space&width=400&height=300&seq=product1&orientation=landscape',
    category: 'Windows',
    description: 'Our premium window nets are crafted from high-quality materials designed to provide maximum protection while maintaining the aesthetic appeal of your home. These nets are custom-fitted to your windows and offer excellent durability and weather resistance.',
    features: [
      'Custom-fit installation for any window size',
      'High-quality polyester mesh material',
      'UV-resistant and weather-proof',
      'Easy maintenance and cleaning',
      'Available in multiple colors',
      '2-year warranty included'
    ],
    price: 'From ₹3,500'
  },
  {
    title: 'Retractable Door Nets',
    image: 'https://readdy.ai/api/search-image?query=retractable%20mosquito%20net%20on%20modern%20glass%20door%2C%20sleek%20contemporary%20design%2C%20easy-to-use%20mechanism%2C%20quality%20materials%2C%20professional%20installation%2C%20indoor-outdoor%20transition%2C%20clean%20minimalist%20style&width=400&height=300&seq=product2&orientation=landscape',
    category: 'Doors',
    description: 'Revolutionary retractable door nets that provide seamless protection without compromising on convenience. These nets retract smoothly when not needed and deploy instantly when required, perfect for high-traffic areas.',
    features: [
      'Smooth retractable mechanism',
      'Magnetic closure system',
      'Fits standard and custom door sizes',
      'Silent operation',
      'Premium aluminum frame',
      '3-year mechanism warranty'
    ],
    price: 'From ₹4,200'
  },
  {
    title: 'Balcony Protection',
    image: 'https://readdy.ai/api/search-image?query=modern%20balcony%20with%20mosquito%20net%20protection%2C%20comfortable%20outdoor%20seating%20area%2C%20professional%20installation%2C%20quality%20materials%2C%20peaceful%20environment%2C%20contemporary%20design%2C%20urban%20living%20space&width=400&height=300&seq=product3&orientation=landscape',
    category: 'Balconies',
    description: 'Transform your balcony into a mosquito-free zone with our comprehensive balcony protection systems. Enjoy outdoor relaxation without the worry of mosquito bites, perfect for evening gatherings and peaceful moments.',
    features: [
      'Complete balcony enclosure',
      'Weather-resistant materials',
      'Flexible installation options',
      'Maintains natural airflow',
      'Easy access mechanisms',
      'Professional installation included'
    ],
    price: 'From ₹8,500'
  },
  {
    title: 'Garden Area Nets',
    image: 'https://readdy.ai/api/search-image?query=outdoor%20dining%20area%20with%20mosquito%20net%20protection%2C%20garden%20setting%20with%20comfortable%20seating%2C%20professional%20installation%2C%20weather-resistant%20materials%2C%20peaceful%20atmosphere%2C%20evening%20ambiance&width=400&height=300&seq=product4&orientation=landscape',
    category: 'Outdoor',
    description: 'Create a protected outdoor dining and relaxation area with our garden nets. Perfect for patios, gazebos, and outdoor seating areas where you want to enjoy nature without mosquito interference.',
    features: [
      'Large area coverage capability',
      'Weather-resistant construction',
      'Flexible mounting options',
      'Maintains outdoor ambiance',
      'Easy seasonal storage',
      'Custom sizing available'
    ],
    price: 'From ₹6,800'
  },
  {
    title: 'Bedroom Installation',
    image: 'https://readdy.ai/api/search-image?query=peaceful%20bedroom%20with%20mosquito%20net%20over%20bed%2C%20elegant%20white%20netting%2C%20modern%20interior%20design%2C%20comfortable%20sleeping%20environment%2C%20professional%20installation%2C%20clean%20contemporary%20style&width=400&height=300&seq=product5&orientation=landscape',
    category: 'Bedrooms',
    description: 'Ensure peaceful sleep with our bedroom mosquito net solutions. Available in elegant designs that complement your bedroom decor while providing complete protection throughout the night.',
    features: [
      'Ceiling-mounted or bed-frame options',
      'Elegant design choices',
      'Breathable mesh material',
      'Easy installation and removal',
      'Machine washable',
      'Multiple size options available'
    ],
    price: 'From ₹3,200'
  },
  {
    title: 'Living Room Nets',
    image: 'https://readdy.ai/api/search-image?query=modern%20living%20room%20with%20mosquito%20nets%20on%20large%20windows%2C%20contemporary%20interior%20design%2C%20natural%20lighting%2C%20comfortable%20family%20space%2C%20professional%20installation%2C%20quality%20materials&width=400&height=300&seq=product6&orientation=landscape',
    category: 'Living Areas',
    description: 'Protect your main living areas with our discreet yet effective mosquito nets. Designed to blend seamlessly with your living room decor while providing comprehensive protection for family gatherings.',
    features: [
      'Discreet and stylish design',
      'Large window coverage',
      'Easy operation mechanisms',
      'Durable frame construction',
      'Professional color matching',
      'Lifetime support included'
    ],
    price: 'From ₹5,500'
  }
];

type Product = typeof products[number];

export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="product-gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Product Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of mosquito net solutions installed in real homes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover object-top transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <button 
                  onClick={() => handleViewDetails(product)}
                  suppressHydrationWarning={true}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap"
                >
                  View Details <i className="ri-arrow-right-line ml-1 w-4 h-4 inline-flex items-center justify-center"></i>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </section>
  );
}
