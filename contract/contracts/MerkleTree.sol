// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import './interface/IMerkleTree.sol';
import './utils/Checkers.sol';
import './utils/AddressMinimal.sol';

contract MerkleTree is IMerkleTree, Checkers {


    mapping(address => mapping(bytes16 => MerkleTreeNode)) userNodes;
    using Address for address;

    /************************************************
     *  Variables & Constant 
     ***********************************************/

    uint256 public constant nums = 49;
    MerkleTree[nums] public merkleTrees;

    /************************************************
     *  Getters count for something of Mekrle Tree 
     ***********************************************/

    /**
     * @notice Gets the index of target merkle tree from groupId
     * @param _groupId is the identifier of the target merkle tree
     * @return idsIndex is a index number of target merkle tree
     */
    function getMerkleTreesIndex(bytes16 _groupId) private view returns (uint idsIndex) {
        for (uint256 i = 0; i < nums; i++) {
            if (_groupId == merkleTrees[i].groupId) return idsIndex = i;
        }
    }

    /**
     * @notice Gets the length of same level merkle tree nodes
     * @param _groupId is the identifier of the target merkle tree
     * @param _level is the target level of merkle tree. 
     * >>> If you cannot understand the word, you should go to IMerkleTreeNode.sol. You can see illsutrate of Merkle Tree
     * @return counts is the amount of same level's node in target merkle tree
     */
    function getSameLevelNodesLength(bytes16 _groupId, uint256 _level) external view returns (uint256 counts) {
        (, counts) = getNodesByLevel(_groupId, _level);
    }

    /**
     * @notice Gets the amount of nodes from groupId
     * @param _groupId is the identifier of the target merkle tree
     * @return nodeCounts from the userCommitment mapping 
     */
    function getNodeCounts(bytes16 _groupId) external view returns (uint256 nodeCounts) {
        uint256 idsIndexs = getMerkleTreesIndex(_groupId);
        nodeCounts = merkleTrees[idsIndexs].nodes.length;
    }

    /************************************************
     *  Getters info for info of Mekrle Tree Node
     ***********************************************/

    /**
     * @notice Gets all nodes from groupId
     * @param _groupId is the identifier of the target merkle tree
     * @return allNodes is the all nodes of target merkle tree
     */
    function getAllNodes(bytes16 _groupId) public view returns (MerkleTreeNode[] memory allNodes) {
        uint256 idsIndexs = getMerkleTreesIndex(_groupId);
        allNodes = merkleTrees[idsIndexs].nodes;
    }

    /**
     * @notice Gets some nodes from level
     * @param _groupId is the identifier of the target merkle tree
     * @param _level is the target level of merkle tree. 
     * >>> If you cannot understand the word, you should go to IMerkleTreeNode.sol. You can see illsutrate of Merkle Tree
     * @return nodes is the all nodes the same level of target node
     * @return counts is the number of nodes in the target merkle tree
     */
    function getNodesByLevel(bytes16 _groupId, uint256 _level) private view returns (MerkleTreeNode[] memory nodes, uint256 counts) {
        MerkleTreeNode[] memory allNodes = getAllNodes(_groupId);
        for (uint256 i = 0; i < allNodes.length; i++) {
            if (_level == allNodes[i].level) {
                nodes[counts] = allNodes[i];
                // nodes.push(allNodes[i]);
                counts++;
            }
        }
    }

    /**
     * @notice Gets some nodes from hash
     * @param _groupId is the identifier of the target merkle tree
     * @param _hash is the target's one.
     * >>> If you cannot understand the word, you should go to IMerkleTreeNode.sol. You can see illsutrate of Merkle Tree
     * @return node is your target node
     */
    function getNodeByHash(bytes16 _groupId, bytes32 _hash) external view returns (MerkleTreeNode memory node) {
        MerkleTreeNode[] memory allNodes = getAllNodes(_groupId);
        for (uint256 i = 0; i < allNodes.length; i++) {
            if (_hash == allNodes[i].hash) node = allNodes[i];
        }
    }

    /**
     * @notice Get a node from level
     * @param _groupId is the identifier of the target merkle tree
     * @param _level is the target level of merkle tree. 
     * @param _index is the index of node.
     * >>> If you cannot understand the word, you should go to IMerkleTreeNode.sol. You can see illsutrate of Merkle Tree
     * @return node is target node
     */
    function getNode(
        bytes16 _groupId,
        uint256 _level,
        uint256 _index
    ) external view returns (MerkleTreeNode memory node) {
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
    /**
     * @notice Add Node of Merkle tree
     * @param _signer is the executer of this function in other words, msg.sender
     * @param _hash is the target's one
     * @param _groupId is the identifier of the target merkle tree
     * @param _groupName is the name of this group
     * @param _index is the index of node.
     * @param _level is the target level of merkle tree. 
     */
    function addNode(
        address _signer,
        bytes32 _hash,
        bytes16 _groupId,
        bytes32 _groupName,
        uint64 _index,
        uint64 _level
    ) private {
        require(_signer.isEOA(),"You are Contract Address!");
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
            node.parent.groupId = _groupId; // The max value of groupId is 49 from group.json.
            node.parent.index = 2**16+1; // The max value of parentIndex is 2^16 because MAX_TREE_DEPTH is 16 
            node.parent.level = 17; // The max value of level is 16 because MAX_TREE_DEPTH is 16.
        }
        merkleTrees[treeIndex].nodes.push(node);
        userNodes[_signer][_groupId] = node;
    }
    
    /**
     * @notice Executing addNode function collectively
     * @param _signer is the executer of this function in other words, msg.sender
     * @param txs is the array stroing the parameter to execute addNode function
     */
    function batchAddNode(address _signer, BatchAddNode[] memory txs) external {
        for (uint256 i; i < txs.length; i++) {
            addNode(_signer, txs[i].hash, txs[i].groupId, txs[i].groupName, txs[i].level, txs[i].index);
        }
    }

    /************************************************
     *  Update Node
     ***********************************************/

    /**
     * @notice Update node hash
     * @param _signer is the executer of this function in other words, msg.sender
     * @param _groupId is the identifier of the target merkle tree
     * @param _hash is the target's one.
     */
    function updateNodeHash(
        address _signer,
        bytes16 _groupId,
        bytes32 _hash
    ) private {
        require(_signer.isEOA(),"You are Contract Address!");
        MerkleTreeNode storage node = userNodes[_signer][_groupId];
        node.hash = _hash;
    }

    /**
     * @notice Update node parent parameters
     * @param _signer is the executer of this function in other words, msg.sender
     * @param _groupId is the identifier of the target merkle tree
     * @param _parentLevel is the level of parent node
     * @param _parentIndex is the index of parent node
     * @param _siblingHash is the next to node
     * >>> If you cannot understand the word, you should go to IMerkleTreeNode.sol. You can see illsutrate of Merkle Tree
     */
    function updateNodeProperties(
        address _signer,
        bytes16 _groupId,
        uint64 _parentLevel,
        uint64 _parentIndex,
        bytes32 _siblingHash
    ) private {
        MerkleTreeNode storage node = userNodes[_signer][_groupId];
        require(_signer.isEOA(),"You are Contract Address!");
        {
            node.siblingHash = _siblingHash;
            node.parent.groupId = _groupId;
            node.parent.level = _parentLevel;
            node.parent.index = _parentIndex;
        }
    }

    /**
     * @notice Executing updateNode function collectively
     * @param _signer is the executer of this function in other words, msg.sender
     * @param txs is the array stroing the parameter to execute updateNode function
     */
    function batchUpdateNode(address _signer,BatchUpdateNode[] memory txs) external  {
        for (uint256 i; i < txs.length; i++) {
            updateNodeHash(_signer, txs[i].groupId, txs[i].hash);
        }
    }

    /**
     * @notice Executing updateNodeProperties function collectively
     * @param _signer is the executer of this function in other words, msg.sender
     * @param txs is the array stroing the parameter to execute updateNodeProperties function
     */
    function batchUpdateNodePro(address _signer,BatchUpdateNodePro[] memory txs) external {
        for (uint256 i; i < txs.length; i++) {
            updateNodeProperties(_signer,txs[i].groupId, txs[i].parentLevel, txs[i].parentIndex, txs[i].siblingHash);
        }
    }
}
