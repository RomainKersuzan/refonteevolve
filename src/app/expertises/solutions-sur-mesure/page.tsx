'use client'

import Link from 'next/link'
import { FaCog, FaCheck, FaCode, FaDatabase, FaCloud, FaLock } from 'react-icons/fa'
import AnimatedHero from '@/components/AnimatedHero'
import TrustSection from '@/components/TrustSection'

const services = [
  {
    icon: FaCode,
    title: 'Applications web',
    description: 'Développement d\'applications web complexes et performantes adaptées à vos processus métier.',
  },
  {
    icon: FaDatabase,
    title: 'Bases de données',
    description: 'Conception et optimisation de bases de données robustes pour vos données critiques.',
  },
  {
    icon: FaCloud,
    title: 'Intégrations API',
    description: 'Connexion de vos systèmes avec des APIs tierces pour une automatisation complète.',
  },
  {
    icon: FaLock,
    title: 'Sécurité',
    description: 'Solutions sécurisées respectant les standards les plus élevés de l\'industrie.',
  },
  {
    icon: FaCog,
    title: 'Outils métier',
    description: 'Création d\'outils spécifiques pour optimiser vos processus internes.',
  },
]

const technologies = [
  'React / Next.js',
  'Vue.js / Nuxt.js',
  'Node.js',
  'PHP / Laravel',
  'Python / Django',
  'PostgreSQL / MySQL',
  'MongoDB',
  'Docker / Kubernetes',
  'AWS / Azure / GCP',
  'REST API / GraphQL',
  'WebSockets',
  'Redis / Elasticsearch',
]

const useCases = [
  {
    title: 'Plateforme SaaS',
    description: 'Développement de plateformes SaaS complètes avec gestion des utilisateurs, paiements et tableaux de bord.',
  },
  {
    title: 'ERP / CRM personnalisé',
    description: 'Création d\'outils de gestion sur mesure parfaitement adaptés à vos processus métier.',
  },
  {
    title: 'Marketplace',
    description: 'Plateformes de mise en relation avec gestion multi-vendeurs, paiements et commissions.',
  },
  {
    title: 'Portail client',
    description: 'Espaces clients sécurisés pour la gestion de comptes, commandes et documents.',
  },
  {
    title: 'Automatisation',
    description: 'Outils d\'automatisation pour gagner du temps et réduire les erreurs humaines.',
  },
  {
    title: 'APIs personnalisées',
    description: 'Développement d\'APIs RESTful ou GraphQL pour connecter vos systèmes.',
  },
]

export default function SolutionsSurMesurePage() {
  return (
    <div className="pt-0">
      <AnimatedHero 
        title="Solutions Web Sur Mesure" 
        subtitle="Votre projet est unique, votre solution doit l'être aussi. Nous développons des applications et outils web parfaitement adaptés à vos besoins spécifiques et à vos processus métier."
        highlightedWord="Sur Mesure"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos expertises techniques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des compétences solides pour des solutions robustes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
                  <service.icon className="text-orange-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Cas d\'usage</h2>
            <p className="text-xl text-gray-600">
              Quelques exemples de solutions que nous développons
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Technologies maîtrisées</h2>
              <p className="text-xl text-gray-600">
                Nous utilisons les technologies les plus adaptées à votre projet
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center">
                  <span className="text-gray-800 font-semibold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre méthodologie</h2>
            <p className="text-xl text-gray-600">Un développement structuré et transparent</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Analyse & Cadrage',
                  description: 'Compréhension approfondie de vos besoins, analyse de l\'existant et définition du périmètre fonctionnel.',
                  deliverable: 'Cahier des charges détaillé',
                },
                {
                  phase: 'Phase 2',
                  title: 'Conception',
                  description: 'Architecture technique, maquettage des interfaces et définition des flux de données.',
                  deliverable: 'Spécifications techniques et maquettes',
                },
                {
                  phase: 'Phase 3',
                  title: 'Développement',
                  description: 'Développement itératif avec démonstrations régulières et ajustements continus.',
                  deliverable: 'Application fonctionnelle',
                },
                {
                  phase: 'Phase 4',
                  title: 'Tests & Déploiement',
                  description: 'Tests approfondis, correction des bugs et mise en production sécurisée.',
                  deliverable: 'Solution en production',
                },
                {
                  phase: 'Phase 5',
                  title: 'Maintenance & Support',
                  description: 'Accompagnement post-lancement, corrections et évolutions futures.',
                  deliverable: 'Support continu',
                },
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                        <span className="text-orange-600 font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-orange-600 font-semibold">{step.phase}</span>
                      </div>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <FaCheck className="text-green-500 mr-2" />
                        <span>Livrable : {step.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Un projet de développement sur mesure ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et trouvons ensemble la solution technique la plus adaptée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Demander un devis
            </Link>
            <Link 
              href="/realisations" 
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all"
            >
              Voir nos projets
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

