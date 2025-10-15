import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | EvolveTech',
  description: 'Politique de confidentialité et protection des données personnelles - EvolveTech',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Politique de Confidentialité</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-6">
                <strong>EvolveTech</strong> accorde une importance particulière à la protection de la vie privée 
                de ses utilisateurs et clients. La présente Politique de confidentialité a pour objet de vous 
                informer de la manière dont nous collectons, utilisons et protégeons vos données personnelles 
                lorsque vous naviguez sur notre site ou utilisez nos services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Données collectées</h2>
              <p>Nous pouvons être amenés à collecter les données personnelles suivantes :</p>
              <ul>
                <li>Informations d'identification (nom, prénom, adresse e-mail, numéro de téléphone)</li>
                <li>Informations relatives à vos préférences et vos interactions sur le site (pages visitées, temps passé sur le site, etc.)</li>
                <li>Informations nécessaires à la réalisation de nos prestations (détails de commande, informations de paiement, etc.)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Finalités du traitement</h2>
              <p>Les données personnelles collectées sont utilisées pour :</p>
              <ul>
                <li>Fournir et améliorer nos services (création de sites PrestaShop, Shopify, maintenance, etc.)</li>
                <li>Gérer la relation client et assurer le suivi de vos commandes</li>
                <li>Répondre à vos demandes d'information ou de support</li>
                <li>Personnaliser votre expérience sur notre site</li>
                <li>Effectuer des analyses statistiques afin d'améliorer notre offre</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Base légale du traitement</h2>
              <p>Le traitement de vos données personnelles repose sur :</p>
              <ul>
                <li>Votre consentement (lorsque vous vous inscrivez à une newsletter, par exemple)</li>
                <li>L'exécution d'un contrat (fourniture d'un service)</li>
                <li>Nos obligations légales (facturation, conservation de certaines données, etc.)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Partage des données</h2>
              <p>
                Vos données personnelles ne sont communiquées qu'aux personnes ou entités habilitées à en prendre connaissance. 
                Nous pouvons être amenés à partager certaines données avec :
              </p>
              <ul>
                <li>Des prestataires de services tiers (hébergeurs, outils d'analyses, etc.)</li>
                <li>Les autorités administratives ou judiciaires, sur demande</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Durée de conservation</h2>
              <p>
                Vos données personnelles sont conservées pendant la durée nécessaire à la réalisation des 
                finalités pour lesquelles elles ont été collectées. Certaines données peuvent être conservées 
                plus longtemps pour répondre à nos obligations légales, comptables ou fiscales.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul>
                <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> Vous pouvez corriger vos données</li>
                <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
                <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données dans un format structuré</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@evolvetech.fr">contact@evolvetech.fr</a>
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Sécurité</h2>
              <p>
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
                appropriées pour protéger vos données contre tout accès non autorisé, 
                modification, divulgation ou destruction.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Cookies</h2>
              <p>
                Notre site peut utiliser des cookies pour améliorer votre expérience de navigation. 
                Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti 
                avant de les accepter.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité 
                à tout moment. Les modifications seront publiées sur cette page avec une 
                nouvelle date de mise à jour.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité, 
                contactez-nous à :<br />
                <strong>Email :</strong> <a href="mailto:contact@evolvetech.fr">contact@evolvetech.fr</a><br />
                <strong>Téléphone :</strong> 06 46 69 21 20
              </p>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

