'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaShoppingCart, FaShopify, FaCode, FaRocket, FaCog, FaPalette, FaSearch, FaTools } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import MegaMenu from './MegaMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À propos' },
    // TEMPORAIRE : Réalisations commentées pour mise en ligne
    // { href: '/realisations', label: 'Réalisations' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 transition-all duration-500"
      style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(0, 0, 0, 0)',
        boxShadow: isScrolled ? '0 4px 30px rgba(124, 58, 237, 0.1)' : 'none',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        zIndex: 9999
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <Image 
              src="/logo-mini.png" 
              alt="EvolveTech" 
              width={40} 
              height={40}
              priority
              className={`w-auto transition-all ${isScrolled ? 'h-9' : 'h-10'}`}
            />
            <span className={`font-bold text-xl transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              EvolveTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-semibold transition-all ${
                isScrolled 
                  ? 'text-gray-900 hover:text-primary-600' 
                  : 'text-white hover:text-white drop-shadow-lg'
              }`}
            >
              Accueil
            </Link>
            <MegaMenu isScrolled={isScrolled} />
            {/* TEMPORAIRE : Réalisations commentées pour mise en ligne */}
            {/* <Link
              href="/realisations"
              className={`font-semibold transition-all ${
                isScrolled 
                  ? 'text-gray-900 hover:text-primary-600' 
                  : 'text-white hover:text-white drop-shadow-lg'
              }`}
            >
              Réalisations
            </Link> */}
            <Link
              href="/a-propos"
              className={`font-semibold transition-all ${
                isScrolled 
                  ? 'text-gray-900 hover:text-primary-600' 
                  : 'text-white hover:text-white drop-shadow-lg'
              }`}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className={`font-semibold transition-all ${
                isScrolled 
                  ? 'text-gray-900 hover:text-primary-600' 
                  : 'text-white hover:text-white drop-shadow-lg'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg transform hover:scale-105 ${
                isScrolled
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700'
                  : 'bg-white text-primary-600 hover:bg-gray-50 shadow-xl'
              }`}
            >
              Devis gratuit
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-2xl transition-colors p-2 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-x-0 top-20 bg-white shadow-2xl z-[9998] max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <nav className="px-4 py-6">
              {/* Menu principal */}
              <div className="space-y-2 mb-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-900 hover:text-primary-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Services avec icônes */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase mb-3 px-4">Nos Services</h3>
                <div className="space-y-1">
                  {[
                    { name: 'PrestaShop', link: '/expertises/prestashop', icon: FaShoppingCart, color: 'text-blue-600' },
                    { name: 'Shopify', link: '/expertises/shopify', icon: FaShopify, color: 'text-green-600' },
                    { name: 'Sites Vitrines', link: '/expertises/sites-vitrines', icon: FaCode, color: 'text-purple-600' },
                    { name: 'E-commerce', link: '/expertises/e-commerce', icon: FaRocket, color: 'text-red-600' },
                    { name: 'Solutions Sur Mesure', link: '/expertises/solutions-sur-mesure', icon: FaCog, color: 'text-orange-600' },
                    { name: 'Design Graphique', link: '/expertises/design-graphique', icon: FaPalette, color: 'text-pink-600' },
                    { name: 'SEO', link: '/expertises/seo', icon: FaSearch, color: 'text-indigo-600' },
                    { name: 'Maintenance', link: '/maintenance', icon: FaTools, color: 'text-gray-600' },
                  ].map((service, i) => (
                    <Link
                      key={i}
                      href={service.link}
                      className="flex items-center gap-3 text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className={`text-lg ${service.color}`} />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="block px-6 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-bold text-center shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Devis gratuit
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

