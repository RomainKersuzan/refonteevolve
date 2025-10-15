'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    text: "Romain a été d'une aide précieuse dans la mise à jour complète et la migration d'une boutique PrestaShop.",
    author: 'Florian',
    company: 'Storm Communication',
    rating: 5,
  },
  {
    text: "Top à tous égards ! On retravaille ensemble très vite!",
    author: 'Damien',
    company: 'SOCOMORE',
    rating: 5,
  },
  {
    text: "Super travail réalisé par Romain. Très réactif et avec une très bonne communication.",
    author: 'Arthur',
    company: 'Studio Ulk',
    rating: 5,
  },
]

const TrustSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Ils nous ont fait confiance
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-2xl" />
            ))}
            <span className="text-xl font-bold text-gray-900 ml-2">5.0 / 5</span>
          </div>
          <p className="text-gray-600">Basé sur plus de 100 avis clients</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <FaQuoteLeft className="text-primary-400 text-2xl" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">100+</div>
              <div className="text-sm text-gray-600">Clients</div>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">100%</div>
              <div className="text-sm text-gray-600">Satisfaits</div>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">5★</div>
              <div className="text-sm text-gray-600">Note</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection

