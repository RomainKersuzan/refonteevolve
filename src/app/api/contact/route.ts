import { NextResponse } from 'next/server'

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

    // Email de notification à vous
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

    console.log('📧 Nouveau contact reçu:')
    console.log(emailContent)

    // TODO: Configurez votre service d'envoi d'emails ici
    // Options disponibles :
    
    // OPTION 1: Resend (Recommandé - Gratuit jusqu'à 3000 emails/mois)
    // const response = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'contact@evolvetech.fr',
    //     to: 'contact@evolvetech.fr',
    //     subject: `Nouveau contact: ${name}`,
    //     text: emailContent,
    //   }),
    // })

    // OPTION 2: SendGrid
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // await sgMail.send({
    //   to: 'contact@evolvetech.fr',
    //   from: 'contact@evolvetech.fr',
    //   subject: `Nouveau contact: ${name}`,
    //   text: emailContent,
    // })

    // OPTION 3: Nodemailer (SMTP)
    // const nodemailer = require('nodemailer')
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // })
    // await transporter.sendMail({
    //   from: 'contact@evolvetech.fr',
    //   to: 'contact@evolvetech.fr',
    //   subject: `Nouveau contact: ${name}`,
    //   text: emailContent,
    // })

    // Pour l'instant, on simule l'envoi (en production, décommentez une option ci-dessus)
    
    return NextResponse.json({ 
      success: true,
      message: 'Message reçu ! Nous vous répondrons sous 24h.' 
    })

  } catch (error) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}

