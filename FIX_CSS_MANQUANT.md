# 🔧 Fix CSS Manquant - Site sans styles

Le problème : Le site s'affiche sans CSS, juste le contenu HTML brut.

## Cause probable

Next.js en mode standalone a besoin de servir les fichiers statiques correctement. Le proxy Apache ne les passe pas bien.

## SOLUTION 1 : Vérifier le build (RECOMMANDÉ)

**SSH sur le serveur :**
```bash
cd /var/www/vhosts/evolvetech.fr/httpdocs
```

**Vérifiez que le dossier .next existe et est complet :**
```bash
ls -la .next/
ls -la .next/static/
```

**Si .next/static est vide ou manquant, rebuild :**
```bash
npm run build
```

**Redémarrez PM2 :**
```bash
pm2 restart evolvetech
pm2 logs evolvetech
```

---

## SOLUTION 2 : Configuration Apache (Proxy Assets)

Le problème c'est qu'Apache ne proxie pas les fichiers `/_next/static/`

**Dans Plesk > Apache & nginx Settings**, remplacez par :

```apache
ProxyPreserveHost On

# Proxy vers Next.js
ProxyPass /_next http://localhost:3000/_next
ProxyPassReverse /_next http://localhost:3000/_next

ProxyPass / http://localhost:3000/
ProxyPassReverse / http://localhost:3000/

<Proxy *>
    Order deny,allow
    Allow from all
</Proxy>
```

---

## SOLUTION 3 : Mode Standalone Next.js

**Modifiez `next.config.js` :**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  assetPrefix: undefined,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

**Puis rebuild :**
```bash
npm run build
pm2 restart evolvetech
```

---

## SOLUTION 4 : Vérifier les logs PM2

```bash
pm2 logs evolvetech --lines 50
```

Cherchez des erreurs de type :
- "Cannot find module"
- "ENOENT"
- "404 on /_next/static"

---

## SOLUTION 5 : Export statique (SI RIEN NE MARCHE)

Si vraiment rien ne fonctionne, on peut exporter en statique :

**Modifiez `next.config.js` :**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

**Build :**
```bash
npm run build
```

**Les fichiers seront dans `/out`**

**Copiez dans httpdocs :**
```bash
rm -rf /var/www/vhosts/evolvetech.fr/httpdocs/*
cp -r out/* /var/www/vhosts/evolvetech.fr/httpdocs/
```

**Pas besoin de PM2 avec l'export statique !**

---

## TEST RAPIDE

**Vérifiez que Next.js répond bien :**
```bash
curl http://localhost:3000
```

**Vérifiez qu'Apache proxie bien :**
```bash
curl http://localhost
# ou
curl https://evolvetech.fr
```

---

**Essayez SOLUTION 1 en premier (rebuild) !**

