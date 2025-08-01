
'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Our Company
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in mosquito net installation, we're committed to providing premium protection solutions for homes and businesses across the region.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our expert team uses only the highest quality materials and proven installation techniques to ensure your family's comfort and safety from mosquitoes and other insects.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://readdy.ai/api/search-image?query=professional%20mosquito%20net%20installation%20team%20working%20on%20bedroom%20window%2C%20skilled%20workers%20in%20uniform%2C%20modern%20home%20interior%2C%20quality%20installation%20process%2C%20professional%20service%2C%20clean%20workspace%20environment%2C%20teamwork%20and%20expertise&width=600&height=400&seq=about1&orientation=landscape"
              alt="Professional installation team"
              className="rounded-lg shadow-lg w-full h-auto object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
