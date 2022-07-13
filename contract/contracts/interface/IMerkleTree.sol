// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import './IMerkleTreeNode.sol';

// -----The illsutrate of Merkle Tree-----
/**
 * level 3            [0]               The top node is called "merkle root"
 * level 2      [0]          [1]
 * level 1   [0]   [1]    [2]   [3]     [] = node
 * level 0  [0][1][2][3][4][5][6][7]    [indexNumber]
 *
 **/ 
// ---------------------------------------

/// @title Merkle tree node interface for Yo V1
/// @notice The type of merkle tree node in Yo V1
interface IMerkleTree is IMerkleTreeNode {
    // Merkle Tree is consist of a lot of nodes.
    struct MerkleTree {
        // The identifier of Merkle Tree
        uint256 groupId;
        // The nodes of this Merkle Tree
        MerkleTreeNode[] nodes;
    }
}
