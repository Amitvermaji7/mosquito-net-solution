'use client';

import { motion } from 'framer-motion';

type Service = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!isOpen || !service) return null;

  // Professional WhatsApp message
  const whatsappMessage = `Hello! I am interested in your "${service.title}" service.
Could you please provide more details and pricing?
Thank you!`;

  const whatsappUrl = `https://wa.me/919321367767?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="bg-white rounded-xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl p-4 sm:p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className={`w-16 h-16 flex items-center justify-center rounded-full ${
            service.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
          } mb-4`}>
            <i className={`${service.icon} text-2xl ${
              service.color === 'blue' ? 'text-blue-600' : 'text-green-600'
            }`}></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{service.title}</h3>
          <p className="text-gray-600 mb-4 text-center">{service.description}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
          >
            Contact on WhatsApp
            <i className="ri-whatsapp-line ml-2"></i>
          </a>
        </div>
      </motion.div>
    </div>
  );
}