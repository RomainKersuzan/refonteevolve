# 🚀 Guide de Démarrage Rapide - EvolveTech

Ce guide vous permet de démarrer avec le site EvolveTech en quelques minutes.

## ⚡ Installation Express (sans Docker)

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir dans le navigateur
# http://localhost:3000
```

C'est tout ! Votre site est maintenant accessible. 🎉

## 🐳 Installation avec Docker (Recommandé pour la production)

```bash
# 1. Démarrer avec Docker Compose
docker-compose up

# 2. Ouvrir dans le navigateur
# http://localhost:3000

# Pour arrêter :
# Ctrl+C puis
docker-compose down
```

## 📝 Personnalisation Rapide

### 1. Changer les couleurs

Éditez `tailwind.config.ts` :
```typescript
colors: {
  primary: {
    // Vos couleurs ici
  }
}
```

### 2. Modifier le contenu de l'accueil

Éditez `src/app/page.tsx`

### 3. Ajouter votre logo

Placez votre logo dans `public/images/` et mettez à jour le Header dans `src/components/Header.tsx`

### 4. Configurer les informations de contact

Mettez à jour dans :
- `src/app/contact/page.tsx` (formulaire)
- `src/components/Footer.tsx` (footer)

## 🎨 Structure des Pages

```
src/app/
├── page.tsx                    # 🏠 Accueil
├── expertises/                 # 💼 Services
│   ├── prestashop/
│   ├── shopify/
│   ├── sites-vitrines/
│   ├── e-commerce/
│   ├── design-graphique/
│   └── solutions-sur-mesure/
├── realisations/               # 🎯 Portfolio
├── a-propos/                   # ℹ️ À propos
└── contact/                    # 📧 Contact
```

## 🛠️ Commandes Utiles

```bash
npm run dev      # Développement
npm run build    # Build production
npm start        # Serveur production
npm run lint     # Vérifier le code
```

## 📦 Déploiement en 1 Clic

### Sur Vercel (Gratuit)

1. Push ton code sur GitHub
2. Va sur [vercel.com](https://vercel.com)
3. Import ton repo
4. Déploie ! 

C'est automatique, Vercel détecte Next.js et configure tout.

## 🆘 Problèmes Courants

### Le site ne démarre pas ?

```bash
# Nettoyer et réinstaller
rm -rf node_modules .next
npm install
npm run dev
```

### Port 3000 déjà utilisé ?

```bash
# Utiliser un autre port
PORT=3001 npm run dev
```

### Erreurs Docker ?

```bash
# Rebuild complet
docker-compose down
docker-compose up --build
```

## 📚 Ressources

- 📖 [README complet](./README.md)
- 🚀 [Guide de déploiement](./DEPLOYMENT.md)
- 🤝 [Guide de contribution](./CONTRIBUTING.md)

## 💡 Prochaines Étapes

1. ✅ Personnalise le contenu
2. ✅ Ajoute tes vraies images
3. ✅ Configure le formulaire de contact
4. ✅ Déploie sur Vercel
5. ✅ Configure ton domaine

## 📧 Besoin d'Aide ?

Contact : contact@evolvetech.fr

---

**Bon développement ! 🎉**

