import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site Internet Pas Cher 499€ - Livraison 48h | Création Site Web Pro',
  description: 'Créez votre site internet professionnel à 499€ TTC. Livraison garantie en 48 heures, design moderne, hébergement 1 an offert. 100+ sites créés, 100% satisfaits. Site vitrine, responsive, SEO optimisé.',
  keywords: 'site internet pas cher, création site web 499 euros, site internet rapide, site web 48 heures, site internet professionnel petit prix, créer un site pas cher, site vitrine économique, site internet PME, création site rapide, site web livraison express',
  openGraph: {
    title: 'Site Internet à 499€ - Livraison en 48h Garantie',
    description: 'Créez votre site professionnel en 48h pour seulement 499€. Qualité garantie, hébergement inclus.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://evolvetech.fr/site-internet-pas-cher',
  },
  alternates: {
    canonical: 'https://evolvetech.fr/site-internet-pas-cher',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

