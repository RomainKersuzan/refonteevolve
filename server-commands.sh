#!/bin/bash

# Script à exécuter SUR LE SERVEUR après avoir uploadé le fichier

echo "🚀 Déploiement EvolveTech..."

# Variables
SITE_DIR="/var/www/vhosts/evolvetech.fr"
ARCHIVE="/tmp/evolvetech-deploy.tar.gz"

# Sauvegarde ancien site
echo "📦 Sauvegarde de l'ancien site..."
cd $SITE_DIR
if [ -d "httpdocs" ]; then
    mv httpdocs httpdocs_old_$(date +%Y%m%d_%H%M%S)
    echo "✅ Ancien site sauvegardé"
fi

# Création nouveau dossier
mkdir -p httpdocs
cd httpdocs

# Extraction
echo "📂 Extraction des fichiers..."
tar -xzf $ARCHIVE
echo "✅ Fichiers extraits"

# Installation
echo "📦 Installation des dépendances..."
npm install --production
echo "✅ Dépendances installées"

# Build
echo "🏗️ Build du site..."
npm run build
echo "✅ Build terminé"

# Configuration PM2
echo "⚙️ Configuration PM2..."
pm2 delete evolvetech 2>/dev/null || true
pm2 start npm --name "evolvetech" -- start
pm2 save
echo "✅ PM2 configuré"

# Nettoyage
rm $ARCHIVE

echo ""
echo "✅ DÉPLOIEMENT TERMINÉ !"
echo "🌐 Votre site est en ligne sur evolvetech.fr"
echo ""

