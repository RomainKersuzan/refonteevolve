'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface RealisationCardProps {
  title: string
  category: string
  description: string
  image: string
  link: string
  index: number
}

const RealisationCard = ({ title, category, description, link, index }: RealisationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={link}>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
          <div className="aspect-video bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
            <div className="text-white text-4xl font-bold z-10">{category}</div>
          </div>
          <div className="p-6">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-3">
              {category}
            </span>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
            <div className="mt-4 text-primary-600 font-semibold flex items-center">
              Voir le projet
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default RealisationCard

