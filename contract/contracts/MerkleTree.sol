// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import './interface/IMerkleTree.sol';
import './utils/Checkers.sol';

contract MerkleTree is IMerkleTree, Checkers {
    mapping(address => mapping(uint256 => MerkleTreeNode)) userNodes;

    /************************************************
     *  Variables & Constant 
     ***********************************************/

    uint256 public constant nums = 49;
    MerkleTree[nums] public merkleTrees;

    /************************************************
     *  Getters count for something of Mekrle Tree 
     ***********************************************/

    /// get "index" of Merkle Tree
    function getMerkleTreesIndex(uint256 _groupId) private view returns (uint idsIndex) {
        for (uint256 i = 0; i < nums; i++) {
            if (_groupId == merkleTrees[i].groupId) return idsIndex = i;
        }
    }

    function getSameLevelNodesLength(uint256 _groupId, uint256 _level) external view returns (uint256 index) {
        (, index) = getNodesByLevel(_groupId, _level);
    }

    /// get "amounts" of Merkle Tree
    function getNodeCounts(uint256 _groupId) public view groupIdCheck(_groupId) returns (uint256 nodeCounts) {
        uint256 idsIndexs = getMerkleTreesIndex(_groupId);
        nodeCounts = merkleTrees[idsIndexs].nodes.length;
    }

    /************************************************
     *  Getters info for info of Mekrle Tree Node
     ***********************************************/

    /// get "all nodes" of Merkle Tree
    function getAllNodes(uint256 _groupId) public view groupIdCheck(_groupId) returns (MerkleTreeNode[] memory allNodes) {
        uint256 idsIndexs = getMerkleTreesIndex(_groupId);
        allNodes = merkleTrees[idsIndexs].nodes;
    }

    /// get "all nodes" the same "level"
    function getNodesByLevel(uint256 _groupId, uint256 _level) private view returns (MerkleTreeNode[] memory nodes, uint256 counts) {
        MerkleTreeNode[] memory allNodes = getAllNodes(_groupId);
        for (uint256 i = 0; i < allNodes.length; i++) {
            if (_level == allNodes[i].level) {
                nodes[counts] = allNodes[i];
                // nodes.push(allNodes[i]);
                counts++;
            }
        }
    }

    /// get "node" by hash
    function getNodeByHash(uint256 _groupId, bytes32 _hash) public view groupIdCheck(_groupId) returns (MerkleTreeNode memory node) {
        MerkleTreeNode[] memory allNodes = getAllNodes(_groupId);
        for (uint256 i = 0; i < allNodes.length; i++) {
            if (_hash == allNodes[i].hash) node = allNodes[i];
        }
    }

    /// get "node" from groupId, level, index
    function getNode(
        uint256 _groupId,
        uint256 _level,
        uint256 _index
    ) public view allCheck(_groupId, _level, _index) returns (MerkleTreeNode memory node) {
        (MerkleTreeNode[] memory nodes, ) = getNodesByLevel(_groupId, _level);
        for (uint256 i = 0; i < nodes.length; i++) {
            if (_index == nodes[i].index) {
                node = nodes[i];
            }
        }
    }

    /************************************************
     *  Add Node
     ***********************************************/
    /// add Node
    function addNode(
        address _signer,
        bytes32 _hash,
        uint256 _groupId,
        bytes32 _groupName,
        uint128 _index,
        uint128 _level
    ) public {
        MerkleTreeNode memory node;
        uint256 treeIndex = getMerkleTreesIndex(_groupId);
        {
            node.hash = _hash;
            node.groupId = _groupId;
            node.groupName = _groupName;
            node.index = _index;
            node.level = _level;
            /*
            gas saving
            - Gas Fee
            1. from Zero to nonZero > 2.from nonZero to nonZero

            refer to https://github.com/wolflo/evm-opcodes/blob/main/gas.md#a7-sstore
            1. 22100 + (5000 - 4800) ＝ 22300 gas
            2. 5000 + 5000 ＝ 10000 gas
             */
            node.parent.groupId = 49; // The max value of groupId is 48 from group.json.
            node.parent.index = 2**16+1; // The max value of parentIndex is 2^16 because MAX_TREE_DEPTH is 16 
            node.parent.level = 17; // The max value of level is 16 because MAX_TREE_DEPTH is 16.
        }
        merkleTrees[treeIndex].nodes.push(node);
        userNodes[_signer][_groupId] = node;///check
    }
    
    /// Collectively execute addNode func
    function batchAddNode(address _signer, BatchAddNode[] memory txs) external {
        for (uint256 i; i < txs.length; i++) {
            addNode(_signer, txs[i].hash, txs[i].groupId, txs[i].groupName, txs[i].level, txs[i].index);
        }
    }

    /************************************************
     *  Update Node
     ***********************************************/

    /// update hash of Node
    function updateNodeHash(
        address _signer,
        uint256 _groupId,
        bytes32 _hash
    ) public  {
        // MerkleTreeNode memory node = getNode(_groupId, _level, _index);
        MerkleTreeNode storage node = userNodes[_signer][_groupId];
        node.hash = _hash;
    }

    /// update "siblingHash" and "parent" of Node
    function updateNodeProperties(
        address _signer,
        uint256 _groupId,
        uint128 _parentLevel,
        uint128 _parentIndex,
        bytes32 _siblingHash
    ) public {
        // MerkleTreeNode memory node = getNode(_groupId, _level, _index); //this is target node
        MerkleTreeNode storage node = userNodes[_signer][_groupId];
        {
            node.siblingHash = _siblingHash;
            node.parent.groupId = _groupId;
            node.parent.level = _parentLevel;
            node.parent.index = _parentIndex;
        }
    }

    /// Collectively execute updateNode func
    function batchUpdateNode(address _signer,BatchUpdateNode[] memory txs) external  {
        for (uint256 i; i < txs.length; i++) {
            updateNodeHash(_signer, txs[i].groupId,txs[i].hash);
        }
    }

    /// Collectively execute updateNodeProperties func
    function batchUpdateNodePro(address _signer,BatchUpdateNodePro[] memory txs) external {
        for (uint256 i; i < txs.length; i++) {
            updateNodeProperties(_signer,txs[i].groupId, txs[i].parentLevel, txs[i].parentIndex, txs[i].siblingHash);
        }
    }
}
