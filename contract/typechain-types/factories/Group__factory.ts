/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Group, GroupInterface } from "../Group";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getGroup",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nullfier",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "criteria",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "attr_key",
            type: "string",
          },
        ],
        internalType: "struct IGroup.Group",
        name: "group",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGroups",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nullfier",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "criteria",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "attr_key",
            type: "string",
          },
        ],
        internalType: "struct IGroup.Group[49]",
        name: "_groups",
        type: "tuple[49]",
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
    name: "groupIds",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "groupNullfiers",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "groups",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nullfier",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "criteria",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "attr_key",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nullfier",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "criteria",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "attr_key",
            type: "string",
          },
        ],
        internalType: "struct IGroup.Group[49]",
        name: "_groups",
        type: "tuple[49]",
      },
    ],
    name: "initialGroups",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "size",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061127a806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806396324bd41161005b57806396324bd4146100ec578063c72b517614610120578063ca00e4ed1461013e578063ceb606541461016e5761007d565b80631e19e08e146100825780634093d7a11461009e578063949d225d146100ce575b600080fd5b61009c60048036038101906100979190610923565b61019e565b005b6100b860048036038101906100b39190610964565b610370565b6040516100c59190610be4565b60405180910390f35b6100d661038b565b6040516100e39190610be4565b60405180910390f35b61010660048036038101906101019190610964565b610390565b604051610117959493929190610bff565b60405180910390f35b6101286104dc565b6040516101359190610ba0565b60405180910390f35b61015860048036038101906101539190610964565b610670565b6040516101659190610be4565b60405180910390f35b61018860048036038101906101839190610964565b61068c565b6040516101959190610bc2565b60405180910390f35b60005b603181101561036c578181603181106101e3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020028101906101f39190610cb7565b6000826031811061022d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60050201818161023d91906111d2565b905050818160318110610279577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020028101906102899190610cb7565b6000013560f582603181106102c7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0181905550818160318110610305577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020028101906103159190610cb7565b602001356101268260318110610354577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0181905550808061036490610fca565b9150506101a1565b5050565b60f5816031811061038057600080fd5b016000915090505481565b603181565b600081603181106103a057600080fd5b600502016000915090508060000154908060010154908060020180546103c590610f7c565b80601f01602080910402602001604051908101604052809291908181526020018280546103f190610f7c565b801561043e5780601f106104135761010080835404028352916020019161043e565b820191906000526020600020905b81548152906001019060200180831161042157829003601f168201915b50505050509080600301549080600401805461045990610f7c565b80601f016020809104026020016040519081016040528092919081815260200182805461048590610f7c565b80156104d25780601f106104a7576101008083540402835291602001916104d2565b820191906000526020600020905b8154815290600101906020018083116104b557829003601f168201915b5050505050905085565b6104e4610893565b6000603180602002604051908101604052809291906000905b82821015610667578382600502016040518060a0016040529081600082015481526020016001820154815260200160028201805461053a90610f7c565b80601f016020809104026020016040519081016040528092919081815260200182805461056690610f7c565b80156105b35780601f10610588576101008083540402835291602001916105b3565b820191906000526020600020905b81548152906001019060200180831161059657829003601f168201915b50505050508152602001600382015481526020016004820180546105d690610f7c565b80601f016020809104026020016040519081016040528092919081815260200182805461060290610f7c565b801561064f5780601f106106245761010080835404028352916020019161064f565b820191906000526020600020905b81548152906001019060200180831161063257829003601f168201915b505050505081525050815260200190600101906104fd565b50505050905090565b610126816031811061068157600080fd5b016000915090505481565b6106946108c1565b600080600090505b60318110156106ff5760f581603181106106df577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01548414156106ec578091505b80806106f790610fca565b91505061069c565b506000816031811061073a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600502016040518060a0016040529081600082015481526020016001820154815260200160028201805461076d90610f7c565b80601f016020809104026020016040519081016040528092919081815260200182805461079990610f7c565b80156107e65780601f106107bb576101008083540402835291602001916107e6565b820191906000526020600020905b8154815290600101906020018083116107c957829003601f168201915b505050505081526020016003820154815260200160048201805461080990610f7c565b80601f016020809104026020016040519081016040528092919081815260200182805461083590610f7c565b80156108825780601f1061085757610100808354040283529160200191610882565b820191906000526020600020905b81548152906001019060200180831161086557829003601f168201915b505050505081525050915050919050565b6040518061062001604052806031905b6108ab6108c1565b8152602001906001900390816108a35790505090565b6040518060a0016040528060008152602001600081526020016060815260200160008152602001606081525090565b60008190508260206031028201111561090857600080fd5b92915050565b60008135905061091d81611228565b92915050565b60006020828403121561093557600080fd5b600082013567ffffffffffffffff81111561094f57600080fd5b61095b848285016108f0565b91505092915050565b60006020828403121561097657600080fd5b60006109848482850161090e565b91505092915050565b60006109998383610a88565b905092915050565b60006109ac82610cfa565b6109b68185610d28565b9350836020820285016109c885610cdb565b8060005b85811015610a0457848403895281516109e5858261098d565b94506109f083610d1b565b925060208a019950506001810190506109cc565b50829750879550505050505092915050565b6000610a2182610d10565b610a2b8185610d33565b9350610a3b818560208601610ea0565b610a44816110de565b840191505092915050565b6000610a5a82610d10565b610a648185610d44565b9350610a74818560208601610ea0565b610a7d816110de565b840191505092915050565b600060a083016000830151610aa06000860182610b82565b506020830151610ab36020860182610b82565b5060408301518482036040860152610acb8282610a16565b9150506060830151610ae06060860182610b82565b5060808301518482036080860152610af88282610a16565b9150508091505092915050565b600060a083016000830151610b1d6000860182610b82565b506020830151610b306020860182610b82565b5060408301518482036040860152610b488282610a16565b9150506060830151610b5d6060860182610b82565b5060808301518482036080860152610b758282610a16565b9150508091505092915050565b610b8b81610d55565b82525050565b610b9a81610d55565b82525050565b60006020820190508181036000830152610bba81846109a1565b905092915050565b60006020820190508181036000830152610bdc8184610b05565b905092915050565b6000602082019050610bf96000830184610b91565b92915050565b600060a082019050610c146000830188610b91565b610c216020830187610b91565b8181036040830152610c338186610a4f565b9050610c426060830185610b91565b8181036080830152610c548184610a4f565b90509695505050505050565b60008083356001602003843603038112610c7957600080fd5b80840192508235915067ffffffffffffffff821115610c9757600080fd5b602083019250600182023603831315610caf57600080fd5b509250929050565b60008235600160a003833603038112610ccf57600080fd5b80830191505092915050565b6000819050919050565b60008190508160005260206000209050919050565b600060319050919050565b600082905092915050565b600081519050919050565b6000602082019050919050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000819050919050565b5b81811015610d7e57610d73600082611116565b600181019050610d60565b5050565b6000610d8d82610d55565b9050919050565b610d9e8383610d05565b67ffffffffffffffff811115610db757610db661108f565b5b610dc18254610f7c565b600080601f8411601f84111715610dde57610ddb85610ce5565b90505b601f831115610e11576020601f85010481016020851015610dfd578190505b610e0f6020601f860104830182610d5f565b505b601f841160018114610e3e5760008515610e2c578388013590505b610e368682610fae565b875550610e96565b601f1985168260005b82811015610e6c57858a01358255600182019150602086019550602081019050610e47565b87831015610e8957858a0135610e85601f8a1682611013565b8355505b6001600289020189555050505b5050505050505050565b60005b83811015610ebe578082015181840152602081019050610ea3565b83811115610ecd576000848401525b50505050565b600081016000830180610ee5816110c8565b9050610ef181846111e0565b505050600181016020830180610f06816110c8565b9050610f1281846111e0565b5050506002810160408301610f278185610c60565b610f328183866111c2565b50505050600381016060830180610f48816110c8565b9050610f5481846111e0565b5050506004810160808301610f698185610c60565b610f748183866111c2565b505050505050565b60006002820490506001821680610f9457607f821691505b60208210811415610fa857610fa7611060565b5b50919050565b6000610fba8383611013565b9150826002028217905092915050565b6000610fd582610d55565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561100857611007611031565b5b600182019050919050565b600061102460001984600802611109565b1980831691505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000819050919050565b600081356110d581611228565b80915050919050565b6000601f19601f8301169050919050565b60008160001b9050919050565b600082821b905092915050565b600082821c905092915050565b61111e61123f565b611129818484611203565b505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61115a846110ef565b9350801983169250808416831791505092915050565b6000600883026111a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826110fc565b6111aa86836110fc565b95508019841693508086168417925050509392505050565b6111cd838383610d94565b505050565b6111dc8282610ed3565b5050565b6111e982610d82565b6111fc6111f5826110be565b835461112e565b8255505050565b61120c83610d82565b611220611218826110be565b848454611170565b825550505050565b61123181610d55565b811461123c57600080fd5b50565b60009056fea2646970667358221220c5402e09186595d6841456b47235a6fc5b13acf57d9a5b9fa79a2c4b809bfb5164736f6c63430008040033";

type GroupConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GroupConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Group__factory extends ContractFactory {
  constructor(...args: GroupConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Group> {
    return super.deploy(overrides || {}) as Promise<Group>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Group {
    return super.attach(address) as Group;
  }
  override connect(signer: Signer): Group__factory {
    return super.connect(signer) as Group__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GroupInterface {
    return new utils.Interface(_abi) as GroupInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Group {
    return new Contract(address, _abi, signerOrProvider) as Group;
  }
}
