# Guide de Contribution - EvolveTech

Merci de votre intérêt pour contribuer au projet EvolveTech ! 🎉

## 🚀 Démarrage

1. **Fork** le projet
2. **Clonez** votre fork
3. **Créez une branche** pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
4. **Committez** vos changements (`git commit -m 'Add some AmazingFeature'`)
5. **Push** vers la branche (`git push origin feature/AmazingFeature`)
6. **Ouvrez une Pull Request**

## 📝 Standards de Code

### TypeScript

- Utilisez TypeScript pour tous les nouveaux fichiers
- Évitez les `any`, préférez les types explicites
- Utilisez les interfaces pour les props des composants

### React/Next.js

- Utilisez les composants fonctionnels avec hooks
- Préférez les Server Components par défaut
- Utilisez `'use client'` uniquement si nécessaire (interactions, hooks client-side)

### Style

- Utilisez Tailwind CSS pour le styling
- Suivez la convention des classes utilitaires
- Groupez les classes par catégorie (layout, spacing, colors, etc.)

### Naming

- **Composants** : PascalCase (`ExpertiseCard.tsx`)
- **Fichiers utilitaires** : camelCase (`formatDate.ts`)
- **Constantes** : UPPER_SNAKE_CASE (`API_URL`)

## 🧪 Tests

Avant de soumettre une PR :

```bash
npm run lint
npm run build
```

## 📦 Structure des Commits

Utilisez des messages de commit clairs :

```
feat: Ajoute nouvelle page expertise
fix: Corrige bug du formulaire de contact
docs: Met à jour le README
style: Améliore le design de la navigation
refactor: Réorganise les composants
```

## 🐛 Signaler un Bug

Ouvrez une issue avec :
- Description du bug
- Étapes pour reproduire
- Comportement attendu vs observé
- Screenshots si pertinent
- Environnement (OS, navigateur, version)

## 💡 Proposer une Fonctionnalité

Ouvrez une issue avec :
- Description de la fonctionnalité
- Cas d'usage
- Maquettes/wireframes si disponibles

## 📧 Contact

Pour toute question : contact@evolvetech.fr

---

Merci de contribuer à EvolveTech ! ❤️

