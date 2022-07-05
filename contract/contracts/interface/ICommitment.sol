// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface ICommitment  {
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