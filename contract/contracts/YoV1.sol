//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import './library/TransferHelper.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract YoV1 is Ownable {
    using SafeMath for uint256;

    /************************************************
     *  Variables & Constant 
     ***********************************************/

    address constant treasurer = 0xBf6aB3fD3d9B5b5E34c6cE00a003b1be0B5E7710;
    mapping(address => uint256) reviews;
    mapping(address => uint256) counts;
    mapping(address => uint256) claimableAmounts;
    // User Reviewed
    // Yoee is like a teacher
    // Yoer is like a student

    /************************************************
     *  EVENTS
     ***********************************************/

    event Transfer(
        address indexed sender,
        address indexed to, 
        uint256 amount
    );

    event Reviews(
        address indexed yoee, 
        uint256 review
    );

    event Counts(
        address indexed yoee, 
        uint256 counts
    );

    event PayFrontend(
        address indexed frontendAddress, 
        uint256 indexed amounts
    );

    /************************************************
     *  Getters
     ***********************************************/

    function getBalance() external view returns (uint256 balance) {
        balance = address(this).balance;
    }

    function getCounts(address yoee) public view returns (uint256 yoeeCount) {
        yoeeCount = counts[yoee];
    }

    function getReview(address yoee) public view returns (uint256 yoeeReview) {
        yoeeReview = reviews[yoee];
    }

    function getAverageReview(address _yoee) public view returns (uint256 yoeeAverageReview) {
        uint256 yoeeCount = getCounts(_yoee);
        uint256 yoeeReview = getReview(_yoee);
        yoeeAverageReview = yoeeReview.div(yoeeCount);
    }

    function getClaimableAmount(address frontendAddress) public view returns (uint256 claimableAmount) {
        claimableAmount = claimableAmounts[frontendAddress].div(1e3);
    }

    /************************************************
     *  Transfer from Student to Teacher
     ***********************************************/

    function yoTransfer(
        uint256 _amount,
        uint256 _review,
        address payable _yoee,
        address payable _frontendAddress
    ) external payable {
        require(msg.value == _amount, 'Not save transfer amount and msg.value');
        uint256 taxedAmount = _amount.mul(98).div(100);
        TransferHelper.safeTransferETH(_yoee, taxedAmount);
        uint256 yoeeCount = getCounts(_yoee);
        uint256 newCounts = yoeeCount.add(1);
        uint256 yoeeReview = getReview(_yoee);
        uint256 newReviews = yoeeReview.add(_review);
        claimableAmounts[_frontendAddress] = claimableAmounts[_frontendAddress].add(_amount);
        counts[_yoee] = newCounts;
        reviews[_yoee] = newReviews;
        emit Reviews(_yoee, newReviews);
        emit Counts(_yoee, newCounts);
        emit Transfer(msg.sender, _yoee, _amount);
    }

    /************************************************
     *  For creator of Yo's frontnend 
     ***********************************************/    
    
    function claim() external {
        require(claimableAmounts[msg.sender] > 0);
        uint256 claimableAmount = getClaimableAmount(msg.sender);
        claimableAmounts[msg.sender] = claimableAmounts[msg.sender].sub(claimableAmount);
        TransferHelper.safeTransferETH(msg.sender, claimableAmount);
        emit PayFrontend(msg.sender, claimableAmount);
    }

    /************************************************
     *  For owner of Yo
     ***********************************************/ 

    function sendToTreasure() external onlyOwner {
        address payable _treasurer = payable(treasurer);
        TransferHelper.safeTransferETH(_treasurer, address(this).balance);
    }
}
