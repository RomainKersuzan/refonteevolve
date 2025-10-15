import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maintenance Site Web - Formules dès 49€/mois | EvolveTech',
  description: 'Services de maintenance professionnels pour votre site web. Sécurité, mises à jour, sauvegardes et support. Formules à partir de 49€/mois. Sans engagement.',
  keywords: 'maintenance site web, maintenance site internet, mise à jour site, sécurité site web, sauvegarde site, support technique site web, maintenance PrestaShop, maintenance Shopify',
  openGraph: {
    title: 'Maintenance Site Web Professionnelle dès 49€/mois',
    description: 'Gardez votre site sécurisé, rapide et à jour. Formules flexibles sans engagement.',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

