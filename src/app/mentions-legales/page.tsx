import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales | EvolveTech',
  description: 'Mentions légales du site EvolveTech - Agence web 360°',
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Mentions Légales</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Éditeur du site</h2>
              <p>
                Le présent site est édité par : <strong>EVOLVETECH</strong><br />
                Forme juridique : Société par actions simplifiée (SAS)<br />
                <strong>SIREN :</strong> 933974073<br />
                <strong>Adresse :</strong> 14 sentier du potager, 92190 MEUDON, France<br />
                <strong>Téléphone :</strong> +33 6 46 69 21 20<br />
                <strong>E-mail :</strong> contact@evolvetech.fr<br />
                <strong>Président :</strong> Romain KERSUZAN
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Directeur de la publication</h2>
              <p>
                Le directeur de la publication est : <strong>Romain KERSUZAN</strong>, en qualité de Président de la société EVOLVETECH.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Hébergement du site</h2>
              <p>
                Le site est hébergé par : <strong>Hostinger</strong><br />
                Adresse : Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
                Site Web : <a href="https://www.hostinger.fr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">www.hostinger.fr</a>
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété 
                exclusive d'EvolveTech, sauf mention contraire. Toute reproduction, distribution, 
                modification, adaptation, retransmission ou publication de ces différents éléments 
                est strictement interdite sans l'accord exprès par écrit d'EvolveTech.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Données personnelles</h2>
              <p>
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et 
                au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un 
                droit d'accès, de rectification, de suppression et d'opposition aux données 
                personnelles vous concernant.
              </p>
              <p>
                Pour exercer ce droit, contactez-nous à : contact@evolvetech.fr
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookies</h2>
              <p>
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. 
                Vous pouvez configurer votre navigateur pour refuser les cookies.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Responsabilité</h2>
              <p>
                EvolveTech s'efforce d'assurer l'exactitude et la mise à jour des informations 
                diffusées sur ce site. Toutefois, EvolveTech ne peut garantir l'exactitude, 
                la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Liens externes</h2>
              <p>
                Le site peut contenir des liens vers d'autres sites. EVOLVETECH ne peut être tenue pour responsable des contenus, produits, services ou autres éléments disponibles sur ou à partir de ces sites tiers.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
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

