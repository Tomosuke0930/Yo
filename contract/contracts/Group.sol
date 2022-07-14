// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import './interface/IGroup.sol';

contract Group is IGroup {


    /************************************************
     *  Variable and Constraint
     ***********************************************/

    // @dev
    //  49 is come from the amounts of object. /frontend/scripts/groups.json
    uint256 public constant size = 49;
    Group[size] public groups;
    uint256[size] public groupIds;
    uint256[size] public groupNullfiers;

    /************************************************
     *  Initialization
     ***********************************************/

    /**
     * @notice Initializing groups
     * @param _groups is the objects of groups.json
     */
    function initialGroups(Group[size] calldata _groups) external {
        for (uint256 i = 0; i < size; i++) {
            groups[i] = _groups[i];
            groupIds[i] = _groups[i].id;
            groupNullfiers[i] = _groups[i].nullifier;
        }
    }

    /************************************************
     *  Getters
     ***********************************************/
    
    /**
     * @notice Initializing groups
     * @return _allGroups is retrn all gropus(49 groups) 
     */
    function getGroups() external view returns (Group[size] memory _allGroups) {
        _allGroups = groups;
    }

    /**
     * @notice get a group from id
     * @return _group is retrn target gropus(1 group) 
     */
    function getGroup(uint256 _id) external view returns (Group memory _group) {
        uint256 idsIndex;
        for (uint256 i = 0; i < size; i++) {
            if (_id == groupIds[i]) idsIndex = i;
        }
        _group = groups[idsIndex];
    }
}
