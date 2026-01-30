# OKMAYA REALMS - Deployment Guide

## 🚀 Frontend Deployment

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager
- WalletConnect Project ID from https://cloud.walletconnect.com/

### Step 1: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 2: Configure Environment Variables
```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local and add your WalletConnect Project ID
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

### Step 3: Development Server
```bash
npm run dev
# Application will run on http://localhost:3000
```

### Step 4: Build for Production
```bash
npm run build
# Static files will be exported to /out/ directory
```

### Step 5: Deploy Static Files
The `/out/` folder contains the complete static website. Deploy to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag `/out/` folder to Netlify dashboard
- **Apache/Nginx**: Copy `/out/` contents to web root
- **IPFS**: `ipfs add -r out/`

---

## 📦 Smart Contracts Deployment

Contracts are already deployed on Base Mainnet:

### Deployed Addresses
```
OKYToken:     0x924b9eDD2A175f15918f32185584616111BfF9bB
OKYPresale:   0x84a80139FB3658815f5D28905CB6697a89eCD6c6
OKYStaking:   0xa0e3E8006910820584a66a4310c6f67eaf697D11
OKYAirdrop:   0x00CDF1c1581539C70C833ecE4a24e34dde1c4DD1
```

### Post-Deployment Tasks

#### 1. Fund Presale Contract
Transfer presale allocation tokens to presale contract:
```solidity
// From presale wallet, transfer 100M OKY to presale contract
OKYToken.transfer(0x84a80139FB3658815f5D28905CB6697a89eCD6c6, 100000000 * 10**18)
```

#### 2. Fund Staking Reward Pool
Transfer game rewards to staking contract:
```solidity
// From game rewards wallet, transfer tokens to staking contract
OKYToken.transfer(0xa0e3E8006910820584a66a4310c6f67eaf697D11, AMOUNT)
// Then fund reward pool
OKYStaking.fundRewardPool(AMOUNT)
```

#### 3. Fund Airdrop Contract
Transfer airdrop allocation in batches:
```solidity
// From airdrop wallet, transfer tokens
OKYToken.transfer(0x00CDF1c1581539C70C833ecE4a24e34dde1c4DD1, BATCH_AMOUNT)
```

#### 4. Deploy Vesting Contract (Pending)
```bash
cd smartcontracts
# Deploy OKYVesting.sol with constructor parameters
# Update CONTRACT_ADDRESSES in src/config/contracts.ts
```

---

## 🔐 Security Checklist

- [ ] WalletConnect Project ID set in environment variables
- [ ] Presale contract funded with tokens
- [ ] Staking reward pool funded
- [ ] Vesting contract deployed and configured
- [ ] All contract ownership verified
- [ ] Emergency pause functions tested
- [ ] Rate limiting configured (if applicable)

---

## 📊 Monitoring

### Check Contract Balances
```bash
# Check OKY balance of presale contract
cast balance 0x84a80139FB3658815f5D28905CB6697a89eCD6c6 --rpc-url https://mainnet.base.org

# Check presale progress
cast call 0x84a80139FB3658815f5D28905CB6697a89eCD6c6 "getPresaleProgress()" --rpc-url https://mainnet.base.org
```

---

## 🐛 Troubleshooting

### "Invalid Project ID" error
- Ensure NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is set in .env.local
- Verify the Project ID is correct from WalletConnect Cloud

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Wallet connection issues
- Check that Base network is configured in wallet
- Verify contract addresses in src/config/contracts.ts

---

## 📞 Support

For issues or questions:
- Telegram: @okmayarealms
- Email: support@basedokmaya.xyz
- GitHub Issues: [link to repo]
