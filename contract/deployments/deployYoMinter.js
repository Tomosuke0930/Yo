const main = async () => {
    const [deployer] = await ethers.getSigners()
    console.log(`Address deploying the contract --> ${deployer.address}`)

    const MerkleTreeFactory = await ethers.getContractFactory('YoMinter')
    //this is test
    const contract = await MerkleTreeFactory.deploy('0xffa877c45d2b86ed60bcbffa9e66c5375fd93c9c', 'https://token-cdn-domain/{id}.json')

    console.log(`YoMinter Contract address --> ${contract.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
