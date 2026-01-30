# 🚀 GUÍA MAESTRA: Despliegue OKMAYA V2 (Fresh Start)

Sigue esta guía EXACTAMENTE en orden para asegurar que todo funcione perfecto desde el inicio.

## 📋 Resumen del Plan
1.  **Deploy `OKYToken` (V2)**: Nuevo token, nuevos 1B de supply.
2.  **Deploy `OKYVesting` (V2)**: Con fix de seguridad (`emergencyWithdraw`).
3.  **Deploy Resto**: Presale, Staking, Airdrop (apuntando al nuevo token).
4.  **Configuración CRÍTICA**: Activar Vesting ANTES de enviarle dinero.

---

## 🛠️ FASE 1: Despliegue de Contratos (En Remix)

### 1. OKYToken.sol
- **Contract**: `OKYToken`
- **Constructor Args**:
  - `_owner`: Tu Wallet
  - `_gameRewardsWallet`: `0xC4F...` (Tu wallet temporalmente para todo)
  - `_developmentWallet`: `0xC4F...`
  - `_marketingWallet`: `0xC4F...`
  - ... (Usa tu propia wallet para todos los campos inicialmente para recibir el 100% del supply)
- 📝 **ANOTA LA DIRECCIÓN DEL NUEVO TOKEN (OKY_V2)**

### 2. OKYVesting.sol
- **Contract**: `OKYVesting`
- **Constructor Args**:
  - `_okyToken`: `DIRECCIÓN_OKY_V2` (La que acabas de crear)
  - `_owner`: Tu Wallet
- 📝 **ANOTA LA DIRECCIÓN DEL VESTING (VESTING_V2)**

### 3. Otros Contratos (Actualizados)
Despliega `OKYPresale`, `OKYStaking`, `OKYAirdrop` usando la dirección de `OKY_V2`.

---

## ⚙️ FASE 2: Configuración del Vesting (Paso Crítico)

**ANTES DE ENVIAR NADA AL VESTING, SIGUE ESTE ORDEN:**

1.  **Approve**:
    - Ve al contrato `OKYToken` (V2).
    - Ejecuta `approve`:
      - `spender`: `DIRECCIÓN_VESTING_V2`
      - `amount`: `500000000000000000000000000` (500M con 18 ceros, suficiente para cubrir todo).

2.  **Setup (Activar Reglas)**:
    - Ve al contrato `OKYVesting` (V2).
    - Ejecuta LOS 4 BOTONES `setup...` con los montos correctos (mismos de antes).
    - **Al darle click a "transact", el contrato TOMARÁ los tokens de tu wallet automáticamente.**

3.  **Verificación**:
    - Click en botón azul `scheduleCount`.
    - **Debe salir: `4`**.

---

## 💰 FASE 3: Financiar Otros Contratos

Ahora reparte el resto del supply desde tu wallet a los nuevos contratos:

1.  **Presale**: Envía 100M OKY al nuevo contrato `OKYPresale`.
2.  **Staking**: Envía 400M OKY al nuevo contrato `OKYStaking`.
3.  **Airdrop**: Envía 30M OKY al nuevo contrato `OKYAirdrop`.

---

## ✅ FASE 4: Actualizar Frontend

Una vez tengas todas las nuevas direcciones:

1.  Pásame las nuevas direcciones.
2.  Yo actualizaré `contracts.ts` y el frontend.
3.  Haremos un nuevo Build y Deploy de la web.

**¡Mucha suerte! Si sigues este orden, es imposible fallar.** 🛡️
