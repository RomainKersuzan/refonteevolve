'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'

interface TeamMemberProps {
  name: string
  role: string
  image: string
  linkedin: string
  index: number
}

const TeamMember = ({ name, role, image, linkedin, index }: TeamMemberProps) => {
  const hasRealImage = image.includes('.webp') || image.includes('.jpg') || image.includes('.png')
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
      className="text-center group"
    >
      <div className="relative mb-6 overflow-hidden rounded-xl aspect-square">
        {hasRealImage ? (
          <Image 
            src={image} 
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="aspect-square bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
            <div className="text-white text-6xl font-bold">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary-600 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-all"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </motion.div>
  )
}

export default TeamMember

