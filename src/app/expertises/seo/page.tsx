'use client'

import Link from 'next/link'
import { FaSearch, FaCheck, FaChartLine, FaGoogle, FaFileAlt, FaLink, FaMobileAlt, FaRocket, FaStar } from 'react-icons/fa'
import AnimatedHero from '@/components/AnimatedHero'
import TrustSection from '@/components/TrustSection'

const services = [
  {
    icon: FaSearch,
    title: 'Audit SEO complet',
    description: 'Analyse approfondie de votre site pour identifier tous les points d\'amélioration.',
  },
  {
    icon: FaGoogle,
    title: 'Optimisation on-page',
    description: 'Optimisation de vos contenus, balises, structure pour plaire à Google.',
  },
  {
    icon: FaLink,
    title: 'Netlinking',
    description: 'Stratégie de backlinks de qualité pour booster votre autorité.',
  },
  {
    icon: FaFileAlt,
    title: 'Rédaction SEO',
    description: 'Création de contenus optimisés qui rankent et convertissent.',
  },
  {
    icon: FaMobileAlt,
    title: 'SEO technique',
    description: 'Performance, mobile-first, Core Web Vitals et indexation optimale.',
  },
  {
    icon: FaChartLine,
    title: 'Suivi & reporting',
    description: 'Analytics, positions, trafic et recommandations mensuelles.',
  },
]

const seoPoints = [
  'Analyse complète de votre site et concurrence',
  'Recherche de mots-clés stratégiques',
  'Optimisation technique (vitesse, mobile, etc.)',
  'Optimisation du contenu existant',
  'Création de nouvelles pages optimisées',
  'Stratégie de liens internes',
  'Netlinking et backlinks de qualité',
  'SEO local (Google My Business)',
  'Rich snippets et données structurées',
  'Suivi des positions et analytics',
  'Rapports mensuels détaillés',
  'Recommandations continues',
]

const results = [
  { metric: '+250%', label: 'Trafic organique moyen' },
  { metric: 'Top 3', label: 'Positions Google moyennes' },
  { metric: '+180%', label: 'Leads générés' },
  { metric: '6 mois', label: 'Délai moyen résultats' },
]

export default function SEOPage() {
  return (
    <div className="pt-0">
      <AnimatedHero 
        title="Expertise SEO & Référencement Naturel" 
        subtitle="Boostez votre visibilité sur Google et générez plus de trafic qualifié. Notre expert SEO Max Coasta optimise votre référencement naturel pour des résultats durables."
        highlightedWord="SEO"
      />

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Pourquoi investir dans le SEO ?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Le référencement naturel est <strong>l'investissement le plus rentable</strong> pour votre entreprise. 
              Contrairement aux publicités payantes, les résultats SEO sont <strong>durables</strong> et vous 
              apportent un flux constant de clients qualifiés sans frais publicitaires.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">0€</div>
                <p className="text-sm text-gray-700">par clic (contrairement à Google Ads)</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                <p className="text-sm text-gray-700">des clics vont sur les résultats organiques</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <p className="text-sm text-gray-700">votre site travaille pour vous</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos services SEO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement complet pour dominer Google
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg mb-6">
                  <service.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre méthode SEO</h2>
              <p className="text-xl text-gray-600">
                Une approche complète et éprouvée pour des résultats garantis
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seoPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Résultats obtenus pour nos clients</h2>
            <p className="text-xl mb-12 text-gray-100">
              Des chiffres concrets qui parlent d'eux-mêmes
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-3 text-yellow-300">{result.metric}</div>
                  <div className="text-gray-200">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32">
                    <img 
                      src="/photo-max.webp" 
                      alt="Max Coasta" 
                      className="w-full h-full rounded-full object-cover shadow-lg ring-4 ring-indigo-100"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">Max Coasta</h3>
                  <p className="text-xl text-indigo-600 font-semibold mb-3">Expert SEO & Stratégie Digitale</p>
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                    <span className="ml-2 text-gray-700 font-bold">5.0 / 5</span>
                  </div>
                  
                  <div className="mb-6 flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">SEO</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Google Ads</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Analytics</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Content Marketing</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Spécialiste SEO avec plus de <strong>50 sites optimisés</strong> et des résultats mesurables. 
                    Max analyse, optimise et booste votre visibilité sur Google avec des stratégies éprouvées.
                  </p>
                  
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
                  >
                    Demander un audit SEO gratuit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos formules SEO</h2>
              <p className="text-xl text-gray-600">
                Choisissez l'accompagnement adapté à vos objectifs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Audit SEO',
                  price: '299€',
                  period: 'ponctuel',
                  description: 'Diagnostic complet de votre site',
                  features: [
                    'Audit technique complet',
                    'Analyse des mots-clés',
                    'Analyse concurrentielle',
                    'Plan d\'action détaillé',
                    'Rapport de 30+ pages',
                  ],
                  cta: 'Commander l\'audit',
                },
                {
                  name: 'SEO Mensuel',
                  price: '499€',
                  period: '/mois',
                  description: 'Optimisation continue',
                  features: [
                    'Audit initial inclus',
                    'Optimisations mensuelles',
                    'Création de contenu SEO',
                    'Netlinking mensuel',
                    'Suivi positions',
                    'Rapport mensuel',
                    'Support prioritaire',
                  ],
                  cta: 'Démarrer le SEO',
                  popular: true,
                },
                {
                  name: 'SEO Premium',
                  price: '999€',
                  period: '/mois',
                  description: 'Domination Google',
                  features: [
                    'Tout du plan Mensuel',
                    'Stratégie personnalisée',
                    'Rédaction 4 articles/mois',
                    'Campagne netlinking agressive',
                    'A/B testing SEO',
                    'Manager SEO dédié',
                    'Garantie top 3 positions',
                  ],
                  cta: 'Dominer Google',
                },
              ].map((plan, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl p-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white transform scale-105 shadow-2xl'
                      : 'bg-white shadow-lg border-2 border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                        RECOMMANDÉ
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
                      {plan.period !== 'ponctuel' && (
                        <span className={`text-lg ml-2 ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                          {plan.period}
                        </span>
                      )}
                    </div>
                    {plan.period !== 'ponctuel' && (
                      <p className={`text-sm mt-2 ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>
                        Sans engagement
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
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
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre process SEO</h2>
              <p className="text-xl text-gray-600">6 mois pour atteindre vos objectifs</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  month: 'Mois 1',
                  title: 'Audit & Stratégie',
                  tasks: ['Audit technique complet', 'Recherche mots-clés', 'Analyse concurrence', 'Définition stratégie'],
                },
                {
                  month: 'Mois 2',
                  title: 'Optimisation technique',
                  tasks: ['Corrections techniques', 'Optimisation vitesse', 'Mobile-first', 'Structure URLs'],
                },
                {
                  month: 'Mois 3',
                  title: 'Contenu & On-page',
                  tasks: ['Optimisation pages existantes', 'Création nouveau contenu', 'Balises meta', 'Maillage interne'],
                },
                {
                  month: 'Mois 4-6',
                  title: 'Netlinking & Suivi',
                  tasks: ['Campagne backlinks', 'Guest blogging', 'Suivi positions', 'Ajustements continus'],
                },
              ].map((phase, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg">
                        <span className="text-indigo-600 font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                        <span className="text-sm text-indigo-600 font-semibold">{phase.month}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {phase.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <FaCheck className="text-green-500 text-xs" />
                            <span>{task}</span>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à dominer Google ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Demandez votre audit SEO gratuit et découvrez comment améliorer votre référencement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Audit SEO gratuit
            </Link>
            <Link 
              href="/realisations" 
              className="inline-block px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-all border-2 border-white/30"
            >
              Voir nos résultats
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

