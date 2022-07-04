// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./interface/IMerkleTree.sol";
import "./utils/Checkers.sol";
contract MerkleTree is IMerkleTree, Checkers {
    uint256 constant public nums = 49;
    MerkleTree[nums] public merkleTrees;
/** 
// addNode
// updateNode
// update node data (check data? or other info)

 */
    function getMerkleTreesIndex(uint256 _groupId) 
        private
        view
        returns(uint idsIndex) 
    {
        for(uint i = 0; i < nums; i++) {
            if(_groupId == merkleTrees[i].groupId) return idsIndex = i;
        }
    }

    function getNodeCounts(uint256 _groupId) 
        public
        view
        groupIdCheck(_groupId) returns(uint256 nodeCounts) 
    {
        uint256 idsIndexs = getMerkleTreesIndex(_groupId);
        nodeCounts = merkleTrees[idsIndexs].nodes.length;
    }

    function getAllNodes(uint256 _groupId) 
        public 
        view 
        groupIdCheck(_groupId) 
        returns(MerkleTreeNode[] memory allNodes) 
    {
        uint256 idsIndexs = getMerkleTreesIndex(_groupId);
        allNodes = merkleTrees[idsIndexs].nodes;
    }
    
    function getNodesByLevel(uint _groupId, uint _level) 
        private
        view
        returns(MerkleTreeNode[] memory nodes) 
    {
        MerkleTreeNode[] memory allNodes = getAllNodes(_groupId);
        uint counts;
        for(uint i = 0; i < allNodes.length; i++) {
            if(_level == allNodes[i].level) {
                nodes[counts] = allNodes[i];
                counts++;
            }
        }
    }

    function getNodeByIndex(uint _index, uint _groupId, uint _level) 
        private
        view
        returns(MerkleTreeNode memory node) 
    {
        MerkleTreeNode[] memory nodes = getNodesByLevel(_groupId, _level);
        for(uint i = 0; i < nodes.length; i++) {
            if(_index == nodes[i].index) {
                node = nodes[i];
            }
        }
    }

    function getNodeByHash(uint256 _groupId, bytes32 _hash) 
        public 
        view 
        groupIdCheck(_groupId) 
        returns(MerkleTreeNode memory node) 
    {
        MerkleTreeNode[] memory allNodes = getAllNodes(_groupId);
        for(uint i = 0; i< allNodes.length; i++) {
            if(_hash == allNodes[i].data) node = allNodes[i];
        }
    }

    function getNode(uint256 _groupId, uint256 _level, uint256 _index)
        public 
        view 
        allCheck(_groupId, _level, _index) 
        returns(MerkleTreeNode memory node) 
    {
        node = getNodeByIndex(_index, _groupId, _level);
    }
}