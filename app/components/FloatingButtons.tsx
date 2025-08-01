
'use client';

import { motion } from 'framer-motion';

export default function FloatingButtons() {
  const handleWhatsApp = () => {
    const userMessage = 'Hi, I would like to inquire about mosquito net installation services.';
    window.open(`https://wa.me/919321367767?text=${encodeURIComponent(userMessage)}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919321367767', '_self');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 cursor-pointer"
        title="WhatsApp"
      >
        <i className="ri-whatsapp-line text-2xl w-6 h-6 flex items-center justify-center"></i>
      </motion.button>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCall}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 cursor-pointer"
        title="Call Us"
      >
        <i className="ri-phone-line text-2xl w-6 h-6 flex items-center justify-center"></i>
      </motion.button>
    </div>
  );
}
