# 🚀 Guide de Déploiement Rapide

## MÉTHODE LA PLUS SIMPLE (Recommandée)

### Sur votre PC Windows :

**1. Buildez le projet :**
```bash
npm run build
```

**2. Créez l'archive :**
```bash
tar -czf evolvetech-deploy.tar.gz --exclude=node_modules --exclude=.next --exclude=.git .
```

**3. Uploadez sur le serveur :**
```bash
scp evolvetech-deploy.tar.gz root@193.203.191.237:/tmp/
```
(Entrez votre mot de passe serveur quand demandé)

**4. Connectez-vous au serveur :**
```bash
ssh root@193.203.191.237
```
(Entrez votre mot de passe serveur quand demandé)

**5. Sur le serveur, exécutez :**
```bash
cd /var/www/vhosts/evolvetech.fr
mv httpdocs httpdocs_old
mkdir httpdocs
cd httpdocs
tar -xzf /tmp/evolvetech-deploy.tar.gz
npm install --production
npm run build
pm2 start npm --name "evolvetech" -- start
pm2 save
```

**C'est tout ! Votre site est en ligne !** 🎉

---

## VÉRIFICATIONS

**Sur le serveur, vérifiez que ça tourne :**
```bash
pm2 list
pm2 logs evolvetech
```

**Testez dans le navigateur :**
```
http://193.203.191.237:3000
```

Si ça marche, configurez Nginx pour pointer evolvetech.fr vers le port 3000.

---

## FUTURS DÉPLOIEMENTS (avec Git)

### 1. Créez un repo GitHub

1. Allez sur github.com
2. Créez "refonteevolve" (private)
3. Copiez l'URL du repo

### 2. Liez votre projet local

```bash
git remote add origin https://github.com/VOTRE_USERNAME/refonteevolve.git
git branch -M main
git push -u origin main
```

### 3. Sur le serveur, clonez

```bash
cd /var/www/vhosts/evolvetech.fr
git clone https://github.com/VOTRE_USERNAME/refonteevolve.git httpdocs_new
cd httpdocs_new
npm install
npm run build
pm2 start npm --name "evolvetech" -- start
```

### 4. Futurs updates (ULTRA SIMPLE)

Sur votre PC :
```bash
git add .
git commit -m "Update"
git push
```

Sur le serveur :
```bash
cd /var/www/vhosts/evolvetech.fr/httpdocs
git pull
npm install
npm run build
pm2 restart evolvetech
```

---

## COMMANDES UTILES

```bash
pm2 list              # Voir les apps
pm2 logs evolvetech   # Logs en temps réel
pm2 restart evolvetech # Redémarrer
pm2 stop evolvetech   # Arrêter
```

---

**Besoin d'aide ? Je suis là !** 😊

