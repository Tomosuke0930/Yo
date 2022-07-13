// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract Oracle {
    struct Request {
        bytes data;
        function(uint256) external callback;
    }

    Request[] private requests;
    event NewRequest(uint256);

    function query(bytes memory data, function(uint256) external callback) public {
        requests.push(Request(data, callback));
        emit NewRequest(requests.length - 1);
    }

    function reply(uint256 requestID, uint256 response) public {
        // Here goes the check that the reply comes from a trusted source
        requests[requestID].callback(response);
    }
}
