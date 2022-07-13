// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/// @title Commitment interface for Yo V1
/// @notice The type of Commitment in Yo V1
interface ICommitment  {

    /// @notice - Commitment is used to prove the member of groups in Semaphore library: http://semaphore.appliedzkp.org/
    /// @dev - Semaphore allows Ethereum users to prove their membership of a group using Zero Knowledge Proof
    /// @param id - The identifier of commitment 
    /// @param userId - The identifier of user
    /// @param groupId - The idnetifier of group, each group has own Merkle Tree
    /// @param data - The hash of commitment
    /// @param metadata - The metadata is used to mint NFT
    /// @param mintAddress - The destination address to send NFT
    /// @param createdAt - The time creating this commitment
    struct Commitment {
        uint256 id;
        string userId;
        uint256 groupId;
        bytes32 hash;
        string metadata;
        address mintAddress;
        uint256 createdAt;
    }
}