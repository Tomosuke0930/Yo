// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./interface/ICommitment.sol";
contract Commitment is ICommitment {
    mapping(address =>Commitment[])userCommitments;/// pushの方が楽そう

    function getCommitmentsLength(address _address) public view returns(uint length) {
        length = userCommitments[_address].length;
    }

    function getAllCommitments(address _address) private view returns(Commitment[] memory commitments) {
        uint length = getCommitmentsLength(_address);
        for(uint i=0;i<length;i++) { ///ここはどうするのか？考える
            commitments[i] = userCommitments[_address][i];
        }
    }

    function getTargetCommitment(address _address, uint256 _id) private view returns(Commitment memory commitment) {
        uint length = getCommitmentsLength(_address);
        Commitment[] memory commtiments = getAllCommitments(_address);
        uint targetIndex;
        for(uint i=0;i<length;i++) {
            if(commtiments[i].id == _id) targetIndex = i;
        }
        commitment = userCommitments[_address][targetIndex];
    }

    function updateCommitment(string calldata _metadta, address _mintAddress, address _address, uint256 _id) public view {
        Commitment memory commitment = getTargetCommitment(_address, _id);
        commitment.metadata = _metadta;
        commitment.mintAddress = _mintAddress;
    }

    function addCommitment(address _address,uint256 _id, bytes32 _data,uint256 _groupId,string calldata _userId,uint256 _createdAt) public {
        userCommitments[_address].push(Commitment(_id,_userId,_groupId,_data,"",address(0),_createdAt));
    }
}

