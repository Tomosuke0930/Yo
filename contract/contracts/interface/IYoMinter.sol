//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/// @title YoMinter interface.
/// @dev Interface of a YoMinter contract.
interface IYoMinter {
    event ProofVerified(bytes32 signal);
    event Minted(uint256 tokenId, address to);

//     function mint(
//         uint256 root,
//         uint256 nullifierHash,
//         uint256 externalNullifier,
//         uint256[8] calldata proof,
//         string memory tokenURI
//     ) external;
}
