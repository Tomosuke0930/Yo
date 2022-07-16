// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface ICommitment {
    /// type of commitment
    struct Commitment {
        uint256 id;
        string userId;
        uint256 groupId;
        bytes32 data;
        string metadata;
        address mintAddress;
        uint256 createdAt;
    }
}
