// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IGroup {
    struct Group {
        uint256 id;
        uint256 nullfier;
        string name;
        uint256 criteria;
        string attr_key;
    }
}
/**
    group.example
  {
    "name": "100+ public repos",
    "criteria": 100,
    "attr_key": "public_repos"
  }
 */
