require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: "0.8.19",

  paths: {
    
    artifacts: "./src/artifacts"
  },

  networks: {
    hardhat: {
      chainId:1337
    },
  }
  
};
