const hre = require("hardhat");

async function main() {
  const Yo = await hre.ethers.getContractFactory("Yo");
  const yo = await Yo.deploy(0x8595e74d7dada2f5988f80294ab23da8a3cad6c4);

  await yo.deployed();

  console.log("Yo deployed to:", yo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
