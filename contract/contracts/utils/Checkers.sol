// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
abstract contract Checkers {
    function _groupIdCheck(uint256 _groupId) internal pure {
        require(_groupId <= 49,"Error");
    }

    modifier groupIdCheck(uint256 _groupId) {
        _groupIdCheck(_groupId);
        _;
    }

    function _levelCheck(uint256 _level) internal pure {
        require(_level <= 49,"Error");
    }
    
    modifier levelCheck(uint256 _level) {
        _levelCheck(_level);
        _;
    }

    function _indexCheck(uint256 _index) internal pure {
        require(_index <= 49,"Error");
    }

    modifier indexCheck(uint256 _index) {
        _indexCheck(_index);
        _;
    }

    modifier allCheck(uint256 _groupId, uint256 _level, uint256 _index) {
        _groupIdCheck(_groupId);
        _levelCheck(_level);
        _indexCheck(_index);
        _;
    }

}

