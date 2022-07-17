Yo is a skill sharing service.
Teacher can prove their skill without revealing their identity by using Zero Knowledge proof.
ユーザーはforumで先生を探し、相談をします。
先生はgithubをconnectしてnftをmintをしてidneitityを隠しながらスキルを証明できます(もちろん実名を公開することも可能です。)


簡単にいうと、このプロダクトはbackground checkerのContinuumを改良したものと、スキルシェアサービスをon-chainで行うサービスを組み合わせたものということもできます
This product is refer to Continuum for background checker using Zero Knowledge Proof
https://github.com/tomoima525/continuum

Continuum has good feature
1.ZKP
2.If user mint nft on testnet, user doesn't pay the real gas

Yo take it over and offer new benefits for backgroundChecker


1. testnetだけでのmintにする
2.  Architectur
frontend, contractというシンプルな設計
https://satoshi.blogs.com/.a/6a00d8341c4f9853ef02a2eec7f809200d-pi
https://satoshi.blogs.com/.a/6a00d8341c4f9853ef02a2eec7f819200d-pi
3. Non transferable NFTを採用


## Skill Shareとして面白いところ
1. Only One SmartContract - Multi-Fronend product
2. Low Feeで変わらない

下記でNNontransferableとArchitecture,Multiに関して説明します

# Architectur: How it works?
## Continuum
The architecture in continuum are as follows
- Frontend(to interact to blockcihain for user)
- AWS(to store hased user information on the merkle tree. User doesn't have to pay gas fee in creating merkle tree)
- Continuum Contract(to verify and mint nft)

## Yo
The architecture in Yo are as follows



# Contract Address in Rinkeby Testnet

-   Commitment
    0xAa4C435bd1C2C2d906bDf0A1953cc114bAd76542
    https://rinkeby.etherscan.io/address/0xAa4C435bd1C2C2d906bDf0A1953cc114bAd76542#code

-   Groups
    0x05fa458C17c87433aD9417E6e22825635ee537F2
    https://rinkeby.etherscan.io/address/0x05fa458C17c87433aD9417E6e22825635ee537F2#code
-   MerkleTree
    0x706ffa77346446288C22Fd8aBc81E65a599C856F
    https://rinkeby.etherscan.io/address/0x706ffa77346446288C22Fd8aBc81E65a599C856F#code

-   Verifier
    0xFfa877c45d2b86ED60BCbffa9E66C5375fD93C9C
    https://rinkeby.etherscan.io/address/0xFfa877c45d2b86ED60BCbffa9E66C5375fD93C9C#code
-   YoMinter
    0x3dc608285bc53F400e7BfB93b833E0F5508244E3
    https://rinkeby.etherscan.io/address/0x3dc608285bc53F400e7BfB93b833E0F5508244E3#code
-   YoV1
    0x614C1B3CD8E19840963410997634dbcdb700b0f4
    https://rinkeby.etherscan.io/address/0x614C1B3CD8E19840963410997634dbcdb700b0f4#code

## Roadmap
