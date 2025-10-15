'use client'

import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { FaCheck, FaRocket, FaClock, FaEuroSign, FaStar, FaShieldAlt, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function SiteInternetPasCher() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = '/contact'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Schema.org JSON-LD pour le SEO */}
      <Script id="schema-offer" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Offer",
          "name": "Site Internet Professionnel",
          "description": "Création de site internet professionnel en 48 heures",
          "price": "499",
          "priceCurrency": "EUR",
          "seller": {
            "@type": "Organization",
            "name": "EvolveTech",
            "url": "https://evolvetech.fr"
          },
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31"
        })}
      </Script>

      <Script id="schema-service" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Création de site internet",
          "provider": {
            "@type": "Organization",
            "name": "EvolveTech",
            "telephone": "+33646692120",
            "url": "https://evolvetech.fr"
          },
          "areaServed": "FR",
          "offers": {
            "@type": "Offer",
            "price": "499",
            "priceCurrency": "EUR"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "100"
          }
        })}
      </Script>

    <div className="pt-0">
      {/* Hero Section - Ultra Optimisé SEO */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-4">
                  <span className="text-sm font-semibold">Offre exclusive</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Site Internet Professionnel à <span className="text-yellow-300">499€</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-100">
                  Créez votre site web professionnel en <strong className="text-white">48 heures</strong> seulement ! 
                  Qualité garantie, livraison express et prix imbattable.
                </p>
                
                {/* Key Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-lg">Livraison en <strong>48 heures</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-lg">Prix fixe <strong>499€ TTC</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-lg"><strong>2 retours</strong> inclus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-lg">Design moderne et responsive</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#commande" 
                    className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl text-center text-lg"
                  >
                    Commander maintenant →
                  </a>
                  <a 
                    href="tel:0646692120" 
                    className="px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all backdrop-blur-sm text-center flex items-center justify-center gap-2"
                  >
                    <FaPhone /> 06 46 69 21 20
                  </a>
                </div>
              </div>

              {/* Right Side - Trust Badges */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-yellow-300 mb-2">499€</div>
                  <div className="text-sm text-gray-200">Prix fixe tout compris</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                    <FaRocket className="text-yellow-300 text-xl" />
                    <span>Mise en ligne en 48h</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <FaStar className="text-yellow-300 text-xl" />
                    <span>100% satisfaction client</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <FaShieldAlt className="text-yellow-300 text-xl" />
                    <span>Garantie qualité</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20 text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-300 text-xl" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-200">Noté 5/5 par nos clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Qu'est-ce qui est inclus dans votre site à 499€ ?
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Un pack complet pour lancer votre présence en ligne rapidement
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Design moderne et professionnel',
                'Site responsive (mobile, tablette, desktop)',
                'Jusqu\'à 5 pages (Accueil, Services, À propos, Contact, etc.)',
                'Formulaire de contact fonctionnel',
                'Optimisation SEO de base',
                'Intégration Google Maps',
                'Hébergement 1 an OFFERT',
                'Nom de domaine 1 an OFFERT',
                'Certificat SSL (HTTPS) inclus',
                '2 révisions incluses',
                'Livraison en 48 heures',
                'Formation à l\'administration',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-gray-50 rounded-lg p-4"
                >
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Un processus simple et rapide en 4 étapes
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Commande', desc: 'Vous remplissez le formulaire avec vos besoins' },
                { step: '2', title: 'Brief', desc: 'Nous vous appelons pour affiner le projet (30 min)' },
                { step: '3', title: 'Création', desc: 'Nous créons votre site en moins de 48h' },
                { step: '4', title: 'Livraison', desc: 'Votre site est en ligne et fonctionnel !' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-4">0{item.step}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Pourquoi choisir notre offre à 499€ ?
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Un rapport qualité-prix imbattable sur le marché
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Concurrence */}
              <div className="bg-gray-100 rounded-2xl p-8 relative">
                <div className="text-center mb-6">
                  <div className="text-sm font-semibold text-gray-500 mb-2">Agences classiques</div>
                  <div className="text-4xl font-bold text-gray-700 mb-1">2000€+</div>
                  <div className="text-sm text-gray-500">Délai : 1-2 mois</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <FaCheck className="text-gray-400" />
                    <span className="text-sm">Design basique</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <FaCheck className="text-gray-400" />
                    <span className="text-sm">Nombreux allers-retours</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <FaCheck className="text-gray-400" />
                    <span className="text-sm">Délais longs</span>
                  </li>
                </ul>
              </div>

              {/* Notre Offre - Featured */}
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 relative transform scale-105 shadow-2xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm">
                  MEILLEURE OFFRE
                </div>
                <div className="text-center mb-6 mt-2">
                  <div className="text-sm font-semibold text-white/80 mb-2">Notre offre Express</div>
                  <div className="text-5xl font-bold text-white mb-1">499€</div>
                  <div className="text-sm text-white/80">Délai : 48 heures</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-white">
                    <FaCheck className="text-yellow-300" />
                    <span className="text-sm">Design moderne</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <FaCheck className="text-yellow-300" />
                    <span className="text-sm">2 retours inclus</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <FaCheck className="text-yellow-300" />
                    <span className="text-sm">Livraison express</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <FaCheck className="text-yellow-300" />
                    <span className="text-sm">Hébergement 1 an</span>
                  </li>
                </ul>
                <button 
                  onClick={() => document.getElementById('commande')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full mt-6 px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-300 transition-all"
                >
                  Je commande →
                </button>
              </div>

              {/* Autres */}
              <div className="bg-gray-100 rounded-2xl p-8 relative">
                <div className="text-center mb-6">
                  <div className="text-sm font-semibold text-gray-500 mb-2">Plateformes DIY</div>
                  <div className="text-4xl font-bold text-gray-700 mb-1">300€</div>
                  <div className="text-sm text-gray-500">+ abonnement mensuel</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <FaCheck className="text-gray-400" />
                    <span className="text-sm">Vous faites tout</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <FaCheck className="text-gray-400" />
                    <span className="text-sm">Design limité</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <FaCheck className="text-gray-400" />
                    <span className="text-sm">Coûts récurrents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Questions fréquentes sur notre offre site internet à 499€
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Pourquoi un site internet à 499€ est-il si abordable ?',
                  a: 'Nous avons optimisé notre processus de création pour vous offrir un site professionnel à un prix imbattable. Grâce à notre expérience de 100+ projets, nous utilisons des templates optimisés que nous personnalisons selon vos besoins.',
                },
                {
                  q: 'Comment puis-je avoir un site internet en 48 heures ?',
                  a: 'Notre équipe travaille en mode express dès réception de vos contenus (textes, images, logo). Nous avons perfectionné notre workflow pour livrer des sites de qualité en un temps record, sans compromis sur la qualité.',
                },
                {
                  q: 'Qu\'inclut exactement le forfait site internet pas cher à 499€ ?',
                  a: 'Votre site comprend : design responsive, jusqu\'à 5 pages, formulaire de contact, SEO de base, hébergement 1 an, nom de domaine 1 an, SSL, 2 révisions et formation. Tout ce dont vous avez besoin pour démarrer !',
                },
                {
                  q: 'Est-ce vraiment un site professionnel pour ce prix ?',
                  a: 'Absolument ! Nous créons des sites modernes, rapides et professionnels. Consultez nos 100+ avis 5 étoiles. La différence : nous limitons les révisions à 2 pour garder les coûts bas.',
                },
                {
                  q: 'Puis-je avoir un site e-commerce à 499€ ?',
                  a: 'L\'offre à 499€ concerne les sites vitrines (présentation). Pour un site e-commerce, comptez à partir de 1500€. Contactez-nous pour un devis personnalisé.',
                },
                {
                  q: 'Y a-t-il des frais cachés pour créer mon site internet pas cher ?',
                  a: 'Non, 499€ TTC est le prix final ! Inclus : création, hébergement 1 an et domaine 1 an. Après la première année, l\'hébergement est à 100€/an.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="commande" className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Commandez votre site internet à 499€
              </h2>
              <p className="text-xl text-gray-100">
                Livraison garantie en 48 heures ou remboursé !
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Nom et prénom *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                    placeholder="jean@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <FaClock className="text-yellow-600 text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Offre limitée !</h4>
                      <p className="text-sm text-gray-700">
                        Seulement <strong>5 places disponibles</strong> ce mois-ci pour garantir 
                        la livraison en 48h. Commandez maintenant !
                      </p>
                    </div>
                  </div>
                </div>

                  <button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-bold text-lg hover:from-primary-700 hover:to-secondary-700 transition-all transform hover:scale-105 shadow-xl"
                >
                  Commander mon site à 499€
                </button>

                <p className="text-center text-sm text-gray-500">
                  Paiement sécurisé • Garantie satisfait ou remboursé • Support 7j/7
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Ils nous ont fait confiance pour leur site internet
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Sites créés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">48h</div>
                <div className="text-sm text-gray-600">Délai moyen</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">5★</div>
                <div className="text-sm text-gray-600">Note moyenne</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-lg italic text-gray-700 mb-4">
                "J'ai eu mon site en 2 jours comme promis. Le résultat est top et le prix imbattable !"
              </p>
              <p className="font-semibold text-gray-900">- Sophie L., Entrepreneuse</p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à lancer votre site internet à 499€ ?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Plus que 5 places disponibles ce mois-ci !
          </p>
          <a 
            href="#commande"
            className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl text-lg"
          >
            Commander maintenant - 499€
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Ou appelez-nous : <a href="tel:0646692120" className="text-yellow-400 hover:underline">06 46 69 21 20</a>
          </p>
        </div>
      </section>
    </div>
    </>
  )
}

