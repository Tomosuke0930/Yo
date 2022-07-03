// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./IGroup.sol";
contract Group is IGroup {
    // mapping(uint => Group) public groups;
    Group[40] public groups;
    /// やりたいことをまとめて開発を始めよう！！！

    
    // // groupsの配列を作成する
    // // Groupの配列をstorageに入れる
    // // pushしていく
    // function get(uint i) public view returns (uint) {
    //     return groups[i];
    // }

    // // Solidity can return the entire array.
    // // But this function should be avoided for
    // // arrays that can grow indefinitely in length.
    // function getArr() public view returns (uint[] memory) {
    //     return groups;
    // }

    // function push(uint i) public {
    //     // Append to array
    //     // This will increase the array length by 1.
    //     groups.push(i);
    // }

    // function pop() public {
    //     // Remove last element from array
    //     // This will decrease the array length by 1
    //     groups.pop();
    // }
}