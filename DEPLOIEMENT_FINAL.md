# 🎉 DÉPLOIEMENT FINAL - Méthode Git (LA PLUS SIMPLE)

Votre code est maintenant sur GitHub : https://github.com/RomainKersuzan/refonteevolve

## ✅ CE QUI EST FAIT :
- Code sur GitHub
- Archive créée localement

---

## 🚀 DÉPLOIEMENT EN 3 ÉTAPES

### ÉTAPE 1 : Connectez-vous au serveur

**Ouvrez PowerShell et exécutez :**
```bash
ssh root@193.203.191.237
```

**Mot de passe :** `BMXouf47.Romking`

---

### ÉTAPE 2 : Clonez depuis GitHub

**Sur le serveur, copiez-collez TOUT CE BLOC :**

```bash
cd /var/www/vhosts/evolvetech.fr && \
mv httpdocs httpdocs_old_$(date +%Y%m%d_%H%M%S) && \
git clone https://github.com/RomainKersuzan/refonteevolve.git httpdocs && \
cd httpdocs && \
npm install --production && \
npm run build && \
pm2 delete evolvetech 2>/dev/null || true && \
pm2 start npm --name "evolvetech" -- start && \
pm2 save && \
pm2 list && \
echo "✅ SITE DÉPLOYÉ AVEC SUCCÈS !"
```

**Attendez 5-10 minutes** que tout s'installe et compile.

---

### ÉTAPE 3 : Vérification

**Vérifiez que ça tourne :**
```bash
pm2 logs evolvetech
```

**Testez dans le navigateur :**
```
http://evolvetech.fr
```

---

## 🔄 FUTURS DÉPLOIEMENTS (30 secondes)

### Sur votre PC :
```bash
git add .
git commit -m "Mise à jour"
git push
```

### Sur le serveur :
```bash
cd /var/www/vhosts/evolvetech.fr/httpdocs
git pull
npm install
npm run build
pm2 restart evolvetech
```

C'est tout ! 🎉

---

## ⚙️ Configuration Post-Déploiement

### 1. Variables d'environnement email

Sur le serveur, créez `.env.production` :
```bash
cd /var/www/vhosts/evolvetech.fr/httpdocs
nano .env.production
```

Ajoutez :
```
NODE_ENV=production
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_USER=contact@evolvetech.fr
SMTP_PASS=votre_mot_de_passe_email
SMTP_FROM=contact@evolvetech.fr
```

Sauvegardez (Ctrl+X, Y, Enter)

Redémarrez :
```bash
pm2 restart evolvetech
```

### 2. Configuration Nginx (si besoin)

Si le site n'est pas accessible sur evolvetech.fr, vérifiez Nginx :

```bash
nginx -t
systemctl status nginx
```

---

## 📞 Support

Si problème :
```bash
pm2 logs evolvetech  # Voir les erreurs
pm2 restart evolvetech  # Redémarrer
```

---

**Votre site est prêt à être déployé ! Exécutez juste les commandes de l'ÉTAPE 2 !** 🚀

