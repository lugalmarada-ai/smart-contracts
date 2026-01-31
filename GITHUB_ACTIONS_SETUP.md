# GitHub Actions Deployment Guide

## 🚀 Configuración de GitHub Actions

Este proyecto incluye un workflow de GitHub Actions que automáticamente construye y despliega la aplicación en tu servidor de producción.

## 📋 Secrets Requeridos en GitHub

Debes configurar los siguientes **Secrets** en tu repositorio de GitHub:

Ve a: `Settings` → `Secrets and variables` → `Actions` → `New repository secret`

### Secrets Necesarios:

| Secret Name | Descripción | Ejemplo |
|------------|-------------|---------|
| `SSH_PRIVATE_KEY` | Tu llave privada SSH (ed25519) completa | Contenido del archivo `id_ed25519` |
| `SSH_HOST` | IP o dominio de tu servidor | `123.45.67.89` o `example.com` |
| `SSH_USER` | Usuario SSH (usualmente root) | `root` |
| `SSH_PORT` | Puerto SSH (por defecto 22) | `22` |
| `DEPLOY_PATH` | Ruta completa en el servidor | `/var/www/html/okmaya` |

### 🔑 Cómo obtener la llave privada:

```bash
# En tu servidor, lee el contenido de la llave privada
cat ~/.ssh/id_ed25519
```

**IMPORTANTE:** Copia TODO el contenido, incluyendo las líneas:
```
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

## 📝 Configuración Paso a Paso

### 1. Verificar llave pública en el servidor

```bash
# Asegúrate de que la llave pública está en authorized_keys
cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### 2. Agregar Secrets en GitHub

1. Ve a tu repositorio en GitHub
2. Click en **Settings** → **Secrets and variables** → **Actions**
3. Click en **New repository secret**
4. Agrega cada uno de los secrets listados arriba

### 3. Configurar permisos sudo (si es necesario)

Si tu usuario SSH no es `root`, necesitas configurar permisos sudo sin contraseña:

```bash
# Edita el archivo sudoers
sudo visudo

# Agrega esta línea (reemplaza 'tu_usuario' con tu usuario real)
tu_usuario ALL=(ALL) NOPASSWD: /usr/bin/chown, /usr/bin/chmod, /usr/bin/systemctl
```

## 🎯 Funcionamiento del Workflow

El workflow se ejecuta automáticamente cuando:
- Haces `push` a la rama `main`
- Lo ejecutas manualmente desde GitHub Actions

### Proceso de Deployment:

1. **Checkout**: Descarga el código del repositorio
2. **Setup Node.js**: Configura Node.js v20
3. **Install**: Ejecuta `npm ci` para instalar dependencias
4. **Build**: Ejecuta `npm run build` (genera la carpeta `out/`)
5. **Deploy**: Copia los archivos estáticos al servidor vía SCP
6. **Permissions**: Establece permisos correctos (`www-data:www-data`)
7. **Restart**: Reinicia Nginx para aplicar cambios

## 🔄 Ejecutar Deployment Manual

Puedes ejecutar el deployment manualmente desde GitHub:

1. Ve a tu repositorio
2. Click en **Actions**
3. Selecciona **Deploy to Production**
4. Click en **Run workflow** → **Run workflow**

## 🐛 Troubleshooting

### Error: "Permission denied (publickey)"
- Verifica que la llave privada esté completa en GitHub Secrets
- Asegúrate de que la llave pública esté en `~/.ssh/authorized_keys`

### Error: "sudo: no tty present"
- Configura permisos sudo sin contraseña (ver paso 3)

### Build falla
- Verifica que todas las dependencias estén en `package.json`
- Comprueba que no haya errores de TypeScript/ESLint

## 📂 Estructura de Archivos

```
.github/
└── workflows/
    └── deploy.yml    # Workflow de deployment
```

## 🔐 Seguridad

- ✅ Las llaves SSH nunca se exponen en logs
- ✅ La llave privada se elimina después del deployment
- ✅ Usa secrets encriptados de GitHub
- ✅ Solo se ejecuta desde la rama `main`

## 📊 Monitoreo

Puedes ver el progreso del deployment en:
- **GitHub Actions**: Tab "Actions" en tu repositorio
- Logs detallados de cada paso
- Notificaciones por email si el deployment falla

---

✨ **¡Deployment automatizado configurado con éxito!**
