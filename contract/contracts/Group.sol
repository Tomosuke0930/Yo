// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./interface/IGroup.sol";
contract Group is IGroup {
    uint256 constant public size = 49;
    Group[size] public groups;
    uint256[size] public groupIds;
    uint256[size] public groupNullfiers;

    /// set up group
    function initialGroups(Group[size] calldata _groups) external {
        for(uint i = 0; i < size; i++) {
            groups[i] = _groups[i];
            groupIds[i] = _groups[i].id;
            groupNullfiers[i] = _groups[i].nullfier;
        }
    }

    function getGroups() external view returns(Group[49] memory _groups) {
        _groups = groups;
    }

    /// get "group" from _id
    function getGroup(uint256 _id) external view returns (Group memory group) {
        uint idsIndex;
        for(uint i = 0; i < size; i++) {
            if(_id == groupIds[i]) idsIndex = i;
        }
        group = groups[idsIndex];

    }
}

