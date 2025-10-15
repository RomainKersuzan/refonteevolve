'use client'

import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

interface TestimonialCardProps {
  text: string
  author: string
  company: string
  date: string
  index: number
  rating?: number
}

const TestimonialCard = ({ text, author, company, date, index, rating = 5 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <FaQuoteLeft className="text-primary-400 text-3xl" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={i < rating ? 'text-yellow-400' : 'text-gray-300'} 
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-6 italic leading-relaxed">{text}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </motion.div>
  )
}

export default TestimonialCard

