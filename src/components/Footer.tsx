import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo-white.png" 
                alt="EvolveTech Logo" 
                width={140} 
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm mb-4">
              EvolveTech est une agence web 360° spécialisée dans le développement de solutions e-commerce et web sur mesure.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.malt.fr/profile/romainkersuzan" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center justify-center" aria-label="Malt">
                <Image src="/logo-malt.png" alt="Malt" width={24} height={24} className="h-6 w-auto" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/expertises" className="hover:text-primary-400 transition-colors">Nos services</Link></li>
              {/* TEMPORAIRE : Réalisations commentées */}
              {/* <li><Link href="/realisations" className="hover:text-primary-400 transition-colors">Nos réalisations</Link></li> */}
              <li><Link href="/a-propos" className="hover:text-primary-400 transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li><Link href="/expertises/prestashop" className="hover:text-primary-400 transition-colors">PrestaShop</Link></li>
              <li><Link href="/expertises/shopify" className="hover:text-primary-400 transition-colors">Shopify</Link></li>
              <li><Link href="/expertises/sites-vitrines" className="hover:text-primary-400 transition-colors">Sites vitrines</Link></li>
              <li><Link href="/expertises/e-commerce" className="hover:text-primary-400 transition-colors">E-commerce</Link></li>
              <li><Link href="/expertises/solutions-sur-mesure" className="hover:text-primary-400 transition-colors">Solutions sur mesure</Link></li>
              <li><Link href="/expertises/design-graphique" className="hover:text-primary-400 transition-colors">Design graphique</Link></li>
              <li><Link href="/expertises/seo" className="hover:text-primary-400 transition-colors">SEO</Link></li>
              <li><Link href="/maintenance" className="hover:text-primary-400 transition-colors">Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@evolvetech.fr" className="hover:text-primary-400 transition-colors">
                  contact@evolvetech.fr
                </a>
              </li>
              <li>
                <a href="tel:0646692120" className="hover:text-primary-400 transition-colors">
                  06 46 69 21 20
                </a>
              </li>
              <li>
                <span>France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} EvolveTech. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/mentions-legales" className="hover:text-primary-400 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-primary-400 transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/cgv" className="hover:text-primary-400 transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

