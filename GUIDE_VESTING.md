# 🔒 Guía de Deploy - OKYVesting Contract

Sigue estos pasos para desplegar el contrato de Vesting en Remix.

### 1. Preparación en Remix
1. Ve a [Remix Ethereum](https://remix.ethereum.org/)
2. Crea un nuevo archivo llamado `OKYVesting.sol`
3. Copia TODO el código del archivo `smartcontracts/OKYVesting.sol` y pégalo en Remix.

### 2. Compilación
1. Ve a la pestaña **"Solidity Compiler"** (ícono de la "S" a la izquierda).
2. Selecciona Compiler Version: `0.8.20`
3. Click en **"Compile OKYVesting.sol"**
4. Verifica que aparezca el check verde ✅

### 3. Deployment
1. Ve a la pestaña **"Deploy & Run Transactions"** (ícono de Ethereum).
2. En **Environment**, selecciona **"Injected Provider - MetaMask"**.
3. Asegúrate de que tu MetaMask esté conectado a **Base Mainnet**.
4. En **Contract**, selecciona `OKYVesting - OKYVesting.sol`.
5. Despliega la flecha naranja al lado del botón **"Deploy"** para ver los parámetros.

### 4. Parámetros del Constructor
Llena los campos con la siguiente información:

- `_okyToken` (address):
  ```
  0x924b9eDD2A175f15918f32185584616111BfF9bB
  ```
  *(Esta es la dirección ya desplegada del token OKY)*

- `_owner` (address):
  ```
  TU_WALLET_ADDRESS
  ```
  *(Copia tu propia dirección de MetaMask, la que usas para desplegar)*

### 5. Confirmar
1. Click en **"transact"**
2. Confirma la transacción en MetaMask.
3. Espera a que se confirme en la blockchain.

---

## ⚙️ Configuración Post-Deploy

Una vez desplegado el contrato, verás su dirección en "Deployed Contracts" abajo a la izquierda.

**Copia esa dirección** y úsala para configurar los diferentes vestings llamando a las siguientes funciones (botones naranjas):

### A. Setup Liquidity (Lock 6 meses)
- **Función**: `setupLiquidityLock`
- `beneficiary`: Tu wallet (o donde quieres recibir la liquidez después de 6 meses)
- `amount`: Cantidad de tokens (ej: 150,000,000 * 10^18)
  - Para 150M tokens: `150000000000000000000000000`

### B. Setup Team (10 meses, 1 mes cliff)
- **Función**: `setupTeamVesting`
- `beneficiary`: Wallet del equipo
- `amount`: Cantidad (ej: 100M tokens)
  - Para 100M tokens: `100000000000000000000000000`

### C. Setup Marketing
- **Función**: `setupMarketingVesting`
- `beneficiary`: Wallet de marketing
- `amount`: Cantidad (ej: 70M tokens)

### D. Setup Development
- **Función**: `setupDevelopmentVesting`
- `beneficiary`: Wallet de desarrollo
- `amount`: Cantidad (ej: 150M tokens)

---

## 💰 IMPORTANTE: Financiar el Contrato

Para que el vesting funcione, debes **transferir los tokens** al contrato de Vesting.

1. Ve a tu contrato **OKYToken**
2. Ejecuta una transferencia (`transfer`) envíando el total de tokens asignados al vesting.
   - **To**: Dirección del contrato OKYVesting (recién creado)
   - **Amount**: Total (suma de Liquidity + Team + Mkt + Dev)

---

**Nota**: Si tienes dudas con los montos en Wei (con 18 ceros), usa una calculadora como [eth-converter.com](https://eth-converter.com/) poniendo la cantidad en "Ether" y copiando el valor de "Wei".
