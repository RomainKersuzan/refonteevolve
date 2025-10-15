@echo off
echo ======================================
echo   DEPLOIEMENT EVOLVETECH SUR SERVEUR
echo ======================================
echo.

echo Etape 1: Build du projet...
call npm run build
if %errorlevel% neq 0 (
    echo ERREUR: Le build a echoue
    pause
    exit /b 1
)
echo Build termine avec succes!
echo.

echo Etape 2: Creation de l'archive...
tar -czf evolvetech-deploy.tar.gz --exclude=node_modules --exclude=.next --exclude=.git --exclude=*.md .
echo Archive creee: evolvetech-deploy.tar.gz
echo.

echo Etape 3: Upload vers le serveur...
echo Commande a executer manuellement:
echo scp evolvetech-deploy.tar.gz root@193.203.191.237:/tmp/
echo.

echo Etape 4: Deploiement sur le serveur...
echo Connectez-vous en SSH et executez:
echo ssh root@193.203.191.237
echo.
echo Puis sur le serveur:
echo cd /home/evolvetech.fr
echo mv httpdocs httpdocs_old
echo mkdir httpdocs
echo cd httpdocs
echo tar -xzf /tmp/evolvetech-deploy.tar.gz
echo npm install --production
echo npm run build
echo pm2 restart evolvetech
echo.

pause

