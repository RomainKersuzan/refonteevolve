@echo off
echo Nettoyage du cache Next.js...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul
if exist .next rmdir /s /q .next
echo Cache nettoye !
echo Redemarrage du serveur...
npm run dev

