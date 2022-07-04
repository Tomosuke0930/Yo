// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IMerkleTreeNode  {
    struct MerkleTreeNode {
        uint256 id;
        bytes32 data;//hash
        uint256 groupId;
        string groupName;
        uint256 index;
        uint256 level;
        string siblingHash;
        ParentLocate parent; 
    }
    struct ParentLocate {
        uint256 groupId;
        uint256 index;
        uint256 level;
    }
    /// id, level, index => nodeを取得する
}