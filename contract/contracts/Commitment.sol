// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import './interface/ICommitment.sol';

contract Commitment is ICommitment {

    /************************************************
     *  Variable and Constraint
     ***********************************************/

    mapping(address => mapping(uint256 =>Commitment)) userCommitments;
    uint256 constant MAX_COMMITMENT_LENGTH = 9;
    
    /************************************************
     *  Getters
     ***********************************************/

    /**
     * @notice Gets the last day of the month
     * @param _address is user address
     * @param _id is commitment identfier
     * @return commitment from the userCommitment mapping 
     */
    function getTargetCommitment(address _address, uint256 _id) external view returns (Commitment memory commitment) {
        commitment = userCommitments[_address][_id];
    }

    /************************************************
     *  Add
     ***********************************************/

    /**
     * @notice Add commitment
     * @param _address is user address
     * @param _id is commitment identfier
     * @param _hash is commitment hash
     * @param _groupId is identifier of group from group.json
     * @param _userId is user identifier
     * @param _createdAt is the time when creating this commitment 
     */
    function addCommitment(
        address _address,
        uint256 _id,
        bytes32 _hash,
        bytes32 _userId,
        bytes16 _groupId,
        uint256 _createdAt
    ) external {
        userCommitments[_address][_id] = Commitment(_id, _userId, _hash,address(0), _createdAt,_groupId,"");
    }

    /************************************************
     *  Update
     ***********************************************/

    /**
     * @notice Update commitment
     * @param _metadta is metadata of NFT
     * @param _address is user address to send NFT
     * @param _address is user address
     * @param _id is commitment identfier
     */
    function updateCommitment(
        string calldata _metadta,
        address _mintAddress,
        address _address,
        uint256 _id
    ) external {
        Commitment storage commitment = userCommitments[_address][_id];
        commitment.metadata = _metadta;
        commitment.mintAddress = _mintAddress;
    }
}
