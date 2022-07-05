//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;


contract YoV1 {
    address owner;
    address payable treasurer;
    mapping(address => uint256) reviews;
    mapping(address => uint256) counts;
    // User Reviewed
    // Yoee is like a teacher
    // Yoer is like a student
    event Transfer(address indexed sender, address indexed to, uint256 amount);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event Reviews(address indexed yoee, uint review);
    event Counts(address indexed yoee, uint counts);

    constructor(address payable _treasurer) payable {
        owner = msg.sender;
        treasurer = _treasurer;
    }
        
    function getCounts(address yoee) public view returns (uint yoeeCount) {
        yoeeCount =  counts[yoee];
    }
    
    function getReview(address yoee) public view returns (uint yoeeReview) {
        yoeeReview =  reviews[yoee];
    }

    function getAverageReview(address _yoee) public view returns(uint yoeeAverageReview) {
        (uint yoeeCount) = getCounts(_yoee);
        (uint yoeeReview) = getReview(_yoee);
        // SafeMath
        yoeeAverageReview = yoeeReview/yoeeCount;
    }
 
    function yoTransfer(address payable _yoee, uint256 _amount,uint _review) external payable {
        require(msg.value == _amount, "Not save transfer amount and msg.value");
        uint256 taxedAmount = msg.value * 98 / 100; // 2% taxed
        _yoee.transfer(taxedAmount);
        // uint newCounts = getCounts(_yoee)++;
        (uint yoeeCount) = getCounts(_yoee);
        uint newCounts = yoeeCount + 1;
        (uint yoeeReview) = getReview(_yoee);
        uint newReviews = yoeeReview + _review;
        counts[_yoee] = newCounts;
        reviews[_yoee] = newReviews;
        emit Reviews(_yoee, newReviews);
        emit Counts(_yoee, newCounts);
        emit Transfer(msg.sender, _yoee, _amount);
    }

    function sendToTreasure() external onlyOwner {
        address payable _treasurer = treasurer;
        _treasurer.transfer(address(this).balance);
    }
    
    function getBalance() external view returns (uint balance) {
        balance = address(this).balance;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    function _transferOwnership(address newOwner) internal {
        address oldOwner = owner;
        owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "Ownable: caller is not the owner");
        _;
    }
}
