// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

abstract contract Checkers {

    /************************************************
     *  Private functions
     ***********************************************/
    function _levelCheck(uint256 _level) private pure {
        require(_level <= 16, 'Error');
    }

    function _groupIdCheck(uint256 _groupId) private pure {
        require(_groupId <= 49, 'Error');
    }
    
    function _indexCheck(uint256 _index) private pure {
        require(_index <= 2**16, 'Error');
    }
    
    /************************************************
     *  Modifiers
     ***********************************************/

    modifier groupIdCheck(uint256 _groupId) {
        _groupIdCheck(_groupId);
        _;
    }

    modifier levelCheck(uint256 _level) {
        _levelCheck(_level);
        _;
    }

    modifier indexCheck(uint256 _index) {
        _indexCheck(_index);
        _;
    }

    modifier allCheck(
        uint256 _groupId,
        uint256 _level,
        uint256 _index
    ) {
        _groupIdCheck(_groupId);
        _levelCheck(_level);
        _indexCheck(_index);
        _;
    }
}
