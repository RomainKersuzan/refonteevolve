'use client'

import Link from 'next/link'
import { FaCode, FaCheck, FaMobile, FaSearch, FaBolt, FaPaintBrush } from 'react-icons/fa'
import AnimatedHero from '@/components/AnimatedHero'
import TrustSection from '@/components/TrustSection'

const services = [
  {
    icon: FaPaintBrush,
    title: 'Design sur mesure',
    description: 'Création de designs uniques qui reflètent parfaitement votre identité de marque.',
  },
  {
    icon: FaMobile,
    title: 'Responsive Design',
    description: 'Sites parfaitement adaptés à tous les écrans : desktop, tablette et mobile.',
  },
  {
    icon: FaSearch,
    title: 'Optimisation SEO',
    description: 'Référencement naturel optimisé pour être visible sur Google.',
  },
  {
    icon: FaBolt,
    title: 'Performance',
    description: 'Sites ultra-rapides avec des temps de chargement optimisés.',
  },
  {
    icon: FaCode,
    title: 'Code propre',
    description: 'Développement avec les dernières technologies et standards du web.',
  },
]

const features = [
  'Design moderne et épuré',
  'Navigation intuitive',
  'Formulaire de contact',
  'Google Maps intégré',
  'Galerie d\'images',
  'Témoignages clients',
  'Blog intégré (optionnel)',
  'Animations fluides',
  'Compatible tous navigateurs',
  'Sécurité HTTPS',
  'Conformité RGPD',
  'Hébergement inclus',
]

export default function SitesVitrinesPage() {
  return (
    <div className="pt-0">
      <AnimatedHero 
        title="Sites Vitrines Professionnels" 
        subtitle="Valorisez votre entreprise avec un site vitrine élégant, moderne et performant. Attirez de nouveaux clients et renforcez votre présence en ligne."
        highlightedWord="Vitrines"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos garanties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des sites vitrines qui font la différence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-6">
                  <service.icon className="text-purple-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Fonctionnalités incluses</h2>
              <p className="text-xl text-gray-600">
                Tout ce dont vous avez besoin pour un site vitrine réussi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4 shadow">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Types de sites vitrines</h2>
            <p className="text-xl text-gray-600">Adaptés à tous les secteurs d\'activité</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Site One Page',
                description: 'Une seule page avec toutes les informations essentielles. Idéal pour les petites entreprises.',
                price: 'À partir de 1 500€',
              },
              {
                title: 'Site Multi-Pages',
                description: 'Plusieurs pages pour détailler vos services et votre expertise. Le plus populaire.',
                price: 'À partir de 2 500€',
                featured: true,
              },
              {
                title: 'Site Premium',
                description: 'Site complet avec fonctionnalités avancées, blog et espace client.',
                price: 'À partir de 4 000€',
              },
            ].map((type, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 ${type.featured ? 'bg-gradient-to-br from-purple-600 to-purple-700 text-white transform scale-105' : 'bg-gray-50 border-2 border-gray-200'}`}
              >
                {type.featured && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-4 ${type.featured ? 'text-white' : 'text-gray-900'}`}>
                  {type.title}
                </h3>
                <p className={`mb-6 ${type.featured ? 'text-white/90' : 'text-gray-600'}`}>
                  {type.description}
                </p>
                <div className={`text-3xl font-bold mb-6 ${type.featured ? 'text-white' : 'text-purple-600'}`}>
                  {type.price}
                </div>
                <Link 
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    type.featured 
                      ? 'bg-white text-purple-600 hover:bg-gray-100' 
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à créer votre site vitrine ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et créons ensemble un site à votre image
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Obtenir un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  )
}

