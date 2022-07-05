const main = async () => {
  const [deployer] = await ethers.getSigners()
  console.log(`Address deploying the contract --> ${deployer.address}`)

  const commitmentFactory = await ethers.getContractFactory('Commitment')
  const contract = await commitmentFactory.deploy()

  console.log(`Commitment Contract address --> ${contract.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
