const main = async () => {
  const [deployer] = await ethers.getSigners()
  console.log(`Address deploying the contract --> ${deployer.address}`)

  const groupsFactory = await ethers.getContractFactory('Group')
  const contract = await groupsFactory.deploy()

  console.log(`Group Contract address --> ${contract.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
