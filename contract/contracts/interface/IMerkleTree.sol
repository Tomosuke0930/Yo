// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./IMerkleTreeNode.sol";
interface IMerkleTree is IMerkleTreeNode {
    struct MerkleTree {
        uint256 groupId;
        MerkleTreeNode[] nodes;
        // depth? index?
    }
}