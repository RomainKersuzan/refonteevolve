'use client'

import Link from 'next/link'
import { FaShoppingCart, FaShopify, FaCode, FaPalette, FaCog, FaRocket, FaCheck, FaSearch, FaTools } from 'react-icons/fa'
import AnimatedHero from '@/components/AnimatedHero'

const expertises = [
  {
    icon: FaShoppingCart,
    title: 'PrestaShop',
    description: 'Experts certifiés PrestaShop, nous créons et optimisons des boutiques performantes pour maximiser vos ventes en ligne.',
    features: [
      'Création de boutiques PrestaShop',
      'Migration et mise à niveau',
      'Développement de modules personnalisés',
      'Optimisation des performances',
      'Maintenance et support',
    ],
    link: '/expertises/prestashop',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FaShopify,
    title: 'Shopify',
    description: 'Développement de boutiques Shopify modernes, évolutives et adaptées à vos besoins spécifiques.',
    features: [
      'Création de boutiques Shopify',
      'Personnalisation de thèmes',
      'Développement d\'applications',
      'Intégrations tierces',
      'Formation et accompagnement',
    ],
    link: '/expertises/shopify',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FaCode,
    title: 'Sites Vitrines',
    description: 'Création de sites vitrines élégants et responsives pour valoriser votre image de marque et attirer de nouveaux clients.',
    features: [
      'Design moderne et responsive',
      'Optimisation SEO',
      'Performance optimale',
      'Formulaires de contact',
      'Hébergement et maintenance',
    ],
    link: '/expertises/sites-vitrines',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FaPalette,
    title: 'Design Graphique',
    description: 'Conception graphique sur mesure pour une identité visuelle unique et impactante qui vous démarque de la concurrence.',
    features: [
      'Création de logos',
      'Charte graphique complète',
      'Design d\'interfaces (UI/UX)',
      'Supports marketing',
      'Illustrations personnalisées',
    ],
    link: '/expertises/design-graphique',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: FaCog,
    title: 'Solutions Sur Mesure',
    description: 'Développement de solutions web personnalisées répondant précisément à vos besoins métier spécifiques.',
    features: [
      'Analyse de vos besoins',
      'Développement sur mesure',
      'Intégrations API',
      'Applications web complexes',
      'Support et évolution',
    ],
    link: '/expertises/solutions-sur-mesure',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: FaRocket,
    title: 'E-commerce',
    description: 'Création de plateformes e-commerce complètes avec toutes les fonctionnalités nécessaires pour réussir en ligne.',
    features: [
      'Stratégie e-commerce',
      'Plateforme multi-canal',
      'Paiement sécurisé',
      'Gestion des stocks',
      'Analytics et reporting',
    ],
    link: '/expertises/e-commerce',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: FaSearch,
    title: 'SEO',
    description: 'Optimisation du référencement naturel pour booster votre visibilité sur Google et générer du trafic qualifié.',
    features: [
      'Audit SEO complet',
      'Optimisation on-page',
      'Stratégie de contenu',
      'Netlinking',
      'Suivi et reporting',
    ],
    link: '/expertises/seo',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: FaTools,
    title: 'Maintenance',
    description: 'Services de maintenance professionnels pour garder votre site sécurisé, rapide et à jour en permanence.',
    features: [
      'Mises à jour régulières',
      'Sauvegardes automatiques',
      'Monitoring 24/7',
      'Support technique',
      'Corrections et optimisations',
    ],
    link: '/maintenance',
    color: 'from-gray-500 to-gray-600',
  },
]

export default function ExpertisesPage() {
  return (
    <div className="pt-0">
      <AnimatedHero 
        title="Nos Expertises Web 360°" 
        subtitle="Des solutions complètes pour tous vos besoins digitaux. De la création de sites e-commerce aux solutions sur mesure, nous maîtrisons toutes les facettes du web moderne."
        highlightedWord="360°"
      />

      {/* Expertises Grid */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            {expertises.map((expertise, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`bg-gradient-to-r ${expertise.color} p-8 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg">
                      <expertise.icon className="text-4xl" />
                    </div>
                    <h2 className="text-3xl font-bold">{expertise.title}</h2>
                  </div>
                  <p className="text-lg text-white/90">{expertise.description}</p>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Ce que nous proposons :</h3>
                  <ul className="space-y-3 mb-6">
                    {expertise.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={expertise.link}
                    className="inline-block w-full text-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Vous avez un projet en tête ?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et trouvons ensemble la solution adaptée à votre projet
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  )
}

