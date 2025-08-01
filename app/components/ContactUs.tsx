
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoading(true);

    try {
      const whatsappMessage = `Hello! I'm interested in your mosquito net services.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Needed: ${formData.service}
Message: ${formData.message}

Please contact me for more information.`;

      const whatsappUrl = `https://wa.me/919321367767?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setLoading(false);
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  return (
    <section id="contact-us" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to protect your home? Contact us for a free consultation and quote
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form id="contact-form" onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning={true}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning={true}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning={true}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                    placeholder="+91 9321367767"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      suppressHydrationWarning={true}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 pr-8"
                    >
                      <option value="">Select a service</option>
                      <option value="Window Nets">Window Nets</option>
                      <option value="Door Nets">Door Nets</option>
                      <option value="Balcony Protection">Balcony Protection</option>
                      <option value="Garden Area">Garden Area</option>
                      <option value="Custom Solution">Custom Solution</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 flex items-center justify-center pointer-events-none"></i>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  placeholder="Tell us about your project..."
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                suppressHydrationWarning={true}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center"
              >
                <i className="ri-whatsapp-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-green-800">WhatsApp opened successfully! Your message is ready to send.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 mr-2 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-red-800">Error opening WhatsApp. Please try again.</span>
                  </div>
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-map-pin-line text-blue-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">Bhatwadi, Kisan Nagar, Thane West,<br /> Mumbai, Maharashtra 400604</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-phone-line text-green-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 9321367767</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-mail-line text-blue-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">pankajvermw344@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-time-line text-green-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <p className="font-medium text-gray-800">Business Hours</p>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d482.7513738613422!2d72.94657800870856!3d19.18677022622363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDExJzEyLjciTiA3MsKwNTYnNDguNCJF!5e1!3m2!1sen!2sin!4v1753988204831!5m2!1sen!2sin"
                width="100%"
                height="300"
                loading="lazy"
                className="border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
