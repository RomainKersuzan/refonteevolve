import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expert SEO - Référencement Naturel Google | EvolveTech',
  description: 'Expert SEO pour booster votre visibilité sur Google. Audit, optimisation, netlinking et suivi. +250% de trafic en moyenne. Devis gratuit.',
  keywords: 'expert SEO, référencement naturel, SEO Google, audit SEO, consultant SEO, agence SEO, optimisation SEO, positionnement Google',
  openGraph: {
    title: 'Expert SEO - Boostez votre visibilité Google',
    description: 'Services SEO professionnels pour dominer Google. +250% de trafic organique.',
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

