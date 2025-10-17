import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'EvolveTech - Agence Web 360° | Création de sites e-commerce et sur mesure',
  description: 'EvolveTech, votre agence web 360°. Spécialistes PrestaShop, Shopify, sites vitrines, e-commerce et solutions sur mesure. Boostez votre présence digitale.',
  keywords: 'agence web, PrestaShop, Shopify, e-commerce, site vitrine, développement web, design graphique, solutions sur mesure',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'EvolveTech - Agence Web 360°',
    description: 'Création de sites e-commerce et solutions web sur mesure',
    url: 'https://evolvetech.fr',
    siteName: 'EvolveTech',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

