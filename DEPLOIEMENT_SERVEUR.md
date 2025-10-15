# Déploiement sur Serveur Hostinger

## Informations serveur
- **IP** : 193.203.191.237
- **User** : root
- **Dossier site** : httpdocs

---

## Déploiement manuel (cette fois-ci)

### 1. Préparer le build local

```bash
# Dans votre projet local
npm run build
```

### 2. Se connecter au serveur

```bash
ssh root@193.203.191.237
```

### 3. Sauvegarder l'ancien site

```bash
cd /home/evolvetech.fr
mv httpdocs httpdocs_old
mkdir httpdocs
```

### 4. Uploader les fichiers

**Depuis votre PC (nouveau terminal) :**

```bash
# Option A : Avec SCP
scp -r * root@193.203.191.237:/home/evolvetech.fr/httpdocs/

# Option B : Avec rsync (plus rapide)
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' ./ root@193.203.191.237:/home/evolvetech.fr/httpdocs/
```

### 5. Installer et démarrer sur le serveur

```bash
# Sur le serveur
cd /home/evolvetech.fr/httpdocs
npm install --production
npm run build

# Installer PM2 (gestionnaire de processus)
npm install -g pm2

# Démarrer l'application
pm2 start npm --name "evolvetech" -- start
pm2 save
pm2 startup
```

---

## Configuration Nginx (si besoin)

Créez `/etc/nginx/sites-available/evolvetech.fr` :

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
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activez :
```bash
ln -s /etc/nginx/sites-available/evolvetech.fr /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

---

## MÉTHODE RECOMMANDÉE : Git + Déploiement automatique

### 1. Initialiser Git localement

```bash
# Dans votre projet local
git init
git add .
git commit -m "Initial commit - Refonte EvolveTech"
```

### 2. Créer un repo GitHub

1. Allez sur [github.com](https://github.com)
2. Créez un nouveau repository "refonteevolve"
3. **Private** (recommandé)

### 3. Pusher le code

```bash
git remote add origin https://github.com/votre-username/refonteevolve.git
git branch -M main
git push -u origin main
```

### 4. Déployer via Git sur le serveur

```bash
# Sur le serveur
cd /home/evolvetech.fr
git clone https://github.com/votre-username/refonteevolve.git httpdocs_new
cd httpdocs_new
npm install
npm run build

# Basculer
cd ..
mv httpdocs httpdocs_old
mv httpdocs_new httpdocs

# Démarrer
cd httpdocs
pm2 start npm --name "evolvetech" -- start
pm2 save
```

### 5. Futurs déploiements (ULTRA SIMPLE)

```bash
# Sur le serveur
cd /home/evolvetech.fr/httpdocs
git pull
npm install
npm run build
pm2 restart evolvetech
```

---

## Script de déploiement automatique

Créez `deploy.sh` :

```bash
#!/bin/bash
echo "🚀 Déploiement EvolveTech..."

cd /home/evolvetech.fr/httpdocs
git pull origin main
npm install --production
npm run build
pm2 restart evolvetech

echo "✅ Déploiement terminé !"
```

Rendez-le exécutable :
```bash
chmod +x deploy.sh
```

Ensuite, pour déployer :
```bash
./deploy.sh
```

---

## Variables d'environnement production

Sur le serveur, créez `/home/evolvetech.fr/httpdocs/.env.production` :

```bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://evolvetech.fr

# Email Hostinger
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_USER=contact@evolvetech.fr
SMTP_PASS=votre_mot_de_passe_email
SMTP_FROM=contact@evolvetech.fr
```

---

## Checklist avant déploiement

- [ ] Build fonctionne en local (`npm run build`)
- [ ] Variables d'env configurées
- [ ] Git initialisé
- [ ] Code pushé sur GitHub
- [ ] Sauvegarde ancien site (httpdocs_old)
- [ ] PM2 installé sur serveur
- [ ] Nginx configuré
- [ ] SSL activé (certbot)

---

## Commandes utiles PM2

```bash
pm2 list                  # Voir les apps
pm2 logs evolvetech       # Voir les logs
pm2 restart evolvetech    # Redémarrer
pm2 stop evolvetech       # Arrêter
pm2 delete evolvetech     # Supprimer
```

---

**Besoin d'aide pour le déploiement ? Dites-moi et je vous guide étape par étape !** 🚀

