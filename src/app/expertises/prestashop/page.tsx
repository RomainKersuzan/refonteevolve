'use client'

import Link from 'next/link'
import { FaShoppingCart, FaCheck, FaCog, FaRocket, FaShieldAlt, FaChartLine } from 'react-icons/fa'
import AnimatedHero from '@/components/AnimatedHero'
import TrustSection from '@/components/TrustSection'

const services = [
  {
    icon: FaShoppingCart,
    title: 'Création de boutiques',
    description: 'Conception et développement de boutiques PrestaShop sur mesure, adaptées à vos besoins et à votre secteur d\'activité.',
  },
  {
    icon: FaCog,
    title: 'Modules personnalisés',
    description: 'Développement de modules PrestaShop sur mesure pour étendre les fonctionnalités de votre boutique.',
  },
  {
    icon: FaRocket,
    title: 'Migration & Mise à niveau',
    description: 'Migration sécurisée de votre boutique vers les dernières versions de PrestaShop avec zéro temps d\'arrêt.',
  },
  {
    icon: FaShieldAlt,
    title: 'Maintenance & Support',
    description: 'Service de maintenance continue et support technique pour garantir la performance de votre boutique.',
  },
  {
    icon: FaChartLine,
    title: 'Optimisation des performances',
    description: 'Amélioration de la vitesse de chargement et optimisation SEO pour augmenter vos conversions.',
  },
]

const features = [
  'Installation et configuration PrestaShop',
  'Personnalisation du thème et design',
  'Développement de fonctionnalités spécifiques',
  'Intégration de passerelles de paiement',
  'Configuration des transporteurs',
  'Import/Export de produits',
  'Optimisation SEO',
  'Formation à l\'administration',
  'Résolution de bugs',
  'Audits de sécurité',
]

export default function PrestaShopPage() {
  return (
    <div className="pt-0">
      <AnimatedHero 
        title="Expertise PrestaShop" 
        subtitle="Experts certifiés PrestaShop depuis plusieurs années, nous créons et optimisons des boutiques e-commerce performantes qui génèrent des résultats."
        highlightedWord="PrestaShop"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos services PrestaShop</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour votre boutique PrestaShop
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                  <service.icon className="text-blue-600 text-3xl" />
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
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Ce que nous maîtrisons</h2>
              <p className="text-xl text-gray-600">
                Toutes les compétences nécessaires pour votre projet PrestaShop
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre méthode</h2>
            <p className="text-xl text-gray-600">Un processus éprouvé pour la réussite de votre projet</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse', description: 'Étude approfondie de vos besoins et de votre secteur' },
              { step: '02', title: 'Conception', description: 'Design et architecture de votre boutique' },
              { step: '03', title: 'Développement', description: 'Création et intégration des fonctionnalités' },
              { step: '04', title: 'Lancement', description: 'Mise en ligne et accompagnement' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à lancer votre boutique PrestaShop ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Demander un devis
            </Link>
            <Link 
              href="/realisations" 
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

