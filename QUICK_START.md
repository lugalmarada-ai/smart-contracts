# 🚀 QUICK START GUIDE - OKMAYA REALMS

## Para Desarrolladores (5 minutos)

### 1. Instalación
```bash
cd /var/www/html/okmaya
npm install
```

### 2. Configurar Variables de Entorno
```bash
# Copiar template
cp .env.example .env.local

# Editar .env.local y agregar tu WalletConnect Project ID
# Obtener de: https://cloud.walletconnect.com/
nano .env.local
```

**Agregar esta línea:**
```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=tu_project_id_aqui
```

### 3. Ejecutar en Desarrollo
```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

### 4. Probar Presale
1. Conecta tu wallet (MetaMask/Coinbase/etc)
2. Asegúrate de estar en **Base Mainnet**
3. Prueba comprar con ETH o USDC
4. Verifica que veas: **Precio $0.0035** y **Bonus 100%**

### 5. Build para Producción
```bash
npm run build
# Archivos estáticos en /out/
```

---

## Para Usuarios (Comprar $OKY)

### Paso 1: Preparar Wallet
1. Instala MetaMask o Coinbase Wallet
2. Agrega **Base Network**:
   - Network Name: Base
   - RPC URL: https://mainnet.base.org
   - Chain ID: 8453
   - Currency: ETH
   - Block Explorer: https://basescan.org

### Paso 2: Obtener Fondos
- **Opción A**: Bridge ETH desde Ethereum a Base (bridge.base.org)
- **Opción B**: Comprar USDC en un exchange y enviar a Base

### Paso 3: Comprar $OKY
1. Visita: https://www.basedokmaya.xyz/
2. Click "Connect Wallet"
3. Elige cantidad (ETH o USDC)
4. Verás cuántos OKY recibirás (con 100% bonus)
5. Confirma la transacción
6. ¡Listo! Tokens en tu wallet

### Calculadora Rápida
```
100 USDC = 28,571 base + 28,571 bonus = 57,142 OKY
500 USDC = 142,857 base + 142,857 bonus = 285,714 OKY
1000 USDC = 285,714 base + 285,714 bonus = 571,428 OKY

Valor al lanzamiento ($0.01/OKY):
100 USDC → $571 (5.7x)
500 USDC → $2,857 (5.7x)
1000 USDC → $5,714 (5.7x)
```

---

## Troubleshooting

### "Invalid Project ID" error
```bash
# Verifica que .env.local existe
ls -la .env.local

# Verifica el contenido
cat .env.local
```

### Wallet no conecta
- Asegúrate de estar en Base Network (Chain ID: 8453)
- Recarga la página
- Prueba con otro wallet

### Transacción falla
- Verifica que tienes suficiente ETH para gas
- Si usas USDC, primero necesitas "Approve"
- Revisa que el presale esté activo

### Build falla
```bash
# Limpia cache
rm -rf .next node_modules
npm install
npm run build
```

---

## Smart Contracts (Verificados en BaseScan)

```
OKYToken:   0x2986E9aD5d5a570F873afee62bF1F6b65eAeF14f
OKYPresale: 0x8D2ae4C7B0b4FC0776a8D90fbC723D9426D264D9
OKYStaking: 0x80d31BA6AbcBb3f6Fcb124aa9B16C9346a04989c
OKYAirdrop: 0x7A70b7333f3b637937e5D562cAf269B30254Fe04
OKYVesting: 0xCdeC5F4734CB111D3ab63B72dc0df11f60254463
```

Ver en BaseScan: https://basescan.org/address/0x2986E9aD5d5a570F873afee62bF1F6b65eAeF14f

---

## Soporte

- **Telegram**: t.me/okmayarealms
- **Twitter**: @OkmayaRealms
- **Email**: support@basedokmaya.xyz
- **Documentación**: Ver archivos DEPLOYMENT.md y README.md

---

**¡Bienvenido a OKMAYA REALMS! 🚀**
