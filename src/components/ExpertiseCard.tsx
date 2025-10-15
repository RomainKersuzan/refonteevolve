'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { IconType } from 'react-icons'

interface ExpertiseCardProps {
  icon: IconType
  title: string
  description: string
  link: string
  index: number
  image?: string
  iconImage?: string
}

const ExpertiseCard = ({ icon: Icon, title, description, link, index, image, iconImage }: ExpertiseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={link}>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-gray-100 group">
          {image && (
            <div className="relative h-48 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
              <Image 
                src={image} 
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-8">
            {iconImage ? (
              <div className="flex items-center justify-center w-16 h-16 mb-6">
                <Image 
                  src={iconImage} 
                  alt={title}
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg mb-6 shadow-lg">
                <Icon className="text-white text-3xl" />
              </div>
            )}
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
            <div className="mt-6 text-primary-600 font-semibold flex items-center group-hover:gap-3 transition-all">
              En savoir plus
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ExpertiseCard

