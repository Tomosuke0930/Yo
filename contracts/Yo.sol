//SPDX-License-Identifier: Unlicense
pragma solidity =0.8.4;

import "hardhat/console.sol";

contract Yo {
    address owner;
    address payable treasurer;

    event Transfer(address indexed sender, address indexed to, uint256 amount);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor(address payable _treasurer) payable {
        owner = msg.sender;
        treasurer = _treasurer;
    }

    function yoTransfer(address payable _to, uint256 _amount) external payable {
        require(msg.value == _amount, "Not save transfer amount and msg.value");
        uint256 taxedAmount = msg.value * 99 / 100; // 1% taxed
        _to.transfer(taxedAmount);
        emit Transfer(msg.sender, _to, _amount);
    }

    function sendToTreasure() external onlyOwner {
        address payable _treasurer = treasurer;
        _treasurer.transfer(address(this).balance);
    }
    
    function getBalance() external view returns (uint) {
        return address(this).balance;
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal {
        address oldOwner = owner;
        owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */

    modifier onlyOwner() {
        require(owner == msg.sender, "Ownable: caller is not the owner");
        _;
    }
}
