const main = async () => {
  const [deployer] = await ethers.getSigners()
  console.log(`Address deploying the contract --> ${deployer.address}`)

  const MerkleTreeFactory = await ethers.getContractFactory('MerkleTree')
  const contract = await MerkleTreeFactory.deploy()

  console.log(`MerkleTree Contract address --> ${contract.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
