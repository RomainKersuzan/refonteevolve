'use client'

import Link from 'next/link'
import { FaRocket, FaCheck, FaShoppingCart, FaCreditCard, FaChartLine, FaTruck } from 'react-icons/fa'
import AnimatedHero from '@/components/AnimatedHero'
import TrustSection from '@/components/TrustSection'

const services = [
  {
    icon: FaShoppingCart,
    title: 'Création de boutiques',
    description: 'Développement de boutiques e-commerce complètes, de la conception à la mise en ligne.',
  },
  {
    icon: FaCreditCard,
    title: 'Paiements sécurisés',
    description: 'Intégration de multiples moyens de paiement sécurisés pour faciliter vos ventes.',
  },
  {
    icon: FaTruck,
    title: 'Gestion logistique',
    description: 'Configuration des transporteurs, calcul des frais de port et suivi des commandes.',
  },
  {
    icon: FaChartLine,
    title: 'Optimisation conversions',
    description: 'Stratégies et optimisations pour transformer vos visiteurs en clients.',
  },
]

const platforms = [
  {
    name: 'PrestaShop',
    description: 'Solution open-source puissante et flexible, idéale pour les boutiques de toute taille.',
    benefits: ['Très personnalisable', 'Large communauté', 'Milliers de modules', 'Multilingue natif'],
    bestFor: 'PME et grandes entreprises',
  },
  {
    name: 'Shopify',
    description: 'Plateforme SaaS tout-en-un, simple d\'utilisation avec hébergement et maintenance inclus.',
    benefits: ['Prise en main rapide', 'Hébergement inclus', 'Support 24/7', 'App Store riche'],
    bestFor: 'Startups et entrepreneurs',
  },
  {
    name: 'Sur Mesure',
    description: 'Solution développée spécifiquement pour vos besoins uniques et processus particuliers.',
    benefits: ['100% personnalisé', 'Fonctionnalités spécifiques', 'Intégrations complexes', 'Scalabilité maximale'],
    bestFor: 'Projets complexes et spécifiques',
  },
]

const features = [
  'Catalogue produits illimité',
  'Gestion des stocks en temps réel',
  'Système de commandes complet',
  'Paiements sécurisés (CB, PayPal, etc.)',
  'Gestion des transporteurs',
  'Codes promo et réductions',
  'Programme de fidélité',
  'Wishlist / Liste de souhaits',
  'Avis clients',
  'Cross-selling et upselling',
  'Factures automatiques',
  'Exports comptables',
  'Multi-devises',
  'Multi-langues',
  'Responsive mobile',
  'Optimisation SEO',
]

export default function EcommercePage() {
  return (
    <div className="pt-0">
      <AnimatedHero 
        title="Solutions E-commerce Complètes" 
        subtitle="Lancez ou développez votre activité de vente en ligne avec une boutique e-commerce performante et optimisée pour maximiser vos conversions et votre chiffre d'affaires."
        highlightedWord="E-commerce"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos services e-commerce</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce dont vous avez besoin pour réussir en ligne
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg mb-6">
                  <service.icon className="text-red-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Quelle plateforme choisir ?</h2>
            <p className="text-xl text-gray-600">
              Nous vous aidons à choisir la solution la plus adaptée à votre projet
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-red-600">{platform.name}</h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Avantages :</h4>
                  <ul className="space-y-2">
                    {platform.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700">
                    <strong>Idéal pour :</strong> {platform.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Fonctionnalités incluses</h2>
              <p className="text-xl text-gray-600">
                Toutes les fonctionnalités essentielles pour votre boutique
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre approche orientée résultats</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '100+', label: 'Boutiques créées' },
              { number: '98%', label: 'Clients satisfaits' },
              { number: '+45%', label: 'Conversions en moyenne' },
              { number: '24/7', label: 'Support disponible' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">De l\'idée à la vente</h2>
            <p className="text-xl text-gray-600">Notre processus complet en 5 étapes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Stratégie' },
              { step: '2', title: 'Design' },
              { step: '3', title: 'Développement' },
              { step: '4', title: 'Lancement' },
              { step: '5', title: 'Croissance' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à lancer votre boutique e-commerce ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Commencez à vendre en ligne dès aujourd\'hui avec une solution adaptée à vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Demander un devis gratuit
            </Link>
            <Link 
              href="/realisations" 
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all"
            >
              Voir nos boutiques
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

