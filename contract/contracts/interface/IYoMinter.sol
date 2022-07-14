//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
/// @title YoMinter interface.
/// @dev Interface of a YoMinter contract.
interface IYoMinter {

    /**
     * @dev Emitted when a Semaphore proof is verified.
     * @param signal: Semaphore signal.
    **/
    event ProofVerified(bytes32 signal);
    
    /**
     * @dev Emitted when minting NFT.
     * @param tokenId: Id of the token.
     * @param to: address minted
    **/
    event Minted(uint256 tokenId, address to);
    

    /**
     * @dev Emitted when burned NFT.
     * @param tokenId: Id of the token.
     * @param from: address burned
    **/
    event Burned(address from, uint256 tokenId);

    /**
     * @dev Saves the nullifier hash to avoid double signaling and exit an event
     * if the zero-knowledge proof is valid.
     * @param root: root of tree
     * @param nullifierHash: Nullifier hash.
     * @param externalNullifier: External nullifier.
     * @param proof: Zero-knowledge proof.
     * @param tokenURI: tokenURI for nft.
     * @param v,r and s must be a EIP712 signature from `to` as defined by ERC1238Approval to approve the minting transaction.
    **/
    function mint(
        uint256 root,
        uint256 nullifierHash,
        uint256 externalNullifier,
        uint256[8] calldata proof,
        string memory tokenURI,
        uint8 v,
        bytes32 r,
        bytes32 s,
        bytes memory data
    ) external;

    /**
     * @dev ERC1238 have to set burn function because this standard cannot transfer
    **/
    function burn(
        address from,
        uint256 id,
        bool deleteURI
    ) external;
}
