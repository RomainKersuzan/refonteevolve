'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaCheck, FaShieldAlt, FaClock, FaTools, FaChartLine, FaHeadset, FaRocket, FaLock } from 'react-icons/fa'
import { motion } from 'framer-motion'
import AnimatedHero from '@/components/AnimatedHero'
import TrustSection from '@/components/TrustSection'

const maintenancePlans = [
  {
    name: 'Essentiel',
    price: '99€',
    period: '/mois',
    description: 'Parfait pour les petits sites vitrines',
    features: [
      'Mises à jour de sécurité mensuelles',
      'Sauvegarde hebdomadaire automatique',
      'Monitoring uptime 24/7',
      'Support email sous 48h',
      'Corrections bugs (3h/mois incluses)',
      'Rapport mensuel détaillé',
      'Certificat SSL maintenu',
    ],
    color: 'from-blue-500 to-blue-600',
    popular: false,
  },
  {
    name: 'Professionnel',
    price: '249€',
    period: '/mois',
    description: 'Idéal pour les sites e-commerce et boutiques',
    features: [
      'Tout du plan Essentiel',
      'Sauvegarde quotidienne',
      'Mises à jour hebdomadaires',
      'Support prioritaire sous 24h',
      'Corrections bugs (8h/mois incluses)',
      'Optimisation performance mensuelle',
      'Ajout/modification contenu',
      'Rapport détaillé + analytics',
      'Hotline téléphonique',
    ],
    color: 'from-primary-600 to-secondary-600',
    popular: true,
  },
  {
    name: 'Premium',
    price: '499€',
    period: '/mois',
    description: 'Pour les boutiques à fort trafic et critiques',
    features: [
      'Tout du plan Professionnel',
      'Sauvegarde en temps réel',
      'Support 24/7 (réponse sous 2h)',
      'Corrections bugs (15h/mois incluses)',
      'Optimisation SEO continue',
      'Analytics avancés & A/B testing',
      'CDN & cache ultra-optimisé',
      'Manager de compte dédié',
      'Nouvelles fonctionnalités prioritaires',
      'Audit de sécurité trimestriel',
    ],
    color: 'from-orange-500 to-orange-600',
    popular: false,
  },
]

const services = [
  {
    icon: FaShieldAlt,
    title: 'Sécurité renforcée',
    description: 'Mises à jour de sécurité, monitoring des menaces et protection contre les attaques.',
  },
  {
    icon: FaRocket,
    title: 'Performance optimale',
    description: 'Optimisation continue pour garantir des temps de chargement rapides.',
  },
  {
    icon: FaTools,
    title: 'Corrections & bugs',
    description: 'Résolution rapide de tous les problèmes techniques qui peuvent survenir.',
  },
  {
    icon: FaChartLine,
    title: 'Suivi & analytics',
    description: 'Rapports réguliers sur les performances et le trafic de votre site.',
  },
  {
    icon: FaLock,
    title: 'Sauvegardes automatiques',
    description: 'Vos données sont sauvegardées régulièrement et stockées en sécurité.',
  },
  {
    icon: FaHeadset,
    title: 'Support dédié',
    description: 'Une équipe à votre écoute pour répondre à toutes vos questions.',
  },
]

export default function MaintenancePage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <div className="pt-0">
      <AnimatedHero 
        title="Maintenance de Site Web" 
        subtitle="Gardez votre site sécurisé, rapide et à jour avec nos services de maintenance professionnels. Concentrez-vous sur votre business, on s'occupe de la technique."
        highlightedWord="Maintenance"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Pourquoi la maintenance est essentielle ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un site web nécessite un entretien régulier pour rester performant et sécurisé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg mb-6">
                  <service.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Choisissez votre formule de maintenance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des formules adaptées à tous les besoins et tous les budgets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white transform scale-105 shadow-2xl' 
                    : 'bg-white shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                      LE PLUS POPULAIRE
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ml-2 ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm mt-2 ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                    Sans engagement
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className={`mt-1 flex-shrink-0 ${plan.popular ? 'text-yellow-300' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-white/90' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center px-6 py-4 rounded-lg font-bold transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300 shadow-lg'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  Choisir {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Besoin d'une formule sur mesure ?
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
            >
              Demander un devis personnalisé
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Ce que nous faisons pour vous
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: 'Mises à jour techniques',
                  items: ['CMS (WordPress, PrestaShop, Shopify)', 'Plugins et modules', 'PHP, JavaScript, librairies', 'Compatibilité navigateurs'],
                },
                {
                  title: 'Sécurité & surveillance',
                  items: ['Monitoring 24/7', 'Protection anti-malware', 'Certificats SSL', 'Firewall applicatif'],
                },
                {
                  title: 'Performance',
                  items: ['Optimisation images', 'Cache & CDN', 'Minification code', 'Tests de vitesse'],
                },
                {
                  title: 'Sauvegardes',
                  items: ['Bases de données', 'Fichiers & médias', 'Stockage sécurisé', 'Restauration rapide'],
                },
              ].map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 font-bold text-xl">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{category.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <FaCheck className="text-green-500 text-sm" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Puis-je résilier à tout moment ?',
                  a: 'Oui, tous nos contrats sont sans engagement. Vous pouvez arrêter à tout moment avec un préavis de 30 jours.',
                },
                {
                  q: 'Que se passe-t-il si mon site tombe en panne ?',
                  a: 'Nous intervenons immédiatement selon votre formule (2h pour Premium, 24h pour Professionnel, 48h pour Essentiel).',
                },
                {
                  q: 'Les heures de maintenance non utilisées sont-elles reportées ?',
                  a: 'Non, les heures sont valables uniquement pour le mois en cours. Cela nous permet de maintenir des prix bas.',
                },
                {
                  q: 'Puis-je upgrader ou downgrader ma formule ?',
                  a: 'Oui, vous pouvez changer de formule à tout moment selon l\'évolution de vos besoins.',
                },
                {
                  q: 'Faites-vous la maintenance de sites créés par d\'autres ?',
                  a: 'Absolument ! Nous prenons en charge la maintenance de sites créés par d\'autres agences ou développeurs.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Pourquoi choisir notre maintenance ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">✅ Avec nous</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <FaCheck className="text-green-500 mt-1" />
                    <span>Site toujours à jour et sécurisé</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <FaCheck className="text-green-500 mt-1" />
                    <span>Intervention rapide en cas de problème</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <FaCheck className="text-green-500 mt-1" />
                    <span>Performance optimale garantie</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <FaCheck className="text-green-500 mt-1" />
                    <span>Sauvegardes automatiques</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <FaCheck className="text-green-500 mt-1" />
                    <span>Tranquillité d'esprit</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">❌ Sans maintenance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 mt-1">✖</span>
                    <span>Failles de sécurité non corrigées</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 mt-1">✖</span>
                    <span>Site lent et non optimisé</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 mt-1">✖</span>
                    <span>Risque de piratage élevé</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 mt-1">✖</span>
                    <span>Perte de données possible</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-500 mt-1">✖</span>
                    <span>Stress et problèmes imprévus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Notre expérience en chiffres
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Sites maintenus' },
                { number: '99.9%', label: 'Uptime garanti' },
                { number: '24/7', label: 'Monitoring' },
                { number: '< 2h', label: 'Temps de réponse' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Prêt à sécuriser votre site web ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contactez-nous pour choisir la formule adaptée à vos besoins
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Demander un devis
              </Link>
              <a 
                href="tel:0646692120"
                className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
              >
                <FaHeadset /> 06 46 69 21 20
              </a>
            </div>
            
            <div className="mt-8 inline-block bg-green-50 border-2 border-green-200 rounded-lg px-6 py-3">
              <p className="text-green-800 font-semibold">
                1er mois offert pour tout nouveau contrat de 12 mois !
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

