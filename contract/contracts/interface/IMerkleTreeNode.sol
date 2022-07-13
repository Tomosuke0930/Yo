// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// -----The illsutrate of Merkle Tree-----
/**
 * level 3            [0]               The top node is called "merkle root"
 * level 2      [0]          [1]        [] = node
 * level 1   [0]   [1]    [2]   [3]     SiblingHash is next to node's hash e.g)[1] is siblingHash of [0] 
 * level 0  [0][1][2][3][4][5][6][7]    [indexNumber]
 *
 **/ 
// ---------------------------------------

/// @title Merkle tree node interface for Yo V1
/// @notice The type of merkle tree node in Yo V1

interface IMerkleTreeNode {
    struct MerkleTreeNode {
        // 32 byte slot 0, partial fill
        // The hash of node
        bytes32 hash;
        // 32 byte slot 1, partial fill
        // The Name of group
        bytes32 groupName;  
        // 32 byte slot 2, partial fill
        // The sibling hash of this node. The explaination of sibling hash is mentioned above.
        bytes32 siblingHash;
        // 32 byte slot 3, partial fill
        // The groupId for this Merkle Tree 
        uint256 groupId;
        // 16 byte slot 4.
        // The index of node
        uint128 index;
        // 16 byte slot 4, partial fill
        // The level of node
        uint128 level;
        ParentLocate parent; 
    }
    
    // Cannot use recursive type so, this struct used to get the location of parent node
    struct ParentLocate {
        // 32 byte slot 0, partial fill
        // The groupId for this Merkle Tree 
        uint256 groupId;
        // 16 byte slot 1.
        // The index of node
        uint128 index;
        // 16 byte slot 1, partial fill.
        // The level of node
        uint128 level;
    }

    // Used to execute addNode function on MerkleTree.sol collectively.
    // This parameters is the one of MerkleTreeNode struct
    struct BatchAddNode {
        bytes32 hash;
        bytes32 groupName;  
        uint256 groupId;
        uint128 index;
        uint128 level;
    }

    // Used to execute updateNode function on MerkleTree.sol collectively.
    // This parameters is the one of MerkleTreeNode struct
    struct BatchUpdateNode {
        bytes32 hash;
        uint256 groupId;
        uint128 index;
        uint128 level;
    }

    // used to execute updateNodeProperties function on MerkleTree.sol collectively.
    // This parameters is the one of MerkleTreeNode struct
    struct BatchUpdateNodePro {
        bytes32 siblingHash;
        uint256 groupId;
        uint128 parentIndex;
        uint128 parentLevel;
    }
}
