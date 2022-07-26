// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../interface/IGroup.sol';
import '../interface/ICommitment.sol';
import '../interface/IMerkleTree.sol';

uint256 constant nums = 49;

struct Group {
    uint256 id;
    uint256 nullfier;
    string name;
    uint256 criteria;
    string attr_key;
}

struct Commitment {
    uint256 id;
    string userId;
    uint256 groupId;
    bytes32 data;
    string metadata;
    address mintAddress;
    uint256 createdAt;
}


struct MerkleTreeNode {
    uint256 id; 
    bytes32 hash; //hash
    uint256 groupId;
    bytes32 groupName;
    uint256 index;
    uint256 level;
    bytes32 siblingHash;
    /// next to node's hash, for[2],siblingHash is [3]'s hash
    ParentLocate parent;
}
struct ParentLocate {
    uint256 groupId;
    uint256 index;
    uint256 level;
}

struct BatchAddNode {
    bytes32 hash;
    uint256 groupId;
    bytes32 groupName;
    uint256 index;
    uint256 level;
}

struct BatchUpdateNode {
    bytes32 hash;
    uint256 groupId;
    uint256 index;
    uint256 level;
}

struct BatchUpdateNodePro {
    uint256 groupId;
    uint256 index;
    uint256 level;
    uint256 parentIndex;
    uint256 parentLevel;
    bytes32 siblingHash;
}

struct MerkleTree {
    uint256 groupId;
    MerkleTreeNode[] nodes;
}

struct AppStorage {
    // IMerkleTree
    mapping(address => mapping(uint256 => MerkleTreeNode)) userNodes;
    MerkleTree[nums] merkleTrees;
    // Group
    Group[nums] groups;
    uint256[nums] groupIds;
    uint256[nums] groupNullfiers;
    // Commitment
    mapping(address => Commitment[]) userCommitments;
}
