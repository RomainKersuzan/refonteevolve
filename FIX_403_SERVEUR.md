# 🔧 Fix Erreur 403 Forbidden

L'erreur 403 signifie qu'Apache essaie de servir les fichiers statiques au lieu de l'application Next.js.

## Solution : Configurer Apache pour proxyer vers Node.js

### ÉTAPE 1 : Vérifiez que PM2 tourne

**SSH sur le serveur :**
```bash
ssh root@193.203.191.237
```

**Vérifiez PM2 :**
```bash
pm2 list
pm2 logs evolvetech
```

L'app devrait tourner sur le port 3000.

---

### ÉTAPE 2 : Configuration Apache

**Sur le serveur, éditez le fichier de configuration :**

```bash
nano /var/www/vhosts/evolvetech.fr/conf/vhost.conf
```

**Ajoutez AVANT la balise `</VirtualHost>` :**

```apache
# Proxy vers l'application Next.js
ProxyPreserveHost On
ProxyPass / http://localhost:3000/
ProxyPassReverse / http://localhost:3000/

# Headers
RequestHeader set X-Forwarded-Proto "https"
RequestHeader set X-Forwarded-Port "443"
```

**Sauvegardez** : Ctrl+X, puis Y, puis Entrée

---

### ÉTAPE 3 : Activer les modules Apache

```bash
a2enmod proxy
a2enmod proxy_http
a2enmod headers
```

---

### ÉTAPE 4 : Redémarrer Apache

```bash
/usr/local/psa/admin/bin/httpdmgr --reconfigure-domain evolvetech.fr
systemctl restart apache2
# ou
service apache2 restart
```

---

### ÉTAPE 5 : Vérifier

Allez sur https://evolvetech.fr

Ça devrait fonctionner ! 🎉

---

## ALTERNATIVE : .htaccess

Si vous ne pouvez pas modifier vhost.conf, créez un fichier `.htaccess` :

```bash
cd /var/www/vhosts/evolvetech.fr/httpdocs
nano .htaccess
```

**Contenu :**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
</IfModule>
```

---

## Vérifications

**1. PM2 tourne ?**
```bash
pm2 list
```
Devrait afficher "evolvetech" avec status "online"

**2. Port 3000 écoute ?**
```bash
netstat -tlnp | grep 3000
```
ou
```bash
curl http://localhost:3000
```

**3. Apache tourne ?**
```bash
systemctl status apache2
```

---

## Si ça ne marche toujours pas

**Option Plesk (le plus simple) :**

1. Connectez-vous à Plesk : https://evolvetech.fr:8443
2. Allez dans **Domaines** > **evolvetech.fr**
3. Cliquez sur **Apache & nginx Settings**
4. Dans "Additional Apache directives", ajoutez :
```
ProxyPass / http://localhost:3000/
ProxyPassReverse / http://localhost:3000/
```
5. Cliquez **OK**

---

**Le site devrait maintenant être accessible !** 🚀

