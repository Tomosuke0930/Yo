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
  "0x608060405234801561001057600080fd5b50610bc1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631e19e08e1461005c5780634093d7a114610078578063949d225d146100a857806396324bd4146100c6578063ca00e4ed146100fa575b600080fd5b610076600480360381019061007191906104b7565b61012a565b005b610092600480360381019061008d91906104f8565b6102fc565b60405161009f9190610569565b60405180910390f35b6100b0610317565b6040516100bd9190610569565b60405180910390f35b6100e060048036038101906100db91906104f8565b61031c565b6040516100f1959493929190610584565b60405180910390f35b610114600480360381019061010f91906104f8565b610468565b6040516101219190610569565b60405180910390f35b60005b60318110156102f85781816031811061016f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200281019061017f919061063c565b600082603181106101b9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6005020181816101c99190610b19565b905050818160318110610205577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002810190610215919061063c565b6000013560f58260318110610253577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0181905550818160318110610291577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020028101906102a1919061063c565b6020013561012682603181106102e0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b018190555080806102f090610911565b91505061012d565b5050565b60f5816031811061030c57600080fd5b016000915090505481565b603181565b6000816031811061032c57600080fd5b60050201600091509050806000015490806001015490806002018054610351906108c3565b80601f016020809104026020016040519081016040528092919081815260200182805461037d906108c3565b80156103ca5780601f1061039f576101008083540402835291602001916103ca565b820191906000526020600020905b8154815290600101906020018083116103ad57829003601f168201915b5050505050908060030154908060040180546103e5906108c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610411906108c3565b801561045e5780601f106104335761010080835404028352916020019161045e565b820191906000526020600020905b81548152906001019060200180831161044157829003601f168201915b5050505050905085565b610126816031811061047957600080fd5b016000915090505481565b60008190508260206031028201111561049c57600080fd5b92915050565b6000813590506104b181610b6f565b92915050565b6000602082840312156104c957600080fd5b600082013567ffffffffffffffff8111156104e357600080fd5b6104ef84828501610484565b91505092915050565b60006020828403121561050a57600080fd5b6000610518848285016104a2565b91505092915050565b600061052c82610680565b610536818561068b565b93506105468185602086016107e7565b61054f81610a25565b840191505092915050565b6105638161069c565b82525050565b600060208201905061057e600083018461055a565b92915050565b600060a082019050610599600083018861055a565b6105a6602083018761055a565b81810360408301526105b88186610521565b90506105c7606083018561055a565b81810360808301526105d98184610521565b90509695505050505050565b600080833560016020038436030381126105fe57600080fd5b80840192508235915067ffffffffffffffff82111561061c57600080fd5b60208301925060018202360383131561063457600080fd5b509250929050565b60008235600160a00383360303811261065457600080fd5b80830191505092915050565b60008190508160005260206000209050919050565b600082905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b5b818110156106c5576106ba600082610a5d565b6001810190506106a7565b5050565b60006106d48261069c565b9050919050565b6106e58383610675565b67ffffffffffffffff8111156106fe576106fd6109d6565b5b61070882546108c3565b600080601f8411601f841117156107255761072285610660565b90505b601f831115610758576020601f85010481016020851015610744578190505b6107566020601f8601048301826106a6565b505b601f8411600181146107855760008515610773578388013590505b61077d86826108f5565b8755506107dd565b601f1985168260005b828110156107b357858a0135825560018201915060208601955060208101905061078e565b878310156107d057858a01356107cc601f8a168261095a565b8355505b6001600289020189555050505b5050505050505050565b60005b838110156108055780820151818401526020810190506107ea565b83811115610814576000848401525b50505050565b60008101600083018061082c81610a0f565b90506108388184610b27565b50505060018101602083018061084d81610a0f565b90506108598184610b27565b505050600281016040830161086e81856105e5565b610879818386610b09565b5050505060038101606083018061088f81610a0f565b905061089b8184610b27565b50505060048101608083016108b081856105e5565b6108bb818386610b09565b505050505050565b600060028204905060018216806108db57607f821691505b602082108114156108ef576108ee6109a7565b5b50919050565b6000610901838361095a565b9150826002028217905092915050565b600061091c8261069c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561094f5761094e610978565b5b600182019050919050565b600061096b60001984600802610a50565b1980831691505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000819050919050565b60008135610a1c81610b6f565b80915050919050565b6000601f19601f8301169050919050565b60008160001b9050919050565b600082821b905092915050565b600082821c905092915050565b610a65610b86565b610a70818484610b4a565b505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610aa184610a36565b9350801983169250808416831791505092915050565b600060088302610ae77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a43565b610af18683610a43565b95508019841693508086168417925050509392505050565b610b148383836106db565b505050565b610b23828261081a565b5050565b610b30826106c9565b610b43610b3c82610a05565b8354610a75565b8255505050565b610b53836106c9565b610b67610b5f82610a05565b848454610ab7565b825550505050565b610b788161069c565b8114610b8357600080fd5b50565b60009056fea2646970667358221220ce710788a7aafbf6e80e8a83642c1c5aab20029a0a596e3ceca3915b76dd5b9864736f6c63430008040033";

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