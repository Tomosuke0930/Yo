// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IGroup  {
    struct Group {
        bytes32 id;
        bytes32 nullfier;
        bytes32 name;
        uint32 criteria;
        bytes32 attr_key;
    }
}
