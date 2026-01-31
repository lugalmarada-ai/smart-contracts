(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,233525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},755263,e=>{"use strict";var t=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "ready": {
      "qr_code": {
        "step1": {
          "description": "Add Ready to your home screen for faster access to your wallet.",
          "title": "Open the Ready app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "berasig": {
      "extension": {
        "step1": {
          "title": "Install the BeraSig extension",
          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "best": {
      "qr_code": {
        "step1": {
          "title": "Open the Best Wallet app",
          "description": "Add Best Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "binance": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",
          "title": "Open the Binance app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Binance Wallet extension",
          "description": "We recommend pinning Binance Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "iopay": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",
          "title": "Open the ioPay app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaia": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaia extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaia app",
          "description": "Put Kaia app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Open the ParaSwap app",
          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "wigwam": {
      "extension": {
        "step1": {
          "title": "Install the Wigwam extension",
          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ctrl": {
      "extension": {
        "step1": {
          "title": "Install the CTRL Wallet extension",
          "description": "We recommend pinning CTRL Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Open the Zeal app",
          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "valora": {
      "qr_code": {
        "step1": {
          "title": "Open the Valora app",
          "description": "We recommend putting Valora on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "gate": {
      "qr_code": {
        "step1": {
          "title": "Open the Gate app",
          "description": "We recommend putting Gate on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Gate extension",
          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "gemini": {
      "qr_code": {
        "step1": {
          "title": "Open keys.gemini.com",
          "description": "Visit keys.gemini.com on your mobile browser - no app download required."
        },
        "step2": {
          "title": "Create Your Wallet Instantly",
          "description": "Set up your smart wallet in seconds using your device's built-in authentication."
        },
        "step3": {
          "title": "Scan to Connect",
          "description": "Scan the QR code to instantly connect your wallet - it just works."
        }
      },
      "extension": {
        "step1": {
          "title": "Go to keys.gemini.com",
          "description": "No extensions or downloads needed - your wallet lives securely in the browser."
        },
        "step2": {
          "title": "One-Click Setup",
          "description": "Create your smart wallet instantly with passkey authentication - easier than any wallet out there."
        },
        "step3": {
          "title": "Connect and Go",
          "description": "Approve the connection and you're ready - the unopinionated wallet that just works."
        }
      }
    },

    "xportal": {
      "qr_code": {
        "step1": {
          "description": "Put xPortal on your home screen for faster access to your wallet.",
          "title": "Open the xPortal app"
        },
        "step2": {
          "description": "Create a wallet or import an existing one.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "mew": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",
          "title": "Open the MEW Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "zilpay": {
      "qr_code": {
        "step1": {
          "title": "Open the ZilPay app",
          "description": "Add ZilPay to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "nova": {
      "qr_code": {
        "step1": {
          "title": "Open the Nova Wallet app",
          "description": "Add Nova Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    }
  }
}
`;e.s(["en_US_default",()=>t])},403265,e=>{"use strict";var t=e.i(843476),r=e.i(271645),o=e.i(522016),a=e.i(657688),n=e.i(846932);e.i(247167);var s=e.i(231178),i=e.i(947414),l=e.i(674008),c=e.i(821476),p=e.i(772846),u=r,h=e.i(737806);function d(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class m extends u.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,r=(0,p.isHTMLElement)(e)&&e.offsetWidth||0,o=(0,p.isHTMLElement)(e)&&e.offsetHeight||0,a=this.props.sizeRef.current;a.height=t.offsetHeight||0,a.width=t.offsetWidth||0,a.top=t.offsetTop,a.left=t.offsetLeft,a.right=r-a.width-a.left,a.bottom=o-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function y({children:e,isPresent:o,anchorX:a,anchorY:n,root:s}){let i=(0,u.useId)(),l=(0,u.useRef)(null),c=(0,u.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=(0,u.useContext)(h.MotionConfigContext),y=function(...e){return r.useCallback(function(...e){return t=>{let r=!1,o=e.map(e=>{let o=d(e,t);return r||"function"!=typeof o||(r=!0),o});if(r)return()=>{for(let t=0;t<o.length;t++){let r=o[t];"function"==typeof r?r():d(e[t],null)}}}}(...e),e)}(l,e.props?.ref??e?.ref);return(0,u.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:u,right:h,bottom:d}=c.current;if(o||!l.current||!e||!t)return;let m="left"===a?`left: ${u}`:`right: ${h}`,y="bottom"===n?`bottom: ${d}`:`top: ${r}`;l.current.dataset.motionPopId=i;let f=document.createElement("style");p&&(f.nonce=p);let w=s??document.head;return w.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${m}px !important;
            ${y}px !important;
          }
        `),()=>{w.contains(f)&&w.removeChild(f)}},[o]),(0,t.jsx)(m,{isPresent:o,childRef:l,sizeRef:c,children:u.cloneElement(e,{ref:y})})}let f=({children:e,initial:o,isPresent:a,onExitComplete:n,custom:s,presenceAffectsLayout:l,mode:p,anchorX:u,anchorY:h,root:d})=>{let m=(0,i.useConstant)(w),f=(0,r.useId)(),b=!0,g=(0,r.useMemo)(()=>(b=!1,{id:f,initial:o,isPresent:a,custom:s,onExitComplete:e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;n&&n()},register:e=>(m.set(e,!1),()=>m.delete(e))}),[a,m,n]);return l&&b&&(g={...g}),(0,r.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[a]),r.useEffect(()=>{a||m.size||!n||n()},[a]),"popLayout"===p&&(e=(0,t.jsx)(y,{isPresent:a,anchorX:u,anchorY:h,root:d,children:e})),(0,t.jsx)(c.PresenceContext.Provider,{value:g,children:e})};function w(){return new Map}var b=e.i(464978);let g=e=>e.key||"";function k(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}let x=({children:e,custom:o,initial:a=!0,onExitComplete:n,presenceAffectsLayout:c=!0,mode:p="sync",propagate:u=!1,anchorX:h="left",anchorY:d="top",root:m})=>{let[y,w]=(0,b.usePresence)(u),x=(0,r.useMemo)(()=>k(e),[e]),C=u&&!y?[]:x.map(g),v=(0,r.useRef)(!0),W=(0,r.useRef)(x),P=(0,i.useConstant)(()=>new Map),j=(0,r.useRef)(new Set),[O,q]=(0,r.useState)(x),[I,N]=(0,r.useState)(x);(0,l.useIsomorphicLayoutEffect)(()=>{v.current=!1,W.current=x;for(let e=0;e<I.length;e++){let t=g(I[e]);C.includes(t)?(P.delete(t),j.current.delete(t)):!0!==P.get(t)&&P.set(t,!1)}},[I,C.length,C.join("-")]);let R=[];if(x!==O){let e=[...x];for(let t=0;t<I.length;t++){let r=I[t],o=g(r);C.includes(o)||(e.splice(t,0,r),R.push(r))}return"wait"===p&&R.length&&(e=R),N(k(e)),q(x),null}let{forceRender:T}=(0,r.useContext)(s.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:I.map(e=>{let r=g(e),s=(!u||!!y)&&(x===I||C.includes(r));return(0,t.jsx)(f,{isPresent:s,initial:(!v.current||!!a)&&void 0,custom:o,presenceAffectsLayout:c,mode:p,root:m,onExitComplete:s?void 0:()=>{if(j.current.has(r)||(j.current.add(r),!P.has(r)))return;P.set(r,!0);let e=!0;P.forEach(t=>{t||(e=!1)}),e&&(T?.(),N(W.current),u&&w?.(),n&&n())},anchorX:h,anchorY:d,children:e},r)})})};var C=e.i(511152),v=e.i(982615);function W({isOpen:e,onClose:o}){let{address:a,isConnected:s}=(0,v.useAccount)(),[i,l]=(0,r.useState)({telegram:!1,instagram:!1,twitter:!1}),[c,p]=(0,r.useState)(null),[u,h]=(0,r.useState)(!1),[d,m]=(0,r.useState)(!1),y={telegram:"https://t.me/okmayarealms",instagram:"https://instagram.com/okmayarealms",twitter:"https://twitter.com/okmayarealms"},f=async e=>{p(e),window.open(y[e],"_blank"),await new Promise(e=>setTimeout(e,2e3)),l(t=>({...t,[e]:!0})),p(null)},w=async()=>{if(!s||!a)return void alert("Please connect your wallet first");h(!0);try{await new Promise(e=>setTimeout(e,3e3)),m(!0)}catch(e){console.error("Claim failed:",e),alert("Claim failed. Please try again.")}finally{h(!1)}},b=i.telegram&&i.instagram&&i.twitter;return e?(0,t.jsx)(x,{children:(0,t.jsx)(n.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4",onClick:o,children:(0,t.jsxs)(n.motion.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:e=>e.stopPropagation(),className:"relative w-full max-w-md glass-card p-8 border-2 border-primary/30 max-h-[90vh] overflow-y-auto",children:[(0,t.jsx)("button",{onClick:o,className:"absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",children:(0,t.jsx)(C.FaTimes,{size:24})}),(0,t.jsxs)("div",{className:"text-center mb-8",children:[(0,t.jsx)("h2",{className:"text-3xl font-press-start text-gradient mb-2",children:"Join Airdrop"}),(0,t.jsxs)("p",{className:"text-gray-400 text-sm font-vt323 text-xl",children:["Claim ",(0,t.jsx)("span",{className:"text-accent font-bold",children:"$10 worth of $OKY"})]})]}),d?(0,t.jsxs)("div",{className:"text-center py-8",children:[(0,t.jsx)(C.FaCheckCircle,{className:"text-accent text-6xl mx-auto mb-4"}),(0,t.jsx)("h3",{className:"text-2xl font-bold text-white mb-2",children:"Claim Successful!"}),(0,t.jsx)("p",{className:"text-gray-300",children:"$10 worth of $OKY has been sent to your wallet!"}),(0,t.jsx)("button",{onClick:o,className:"btn-primary mt-6",children:"Close"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"mb-6 p-4 bg-slate-800/50 rounded-xl border border-white/10",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-2",children:[(0,t.jsx)(C.FaWallet,{className:"text-accent"}),(0,t.jsx)("span",{className:"text-sm font-bold text-white",children:"Wallet Address"})]}),s&&a?(0,t.jsx)("p",{className:"text-xs font-mono text-gray-300 break-all",children:a}):(0,t.jsx)("p",{className:"text-xs text-gray-400",children:"Please connect your wallet to continue"})]}),(0,t.jsxs)("div",{className:"space-y-4 mb-6",children:[(0,t.jsx)("p",{className:"text-sm text-gray-300 mb-4",children:"Follow our social media to verify and claim your airdrop:"}),(0,t.jsx)(P,{icon:(0,t.jsx)(C.FaTelegram,{}),platform:"Telegram",isVerified:i.telegram,isVerifying:"telegram"===c,onClick:()=>f("telegram"),color:"bg-blue-500"}),(0,t.jsx)(P,{icon:(0,t.jsx)(C.FaInstagram,{}),platform:"Instagram",isVerified:i.instagram,isVerifying:"instagram"===c,onClick:()=>f("instagram"),color:"bg-pink-500"}),(0,t.jsx)(P,{icon:(0,t.jsx)(C.FaTwitter,{}),platform:"X (Twitter)",isVerified:i.twitter,isVerifying:"twitter"===c,onClick:()=>f("twitter"),color:"bg-sky-500"})]}),(0,t.jsx)("button",{onClick:w,disabled:!s||!b||u,className:`w-full btn-primary py-4 text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 ${!s||!b||u?"opacity-50 cursor-not-allowed":""}`,children:u?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C.FaSpinner,{className:"animate-spin"}),"Claiming..."]}):"Claim $10 in $OKY"}),!s&&(0,t.jsx)("p",{className:"text-xs text-center text-gray-400 mt-4",children:"⚠️ Connect your wallet to claim"}),s&&!b&&(0,t.jsx)("p",{className:"text-xs text-center text-gray-400 mt-4",children:"⚠️ Complete all verification steps to claim"})]})]})})}):null}function P({icon:e,platform:r,isVerified:o,isVerifying:a,onClick:n,color:s}){return(0,t.jsxs)("button",{onClick:n,disabled:o||a,className:`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${o?"bg-green-500/20 border-green-500":"bg-slate-800/50 border-white/10 hover:border-primary/50"} ${o||a?"cursor-not-allowed":"cursor-pointer"}`,children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:`${s} p-2 rounded-lg text-white`,children:e}),(0,t.jsx)("span",{className:"font-semibold text-white",children:r})]}),a?(0,t.jsx)(C.FaSpinner,{className:"animate-spin text-accent"}):o?(0,t.jsx)(C.FaCheckCircle,{className:"text-green-500 text-xl"}):(0,t.jsx)("span",{className:"text-xs text-gray-400 uppercase",children:"Verify"})]})}let j=[{name:"Trailer",href:"#trailer"},{name:"Game",href:"#game"},{name:"Tokenomics",href:"#tokenomics"},{name:"Liquidity",href:"#liquidity"},{name:"Roadmap",href:"#roadmap"},{name:"Team",href:"#team"}];function O(){let[e,s]=(0,r.useState)(!1),[i,l]=(0,r.useState)(!1),[c,p]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{s(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsxs)("nav",{className:`fixed top-0 w-full z-50 transition-all duration-300 ${e?"bg-black/80 backdrop-blur-md py-4 border-b border-primary/20":"bg-transparent py-6"}`,children:[(0,t.jsxs)("div",{className:"container mx-auto px-6 flex justify-between items-center",children:[(0,t.jsxs)(o.default,{href:"/",className:"flex items-center gap-3 group",children:[(0,t.jsx)("div",{className:"relative h-10 w-10 sm:h-12 sm:w-12",children:(0,t.jsx)(a.default,{src:"/logo_real.png",alt:"OKMAYA REALMS",fill:!0,sizes:"(max-width: 640px) 40px, 48px",className:"object-contain group-hover:scale-110 transition-transform"})}),(0,t.jsx)("span",{className:"text-xl sm:text-2xl font-bold text-gradient hidden sm:block tracking-wider",children:"OKMAYA REALMS"})]}),(0,t.jsxs)("div",{className:"hidden lg:flex items-center gap-8",children:[j.map(e=>(0,t.jsx)(o.default,{href:e.href,className:"text-gray-300 hover:text-primary transition-colors text-sm uppercase tracking-wider font-semibold",children:e.name},e.name)),(0,t.jsx)("button",{className:"btn-primary text-sm px-6 py-2 uppercase tracking-wider",onClick:()=>p(!0),children:"Join Airdrop"})]}),(0,t.jsx)("button",{className:"lg:hidden text-white text-2xl z-50 relative",onClick:()=>l(!i),children:i?(0,t.jsx)(C.FaTimes,{}):(0,t.jsx)(C.FaBars,{})})]}),(0,t.jsx)(x,{children:i&&(0,t.jsxs)(n.motion.div,{initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{type:"spring",stiffness:100,damping:20},className:"fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40 lg:hidden",children:[j.map(e=>(0,t.jsx)(o.default,{href:e.href,onClick:()=>l(!1),className:"text-2xl text-white font-bold hover:text-primary uppercase tracking-widest",children:e.name},e.name)),(0,t.jsx)("button",{className:"btn-primary text-lg px-8 py-3 mt-4",onClick:()=>{l(!1),p(!0)},children:"Join Airdrop"})]})}),(0,t.jsx)(W,{isOpen:c,onClose:()=>p(!1)})]})}e.s(["default",()=>O],403265)},965952,e=>{"use strict";var t=e.i(843476),r=e.i(271645);function o(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t,r=e.current;if(!r)return;let o=r.getContext("2d");if(!o)return;let a=[],n=()=>{r.width=window.innerWidth,r.height=window.innerHeight},s=()=>{a=[];let e=Math.min(window.innerWidth/10,100);for(let t=0;t<e;t++){let e=["rgba(139, 92, 246, 0.5)","rgba(59, 130, 246, 0.5)","rgba(16, 185, 129, 0.3)"];a.push({x:Math.random()*r.width,y:Math.random()*r.height,size:2*Math.random()+.5,speedX:(Math.random()-.5)*.5,speedY:(Math.random()-.5)*.5,color:e[Math.floor(Math.random()*e.length)]})}},i=()=>{o.clearRect(0,0,r.width,r.height),a.forEach(e=>{o.fillStyle=e.color,o.beginPath(),o.arc(e.x,e.y,e.size,0,2*Math.PI),o.fill(),e.x+=e.speedX,e.y+=e.speedY,(e.x<0||e.x>r.width)&&(e.speedX*=-1),(e.y<0||e.y>r.height)&&(e.speedY*=-1)}),t=requestAnimationFrame(i)};return window.addEventListener("resize",()=>{n(),s()}),n(),s(),i(),()=>{cancelAnimationFrame(t),window.removeEventListener("resize",n)}},[]),(0,t.jsx)("canvas",{ref:e,className:"fixed inset-0 z-0 pointer-events-none",style:{background:"radial-gradient(circle at center, #1e1b4b 0%, #0f172a 100%)"}})}e.s(["default",()=>o])},284054,e=>{"use strict";var t=e.i(247167),r=e.i(843476),o=e.i(722652),a=e.i(103111),n=e.i(574983),s=e.i(297197),i=e.i(912598),l=e.i(619273),c=e.i(286491),p=e.i(540143),u=e.i(915823),h=class extends u.Subscribable{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,r){let o=t.queryKey,a=t.queryHash??(0,l.hashQueryKeyByOptions)(o,t),n=this.get(a);return n||(n=new c.Query({client:e,queryKey:o,queryHash:a,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(o)}),this.add(n)),n}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){p.notifyManager.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,l.matchQuery)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,l.matchQuery)(e,t)):t}notify(e){p.notifyManager.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){p.notifyManager.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){p.notifyManager.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},d=e.i(114272),m=u,y=class extends m.Subscribable{constructor(e={}){super(),this.config=e,this.#t=new Set,this.#r=new Map,this.#o=0}#t;#r;#o;build(e,t,r){let o=new d.Mutation({client:e,mutationCache:this,mutationId:++this.#o,options:e.defaultMutationOptions(t),state:r});return this.add(o),o}add(e){this.#t.add(e);let t=f(e);if("string"==typeof t){let r=this.#r.get(t);r?r.push(e):this.#r.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#t.delete(e)){let t=f(e);if("string"==typeof t){let r=this.#r.get(t);if(r)if(r.length>1){let t=r.indexOf(e);-1!==t&&r.splice(t,1)}else r[0]===e&&this.#r.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){let t=f(e);if("string"!=typeof t)return!0;{let r=this.#r.get(t),o=r?.find(e=>"pending"===e.state.status);return!o||o===e}}runNext(e){let t=f(e);if("string"!=typeof t)return Promise.resolve();{let r=this.#r.get(t)?.find(t=>t!==e&&t.state.isPaused);return r?.continue()??Promise.resolve()}}clear(){p.notifyManager.batch(()=>{this.#t.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#t.clear(),this.#r.clear()})}getAll(){return Array.from(this.#t)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,l.matchMutation)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,l.matchMutation)(e,t))}notify(e){p.notifyManager.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return p.notifyManager.batch(()=>Promise.all(e.map(e=>e.continue().catch(l.noop))))}};function f(e){return e.options.scope?.id}var w=e.i(175555),b=e.i(814448);function g(e){return{onFetch:(t,r)=>{let o=t.options,a=t.fetchOptions?.meta?.fetchMore?.direction,n=t.state.data?.pages||[],s=t.state.data?.pageParams||[],i={pages:[],pageParams:[]},c=0,p=async()=>{let r=!1,p=(0,l.ensureQueryFn)(t.options,t.fetchOptions),u=async(e,o,a)=>{let n;if(r)return Promise.reject();if(null==o&&e.pages.length)return Promise.resolve(e);let s=(n={client:t.client,queryKey:t.queryKey,pageParam:o,direction:a?"backward":"forward",meta:t.options.meta},(0,l.addConsumeAwareSignal)(n,()=>t.signal,()=>r=!0),n),i=await p(s),{maxPages:c}=t.options,u=a?l.addToStart:l.addToEnd;return{pages:u(e.pages,i,c),pageParams:u(e.pageParams,o,c)}};if(a&&n.length){let e="backward"===a,t={pages:n,pageParams:s},r=(e?function(e,{pages:t,pageParams:r}){return t.length>0?e.getPreviousPageParam?.(t[0],t,r[0],r):void 0}:k)(o,t);i=await u(t,r,e)}else{let t=e??n.length;do{let e=0===c?s[0]??o.initialPageParam:k(o,i);if(c>0&&null==e)break;i=await u(i,e),c++}while(c<t)}return i};t.options.persister?t.fetchFn=()=>t.options.persister?.(p,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},r):t.fetchFn=p}}}function k(e,{pages:t,pageParams:r}){let o=t.length-1;return t.length>0?e.getNextPageParam(t[o],t,r[o],r):void 0}var x=class{#a;#n;#s;#i;#l;#c;#p;#u;constructor(e={}){this.#a=e.queryCache||new h,this.#n=e.mutationCache||new y,this.#s=e.defaultOptions||{},this.#i=new Map,this.#l=new Map,this.#c=0}mount(){this.#c++,1===this.#c&&(this.#p=w.focusManager.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#a.onFocus())}),this.#u=b.onlineManager.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#a.onOnline())}))}unmount(){this.#c--,0===this.#c&&(this.#p?.(),this.#p=void 0,this.#u?.(),this.#u=void 0)}isFetching(e){return this.#a.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#n.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#a.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),r=this.#a.build(this,t),o=r.state.data;return void 0===o?this.fetchQuery(e):(e.revalidateIfStale&&r.isStaleByTime((0,l.resolveStaleTime)(t.staleTime,r))&&this.prefetchQuery(t),Promise.resolve(o))}getQueriesData(e){return this.#a.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let o=this.defaultQueryOptions({queryKey:e}),a=this.#a.get(o.queryHash),n=a?.state.data,s=(0,l.functionalUpdate)(t,n);if(void 0!==s)return this.#a.build(this,o).setData(s,{...r,manual:!0})}setQueriesData(e,t,r){return p.notifyManager.batch(()=>this.#a.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#a.get(t.queryHash)?.state}removeQueries(e){let t=this.#a;p.notifyManager.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#a;return p.notifyManager.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){let r={revert:!0,...t};return Promise.all(p.notifyManager.batch(()=>this.#a.findAll(e).map(e=>e.cancel(r)))).then(l.noop).catch(l.noop)}invalidateQueries(e,t={}){return p.notifyManager.batch(()=>(this.#a.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType==="none")?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t))}refetchQueries(e,t={}){let r={...t,cancelRefetch:t.cancelRefetch??!0};return Promise.all(p.notifyManager.batch(()=>this.#a.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(l.noop)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(l.noop)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#a.build(this,t);return r.isStaleByTime((0,l.resolveStaleTime)(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(l.noop).catch(l.noop)}fetchInfiniteQuery(e){return e.behavior=g(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(l.noop).catch(l.noop)}ensureInfiniteQueryData(e){return e.behavior=g(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return b.onlineManager.isOnline()?this.#n.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#a}getMutationCache(){return this.#n}getDefaultOptions(){return this.#s}setDefaultOptions(e){this.#s=e}setQueryDefaults(e,t){this.#i.set((0,l.hashKey)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#i.values()],r={};return t.forEach(t=>{(0,l.partialMatchKey)(e,t.queryKey)&&Object.assign(r,t.defaultOptions)}),r}setMutationDefaults(e,t){this.#l.set((0,l.hashKey)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#l.values()],r={};return t.forEach(t=>{(0,l.partialMatchKey)(e,t.mutationKey)&&Object.assign(r,t.defaultOptions)}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#s.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,l.hashQueryKeyByOptions)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===l.skipToken&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#s.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#a.clear(),this.#n.clear()}};let C=(0,o.getDefaultConfig)({appName:"OKMAYA REALMS",projectId:t.default.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID||"YOUR_PROJECT_ID",chains:[s.base],ssr:!0}),v=new x;function W({children:e}){return(0,r.jsx)(n.WagmiProvider,{config:C,children:(0,r.jsx)(i.QueryClientProvider,{client:v,children:(0,r.jsx)(o.RainbowKitProvider,{theme:(0,a.darkTheme)({accentColor:"#8B5CF6",accentColorForeground:"white",borderRadius:"large",fontStack:"system",overlayBlur:"small"}),children:e})})})}e.s(["Web3Provider",()=>W],284054)},101139,e=>{e.v(t=>Promise.all(["static/chunks/034083a8ec975080.js"].map(t=>e.l(t))).then(()=>t(109963)))},625932,e=>{e.v(e=>Promise.resolve().then(()=>e(776267)))},66216,e=>{e.v(t=>Promise.all(["static/chunks/a4dda27a0ea5665a.js","static/chunks/0194d4a436410713.js","static/chunks/fa44238ce6aa51c4.js"].map(t=>e.l(t))).then(()=>t(477350)))},224814,e=>{e.v(t=>Promise.all(["static/chunks/7e95ee467bd4a0c9.js","static/chunks/fe0fc5021f91c524.js"].map(t=>e.l(t))).then(()=>t(653806)))},470308,e=>{e.v(t=>Promise.all(["static/chunks/f7d80290c6d3b6bb.js"].map(t=>e.l(t))).then(()=>t(915618)))},474683,e=>{e.v(t=>Promise.all(["static/chunks/bdc1f6e120e2b14c.js"].map(t=>e.l(t))).then(()=>t(289329)))},381024,e=>{e.v(t=>Promise.all(["static/chunks/4b7671491fa87b14.js","static/chunks/35d0239aa7b57bbf.js"].map(t=>e.l(t))).then(()=>t(607627)))},114544,e=>{e.v(t=>Promise.all(["static/chunks/e0ed2649d3073a5e.js"].map(t=>e.l(t))).then(()=>t(64871)))},199160,e=>{e.v(t=>Promise.all(["static/chunks/c06b74b32486f252.js"].map(t=>e.l(t))).then(()=>t(552117)))},458488,e=>{e.v(t=>Promise.all(["static/chunks/da56d9c35ae347ef.js"].map(t=>e.l(t))).then(()=>t(828419)))},945205,e=>{e.v(t=>Promise.all(["static/chunks/0bcbb46c5e3fdf25.js"].map(t=>e.l(t))).then(()=>t(216419)))},669023,e=>{e.v(t=>Promise.all(["static/chunks/f127eddbd265565e.js"].map(t=>e.l(t))).then(()=>t(739776)))},469689,e=>{e.v(t=>Promise.all(["static/chunks/864147b80873992f.js"].map(t=>e.l(t))).then(()=>t(356290)))},760813,e=>{e.v(t=>Promise.all(["static/chunks/1b12645ee8bc884b.js"].map(t=>e.l(t))).then(()=>t(252306)))},423705,e=>{e.v(t=>Promise.all(["static/chunks/a75d878f4f5f13a9.js"].map(t=>e.l(t))).then(()=>t(997708)))},736057,e=>{e.v(t=>Promise.all(["static/chunks/f5c6a72a7b227ff8.js"].map(t=>e.l(t))).then(()=>t(905405)))},917507,e=>{e.v(t=>Promise.all(["static/chunks/6323be2ba253054e.js"].map(t=>e.l(t))).then(()=>t(70881)))},82058,e=>{e.v(t=>Promise.all(["static/chunks/eb6ec9225ab8f4a4.js"].map(t=>e.l(t))).then(()=>t(945467)))},984221,e=>{e.v(t=>Promise.all(["static/chunks/e735df406043c439.js"].map(t=>e.l(t))).then(()=>t(657990)))},281312,e=>{e.v(t=>Promise.all(["static/chunks/a53900a82d8881ce.js"].map(t=>e.l(t))).then(()=>t(737224)))},581928,e=>{e.v(t=>Promise.all(["static/chunks/58f6b85793db030f.js"].map(t=>e.l(t))).then(()=>t(887256)))},784600,e=>{e.v(t=>Promise.all(["static/chunks/50482d5029b0c1eb.js"].map(t=>e.l(t))).then(()=>t(220519)))},290491,e=>{e.v(t=>Promise.all(["static/chunks/83a55f541159f125.js"].map(t=>e.l(t))).then(()=>t(162088)))},435239,e=>{e.v(t=>Promise.all(["static/chunks/f8ea650a7506bc8d.js"].map(t=>e.l(t))).then(()=>t(771650)))},917421,e=>{e.v(t=>Promise.all(["static/chunks/a09a24d366d50595.js"].map(t=>e.l(t))).then(()=>t(157677)))},391110,e=>{e.v(t=>Promise.all(["static/chunks/28abe5bdf71d034d.js"].map(t=>e.l(t))).then(()=>t(210006)))},442086,e=>{e.v(t=>Promise.all(["static/chunks/cdf4d277428d3411.js"].map(t=>e.l(t))).then(()=>t(67881)))},105872,e=>{e.v(t=>Promise.all(["static/chunks/fd55b5c44095d849.js"].map(t=>e.l(t))).then(()=>t(864976)))},271711,e=>{e.v(t=>Promise.all(["static/chunks/f20a5acf8b08ad4d.js"].map(t=>e.l(t))).then(()=>t(29311)))},567031,e=>{e.v(t=>Promise.all(["static/chunks/1d23d7bb99a3c6fd.js"].map(t=>e.l(t))).then(()=>t(75789)))},575685,e=>{e.v(t=>Promise.all(["static/chunks/e625a34073f9e963.js"].map(t=>e.l(t))).then(()=>t(786882)))},604414,e=>{e.v(t=>Promise.all(["static/chunks/1fbab4c19bf07056.js"].map(t=>e.l(t))).then(()=>t(352164)))},777210,e=>{e.v(t=>Promise.all(["static/chunks/bb7631c2e765bae5.js"].map(t=>e.l(t))).then(()=>t(745141)))},230454,e=>{e.v(t=>Promise.all(["static/chunks/febaee82fe46dd12.js"].map(t=>e.l(t))).then(()=>t(516267)))},80911,e=>{e.v(t=>Promise.all(["static/chunks/31312a55a741195b.js"].map(t=>e.l(t))).then(()=>t(138783)))},197615,e=>{e.v(t=>Promise.all(["static/chunks/000d5aaae1649753.js"].map(t=>e.l(t))).then(()=>t(540804)))},485284,e=>{e.v(t=>Promise.all(["static/chunks/3f89b7b695a6d7dc.js"].map(t=>e.l(t))).then(()=>t(303962)))},346977,e=>{e.v(t=>Promise.all(["static/chunks/98f04ecab8ba803d.js"].map(t=>e.l(t))).then(()=>t(370564)))},736033,e=>{e.v(t=>Promise.all(["static/chunks/07353aebad6bc3dc.js"].map(t=>e.l(t))).then(()=>t(472299)))},557289,e=>{e.v(t=>Promise.all(["static/chunks/12dab76068ded989.js"].map(t=>e.l(t))).then(()=>t(920685)))},649149,e=>{e.v(t=>Promise.all(["static/chunks/9b3f225083ef0a3d.js"].map(t=>e.l(t))).then(()=>t(418891)))},9974,e=>{e.v(t=>Promise.all(["static/chunks/bf12f4c1f32f80d6.js"].map(t=>e.l(t))).then(()=>t(761011)))},485155,e=>{e.v(t=>Promise.all(["static/chunks/0c91bd755a4f9dab.js"].map(t=>e.l(t))).then(()=>t(421618)))},759968,e=>{e.v(t=>Promise.all(["static/chunks/a197228ba3c59a4c.js"].map(t=>e.l(t))).then(()=>t(251012)))},38898,e=>{e.v(t=>Promise.all(["static/chunks/87d8b1e64f99f9aa.js"].map(t=>e.l(t))).then(()=>t(900368)))},822574,e=>{e.v(t=>Promise.all(["static/chunks/b8670320de73bd6e.js"].map(t=>e.l(t))).then(()=>t(248530)))},101716,e=>{e.v(t=>Promise.all(["static/chunks/0763922dc86777d7.js"].map(t=>e.l(t))).then(()=>t(839444)))},24530,e=>{e.v(t=>Promise.all(["static/chunks/6ccf8e284ca75052.js"].map(t=>e.l(t))).then(()=>t(723557)))},768769,e=>{e.v(t=>Promise.all(["static/chunks/f855adf781fbabb6.js"].map(t=>e.l(t))).then(()=>t(880804)))},667285,e=>{e.v(t=>Promise.all(["static/chunks/5e52b85b2272e504.js"].map(t=>e.l(t))).then(()=>t(804453)))},193126,e=>{e.v(t=>Promise.all(["static/chunks/d4398ab35b431f0d.js"].map(t=>e.l(t))).then(()=>t(973024)))},708036,e=>{e.v(t=>Promise.all(["static/chunks/102c06659c7540e5.js"].map(t=>e.l(t))).then(()=>t(481675)))},811338,e=>{e.v(t=>Promise.all(["static/chunks/d7d3a2be52dabc28.js"].map(t=>e.l(t))).then(()=>t(385710)))},321625,e=>{e.v(t=>Promise.all(["static/chunks/9c0b5f5ffab2a5bb.js"].map(t=>e.l(t))).then(()=>t(656395)))},345304,e=>{e.v(t=>Promise.all(["static/chunks/3ada4ad80b724a17.js"].map(t=>e.l(t))).then(()=>t(382042)))},738278,e=>{e.v(t=>Promise.all(["static/chunks/5894511f7316295f.js"].map(t=>e.l(t))).then(()=>t(619124)))},792872,e=>{e.v(t=>Promise.all(["static/chunks/e5d550b9732ab661.js"].map(t=>e.l(t))).then(()=>t(371659)))},226755,e=>{e.v(t=>Promise.all(["static/chunks/3f039b77c6180d48.js"].map(t=>e.l(t))).then(()=>t(446495)))},504937,e=>{e.v(t=>Promise.all(["static/chunks/e74d6a3a94fc6c26.js"].map(t=>e.l(t))).then(()=>t(156255)))},410758,e=>{e.v(t=>Promise.all(["static/chunks/b7eedf15854f081e.js"].map(t=>e.l(t))).then(()=>t(908254)))},886422,e=>{e.v(t=>Promise.all(["static/chunks/383937fef5e1ddb5.js"].map(t=>e.l(t))).then(()=>t(652860)))},274604,e=>{e.v(t=>Promise.all(["static/chunks/a8aa6ff78e82658e.js"].map(t=>e.l(t))).then(()=>t(505209)))},426975,e=>{e.v(t=>Promise.all(["static/chunks/6d71cfc1f7683d60.js"].map(t=>e.l(t))).then(()=>t(6938)))},106369,e=>{e.v(t=>Promise.all(["static/chunks/dce3f3842db52dbe.js"].map(t=>e.l(t))).then(()=>t(358134)))},507518,e=>{e.v(t=>Promise.all(["static/chunks/528cda09397ca281.js"].map(t=>e.l(t))).then(()=>t(221274)))},396057,e=>{e.v(t=>Promise.all(["static/chunks/a0342869754663ac.js"].map(t=>e.l(t))).then(()=>t(432867)))},192150,e=>{e.v(t=>Promise.all(["static/chunks/04f0d42768e79133.js"].map(t=>e.l(t))).then(()=>t(42941)))},703354,e=>{e.v(t=>Promise.all(["static/chunks/ce5d6995e254e19e.js"].map(t=>e.l(t))).then(()=>t(185157)))},422316,e=>{e.v(t=>Promise.all(["static/chunks/e9abab00795bfca8.js"].map(t=>e.l(t))).then(()=>t(460012)))},932219,e=>{e.v(t=>Promise.all(["static/chunks/3f8afd6e6837c4b6.js"].map(t=>e.l(t))).then(()=>t(467138)))},437039,e=>{e.v(t=>Promise.all(["static/chunks/17727e254efd0ba9.js"].map(t=>e.l(t))).then(()=>t(21043)))},31273,e=>{e.v(t=>Promise.all(["static/chunks/604c018433c5d66d.js"].map(t=>e.l(t))).then(()=>t(444733)))},812921,e=>{e.v(t=>Promise.all(["static/chunks/ba246cf12e0a4cd0.js"].map(t=>e.l(t))).then(()=>t(327052)))},93305,e=>{e.v(t=>Promise.all(["static/chunks/27282591893e9efa.js"].map(t=>e.l(t))).then(()=>t(823233)))},65212,e=>{e.v(t=>Promise.all(["static/chunks/aa612cb4451d0ce2.js"].map(t=>e.l(t))).then(()=>t(879917)))},961315,e=>{e.v(t=>Promise.all(["static/chunks/b45bf4586b657794.js"].map(t=>e.l(t))).then(()=>t(4245)))},588300,e=>{e.v(t=>Promise.all(["static/chunks/280b3e1534b10084.js"].map(t=>e.l(t))).then(()=>t(227574)))},782184,e=>{e.v(t=>Promise.all(["static/chunks/cb9c522bf9d1dc24.js"].map(t=>e.l(t))).then(()=>t(956007)))},20651,e=>{e.v(t=>Promise.all(["static/chunks/88be83e3fde7daca.js"].map(t=>e.l(t))).then(()=>t(150676)))},254566,e=>{e.v(t=>Promise.all(["static/chunks/8fdd0d89755b8508.js"].map(t=>e.l(t))).then(()=>t(164540)))},873830,e=>{e.v(t=>Promise.all(["static/chunks/7bd87e064f4afcf8.js"].map(t=>e.l(t))).then(()=>t(631690)))},554610,e=>{e.v(t=>Promise.all(["static/chunks/ba77a1136b640f8a.js"].map(t=>e.l(t))).then(()=>t(93227)))}]);