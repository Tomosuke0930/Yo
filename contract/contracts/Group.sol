// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./interface/IGroup.sol";
contract Group is IGroup {
    uint256 constant public size = 49;
    Group[size] public groups;
    uint256[size] public groupIds;
    uint256[size] public groupNullfiers;

    function initialGroups(Group[size] calldata _groups) external {
        for(uint i = 0; i < size; i++) {
            groups[i] = _groups[i];
            groupIds[i] = _groups[i].id;
            groupNullfiers[i] = _groups[i].nullfier;
        }
    }

    function getIdsIndex(uint256 _id) private view returns (uint idsIndex) {
        for(uint i = 0; i < size; i++) {
            if(_id == groupIds[i]) return idsIndex = i;
        }
    }

    function getGroup(uint256 _id) private view returns(Group memory group) {
        uint idsIndexs = getIdsIndex(_id);
        group = groups[idsIndexs];
    }
}

