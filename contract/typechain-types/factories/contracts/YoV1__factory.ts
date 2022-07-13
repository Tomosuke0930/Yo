/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { YoV1, YoV1Interface } from "../../contracts/YoV1";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "yoee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "counts",
        type: "uint256",
      },
    ],
    name: "Counts",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "frontendAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amounts",
        type: "uint256",
      },
    ],
    name: "PayFrontend",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "yoee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "review",
        type: "uint256",
      },
    ],
    name: "Reviews",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_yoee",
        type: "address",
      },
    ],
    name: "getAverageReview",
    outputs: [
      {
        internalType: "uint256",
        name: "yoeeAverageReview",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "frontendAddress",
        type: "address",
      },
    ],
    name: "getClaimableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "claimableAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "yoee",
        type: "address",
      },
    ],
    name: "getCounts",
    outputs: [
      {
        internalType: "uint256",
        name: "yoeeCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "yoee",
        type: "address",
      },
    ],
    name: "getReview",
    outputs: [
      {
        internalType: "uint256",
        name: "yoeeReview",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sendToTreasure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_review",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_yoee",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_frontendAddress",
        type: "address",
      },
    ],
    name: "yoTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61117b8061010d6000396000f3fe60806040526004361061009c5760003560e01c8063694a34bb11610064578063694a34bb14610153578063715018a6146101905780638da5cb5b146101a7578063d8d4d949146101d2578063e12f3a611461020f578063f2fde38b1461024c5761009c565b806312065fe0146100a15780631e88b6a9146100cc5780634b1006a3146100e85780634e71d92d146100ff5780635b46740414610116575b600080fd5b3480156100ad57600080fd5b506100b6610275565b6040516100c39190610dda565b60405180910390f35b6100e660048036038101906100e19190610bea565b61027d565b005b3480156100f457600080fd5b506100fd610566565b005b34801561010b57600080fd5b50610114610594565b005b34801561012257600080fd5b5061013d60048036038101906101389190610bc1565b6106d3565b60405161014a9190610dda565b60405180910390f35b34801561015f57600080fd5b5061017a60048036038101906101759190610bc1565b61071c565b6040516101879190610dda565b60405180910390f35b34801561019c57600080fd5b506101a5610765565b005b3480156101b357600080fd5b506101bc610779565b6040516101c99190610d3f565b60405180910390f35b3480156101de57600080fd5b506101f960048036038101906101f49190610bc1565b6107a2565b6040516102069190610dda565b60405180910390f35b34801561021b57600080fd5b5061023660048036038101906102319190610bc1565b6107d9565b6040516102439190610dda565b60405180910390f35b34801561025857600080fd5b50610273600480360381019061026e9190610bc1565b610836565b005b600047905090565b8334146102bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b690610d9a565b60405180910390fd5b60006102e860646102da6062886108ba90919063ffffffff16565b6108d090919063ffffffff16565b90506102f483826108e6565b60006102ff846106d3565b90506000610317600183610a0c90919063ffffffff16565b905060006103248661071c565b9050600061033b8883610a0c90919063ffffffff16565b905061038f89600360008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610a0c90919063ffffffff16565b600360008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508673ffffffffffffffffffffffffffffffffffffffff167f656446e16ed9e2020adb78814b1c43f614cbfd6e1ebe077c12b600f671c7d236826040516104a09190610dda565b60405180910390a28673ffffffffffffffffffffffffffffffffffffffff167f63ed0ebad3199e15c1e99d01745fd6269ca3e8a99d617c04916f7d8dc10adeae846040516104ee9190610dda565b60405180910390a28673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8b6040516105539190610dda565b60405180910390a3505050505050505050565b61056e610a22565b600073bf6ab3fd3d9b5b5e34c6ce00a003b1be0b5e7710905061059181476108e6565b50565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116105e057600080fd5b60006105eb336107d9565b905061063f81600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610aa090919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061068c33826108e6565b803373ffffffffffffffffffffffffffffffffffffffff167f02500de0b71deed460e5dbdc41a8c712a64da5b24cac052ec3c59c82f79a05c560405160405180910390a350565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61076d610a22565b6107776000610ab6565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000806107ae836106d3565b905060006107bb8461071c565b90506107d082826108d090919063ffffffff16565b92505050919050565b600061082f6103e8600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108d090919063ffffffff16565b9050919050565b61083e610a22565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a590610d5a565b60405180910390fd5b6108b781610ab6565b50565b600081836108c89190610ea3565b905092915050565b600081836108de9190610e72565b905092915050565b60008273ffffffffffffffffffffffffffffffffffffffff1682600067ffffffffffffffff811115610941577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156109735781602001600182028036833780820191505090505b506040516109819190610d28565b60006040518083038185875af1925050503d80600081146109be576040519150601f19603f3d011682016040523d82523d6000602084013e6109c3565b606091505b5050905080610a07576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fe90610d7a565b60405180910390fd5b505050565b60008183610a1a9190610e1c565b905092915050565b610a2a610b7a565b73ffffffffffffffffffffffffffffffffffffffff16610a48610779565b73ffffffffffffffffffffffffffffffffffffffff1614610a9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9590610dba565b60405180910390fd5b565b60008183610aae9190610efd565b905092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600081359050610b9181611100565b92915050565b600081359050610ba681611117565b92915050565b600081359050610bbb8161112e565b92915050565b600060208284031215610bd357600080fd5b6000610be184828501610b82565b91505092915050565b60008060008060808587031215610c0057600080fd5b6000610c0e87828801610bac565b9450506020610c1f87828801610bac565b9350506040610c3087828801610b97565b9250506060610c4187828801610b97565b91505092959194509250565b610c5681610f31565b82525050565b6000610c6782610df5565b610c718185610e00565b9350610c81818560208601610f7f565b80840191505092915050565b6000610c9a602683610e0b565b9150610ca582611010565b604082019050919050565b6000610cbd600383610e0b565b9150610cc88261105f565b602082019050919050565b6000610ce0602683610e0b565b9150610ceb82611088565b604082019050919050565b6000610d03602083610e0b565b9150610d0e826110d7565b602082019050919050565b610d2281610f75565b82525050565b6000610d348284610c5c565b915081905092915050565b6000602082019050610d546000830184610c4d565b92915050565b60006020820190508181036000830152610d7381610c8d565b9050919050565b60006020820190508181036000830152610d9381610cb0565b9050919050565b60006020820190508181036000830152610db381610cd3565b9050919050565b60006020820190508181036000830152610dd381610cf6565b9050919050565b6000602082019050610def6000830184610d19565b92915050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610e2782610f75565b9150610e3283610f75565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e6757610e66610fb2565b5b828201905092915050565b6000610e7d82610f75565b9150610e8883610f75565b925082610e9857610e97610fe1565b5b828204905092915050565b6000610eae82610f75565b9150610eb983610f75565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ef257610ef1610fb2565b5b828202905092915050565b6000610f0882610f75565b9150610f1383610f75565b925082821015610f2657610f25610fb2565b5b828203905092915050565b6000610f3c82610f55565b9050919050565b6000610f4e82610f55565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610f9d578082015181840152602081019050610f82565b83811115610fac576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f5354450000000000000000000000000000000000000000000000000000000000600082015250565b7f4e6f742073617665207472616e7366657220616d6f756e7420616e64206d736760008201527f2e76616c75650000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b61110981610f31565b811461111457600080fd5b50565b61112081610f43565b811461112b57600080fd5b50565b61113781610f75565b811461114257600080fd5b5056fea264697066735822122018b4598b743e2bccfffa3c0895142c6aa3e0f1b61f754362964540ae76e9011764736f6c63430008040033";

type YoV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YoV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YoV1__factory extends ContractFactory {
  constructor(...args: YoV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<YoV1> {
    return super.deploy(overrides || {}) as Promise<YoV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): YoV1 {
    return super.attach(address) as YoV1;
  }
  override connect(signer: Signer): YoV1__factory {
    return super.connect(signer) as YoV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YoV1Interface {
    return new utils.Interface(_abi) as YoV1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): YoV1 {
    return new Contract(address, _abi, signerOrProvider) as YoV1;
  }
}