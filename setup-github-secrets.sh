#!/bin/bash

# GitHub Actions Secrets Setup Helper
# Este script te ayuda a configurar los secrets necesarios en GitHub

echo "🔧 GitHub Actions - Configuración de Secrets"
echo "=============================================="
echo ""
echo "Este script te guiará para obtener los valores que necesitas"
echo "agregar como Secrets en GitHub."
echo ""

# SSH Private Key
echo "📝 1. SSH_PRIVATE_KEY"
echo "-------------------"
echo "Tu llave privada SSH (copia TODO incluyendo BEGIN y END):"
echo ""
if [ -f ~/.ssh/id_ed25519 ]; then
    cat ~/.ssh/id_ed25519
    echo ""
else
    echo "⚠️  No se encontró ~/.ssh/id_ed25519"
    echo "Ejecuta: ssh-keygen -t ed25519 -C 'deploy@okmaya'"
fi
echo ""
read -p "Presiona ENTER para continuar..."
echo ""

# SSH Host
echo "📝 2. SSH_HOST"
echo "-------------"
SERVER_IP=$(hostname -I | awk '{print $1}')
echo "IP del servidor actual: $SERVER_IP"
echo ""
read -p "Presiona ENTER para continuar..."
echo ""

# SSH User
echo "📝 3. SSH_USER"
echo "-------------"
CURRENT_USER=$(whoami)
echo "Usuario actual: $CURRENT_USER"
echo "(Recomendado: root para evitar problemas de permisos)"
echo ""
read -p "Presiona ENTER para continuar..."
echo ""

# SSH Port
echo "📝 4. SSH_PORT"
echo "-------------"
echo "Puerto SSH: 22 (por defecto)"
echo ""
read -p "Presiona ENTER para continuar..."
echo ""

# Deploy Path
echo "📝 5. DEPLOY_PATH"
echo "----------------"
CURRENT_PATH=$(pwd)
echo "Ruta actual del proyecto: $CURRENT_PATH"
echo ""
read -p "Presiona ENTER para continuar..."
echo ""

# Summary
echo ""
echo "📋 RESUMEN DE SECRETS PARA GITHUB"
echo "=================================="
echo ""
echo "Agrega estos valores en:"
echo "GitHub → Settings → Secrets and variables → Actions"
echo ""
echo "SSH_PRIVATE_KEY:"
if [ -f ~/.ssh/id_ed25519 ]; then
    echo "(Ver arriba - TODO el contenido del archivo)"
else
    echo "⚠️  GENERAR PRIMERO"
fi
echo ""
echo "SSH_HOST: $SERVER_IP"
echo "SSH_USER: $CURRENT_USER"
echo "SSH_PORT: 22"
echo "DEPLOY_PATH: $CURRENT_PATH"
echo ""
echo "=================================="
echo "✅ Configuración lista para copiar a GitHub!"
echo ""

# Verificar authorized_keys
echo "🔍 Verificando configuración SSH..."
if [ -f ~/.ssh/id_ed25519.pub ]; then
    if grep -q "$(cat ~/.ssh/id_ed25519.pub)" ~/.ssh/authorized_keys 2>/dev/null; then
        echo "✅ Llave pública ya está en authorized_keys"
    else
        echo "⚠️  Agregando llave pública a authorized_keys..."
        cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys
        chmod 600 ~/.ssh/authorized_keys
        echo "✅ Llave agregada correctamente"
    fi
else
    echo "⚠️  No se encontró llave pública"
fi
echo ""

# Verificar permisos sudo
echo "🔍 Verificando permisos sudo..."
if sudo -n true 2>/dev/null; then
    echo "✅ Usuario tiene permisos sudo"
else
    echo "⚠️  Puede que necesites configurar sudo sin contraseña"
    echo "   Ver GITHUB_ACTIONS_SETUP.md para instrucciones"
fi
echo ""

echo "📖 Lee el archivo GITHUB_ACTIONS_SETUP.md para más detalles"
echo "🚀 ¡Listo para configurar GitHub Actions!"
