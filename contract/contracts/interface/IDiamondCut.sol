// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IDiamondCut {
    enum FacetCutAction {
        Add,
        Replace,
        Remove
    }
    // Add=0, Replace=1, Remove=2
    // DiamondCutで使われる

    struct FacetCut {
        address facetAddress;
        FacetCutAction action; // ここで使用
        bytes4[] functionSelectors;
    }

    //ここで条件分岐とか起きそうね

    function diamondCut(
        FacetCut[] calldata _diamondCut,
        address _init,
        bytes calldata _calldata
        // including function selector and arguments
        // _calldata is executed with delegatecall on _init
    ) external;

    event DiamondCut(FacetCut[] _diamondCut, address _init, bytes _calldata);
}
