// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import '../interface/IGroup.sol';
import {AppStorage} from "../libraries/LibAppStorage.sol";


contract Group is IGroup {
    /************************************************
     *  Variable and Constraint
     ***********************************************/

    // uint256 public constant s.groups.length = 49;
    // Group[size] public groups;
    // uint256[size] public groupIds;
    // uint256[size] public groupNullfiers;
    AppStorage internal s;


    /************************************************
     *  Initialization
     ***********************************************/

    function initialGroups(Group[s.groups.length] calldata _groups) external {
        for (uint256 i = 0; i < s.groups.length; i++) {
            s.groups[i] = _groups[i];
            s.groupIds[i] = _groups[i].id;
            s.groupNullfiers[i] = _groups[i].nullfier;
        }
    }

    /************************************************
     *  Getters
     ***********************************************/
     
    function getGroups() external view returns (Group[49] memory _groups) {
        _groups = groups;
    }

    /// get "group" from _id
    function getGroup(uint256 _id) external view returns (Group memory group) {
        uint256 idsIndex;
        for (uint256 i = 0; i < s.groups.length; i++) {
            if (_id == groupIds[i]) idsIndex = i;
        }
        group = s.groups[idsIndex];
    }
}
