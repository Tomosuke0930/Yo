// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import './IMerkleTreeNode.sol';

/**
 * level 3            [0]                        ↑
 * level 2      [0]          [1]                 |
 * level 1   [0]   [1]    [2]   [3]              | 　Merkle Tree
 * level 0  [0][1][2][3][4][5][6][7] // [index]  |
 *              groupId = 12                     ↓
 */
interface IMerkleTree is IMerkleTreeNode {
    struct MerkleTree {
        uint256 groupId;
        MerkleTreeNode[] nodes;
    }
}
