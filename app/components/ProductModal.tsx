'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    image: string;
    category: string;
    description: string;
    features: string[];
    price: string;
  };
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${product.title}. Can you provide more details and pricing?`;
    window.open(`https://wa.me/917004369626?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+917004369626', '_self');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-close-line text-xl w-5 h-5 flex items-center justify-center"></i>
              </button>
              
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover object-top rounded-t-lg"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    {product.price}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Key Features:
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="ri-check-line text-green-600 mr-2 mt-0.5 w-4 h-4 flex items-center justify-center"></i>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleWhatsApp}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center"
                  >
                    <i className="ri-whatsapp-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    WhatsApp Inquiry
                  </button>
                  <button
                    onClick={handleCall}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center"
                  >
                    <i className="ri-phone-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}