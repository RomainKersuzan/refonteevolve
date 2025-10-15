# EvolveTech - Refonte Site Web 360°

🚀 Nouvelle version du site EvolveTech positionnée comme **agence web 360°** spécialisée en e-commerce, développement web et solutions sur mesure.

## 🎯 À propos

Ce projet est une refonte complète du site EvolveTech avec :
- **Positionnement agence web 360°** (PrestaShop, Shopify, sites vitrines, e-commerce, design graphique, solutions sur mesure)
- **Design moderne et responsive** avec animations fluides
- **Pages SEO-optimisées** pour chaque expertise
- **Section réalisations** avec maquettes fictives
- **Architecture performante** avec Next.js 14 et TypeScript

## 📋 Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icons** : React Icons
- **Containerisation** : Docker + Docker Compose

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 20+ (recommandé)
- npm ou yarn
- Docker et Docker Compose (pour la version containerisée)

### Installation Locale (sans Docker)

1. **Cloner le projet**
```bash
cd refonteevolve
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

### Installation avec Docker 🐳

1. **Construire et démarrer les conteneurs**
```bash
docker-compose up --build
```

2. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

3. **Arrêter les conteneurs**
```bash
docker-compose down
```

## 📁 Structure du Projet

```
refonteevolve/
├── src/
│   ├── app/                    # Pages et routes (App Router)
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── layout.tsx         # Layout principal
│   │   ├── expertises/        # Pages d'expertise
│   │   │   ├── page.tsx       # Liste des expertises
│   │   │   ├── prestashop/    # Expertise PrestaShop
│   │   │   ├── shopify/       # Expertise Shopify
│   │   │   ├── sites-vitrines/ # Expertise Sites Vitrines
│   │   │   ├── e-commerce/    # Expertise E-commerce
│   │   │   ├── design-graphique/ # Expertise Design
│   │   │   └── solutions-sur-mesure/ # Expertise Solutions
│   │   ├── realisations/      # Portfolio de projets
│   │   ├── a-propos/          # Page à propos
│   │   └── contact/           # Formulaire de contact
│   └── components/            # Composants réutilisables
│       ├── Header.tsx         # Navigation
│       ├── Footer.tsx         # Pied de page
│       ├── ExpertiseCard.tsx  # Carte d'expertise
│       ├── TestimonialCard.tsx # Carte témoignage
│       ├── TeamMember.tsx     # Membre d'équipe
│       └── RealisationCard.tsx # Carte réalisation
├── public/                    # Fichiers statiques
│   └── images/               # Images du site
├── Dockerfile                 # Configuration Docker
├── docker-compose.yml         # Orchestration Docker
└── package.json              # Dépendances du projet
```

## 🎨 Fonctionnalités

### Pages Principales

- ✅ **Accueil** : Hero moderne, expertises, réalisations, équipe, témoignages
- ✅ **Expertises** : Pages dédiées pour chaque service (PrestaShop, Shopify, etc.)
- ✅ **Réalisations** : Portfolio avec 9+ projets fictifs détaillés
- ✅ **À propos** : Histoire, équipe, valeurs, parcours
- ✅ **Contact** : Formulaire complet avec validation

### Expertises Détaillées

1. **PrestaShop** - Création et optimisation de boutiques
2. **Shopify** - Développement de boutiques modernes
3. **Sites Vitrines** - Sites professionnels et élégants
4. **E-commerce** - Solutions e-commerce complètes
5. **Design Graphique** - Identité visuelle et création
6. **Solutions Sur Mesure** - Développement personnalisé

### Optimisations

- 🔍 **SEO** : Métadonnées optimisées pour chaque page
- ⚡ **Performance** : Images optimisées, lazy loading
- 📱 **Responsive** : Design adaptatif mobile-first
- ♿ **Accessibilité** : Standards WCAG respectés
- 🎭 **Animations** : Transitions fluides avec Framer Motion

## 🛠️ Commandes Disponibles

```bash
# Développement
npm run dev          # Démarrer en mode développement

# Production
npm run build        # Construire pour la production
npm start            # Démarrer en mode production

# Linting
npm run lint         # Vérifier le code

# Docker
docker-compose up    # Démarrer avec Docker
docker-compose down  # Arrêter les conteneurs
```

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.ts` :
- **Primary** : Bleu (#0ea5e9)
- **Secondary** : Violet (#a855f7)

### Contenu

- **Textes** : Modifiez directement dans les fichiers de pages (`src/app/*/page.tsx`)
- **Images** : Placez vos images dans `public/images/`
- **Équipe** : Modifiez les données dans `src/app/page.tsx` et `src/app/a-propos/page.tsx`

## 📧 Configuration du Formulaire

Le formulaire de contact dans `src/app/contact/page.tsx` est actuellement en mode "démo". Pour le connecter à un vrai backend :

1. Installez un service d'envoi d'emails (ex: SendGrid, Mailgun)
2. Créez un endpoint API dans `src/app/api/contact/route.ts`
3. Mettez à jour la fonction `handleSubmit` pour appeler votre API

## 🚀 Déploiement

### Vercel (Recommandé)

1. Poussez votre code sur GitHub
2. Connectez votre repo à Vercel
3. Déployez automatiquement

### Autre Hébergeur

```bash
npm run build
npm start
```

Le site sera accessible sur le port 3000.

## 📄 Licence

© 2024 EvolveTech. Tous droits réservés.

## 👥 Auteur

**Romain Kersuzan** - Fondateur EvolveTech
- Email : contact@evolvetech.fr
- Téléphone : 06 46 69 21 20

---

## 🆘 Support

Pour toute question ou assistance :
- 📧 Email : contact@evolvetech.fr
- 📱 Téléphone : 06 46 69 21 20

---

**Fait avec ❤️ par EvolveTech**

