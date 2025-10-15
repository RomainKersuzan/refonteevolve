'use client'

import Link from 'next/link'
import { FaShopify, FaCheck, FaPalette, FaPlug, FaMobile, FaChartBar } from 'react-icons/fa'
import AnimatedHero from '@/components/AnimatedHero'
import TrustSection from '@/components/TrustSection'

const services = [
  {
    icon: FaShopify,
    title: 'Création de boutiques',
    description: 'Conception et lancement de boutiques Shopify complètes, optimisées pour les conversions.',
  },
  {
    icon: FaPalette,
    title: 'Personnalisation de thèmes',
    description: 'Adaptation et personnalisation de thèmes Shopify pour refléter votre identité de marque.',
  },
  {
    icon: FaPlug,
    title: 'Applications & Intégrations',
    description: 'Développement d\'applications Shopify et intégration de services tiers.',
  },
  {
    icon: FaMobile,
    title: 'Optimisation mobile',
    description: 'Boutiques parfaitement optimisées pour une expérience mobile exceptionnelle.',
  },
  {
    icon: FaChartBar,
    title: 'Stratégie e-commerce',
    description: 'Conseils stratégiques pour maximiser vos ventes et votre croissance sur Shopify.',
  },
]

const advantages = [
  'Plateforme hébergée et sécurisée',
  'Interface d\'administration intuitive',
  'Paiements intégrés',
  'Design responsive natif',
  'SEO optimisé',
  'App Store riche en fonctionnalités',
  'Support multilingue et multidevise',
  'Évolutivité garantie',
  'Performances optimales',
  'Mises à jour automatiques',
]

export default function ShopifyPage() {
  return (
    <div className="pt-0">
      <AnimatedHero 
        title="Expertise Shopify" 
        subtitle="Créez votre boutique e-commerce moderne avec Shopify, la plateforme leader mondiale. Nous vous accompagnons de A à Z dans votre projet."
        highlightedWord="Shopify"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos services Shopify</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour votre boutique Shopify
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                  <service.icon className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Pourquoi choisir Shopify ?</h2>
              <p className="text-xl text-gray-600">
                Une plateforme e-commerce complète et puissante
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4 shadow">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre approche Shopify</h2>
              <p className="text-xl text-gray-600">Un développement centré sur vos objectifs</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">Design</div>
                  <p className="text-gray-700">Créations uniques et sur mesure qui reflètent votre marque</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">Performance</div>
                  <p className="text-gray-700">Optimisation maximale pour des temps de chargement ultra-rapides</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">Conversion</div>
                  <p className="text-gray-700">Stratégies éprouvées pour transformer vos visiteurs en clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Lancez votre boutique Shopify dès maintenant</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bénéficiez de notre expertise pour créer une boutique qui convertit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Demander un devis
            </Link>
            <Link 
              href="/expertises" 
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all"
            >
              Voir toutes nos expertises
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

