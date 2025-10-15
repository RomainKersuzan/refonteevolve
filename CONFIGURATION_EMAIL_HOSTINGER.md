# Configuration Email avec Hostinger

## Informations SMTP Hostinger

Hostinger fournit un service email avec votre hébergement. Voici comment le configurer :

### Paramètres SMTP Hostinger

```
Serveur SMTP : smtp.hostinger.com
Port : 587 (ou 465 pour SSL)
Sécurité : STARTTLS (ou SSL)
Utilisateur : contact@evolvetech.fr (votre email complet)
Mot de passe : [Votre mot de passe email]
```

---

## Configuration en 5 étapes

### 1. Installer Nodemailer

```bash
npm install nodemailer
```

### 2. Créer le fichier `.env.local`

À la racine du projet, créez `.env.local` :

```bash
# Email Configuration - Hostinger
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_USER=contact@evolvetech.fr
SMTP_PASS=votre_mot_de_passe_email
SMTP_FROM=contact@evolvetech.fr
```

⚠️ **Important** : Remplacez `votre_mot_de_passe_email` par votre vrai mot de passe email Hostinger

### 3. Mettre à jour l'API

Ouvrez `/src/app/api/contact/route.ts` et décommentez la section OPTION 3 (Nodemailer).

Ou copiez-collez ce code complet :

```typescript
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, projectType, budget, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      )
    }

    // Configuration Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Contenu de l'email
    const emailContent = `
Nouveau message de contact - EvolveTech

Nom: ${name}
Email: ${email}
Téléphone: ${phone || 'Non renseigné'}
Entreprise: ${company || 'Non renseignée'}
Type de projet: ${projectType || 'Non renseigné'}
Budget: ${budget || 'Non renseigné'}

Message:
${message}

---
Envoyé depuis evolvetech.fr
    `.trim()

    // Envoi de l'email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'contact@evolvetech.fr', // Votre email
      subject: `Nouveau contact: ${name}`,
      text: emailContent,
      replyTo: email, // Pour répondre directement au client
    })

    console.log('📧 Email envoyé avec succès à contact@evolvetech.fr')

    return NextResponse.json({ 
      success: true,
      message: 'Message envoyé avec succès !' 
    })

  } catch (error) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}
```

### 4. Installer les types TypeScript

```bash
npm install --save-dev @types/nodemailer
```

### 5. Redémarrer le serveur

```bash
npm run dev
```

---

## Test

1. Allez sur http://localhost:3000/contact
2. Remplissez le formulaire
3. Soumettez
4. Vérifiez votre boîte mail contact@evolvetech.fr !

---

## Où trouver vos identifiants Hostinger ?

1. Connectez-vous à [Hostinger](https://www.hostinger.fr)
2. Allez dans **Emails** → **Gérer**
3. Votre email : **contact@evolvetech.fr**
4. Mot de passe : celui que vous avez défini

Si vous l'avez oublié, vous pouvez le réinitialiser depuis le panel Hostinger.

---

## Troubleshooting

### Erreur "Invalid login"
→ Vérifiez le mot de passe dans `.env.local`

### Erreur "Connection timeout"
→ Essayez le port 465 avec `secure: true`

### Email non reçu
→ Vérifiez les spams
→ Vérifiez que l'email contact@evolvetech.fr existe bien

---

## Email automatique au client (optionnel)

Pour envoyer un email de confirmation au client :

```typescript
// Après l'envoi du premier email, ajoutez :
await transporter.sendMail({
  from: 'contact@evolvetech.fr',
  to: email, // Email du client
  subject: 'Nous avons bien reçu votre message - EvolveTech',
  text: `Bonjour ${name},

Merci pour votre message.

Nous avons bien reçu votre demande et nous vous répondrons sous 24 heures.

À très bientôt,
L'équipe EvolveTech

---
contact@evolvetech.fr
06 46 69 21 20
evolvetech.fr
  `,
})
```

---

**C'est tout ! Vos emails fonctionneront parfaitement avec Hostinger !** 📨

