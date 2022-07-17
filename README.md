# Yo is a skill sharing service using Zero Knowledge Proof


This product is refer to Continuum for background checker using Zero Knowledge Proof
https://github.com/tomoima525/continuum


## Yo is consist of 2 parts.
1. The improved version of the background checker Continuum
2. On-chain skill-sharing service

## What is Continuum?

### Continuum has good features.

1. Using Zero Knowledge Proof to reveal user skill without revealing their identity

2. If user mint nft on testnet, user doesn't pay the real gas.(Continuum can mint nft on harmony-mainnet)

### Yo take it over and offer new benefits for backgroundChecker
1. Yo only mint nft with testnet.

2. The architecture

   ↓ This is explained in more detail below

3. Using ERC1238(Non Transferable Token)

   ↓ This is explained in more detail below

### New features for Skill sharing service

1. Only One SmartContract - Multi-Fronend product

2. Low Feeで変わらない

### 下記では特にArchitecture, Non TransferableToken, Only One SmartContract - Multi-Fronend について解説します

# Architectur: How it works?
## Continuum
The architecture in continuum are as follows
- Frontend(to interact to blockcihain for user)
- AWS(to store hased user information on the merkle tree. User doesn't have to pay gas fee in creating merkle tree)
- Continuum Contract(to verify and mint nft)


## Yo
The architecture in Yo are as follows

https://satoshi.blogs.com/.a/6a00d8341c4f9853ef02a2eec7f809200d-pi
https://satoshi.blogs.com/.a/6a00d8341c4f9853ef02a2eec7f819200d-pi

# Non Transferable Token


# Only One SmartContract - Multi-Fronend 


- How to use?
ユーザーはforumで先生を探し、相談をします。
先生はgithubをconnectしてnftをmintをしてidneitityを隠しながらスキルを証明できます
(もちろん実名を公開することも可能です。)
手数料は2%で変わりません。


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

## 🛣Roadmap🛣
🛣
1. Diamond2535 testnetを全て対応させる、mainnetにdeployする
2. Frontendの作成
3. Forumの用意
