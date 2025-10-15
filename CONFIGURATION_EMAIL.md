# Configuration des Emails - EvolveTech

## Formulaire de contact fonctionnel

Le formulaire de contact utilise maintenant une vraie API qui enregistre les demandes.

**Fichier API :** `src/app/api/contact/route.ts`

---

## Options d'envoi d'emails

### OPTION 1 : Resend (RECOMMANDÉ)

**Avantages :**
- Gratuit jusqu'à 3000 emails/mois
- Simple à configurer
- Fiable et rapide
- Support excellent

**Configuration :**

1. Créez un compte sur [resend.com](https://resend.com)
2. Vérifiez votre domaine (evolvetech.fr)
3. Créez une clé API
4. Ajoutez à `.env.local` :
```bash
RESEND_API_KEY=re_votre_clé_ici
```

5. Installez Resend :
```bash
npm install resend
```

6. Décommentez le code OPTION 1 dans `/src/app/api/contact/route.ts`

---

### OPTION 2 : SendGrid

**Avantages :**
- 100 emails/jour gratuits
- Très populaire
- Documentation complète

**Configuration :**

1. Créez un compte sur [sendgrid.com](https://sendgrid.com)
2. Créez une clé API
3. Vérifiez votre email expéditeur
4. Ajoutez à `.env.local` :
```bash
SENDGRID_API_KEY=SG.votre_clé_ici
```

5. Installez SendGrid :
```bash
npm install @sendgrid/mail
```

6. Décommentez le code OPTION 2 dans `/src/app/api/contact/route.ts`

---

### OPTION 3 : Nodemailer (SMTP)

**Avantages :**
- Utilise votre serveur email existant
- Pas de service tiers
- Gratuit

**Configuration :**

1. Obtenez les infos SMTP de votre hébergeur
2. Ajoutez à `.env.local` :
```bash
SMTP_HOST=mail.evolvetech.fr
SMTP_PORT=587
SMTP_USER=contact@evolvetech.fr
SMTP_PASS=votre_mot_de_passe
```

3. Installez Nodemailer :
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

4. Décommentez le code OPTION 3 dans `/src/app/api/contact/route.ts`

---

## État actuel

Pour l'instant, le formulaire :
- ✅ Valide les données
- ✅ Affiche un message de succès
- ✅ Log les demandes dans la console
- ⚠️ N'envoie PAS encore d'email (à configurer)

Les demandes sont loggées dans le terminal pour que vous puissiez les voir.

---

## Configuration recommandée pour production

**Étape 1 : Choisissez Resend (le plus simple)**
```bash
npm install resend
```

**Étape 2 : Créez `.env.local`**
```bash
RESEND_API_KEY=re_votre_clé
```

**Étape 3 : Décommentez le code dans `route.ts`**
Ligne 31-43 (OPTION 1)

**Étape 4 : Testez**
Remplissez le formulaire, vous recevrez l'email !

---

## Alternative simple : Mailto temporaire

Si vous voulez une solution ultra-simple pour commencer :

Dans `src/app/contact/page.tsx`, changez le bouton en :
```tsx
<a 
  href={`mailto:contact@evolvetech.fr?subject=Contact depuis le site&body=Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`}
  className="..."
>
  Envoyer
</a>
```

Ça ouvrira le client email du visiteur. Pas idéal mais ça marche.

---

## Test en local

**Terminal :**
Quand quelqu'un soumet le formulaire, vous verrez dans le terminal :
```
📧 Nouveau contact reçu:
Nom: Jean Dupont
Email: jean@example.com
...
```

---

## Prochaines étapes

1. Choisir un service d'email (Resend recommandé)
2. Créer un compte
3. Configurer les variables d'environnement
4. Décommenter le code correspondant
5. Tester !

**Contact si besoin d'aide pour la config.**

