'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaCheckCircle, FaHeart, FaLightbulb, FaUsers, FaStar, FaExternalLinkAlt } from 'react-icons/fa'
import AnimatedHero from '@/components/AnimatedHero'

const team = [
  {
    name: 'Romain Kersuzan',
    role: 'Fondateur & Développeur Full-Stack',
    description: 'Ingénieur diplômé de l\'ESILV et titulaire d\'une maîtrise en informatique de l\'UQAC au Canada. Expert PrestaShop et passionné par les technologies web modernes.',
    linkedin: 'https://www.linkedin.com',
    color: 'from-blue-500 to-blue-600',
    image: '/photo-romain.webp',
  },
  {
    name: 'Bastien Robert',
    role: 'UX/UI Designer',
    description: 'Designer créatif spécialisé en expérience utilisateur et interfaces modernes. Transforme vos idées en designs qui captivent et convertissent.',
    linkedin: 'https://www.linkedin.com',
    color: 'from-purple-500 to-purple-600',
    image: '/photo-bastien.png',
  },
  {
    name: 'Mahmoud Alhabaj',
    role: 'Développeur & DevOps',
    description: 'Expert en développement PrestaShop et infrastructure cloud. Garantit la performance et la scalabilité de vos projets.',
    linkedin: 'https://www.linkedin.com',
    color: 'from-green-500 to-green-600',
    image: '/photo-mahmoud.png',
  },
  {
    name: 'Max Coasta',
    role: 'Expert SEO',
    description: 'Spécialiste en référencement naturel et stratégies SEO. Optimise votre visibilité en ligne et booste votre trafic organique.',
    linkedin: 'https://www.linkedin.com',
    color: 'from-orange-500 to-orange-600',
    image: '/photo-max.webp',
  },
]

const values = [
  {
    icon: FaCheckCircle,
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans chaque projet, en utilisant les meilleures pratiques et technologies du marché.',
  },
  {
    icon: FaHeart,
    title: 'Passion',
    description: 'Passionnés par le web, nous mettons notre cœur dans chaque ligne de code et chaque pixel de design.',
  },
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'Toujours à l\'affût des dernières tendances, nous proposons des solutions innovantes et modernes.',
  },
  {
    icon: FaUsers,
    title: 'Proximité',
    description: 'Une relation client authentique et transparente. Nous sommes à votre écoute à chaque étape du projet.',
  },
]

const milestones = [
  { year: '2022', title: 'Création d\'EvolveTech', description: 'Romain Kersuzan fonde l\'agence avec une vision : créer des solutions web d\'excellence.' },
  { year: '2022', title: '10 premiers clients', description: 'Premières boutiques PrestaShop et sites vitrines réalisés avec succès.' },
  { year: '2023', title: 'Élargissement des services', description: 'Ajout de Shopify, design graphique et solutions sur mesure à notre catalogue.' },
  { year: '2023', title: '50 projets réalisés', description: 'Franchissement du cap des 50 projets avec 100% de clients satisfaits.' },
  { year: '2024', title: 'Équipe élargie', description: 'Bastien et Mahmoud rejoignent l\'aventure pour renforcer nos expertises.' },
  { year: '2024', title: '100+ projets', description: 'Plus de 100 projets réalisés et positionnement comme agence web 360°.' },
]

export default function AProposPage() {
  return (
    <div className="pt-0">
      <AnimatedHero 
        title="À propos d'EvolveTech" 
        subtitle="Une agence web 360° passionnée, créée en 2022, dédiée à la transformation digitale des entreprises à travers des solutions web innovantes et performantes."
        highlightedWord="EvolveTech"
      />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Notre Histoire</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
 
              <p className="mb-6">
                Forte d'une expertise initiale en <strong>PrestaShop</strong>, notre agence s'est rapidement démarquée 
                par la qualité de ses réalisations et son approche centrée sur le client. Chaque projet est pour nous 
                l'occasion de créer quelque chose d'unique et de dépasser les attentes.
              </p>
              <p className="mb-6">
                Au fil du temps, nous avons élargi notre palette de services pour devenir une véritable 
                <strong> agence web 360°</strong>. Aujourd'hui, nous maîtrisons <strong>Shopify</strong>, le développement 
                de <strong>sites vitrines</strong>, les <strong>solutions sur mesure</strong>, le <strong>design graphique</strong> 
                et toutes les facettes de l'<strong>e-commerce</strong>.
              </p>
              <p>
                Avec plus de <strong>100 projets réalisés</strong> et <strong>100% de clients satisfaits</strong>, 
                nous continuons d'innover et de repousser les limites pour offrir à nos clients les meilleures 
                solutions digitales du marché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Notre Parcours</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>
              
              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Year badge */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full font-bold text-lg z-10">
                      {milestone.year}
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-6">
                  <value.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des experts passionnés au service de vos projets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group">
                <div className={`relative h-64 bg-gradient-to-br ${member.color} overflow-hidden`}>
                  {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-white text-6xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">{member.description}</p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Malt Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos freelances certifiés sur Malt</h2>
              <p className="text-xl text-gray-600">
                Retrouvez Romain et Max sur la plateforme Malt pour vos projets freelance
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Romain */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24">
                      <Image 
                        src="/photo-romain.webp" 
                        alt="Romain Kersuzan" 
                        fill
                        className="rounded-full object-cover shadow-lg ring-4 ring-primary-100"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 shadow-lg">
                        <Image src="/logo-malt.png" alt="Malt" width={20} height={20} className="h-5 w-auto" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Romain Kersuzan</h3>
                    <p className="text-lg text-primary-600 font-semibold mb-2">Développeur Full-Stack</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                      <span className="ml-1 text-gray-700 font-bold">5.0</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">PrestaShop</span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-semibold">Shopify</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Next.js</span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Expert e-commerce et développement web. Plus de 100 projets réalisés avec succès.
                </p>
                
                <a 
                  href="https://www.malt.fr/profile/romainkersuzan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FC5757] text-white rounded-lg font-semibold hover:bg-[#e54646] transition-all shadow text-sm w-full group"
                >
                  Voir le profil
                  <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Max Coasta */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24">
                      <Image 
                        src="/photo-max.webp" 
                        alt="Max Coasta" 
                        fill
                        className="rounded-full object-cover shadow-lg ring-4 ring-orange-100"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 shadow-lg">
                        <Image src="/logo-malt.png" alt="Malt" width={20} height={20} className="h-5 w-auto" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Max Coasta</h3>
                    <p className="text-lg text-orange-600 font-semibold mb-2">Expert SEO</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                      <span className="ml-1 text-gray-700 font-bold">5.0</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">SEO</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Google Ads</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Analytics</span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Spécialiste SEO et stratégies digitales. Booste votre visibilité et votre trafic organique.
                </p>
                
                <a 
                  href="https://www.malt.fr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FC5757] text-white rounded-lg font-semibold hover:bg-[#e54646] transition-all shadow text-sm w-full group"
                >
                  Voir le profil
                  <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Envie de travailler avec nous ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez les 100+ clients qui nous font confiance pour leurs projets web
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  )
}

