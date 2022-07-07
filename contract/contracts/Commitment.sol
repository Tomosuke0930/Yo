// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./interface/ICommitment.sol";
contract Commitment is ICommitment {
    mapping(address =>Commitment[])userCommitments;

    // commitment is so long 
    // commitments => coms

    /// get user's commitment length
    function getComsLength(address _address) public view returns(uint length) {
        length = userCommitments[_address].length;
    }

    /// get user's all commitments
    function getAllComs(address _address) public view returns(Commitment[] memory commitments) {
        uint length = getComsLength(_address);
        for(uint i=0;i<length;i++) {
            commitments[i] = userCommitments[_address][i];
        }
    }

    /// get target commitment
    function getTargetCom(address _address, uint256 _id) private view returns(Commitment memory commitment) {
        uint length = getComsLength(_address);
        Commitment[] memory commtiments = getAllComs(_address);
        uint targetIndex;
        for(uint i=0;i<length;i++) {
            if(commtiments[i].id == _id) targetIndex = i;
        }
        commitment = userCommitments[_address][targetIndex];
    }

    /// add commitment
    function addCom(address _address,uint256 _id, bytes32 _data,uint256 _groupId,string calldata _userId,uint256 _createdAt) external {
        userCommitments[_address].push(Commitment(_id,_userId,_groupId,_data,"",address(0),_createdAt));
    }

    /// update commitment
    function updateCom(string calldata _metadta, address _mintAddress, address _address, uint256 _id) external view {
        Commitment memory commitment = getTargetCom(_address, _id);
        commitment.metadata = _metadta;
        commitment.mintAddress = _mintAddress;
    }

}

