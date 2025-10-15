'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaShoppingCart, FaShopify, FaCode, FaPalette, FaCog, FaRocket, FaStar, FaExternalLinkAlt } from 'react-icons/fa'
import ExpertiseCard from '@/components/ExpertiseCard'
import TestimonialCard from '@/components/TestimonialCard'
import TeamMember from '@/components/TeamMember'
import RealisationCard from '@/components/RealisationCard'

const expertises = [
  {
    icon: FaShoppingCart,
    title: 'PrestaShop',
    description: 'Création et optimisation de boutiques PrestaShop performantes pour maximiser vos ventes en ligne.',
    link: '/expertises/prestashop',
    image: '/images/expertise-prestashop-modern.svg',
  },
  {
    icon: FaShopify,
    title: 'Shopify',
    description: 'Développement de boutiques Shopify modernes et évolutives adaptées à vos besoins.',
    link: '/expertises/shopify',
    image: '/images/expertise-shopify-modern.svg',
  },
  {
    icon: FaCode,
    title: 'Sites Vitrines',
    description: 'Création de sites vitrines élégants et responsives pour valoriser votre image de marque.',
    link: '/expertises/sites-vitrines',
    image: '/images/expertise-vitrine-modern.svg',
  },
  {
    icon: FaPalette,
    title: 'Design Graphique',
    description: 'Conception graphique sur mesure pour une identité visuelle unique et impactante.',
    link: '/expertises/design-graphique',
    image: '/images/expertise-design-modern.svg',
  },
  {
    icon: FaCog,
    title: 'Solutions Sur Mesure',
    description: 'Développement de solutions web personnalisées répondant à vos besoins spécifiques.',
    link: '/expertises/solutions-sur-mesure',
    image: '/images/expertise-custom-modern.svg',
  },
  {
    icon: FaRocket,
    title: 'E-commerce',
    description: 'Création de plateformes e-commerce complètes avec toutes les fonctionnalités nécessaires.',
    link: '/expertises/e-commerce',
    image: '/images/expertise-ecommerce-modern.svg',
  },
]

const testimonials = [
  {
    text: "Romain a été d'une aide précieuse dans la mise à jour complète et la migration d'une boutique PrestaShop. Il a su s'adapter et surmonter les différents obstacles rencontrés, et a fourni un travail de qualité. Nous avons beaucoup apprécié son professionnalisme et sa flexibilité, et retravaillerons avec lui sans hésiter dans le futur !",
    author: 'Florian',
    company: 'Storm Communication',
    date: '07/11/2024',
    rating: 5,
  },
  {
    text: "Top à tous égards ! On retravaille ensemble très vite!",
    author: 'Damien',
    company: 'SOCOMORE',
    date: '23/10/2022',
    rating: 5,
  },
  {
    text: "Super travail réalisé par Romain. Très réactif et avec une très bonne communication, je vous le recommande vivement.",
    author: 'Arthur',
    company: 'Studio Ulk',
    date: '26/09/2022',
    rating: 5,
  },
  {
    text: "Romain a su répondre à nos attentes avec beaucoup de professionnalisme et une grande rapidité. Il est force de proposition et a permis à notre projet d'avancer considérablement.",
    author: 'Émilie',
    company: 'Création Web',
    date: '12/08/2023',
    rating: 5,
  },
]

const realisations = [
  {
    title: 'Boutique E-commerce Luxe',
    category: 'E-commerce',
    description: 'Création d\'une boutique e-commerce haut de gamme avec PrestaShop',
    image: '/images/projet-ecommerce-luxury.svg',
    link: '/realisations#ecommerce-luxury',
  },
  {
    title: 'Site Vitrine Corporatif',
    category: 'Site Vitrine',
    description: 'Site vitrine moderne pour une entreprise B2B',
    image: '/images/projet-site-vitrine.svg',
    link: '/realisations#corporate-showcase',
  },
  {
    title: 'Module Personnalisé',
    category: 'Développement',
    description: 'Développement d\'un module de gestion avancée pour PrestaShop',
    image: '/images/projet-module-custom.svg',
    link: '/realisations#custom-module',
  },
]

const team = [
  {
    name: 'Romain Kersuzan',
    role: 'Fondateur & Développeur',
    image: '/photo-romain.webp',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Bastien Robert',
    role: 'UX/UI Designer',
    image: '/photo-bastien.png',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Mahmoud Alhabaj',
    role: 'Développeur & DevOps',
    image: '/photo-mahmoud.png',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Max Coasta',
    role: 'Expert SEO',
    image: '/photo-max.webp',
    linkedin: 'https://www.linkedin.com',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Logo Mini */}
        <motion.div
          className="absolute top-1/4 left-1/3 opacity-5"
          animate={{
            y: [0, -40, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image src="/logo-mini.png" alt="" width={80} height={80} className="brightness-200" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/3 opacity-5"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image src="/logo-mini.png" alt="" width={60} height={60} className="brightness-200" />
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          className="absolute top-32 right-1/4 text-white/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/4 text-white/15"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-20 text-white/20"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
          </svg>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Title - Animation uniquement au début */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Votre Agence Web <span className="bg-gradient-to-r from-white to-secondary-200 bg-clip-text text-transparent">360°</span>
            </motion.h1>

            {/* Description - Animation uniquement au début */}
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Spécialistes des <strong className="text-white">solutions e-commerce</strong> et du{' '}
              <strong className="text-white">développement web sur mesure</strong>. 
              Nous transformons vos idées en expériences digitales performantes.
            </motion.p>

            {/* Buttons - Animation uniquement au début */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/expertises" 
                  className="group px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
                >
                  Découvrez nos expertises
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all backdrop-blur-sm"
                >
                  Contactez-nous
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats - Animation uniquement au début */}
            <motion.div 
              className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { number: '100+', label: 'Projets réalisés' },
                { number: '100%', label: 'Clients satisfaits' },
                { number: '5+', label: 'Ans d\'expérience' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave - Animation uniquement au début */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </motion.div>
      </section>

      {/* Expertises Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Nos Expertises</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions web complètes pour tous vos besoins digitaux
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertises.map((expertise, index) => (
              <ExpertiseCard key={index} {...expertise} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/expertises" 
              className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all"
            >
              Voir toutes nos expertises
            </Link>
          </div>
        </div>
      </section>

      {/* TEMPORAIRE : Section Réalisations commentée pour mise en ligne */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Nos Réalisations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets récents
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((realisation, index) => (
              <RealisationCard key={index} {...realisation} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/realisations" 
              className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all"
            >
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des experts passionnés au service de vos projets
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Témoignages Clients</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plus de <strong>100 projets réalisés</strong> et <strong>100% de clients satisfaits</strong>
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Malt Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Freelance certifié sur Malt</h2>
              <p className="text-xl text-gray-600">
                Découvrez mon profil de développeur freelance sur la plateforme Malt
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 via-secondary-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left side - Profile */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-8">
                    <Image src="/logo-malt.png" alt="Malt" width={100} height={34} className="h-8 w-auto" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="relative w-28 h-28 mb-4">
                      <Image 
                        src="/photo-romain.webp" 
                        alt="Romain Kersuzan" 
                        fill
                        className="rounded-full object-cover shadow-lg ring-4 ring-primary-100"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Romain Kersuzan</h3>
                    <p className="text-xl text-primary-600 font-semibold mb-3">Développeur Web & E-commerce</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xl" />
                      ))}
                      <span className="ml-2 text-gray-700 font-bold text-lg">5.0 / 5</span>
                      <span className="ml-2 text-gray-500">(40+ avis)</span>
                    </div>
                  </div>
                  
                  <div className="mb-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">PrestaShop Expert</span>
                      <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">Shopify</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Next.js</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">React</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Développeur freelance spécialisé en <strong>e-commerce</strong> (PrestaShop, Shopify) et 
                    <strong> développement web sur mesure</strong>. Plus de <strong>100 projets réalisés</strong> avec 
                    succès pour des clients en France et à l'international.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://www.malt.fr/profile/romainkersuzan" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FC5757] text-white rounded-lg font-semibold hover:bg-[#e54646] transition-all shadow-lg group"
                    >

                      Voir mon profil Malt
                      <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all"
                    >
                      Me contacter
                    </Link>
                  </div>
                </div>

                {/* Right side - Stats */}
                <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-8 md:p-12 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-8">Mon expertise en chiffres</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/20">
                      <span className="text-lg">Projets réalisés</span>
                      <span className="text-3xl font-bold">100+</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/20">
                      <span className="text-lg">Note moyenne</span>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold">5.0</span>
                        <FaStar className="text-yellow-300 text-2xl" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/20">
                      <span className="text-lg">Satisfaction client</span>
                      <span className="text-3xl font-bold">100%</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/20">
                      <span className="text-lg">Années d'expérience</span>
                      <span className="text-3xl font-bold">5+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg">Taux de réussite</span>
                      <span className="text-3xl font-bold">100%</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-sm text-white/90 italic">
                      💼 Diplômé ESILV & UQAC Canada<br/>
                      🎯 Expert PrestaShop certifié<br/>
                      ⚡ Disponible pour vos projets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Demander un devis gratuit
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

