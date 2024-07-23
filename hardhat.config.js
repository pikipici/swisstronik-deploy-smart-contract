require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: ["35771ed752e6cfff8a2c23f1806a05f6948534a08e4a9152961097d193b5cdde"], //Your private key starting with "0x" 
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
};