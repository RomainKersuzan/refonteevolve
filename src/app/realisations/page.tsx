'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart, FaCode, FaCog } from 'react-icons/fa'
import AnimatedHero from '@/components/AnimatedHero'

const realisations = [
  {
    id: 'boutique-luxury-fashion',
    title: 'Boutique E-commerce Mode Luxe',
    category: 'E-commerce',
    description: 'Création d\'une boutique e-commerce haut de gamme pour une marque de mode luxe. Design élégant, expérience utilisateur premium et intégration de paiements sécurisés.',
    technologies: ['PrestaShop 8', 'Custom Theme', 'Multi-langues', 'Paiements CB/PayPal'],
    features: ['Catalogue 500+ produits', 'Système de tailles personnalisé', 'Programme fidélité', 'Wishlist avancée'],
    gradient: 'from-purple-500 to-pink-500',
    icon: FaShoppingCart,
    results: '+65% de conversions',
  },
  {
    id: 'marketplace-artisans',
    title: 'Marketplace Artisans Locaux',
    category: 'Sur Mesure',
    description: 'Développement d\'une marketplace connectant artisans et clients. Gestion multi-vendeurs, système de commissions et tableau de bord complet.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe Connect'],
    features: ['Multi-vendeurs', 'Gestion commissions', 'Chat intégré', 'Analytics avancées'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: FaCog,
    results: '50+ artisans actifs',
  },
  {
    id: 'site-agence-immobiliere',
    title: 'Site Vitrine Agence Immobilière',
    category: 'Site Vitrine',
    description: 'Site vitrine moderne pour une agence immobilière avec système de recherche avancé, visites virtuelles 360° et espace client.',
    technologies: ['Next.js', 'Tailwind CSS', 'Google Maps API', 'CMS Headless'],
    features: ['Recherche avancée', 'Visites virtuelles', 'Espace client', 'Estimations en ligne'],
    gradient: 'from-green-500 to-emerald-500',
    icon: FaCode,
    results: '+120% de leads',
  },
  {
    id: 'boutique-shopify-cosmetics',
    title: 'Boutique Shopify Cosmétiques Bio',
    category: 'E-commerce',
    description: 'Boutique Shopify pour une marque de cosmétiques bio. Design épuré, abonnements récurrents et programme ambassadeurs.',
    technologies: ['Shopify Plus', 'Custom Theme', 'Subscriptions', 'Referral Program'],
    features: ['Abonnements', 'Programme ambassadeurs', 'Quiz produits', 'Blog beauté'],
    gradient: 'from-pink-500 to-rose-500',
    icon: FaShoppingCart,
    results: '+85% de fidélisation',
  },
  {
    id: 'module-gestion-stocks',
    title: 'Module Gestion Stocks Avancée',
    category: 'Modules',
    description: 'Développement d\'un module PrestaShop de gestion des stocks avancée avec prévisions, alertes automatiques et synchronisation ERP.',
    technologies: ['PHP', 'MySQL', 'API REST', 'Cron Jobs'],
    features: ['Prévisions stocks', 'Alertes automatiques', 'Sync ERP', 'Rapports détaillés'],
    gradient: 'from-orange-500 to-red-500',
    icon: FaCog,
    results: '-40% de ruptures',
  },
  {
    id: 'plateforme-reservation',
    title: 'Plateforme de Réservation SaaS',
    category: 'Sur Mesure',
    description: 'Application SaaS de gestion de réservations pour professionnels. Multi-utilisateurs, calendrier partagé et paiements en ligne.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    features: ['Calendrier partagé', 'Paiements en ligne', 'Notifications SMS', 'API publique'],
    gradient: 'from-indigo-500 to-purple-500',
    icon: FaCog,
    results: '1000+ réservations/mois',
  },
  {
    id: 'site-restaurant-gastronomique',
    title: 'Site Restaurant Gastronomique',
    category: 'Site Vitrine',
    description: 'Site vitrine premium pour restaurant étoilé avec réservation en ligne, menu interactif et galerie photos professionnelle.',
    technologies: ['Next.js', 'Framer Motion', 'Réservation API', 'CMS'],
    features: ['Réservation en ligne', 'Menu interactif', 'Galerie photos', 'Événements privés'],
    gradient: 'from-yellow-500 to-orange-500',
    icon: FaCode,
    results: '+90% de réservations',
  },
  {
    id: 'boutique-alimentaire-bio',
    title: 'E-commerce Produits Bio Locaux',
    category: 'E-commerce',
    description: 'Boutique en ligne pour producteurs locaux avec système de drive, créneaux de livraison et paiement au retrait.',
    technologies: ['PrestaShop', 'Module Custom', 'Géolocalisation', 'SMS'],
    features: ['Click & Collect', 'Créneaux livraison', 'Producteurs locaux', 'Zéro déchet'],
    gradient: 'from-green-500 to-lime-500',
    icon: FaShoppingCart,
    results: '+200% CA en 6 mois',
  },
  {
    id: 'portail-client-energie',
    title: 'Portail Client Énergie',
    category: 'Sur Mesure',
    description: 'Espace client sécurisé pour fournisseur d\'énergie. Suivi consommation, factures, contrats et service client intégré.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Charts.js'],
    features: ['Suivi conso temps réel', 'Factures électroniques', 'Contrats en ligne', 'Support chat'],
    gradient: 'from-blue-500 to-indigo-500',
    icon: FaCog,
    results: '-60% tickets support',
  },
]

const categories = ['Tous', 'E-commerce', 'Site Vitrine', 'Sur Mesure', 'Modules']

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filteredRealisations = activeCategory === 'Tous' 
    ? realisations 
    : realisations.filter(r => r.category === activeCategory)

  return (
    <div className="pt-0">
      <AnimatedHero 
        title="Nos Réalisations" 
        subtitle="Découvrez une sélection de nos projets récents. Plus de 100 projets réalisés et 100% de clients satisfaits."
        highlightedWord="Réalisations"
      />
      
      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category 
                    ? 'bg-primary-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRealisations.map((realisation, index) => (
              <div 
                key={realisation.id}
                id={realisation.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image Placeholder */}
                <div className={`aspect-video bg-gradient-to-br ${realisation.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <realisation.icon className="text-white text-6xl opacity-50" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-4 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                      {realisation.category}
                    </span>
                  </div>
                  {realisation.results && (
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-sm font-bold text-white">
                        {realisation.results}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{realisation.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{realisation.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {realisation.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Fonctionnalités clés :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {realisation.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href="/contact"
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Projet similaire ?</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre impact en chiffres</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '100+', label: 'Projets réalisés' },
                { number: '98%', label: 'Clients satisfaits' },
                { number: '50M+', label: 'Pages vues générées' },
                { number: '+75%', label: 'Conversions en moyenne' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Votre projet sera notre prochaine réalisation ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discutons de vos objectifs et créons ensemble un projet dont vous serez fier
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Démarrer mon projet
          </Link>
        </div>
      </section>
    </div>
  )
}
