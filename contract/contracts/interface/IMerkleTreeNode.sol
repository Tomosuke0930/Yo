// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
    /**
     * level 3            [0]
     * level 2      [0]          [1]
     * level 1   [0]   [1]    [2]   [3]
     * level 0  [0][1][2][3][4][5][6][7] // [index]
     */
     /// [0] is Node

interface IMerkleTreeNode  {

    struct MerkleTreeNode {
        uint256 id;///不要だったら消す`${MODEL_MERKLE_TREE}#${groupId}_0_${currentIndex}`
        bytes32 data;//hash
        uint256 groupId;
        string groupName;
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
}