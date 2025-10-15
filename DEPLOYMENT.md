# Guide de Déploiement - EvolveTech

Ce guide vous explique comment déployer votre site EvolveTech sur différentes plateformes.

## 📦 Préparation

Avant de déployer, assurez-vous que :
- ✅ Toutes les dépendances sont installées
- ✅ Le build fonctionne en local (`npm run build`)
- ✅ Les variables d'environnement sont configurées
- ✅ Les images sont optimisées

## 🚀 Déploiement sur Vercel (Recommandé)

Vercel est la plateforme créée par les développeurs de Next.js. C'est la solution la plus simple et optimale.

### Étapes :

1. **Créer un compte sur [Vercel](https://vercel.com)**

2. **Installer Vercel CLI** (optionnel)
```bash
npm install -g vercel
```

3. **Déployer depuis votre terminal**
```bash
vercel
```

4. **Ou déployer via GitHub**
   - Poussez votre code sur GitHub
   - Connectez votre repo à Vercel
   - Vercel déploiera automatiquement à chaque push

### Configuration Vercel

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## 🐳 Déploiement Docker

### Sur un VPS (OVH, DigitalOcean, etc.)

1. **Connectez-vous à votre serveur**
```bash
ssh user@your-server-ip
```

2. **Clonez votre projet**
```bash
git clone <your-repo-url>
cd refonteevolve
```

3. **Construisez et lancez avec Docker**
```bash
docker-compose up -d --build
```

4. **Configurez Nginx (proxy inverse)**

Créez `/etc/nginx/sites-available/evolvetech` :
```nginx
server {
    listen 80;
    server_name evolvetech.fr www.evolvetech.fr;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **Activez le site et SSL**
```bash
sudo ln -s /etc/nginx/sites-available/evolvetech /etc/nginx/sites-enabled/
sudo certbot --nginx -d evolvetech.fr -d www.evolvetech.fr
sudo nginx -t
sudo systemctl reload nginx
```

## ☁️ Déploiement sur Netlify

1. **Installer Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build du projet**
```bash
npm run build
```

3. **Déployer**
```bash
netlify deploy --prod
```

### Configuration Netlify

Créez `netlify.toml` :
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🎯 Déploiement sur un hébergement classique

### Avec Node.js

1. **Build du projet**
```bash
npm run build
```

2. **Installer les dépendances de production**
```bash
npm ci --only=production
```

3. **Démarrer avec PM2** (gestionnaire de processus)
```bash
npm install -g pm2
pm2 start npm --name "evolvetech" -- start
pm2 save
pm2 startup
```

### Configuration PM2

Créez `ecosystem.config.js` :
```javascript
module.exports = {
  apps: [{
    name: 'evolvetech',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

Puis :
```bash
pm2 start ecosystem.config.js
```

## 🔐 Configuration SSL (HTTPS)

### Avec Certbot (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d evolvetech.fr -d www.evolvetech.fr
```

Le certificat se renouvellera automatiquement.

## 📊 Monitoring et Maintenance

### Vérifier les logs Docker
```bash
docker-compose logs -f
```

### Vérifier les logs PM2
```bash
pm2 logs evolvetech
```

### Mettre à jour le site
```bash
git pull origin main
npm install
npm run build
pm2 restart evolvetech
# ou avec Docker
docker-compose up -d --build
```

## 🌍 Variables d'environnement en production

Créez un fichier `.env.production` :
```bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://evolvetech.fr
```

## ⚡ Optimisations Performance

1. **CDN** : Utilisez Cloudflare pour le cache et la protection
2. **Images** : Optimisez toutes les images (WebP, compression)
3. **Cache** : Configurez le cache HTTP approprié
4. **Compression** : Activez Gzip/Brotli sur votre serveur

### Configuration Cloudflare

- Cache Everything
- Auto Minify (CSS, JS, HTML)
- Brotli activé
- HTTP/3 activé

## 🔄 CI/CD avec GitHub Actions

Créez `.github/workflows/deploy.yml` :
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📝 Checklist de Déploiement

- [ ] Tests locaux réussis
- [ ] Build fonctionne sans erreurs
- [ ] Variables d'environnement configurées
- [ ] Domaine configuré et pointé
- [ ] SSL/HTTPS activé
- [ ] Redirections HTTP → HTTPS
- [ ] Analytics installés (Google Analytics, etc.)
- [ ] Sitemap.xml configuré
- [ ] robots.txt configuré
- [ ] Monitoring activé
- [ ] Backup automatique configuré

## 🆘 Dépannage

### Le site ne démarre pas
```bash
# Vérifier les logs
docker-compose logs
# ou
pm2 logs

# Vérifier le port
netstat -tulpn | grep 3000
```

### Erreurs de build
```bash
# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run build
```

### Problèmes de mémoire
```bash
# Augmenter la mémoire Node.js
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

---

**Besoin d'aide ?** Contactez contact@evolvetech.fr

