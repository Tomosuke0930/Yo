// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import './interface/IMerkleTree.sol';
import './utils/Checkers.sol';

contract MerkleTree is IMerkleTree, Checkers {
    uint256 public constant nums = 49;
    MerkleTree[nums] public merkleTrees;

    /// get "index" of Merkle Tree
    function getMerkleTreesIndex(uint256 _groupId)
        private
        view
        returns (uint256 idsIndex)
    {
        for (uint256 i = 0; i < nums; i++) {
            if (_groupId == merkleTrees[i].groupId) return idsIndex = i;
        }
    }

    /// get "amounts" of Merkle Tree
    function getNodeCounts(uint256 _groupId)
        public
        view
        groupIdCheck(_groupId)
        returns (uint256 nodeCounts)
    {
        uint256 idsIndexs = getMerkleTreesIndex(_groupId);
        nodeCounts = merkleTrees[idsIndexs].nodes.length;
    }

    /// get "all nodes" of Merkle Tree
    function getAllNodes(uint256 _groupId)
        public
        view
        groupIdCheck(_groupId)
        returns (MerkleTreeNode[] memory allNodes)
    {
        uint256 idsIndexs = getMerkleTreesIndex(_groupId);
        allNodes = merkleTrees[idsIndexs].nodes;
    }

    /// get "all nodes" the same "level"
    function getNodesByLevel(uint256 _groupId, uint256 _level)
        private
        view
        returns (MerkleTreeNode[] memory nodes, uint256 counts)
    {
        MerkleTreeNode[] memory allNodes = getAllNodes(_groupId);
        for (uint256 i = 0; i < allNodes.length; i++) {
            if (_level == allNodes[i].level) {
                nodes[counts] = allNodes[i];
                counts++;
            }
        }
    }

    function getSameLevelNodesLength(uint256 _groupId, uint256 _level)
        external
        view
        returns (uint256 index)
    {
        (, index) = getNodesByLevel(_groupId, _level);
    }

    ///  get "node" by index
    function getNodeByIndex(
        uint256 _index,
        uint256 _groupId,
        uint256 _level
    ) private view returns (MerkleTreeNode memory node) {
        (MerkleTreeNode[] memory nodes, ) = getNodesByLevel(_groupId, _level);
        for (uint256 i = 0; i < nodes.length; i++) {
            if (_index == nodes[i].index) {
                node = nodes[i];
            }
        }
    }

    /// get "node" by hash
    function getNodeByHash(uint256 _groupId, bytes32 _hash)
        public
        view
        groupIdCheck(_groupId)
        returns (MerkleTreeNode memory node)
    {
        MerkleTreeNode[] memory allNodes = getAllNodes(_groupId);
        for (uint256 i = 0; i < allNodes.length; i++) {
            if (_hash == allNodes[i].data) node = allNodes[i];
        }
    }

    /// get "node" from groupId, level, index
    function getNode(
        uint256 _groupId,
        uint256 _level,
        uint256 _index
    )
        public
        view
        allCheck(_groupId, _level, _index)
        returns (MerkleTreeNode memory node)
    {
        node = getNodeByIndex(_index, _groupId, _level);
    }

    /// add Node
    function addNode(
        bytes32 _data,
        uint256 _groupId,
        bytes32 _groupName,
        uint256 _level,
        uint256 _index
    ) public {
        MerkleTreeNode memory node;
        uint256 treeIndex = getMerkleTreesIndex(_groupId);
        {
            node.data = _data;
            node.groupId = _groupId;
            node.groupName = _groupName;
            node.index = _index;
            node.level = _level;
        }
        merkleTrees[treeIndex].nodes.push(node);
    }

    /// update hash of Node
    function updateNode(
        uint256 _groupId,
        uint256 _level,
        uint256 _index,
        bytes32 _data
    ) public view {
        MerkleTreeNode memory node = getNode(_groupId, _level, _index);
        node.data = _data;
    }

    /// update "siblingHash" and "parent" of Node
    function updateNodeProperties(
        uint256 _groupId,
        uint256 _level,
        uint256 _index,
        uint256 _parentLevel,
        uint256 _parentIndex,
        bytes32 _siblingHash
    ) public view {
        MerkleTreeNode memory node = getNode(_groupId, _level, _index); //this is target node
        {
            node.siblingHash = _siblingHash;
            node.parent.groupId = _groupId;
            node.parent.level = _parentLevel;
            node.parent.index = _parentIndex;
        }
    }

    /// Collectively execute addNode func
    function batchAddNode(BatchAddNode[] memory txs) external {
        for (uint256 i; i < txs.length; i++) {
            addNode(
                txs[i].data,
                txs[i].groupId,
                txs[i].groupName,
                txs[i].level,
                txs[i].index
            );
        }
    }

    /// Collectively execute updateNode func
    function batchUpdateNode(BatchUpdateNode[] memory txs) external view {
        for (uint256 i; i < txs.length; i++) {
            updateNode(txs[i].groupId, txs[i].level, txs[i].index, txs[i].data);
        }
    }

    /// Collectively execute updateNodeProperties func
    function batchUpdateNodePro(BatchUpdateNodePro[] memory txs) external view {
        for (uint256 i; i < txs.length; i++) {
            updateNodeProperties(
                txs[i].groupId,
                txs[i].level,
                txs[i].index,
                txs[i].parentLevel,
                txs[i].parentIndex,
                txs[i].siblingHash
            );
        }
    }
}
