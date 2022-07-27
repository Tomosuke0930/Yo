// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import './interface/IYoMinter.sol';
import './interface/ERC1238/ERC1238.sol';
import './interface/ERC1238/extensions/ERC1238URIStorage.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@appliedzkp/semaphore-contracts/base/SemaphoreCore.sol';
import '@appliedzkp/semaphore-contracts/interfaces/IVerifier.sol';


/// @title YoNFTMinter
contract YoMinter is IYoMinter, SemaphoreCore, ERC1238, ERC1238URIStorage, Ownable, Initializable {

    /************************************************
     *  Library & Variables  
     ***********************************************/
  
    using Counters for Counters.Counter;

    IVerifier private verifier;
    Counters.Counter private supplyCounter;


    /************************************************
     *  Constructor
     ***********************************************/

    constructor(address verifierAddress, string memory baseURI_) initializer ERC1238(baseURI_) {
        verifier = IVerifier(verifierAddress);
    }

    /************************************************
     *  NFT OPERATIONS
     ***********************************************/

    function totalSupply() public view returns (uint256) {
        return supplyCounter.current();
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1238, ERC1238URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function setBaseURI(string memory newBaseURI) external onlyOwner {
        _setBaseURI(newBaseURI);
    }

    /************************************************
     *  Mint NFT
     ***********************************************/
    
    /// @dev See {IContinuum-mint}.
    function mint(
        uint256 root,
        uint256 nullifierHash,
        uint256 externalNullifier,
        uint256[8] calldata proof,
        string memory tokenURI,
        uint8 v,
        bytes32 r,
        bytes32 s,
        bytes memory data
    ) external override {
        bytes32 signal = bytes32('continuum');
        _verifyProof(signal, root, nullifierHash, externalNullifier, proof, verifier);

        // Prevent double-signaling (nullifierHash = hash(groupId + identityNullifier)).
        _saveNullifierHash(nullifierHash);

        emit ProofVerified(signal);

        // _mint(msg.sender, totalSupply());
        _mintToEOA(msg.sender, totalSupply(), 1, v, r, s, data);
        _setTokenURI(totalSupply(), tokenURI);

        emit Minted(totalSupply(), msg.sender);

        supplyCounter.increment();
    }

    /************************************************
     *  Burn NFT
     ***********************************************/
    function burn(
        address from,
        uint256 id,
        uint256 amount,
        bool deleteURI
    ) external onlyOwner {
        if (deleteURI) {
            _burnAndDeleteURI(from, id, amount);
        } else {
            _burn(from, id, amount);
        }
    }

    function _burnAndDeleteURI(
        address from,
        uint256 id,
        uint256 amount
    ) internal virtual {
        super._burn(from, id, amount);

        _deleteTokenURI(id);
    }
}
