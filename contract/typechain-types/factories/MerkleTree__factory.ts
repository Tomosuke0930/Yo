/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MerkleTree, MerkleTreeInterface } from "../MerkleTree";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_data",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_groupId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_groupName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "addNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_groupId",
        type: "uint256",
      },
    ],
    name: "getAllNodes",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "data",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "groupId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "groupName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "siblingHash",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "index",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "level",
                type: "uint256",
              },
            ],
            internalType: "struct IMerkleTreeNode.ParentLocate",
            name: "parent",
            type: "tuple",
          },
        ],
        internalType: "struct IMerkleTreeNode.MerkleTreeNode[]",
        name: "allNodes",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_groupId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getNode",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "data",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "groupId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "groupName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "siblingHash",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "index",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "level",
                type: "uint256",
              },
            ],
            internalType: "struct IMerkleTreeNode.ParentLocate",
            name: "parent",
            type: "tuple",
          },
        ],
        internalType: "struct IMerkleTreeNode.MerkleTreeNode",
        name: "node",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_groupId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "getNodeByHash",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "data",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "groupId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "groupName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "siblingHash",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "index",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "level",
                type: "uint256",
              },
            ],
            internalType: "struct IMerkleTreeNode.ParentLocate",
            name: "parent",
            type: "tuple",
          },
        ],
        internalType: "struct IMerkleTreeNode.MerkleTreeNode",
        name: "node",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_groupId",
        type: "uint256",
      },
    ],
    name: "getNodeCounts",
    outputs: [
      {
        internalType: "uint256",
        name: "nodeCounts",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "merkleTrees",
    outputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nums",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_groupId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_data",
        type: "bytes32",
      },
    ],
    name: "updateNode",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061129b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a68051a91161005b578063a68051a914610125578063a7ecfd1e14610155578063d5b1325914610185578063df71c543146101a357610088565b8063360512431461008d5780635474f7a4146100bd5780636a1e8dd1146100d957806385d88cb1146100f5575b600080fd5b6100a760048036038101906100a29190610c2d565b6101d3565b6040516100b4919061105c565b60405180910390f35b6100d760048036038101906100d29190610ce1565b61023a565b005b6100f360048036038101906100ee9190610b9b565b61025a565b005b61010f600480360381019061010a9190610c2d565b6103dd565b60405161011c919061105c565b60405180910390f35b61013f600480360381019061013a9190610c56565b610401565b60405161014c919061103a565b60405180910390f35b61016f600480360381019061016a9190610c92565b6104d8565b60405161017c919061103a565b60405180910390f35b61018d610515565b60405161019a919061105c565b60405180910390f35b6101bd60048036038101906101b89190610c2d565b61051a565b6040516101ca9190610ff8565b60405180910390f35b6000816101df816106d4565b60006101ea8461071b565b905060008160318110610226577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600202016001018054905092505050919050565b60006102478585856104d8565b9050818160200181815250505050505050565b610262610a12565b600061026d8761071b565b9050878260200181815250508682604001818152505085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050826060018190525082826080018181525050838260a00181815250506000816031811061031e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600202016001018290806001815401808255809150506001900390600052602060002090600a02016000909190919091506000820151816000015560208201518160010155604082015181600201556060820151816003019080519060200190610389929190610a63565b506080820151816004015560a0820151816005015560c0820151816006015560e082015181600701600082015181600001556020820151816001015560408201518160020155505050505050505050505050565b600081603181106103ed57600080fd5b600202016000915090508060000154905081565b610409610a12565b82610413816106d4565b600061041e8561051a565b905060005b81518110156104cf57818181518110610465577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151602001518514156104bc578181815181106104b1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015193505b80806104c790611156565b915050610423565b50505092915050565b6104e0610a12565b8383836104ec836106d4565b6104f582610798565b6104fe816107df565b610509858888610828565b93505050509392505050565b603181565b606081610526816106d4565b60006105318461071b565b90506000816031811061056d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60020201600101805480602002602001604051908101604052809291908181526020016000905b828210156106c757838290600052602060002090600a0201604051806101000160405290816000820154815260200160018201548152602001600282015481526020016003820180546105e690611124565b80601f016020809104026020016040519081016040528092919081815260200182805461061290611124565b801561065f5780601f106106345761010080835404028352916020019161065f565b820191906000526020600020905b81548152906001019060200180831161064257829003601f168201915b505050505081526020016004820154815260200160058201548152602001600682015481526020016007820160405180606001604052908160008201548152602001600182015481526020016002820154815250508152505081526020019060010190610594565b5050505092505050919050565b6031811115610718576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070f9061101a565b60405180910390fd5b50565b600080600090505b60318110156107915760008160318110610766577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600202016000015483141561077e5780915050610793565b808061078990611156565b915050610723565b505b919050565b60108111156107dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d39061101a565b60405180910390fd5b50565b62010000811115610825576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081c9061101a565b60405180910390fd5b50565b610830610a12565b600061083c84846108f6565b905060005b81518110156108ed57818181518110610883577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151608001518614156108da578181815181106108cf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015192505b80806108e590611156565b915050610841565b50509392505050565b606060006109038461051a565b9050600080600090505b8251811015610a095782818151811061094f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160a001518514156109f65782818151811061099b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518483815181106109dc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525081806109f290611156565b9250505b8080610a0190611156565b91505061090d565b50505092915050565b60405180610100016040528060008152602001600080191681526020016000815260200160608152602001600081526020016000815260200160008019168152602001610a5d610ae9565b81525090565b828054610a6f90611124565b90600052602060002090601f016020900481019282610a915760008555610ad8565b82601f10610aaa57805160ff1916838001178555610ad8565b82800160010185558215610ad8579182015b82811115610ad7578251825591602001919060010190610abc565b5b509050610ae59190610b0a565b5090565b60405180606001604052806000815260200160008152602001600081525090565b5b80821115610b23576000816000905550600101610b0b565b5090565b600081359050610b3681611237565b92915050565b60008083601f840112610b4e57600080fd5b8235905067ffffffffffffffff811115610b6757600080fd5b602083019150836001820283011115610b7f57600080fd5b9250929050565b600081359050610b958161124e565b92915050565b60008060008060008060a08789031215610bb457600080fd5b6000610bc289828a01610b27565b9650506020610bd389828a01610b86565b955050604087013567ffffffffffffffff811115610bf057600080fd5b610bfc89828a01610b3c565b94509450506060610c0f89828a01610b86565b9250506080610c2089828a01610b86565b9150509295509295509295565b600060208284031215610c3f57600080fd5b6000610c4d84828501610b86565b91505092915050565b60008060408385031215610c6957600080fd5b6000610c7785828601610b86565b9250506020610c8885828601610b27565b9150509250929050565b600080600060608486031215610ca757600080fd5b6000610cb586828701610b86565b9350506020610cc686828701610b86565b9250506040610cd786828701610b86565b9150509250925092565b60008060008060808587031215610cf757600080fd5b6000610d0587828801610b86565b9450506020610d1687828801610b86565b9350506040610d2787828801610b86565b9250506060610d3887828801610b27565b91505092959194509250565b6000610d508383610e38565b905092915050565b6000610d6382611087565b610d6d81856110aa565b935083602082028501610d7f85611077565b8060005b85811015610dbb5784840389528151610d9c8582610d44565b9450610da78361109d565b925060208a01995050600181019050610d83565b50829750879550505050505092915050565b610dd6816110dd565b82525050565b6000610de782611092565b610df181856110bb565b9350610e018185602086016110f1565b610e0a816111fd565b840191505092915050565b6000610e226005836110cc565b9150610e2d8261120e565b602082019050919050565b600061014083016000830151610e516000860182610fda565b506020830151610e646020860182610dcd565b506040830151610e776040860182610fda565b5060608301518482036060860152610e8f8282610ddc565b9150506080830151610ea46080860182610fda565b5060a0830151610eb760a0860182610fda565b5060c0830151610eca60c0860182610dcd565b5060e0830151610edd60e0860182610f98565b508091505092915050565b600061014083016000830151610f016000860182610fda565b506020830151610f146020860182610dcd565b506040830151610f276040860182610fda565b5060608301518482036060860152610f3f8282610ddc565b9150506080830151610f546080860182610fda565b5060a0830151610f6760a0860182610fda565b5060c0830151610f7a60c0860182610dcd565b5060e0830151610f8d60e0860182610f98565b508091505092915050565b606082016000820151610fae6000850182610fda565b506020820151610fc16020850182610fda565b506040820151610fd46040850182610fda565b50505050565b610fe3816110e7565b82525050565b610ff2816110e7565b82525050565b600060208201905081810360008301526110128184610d58565b905092915050565b6000602082019050818103600083015261103381610e15565b9050919050565b600060208201905081810360008301526110548184610ee8565b905092915050565b60006020820190506110716000830184610fe9565b92915050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000819050919050565b6000819050919050565b60005b8381101561110f5780820151818401526020810190506110f4565b8381111561111e576000848401525b50505050565b6000600282049050600182168061113c57607f821691505b602082108114156111505761114f6111ce565b5b50919050565b6000611161826110e7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156111945761119361119f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f4572726f72000000000000000000000000000000000000000000000000000000600082015250565b611240816110dd565b811461124b57600080fd5b50565b611257816110e7565b811461126257600080fd5b5056fea26469706673582212204aac56aa5908d9ac8555b73c3e5d66651eec6b5a091792f941e08710fd1df60164736f6c63430008040033";

type MerkleTreeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleTreeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleTree__factory extends ContractFactory {
  constructor(...args: MerkleTreeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MerkleTree> {
    return super.deploy(overrides || {}) as Promise<MerkleTree>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MerkleTree {
    return super.attach(address) as MerkleTree;
  }
  override connect(signer: Signer): MerkleTree__factory {
    return super.connect(signer) as MerkleTree__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleTreeInterface {
    return new utils.Interface(_abi) as MerkleTreeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleTree {
    return new Contract(address, _abi, signerOrProvider) as MerkleTree;
  }
}
