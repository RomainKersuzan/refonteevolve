'use client'

import Link from 'next/link'
import { FaPalette, FaCheck, FaPencilRuler, FaImages, FaPrint, FaVectorSquare } from 'react-icons/fa'
import AnimatedHero from '@/components/AnimatedHero'
import TrustSection from '@/components/TrustSection'

const services = [
  {
    icon: FaVectorSquare,
    title: 'Création de logos',
    description: 'Logos uniques et mémorables qui représentent parfaitement votre marque.',
  },
  {
    icon: FaPencilRuler,
    title: 'Charte graphique',
    description: 'Guide complet de votre identité visuelle pour une cohérence parfaite.',
  },
  {
    icon: FaPalette,
    title: 'UI/UX Design',
    description: 'Interfaces utilisateur élégantes et expériences utilisateur optimales.',
  },
  {
    icon: FaImages,
    title: 'Supports digitaux',
    description: 'Bannières web, posts réseaux sociaux, newsletters et plus encore.',
  },
  {
    icon: FaPrint,
    title: 'Supports print',
    description: 'Cartes de visite, flyers, brochures et tous vos supports imprimés.',
  },
]

const deliverables = [
  'Plusieurs propositions de concepts',
  'Fichiers source (AI, PSD, Figma)',
  'Fichiers finaux en haute résolution',
  'Déclinaisons couleurs et noir & blanc',
  'Formats adaptés (PNG, JPG, SVG, PDF)',
  'Guide d\'utilisation du logo',
  'Palette de couleurs complète',
  'Typographies recommandées',
  'Mockups de mise en situation',
  'Droits d\'utilisation complets',
]

export default function DesignGraphiquePage() {
  return (
    <div className="pt-0">
      <AnimatedHero 
        title="Design Graphique & Créatif" 
        subtitle="Donnez vie à votre identité visuelle avec des designs uniques et impactants. De la création de logo à la charte graphique complète, nous créons des visuels qui marquent les esprits."
        highlightedWord="Design"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos services design</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la conception à la réalisation de tous vos supports visuels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-lg mb-6">
                  <service.icon className="text-pink-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre processus créatif</h2>
            <p className="text-xl text-gray-600">Une méthodologie éprouvée pour des résultats exceptionnels</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Brief', description: 'Compréhension de vos besoins et valeurs' },
              { step: '2', title: 'Recherche', description: 'Analyse de la concurrence et tendances' },
              { step: '3', title: 'Création', description: 'Développement des concepts créatifs' },
              { step: '4', title: 'Révision', description: 'Ajustements selon vos retours' },
              { step: '5', title: 'Livraison', description: 'Fichiers finaux et guide d\'utilisation' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 text-white text-2xl font-bold rounded-full mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Ce que vous recevez</h2>
              <p className="text-xl text-gray-600">
                Tous les fichiers et livrables pour exploiter pleinement votre identité visuelle
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos formules</h2>
            <p className="text-xl text-gray-600">Choisissez la formule adaptée à vos besoins</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Logo Simple',
                description: 'Création de logo professionnel avec fichiers sources',
                price: 'À partir de 500€',
                items: ['3 propositions', '2 révisions', 'Fichiers sources', 'Formats web et print'],
              },
              {
                title: 'Identité Complète',
                description: 'Logo + charte graphique complète pour votre entreprise',
                price: 'À partir de 1 500€',
                items: ['5 propositions logo', 'Révisions illimitées', 'Charte graphique', 'Guide d\'utilisation', 'Tous formats'],
                featured: true,
              },
              {
                title: 'Branding Premium',
                description: 'Solution complète avec tous les supports visuels',
                price: 'Sur devis',
                items: ['Identité complète', 'Supports digitaux', 'Supports print', 'UI/UX design', 'Accompagnement dédié'],
              },
            ].map((pack, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 ${pack.featured ? 'bg-gradient-to-br from-pink-600 to-pink-700 text-white transform scale-105 shadow-2xl' : 'bg-white shadow-lg'}`}
              >
                {pack.featured && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
                      Recommandé
                    </span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-3 ${pack.featured ? 'text-white' : 'text-gray-900'}`}>
                  {pack.title}
                </h3>
                <p className={`mb-4 ${pack.featured ? 'text-white/90' : 'text-gray-600'}`}>
                  {pack.description}
                </p>
                <div className={`text-3xl font-bold mb-6 ${pack.featured ? 'text-white' : 'text-pink-600'}`}>
                  {pack.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pack.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <FaCheck className={`mt-1 flex-shrink-0 ${pack.featured ? 'text-white' : 'text-green-500'}`} />
                      <span className={pack.featured ? 'text-white/90' : 'text-gray-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    pack.featured 
                      ? 'bg-white text-pink-600 hover:bg-gray-100' 
                      : 'bg-pink-600 text-white hover:bg-pink-700'
                  }`}
                >
                  Choisir cette formule
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
          <h2 className="text-4xl font-bold mb-6">Créons ensemble votre identité visuelle</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Parlons de votre projet et donnons vie à votre marque
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Discuter de mon projet
          </Link>
        </div>
      </section>
    </div>
  )
}

