// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC173 {

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    function owner() external view returns(address owner_);
    function tranferOwnership(address _newOwner) external;
}