// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/// @title Group interface for Yo V1
/// @notice The type of Group in Yo V1
interface IGroup  {

    /// @param id - The identifier of group 
    //@audit check
    /// @param nullifier - The private values of the Semaphore identity.[WIP]
    /// @param name - The name of this group
    /// @param criteria - This value is in group.json file. This value show us the proficiency of your skill
    /// @param attr_key - This value is in group.json file. This value used to identify for NGT
    struct Group {
        uint256 id;
        uint256 nullifier;
        string name;
        uint256 criteria;
        string attr_key;
    }
}
