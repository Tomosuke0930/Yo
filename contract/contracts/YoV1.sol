//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import './library/TransferHelper.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

    /************************************************
     *  Grossary of Yo

     * Yoee - Teacher 🙌
np
     * Yoer - Student 👋

     * Frontend Creater 🎨
     - Creating the frontend to interact with this contract
     - YoV1 contract gives the frontend creator incentives when executing transaction on their frontend
     - They can claim 1% of the amount paid
     ***********************************************/

contract YoV1 is Ownable {

    using SafeMath for uint256;

    /************************************************
     *  Variables & Constant 
     ***********************************************/

    address constant treasurer = 0xBf6aB3fD3d9B5b5E34c6cE00a003b1be0B5E7710;
    
    // The sum of review for yoee
    mapping(address => uint256) reviews;

    // The number of payments made for yoee
    mapping(address => uint256) counts;

    // The amount that can be claimed for frontend creator
    mapping(address => uint256) claimableAmounts;

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


    /// @notice get the balance of this contract address
    function getBalance() external view returns (uint256 balance) {
        balance = address(this).balance;
    }

    /// @notice get the counts for yoee
    function getCounts(address yoee) public view returns (uint256 yoeeCount) {
        yoeeCount = counts[yoee];
    }

    /// @notice get the review for yoee
    function getReview(address yoee) public view returns (uint256 yoeeReview) {
        yoeeReview = reviews[yoee];
    }

    /// @notice get the average review for yoee
    function getAverageReview(address _yoee) external view returns (uint256 yoeeAverageReview) {
        uint256 yoeeCount = getCounts(_yoee);
        uint256 yoeeReview = getReview(_yoee);
        yoeeAverageReview = yoeeReview.div(yoeeCount);
    }

    /// @notice get the average review for frontend creater
    function getClaimableAmount(address frontendAddress) public view returns (uint256 claimableAmount) {
        claimableAmount = claimableAmounts[frontendAddress].div(1e3);
    }

    /************************************************
     *  Transfer from Student to Teacher
     ***********************************************/

    /**
     * @notice Transfer from yoer to yoee and Reviewing
     * @param _amount is the amount to be paid
     * @param _review from yoer to yoee
     * @param _yoee is the address of yoee
     * @param _frontendAddress is setted by the frontend creator
     */
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
    
    /**
     * @notice Claim ETH for frontend creator
     */
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

    /**
     * @notice transfer ETH to treasuer address
     */
    function sendToTreasure() external onlyOwner {
        address payable _treasurer = payable(treasurer);
        TransferHelper.safeTransferETH(_treasurer, address(this).balance);
    }
}
