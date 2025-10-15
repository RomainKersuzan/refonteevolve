import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | EvolveTech',
  description: 'Conditions générales de vente des services EvolveTech - Agence web 360°',
}

export default function CGVPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Conditions Générales de Vente</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-6">
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles 
                entre EvolveTech et ses clients pour la fourniture de services web.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Objet</h2>
              <p>
                Les présentes CGV ont pour objet de définir les droits et obligations des parties 
                dans le cadre de la vente de services de développement web, création de sites internet, 
                e-commerce, et solutions sur mesure proposés par EvolveTech.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Services proposés</h2>
              <p>EvolveTech propose les services suivants :</p>
              <ul>
                <li>Création de boutiques PrestaShop</li>
                <li>Création de boutiques Shopify</li>
                <li>Création de sites vitrines</li>
                <li>Développement de solutions e-commerce</li>
                <li>Design graphique et identité visuelle</li>
                <li>Développement de solutions sur mesure</li>
                <li>Maintenance et support technique</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Devis et commande</h2>
              <p>
                Toute prestation fait l'objet d'un devis détaillé préalable. Le devis est valable 
                pendant 30 jours à compter de sa date d'émission. La commande ne devient définitive 
                qu'après acceptation écrite du devis par le client et versement de l'acompte.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Tarifs et conditions de paiement</h2>
              <p>
                Les prix sont indiqués en euros HT. Un acompte de 30% à 50% est demandé à la 
                validation du devis. Le solde est payable à la livraison du projet.
              </p>
              <p>Modalités de paiement acceptées :</p>
              <ul>
                <li>Virement bancaire</li>
                <li>Chèque</li>
                <li>Carte bancaire (via solution de paiement sécurisée)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Délais de réalisation</h2>
              <p>
                Les délais de réalisation sont indiqués à titre indicatif dans le devis. 
                EvolveTech s'engage à respecter les délais convenus, sous réserve de la 
                fourniture en temps voulu des éléments nécessaires par le client.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Obligations du client</h2>
              <p>Le client s'engage à :</p>
              <ul>
                <li>Fournir tous les éléments nécessaires à la réalisation du projet</li>
                <li>Répondre aux demandes de validation dans les délais convenus</li>
                <li>Respecter les échéances de paiement</li>
                <li>Disposer des droits sur les contenus fournis (textes, images, etc.)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Propriété intellectuelle</h2>
              <p>
                Le transfert de propriété intellectuelle du site/application au client n'intervient 
                qu'après paiement intégral du prix. EvolveTech conserve les droits sur les 
                développements génériques et frameworks utilisés.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Maintenance et garantie</h2>
              <p>
                EvolveTech garantit le bon fonctionnement du site/application pendant 1 mois 
                après la livraison (garantie légale). Des contrats de maintenance peuvent être 
                souscrits séparément.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Responsabilité</h2>
              <p>
                EvolveTech ne peut être tenue responsable des dommages indirects subis par le client. 
                La responsabilité d'EvolveTech est limitée au montant des sommes effectivement 
                versées par le client.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Résiliation</h2>
              <p>
                En cas de manquement grave de l'une des parties à ses obligations, le contrat 
                pourra être résilié de plein droit 30 jours après l'envoi d'une mise en demeure 
                restée sans effet.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">11. Droit applicable et litiges</h2>
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, les parties 
                s'engagent à rechercher une solution amiable. À défaut, le litige sera porté devant 
                les tribunaux compétents.
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

