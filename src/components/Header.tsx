'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'
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
          <Link href="/" className="flex items-center transition-transform hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="EvolveTech Logo" 
              width={130} 
              height={38}
              priority
              className={`w-auto transition-all ${isScrolled ? 'h-7' : 'h-8'}`}
            />
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
            className={`md:hidden text-2xl transition-colors ${
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all text-center"
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

