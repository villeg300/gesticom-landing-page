#!/bin/bash

# Configuration
NODE_VERSION="18.18.0"

echo "📦 Préparation de l’environnement Node.js..."

# 1. Vérifier si nvm est installé
if ! command -v nvm &> /dev/null
then
    echo "🚀 Installation de NVM..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
else
    echo "✅ NVM est déjà installé."
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

# 2. Installer la bonne version de Node.js si elle n'existe pas
if ! nvm ls "$NODE_VERSION" | grep -q "$NODE_VERSION"; then
    echo "📥 Installation de Node.js v$NODE_VERSION..."
    nvm install "$NODE_VERSION"
fi

echo "🔁 Utilisation de Node.js v$NODE_VERSION..."
nvm use "$NODE_VERSION"
nvm alias default "$NODE_VERSION"

# 3. Nettoyer le cache npm
echo "🧹 Nettoyage du cache npm..."
npm cache clean --force

# 4. Définir le bon registre npm
echo "🔧 Configuration du registre npm..."
npm config set registry https://registry.npmjs.org/

# 5. Installer les dépendances du projet
echo "📦 Installation des dépendances npm..."
npm install --fetch-timeout=60000

echo "✅ Environnement prêt avec Node.js v$NODE_VERSION 🎉"

