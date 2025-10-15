'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaShoppingCart, FaShopify, FaCode, FaPalette, FaCog, FaRocket, FaSearch, FaTools, FaChevronDown } from 'react-icons/fa'

const services = [
  {
    category: 'E-commerce',
    items: [
      {
        icon: FaShoppingCart,
        title: 'PrestaShop',
        description: 'Boutiques performantes',
        link: '/expertises/prestashop',
        color: 'text-blue-600',
      },
      {
        icon: FaShopify,
        title: 'Shopify',
        description: 'Solutions modernes',
        link: '/expertises/shopify',
        color: 'text-green-600',
      },
      {
        icon: FaRocket,
        title: 'E-commerce',
        description: 'Plateformes complètes',
        link: '/expertises/e-commerce',
        color: 'text-red-600',
      },
    ],
  },
  {
    category: 'Développement',
    items: [
      {
        icon: FaCode,
        title: 'Sites Vitrines',
        description: 'Élégants et responsives',
        link: '/expertises/sites-vitrines',
        color: 'text-purple-600',
      },
      {
        icon: FaCog,
        title: 'Sur Mesure',
        description: 'Solutions personnalisées',
        link: '/expertises/solutions-sur-mesure',
        color: 'text-orange-600',
      },
    ],
  },
  {
    category: 'Marketing & Support',
    items: [
      {
        icon: FaSearch,
        title: 'SEO',
        description: 'Référencement naturel',
        link: '/expertises/seo',
        color: 'text-indigo-600',
      },
      {
        icon: FaPalette,
        title: 'Design Graphique',
        description: 'Identité visuelle',
        link: '/expertises/design-graphique',
        color: 'text-pink-600',
      },
      {
        icon: FaTools,
        title: 'Maintenance',
        description: 'Support continu dès 99€/mois',
        link: '/maintenance',
        color: 'text-gray-600',
      },
    ],
  },
]

interface MegaMenuProps {
  isScrolled: boolean
}

const MegaMenu = ({ isScrolled }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-2 font-semibold transition-all ${
          isScrolled 
            ? 'text-gray-900 hover:text-primary-600' 
            : 'text-white hover:text-white drop-shadow-lg'
        }`}
      >
        Nos services
        <FaChevronDown className={`text-sm transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2"
            style={{ width: '900px', marginLeft: '-450px', zIndex: 9999 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
              <div className="grid grid-cols-3 gap-8">
                {services.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wide">
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.link}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-all group"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 mt-1 ${item.color}`}>
                              <item.icon className="text-xl" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                {item.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {item.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA at bottom */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/site-internet-pas-cher"
                    className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg hover:bg-yellow-100 transition-all text-center"
                  >
                    <div className="font-bold text-gray-900">Site web à 499€</div>
                    <div className="text-sm text-gray-600">Livraison en 48h</div>
                  </Link>
                  <Link
                    href="/contact"
                    className="p-4 bg-primary-50 border-2 border-primary-200 rounded-lg hover:bg-primary-100 transition-all text-center"
                  >
                    <div className="font-bold text-gray-900">Devis gratuit</div>
                    <div className="text-sm text-gray-600">Réponse sous 24h</div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MegaMenu

