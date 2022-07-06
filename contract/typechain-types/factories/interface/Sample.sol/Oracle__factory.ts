/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Oracle,
  OracleInterface,
} from "../../../interface/Sample.sol/Oracle";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "NewRequest",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "function (uint256) external",
        name: "callback",
        type: "function",
      },
    ],
    name: "query",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "response",
        type: "uint256",
      },
    ],
    name: "reply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106f8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c1e518171461003b578063d72d677014610057575b600080fd5b6100556004803603810190610050919061040b565b610073565b005b610071600480360381019061006c91906103b3565b61013d565b005b600082815481106100ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906002020160010160009054906101000a90048060201c73ffffffffffffffffffffffffffffffffffffffff169063ffffffff16826040518263ffffffff1660e01b81526004016101079190610456565b600060405180830381600087803b15801561012157600080fd5b505af1158015610135573d6000803e3d6000fd5b505050505050565b60006040518060400160405280858152602001848463ffffffff169060201b1760401b815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906101a892919061025e565b5060208201518060601c9060401c63ffffffff168260010160006101000a81548177ffffffffffffffffffffffffffffffffffffffffffffffff02191690848463ffffffff169073ffffffffffffffffffffffffffffffffffffffff1660201b1702179055505050507fe5e7dd91b3ed7fb84c335f117423d1b9bbbed2d76c57e81520dd681b9ede9885600160008054905061024491906104c7565b6040516102519190610456565b60405180910390a1505050565b82805461026a90610552565b90600052602060002090601f01602090048101928261028c57600085556102d3565b82601f106102a557805160ff19168380011785556102d3565b828001600101855582156102d3579182015b828111156102d25782518255916020019190600101906102b7565b5b5090506102e091906102e4565b5090565b5b808211156102fd5760008160009055506001016102e5565b5090565b600061031461030f84610496565b610471565b90508281526020810184848401111561032c57600080fd5b610337848285610543565b509392505050565b600082601f83011261035057600080fd5b8135610360848260208601610301565b91505092915050565b60008135905061037881610694565b92915050565b60008061039361038e8585610369565b61066d565b915091509250929050565b6000813590506103ad816106ab565b92915050565b6000806000604084860312156103c857600080fd5b600084013567ffffffffffffffff8111156103e257600080fd5b6103ee8682870161033f565b93505060206103ff8682870161037e565b92509250509250925092565b6000806040838503121561041e57600080fd5b600061042c8582860161039e565b925050602061043d8582860161039e565b9150509250929050565b61045081610539565b82525050565b600060208201905061046b6000830184610447565b92915050565b600061047b61048c565b90506104878282610584565b919050565b6000604051905090565b600067ffffffffffffffff8211156104b1576104b0610613565b5b6104ba82610642565b9050602081019050919050565b60006104d282610539565b91506104dd83610539565b9250828210156104f0576104ef6105b5565b5b828203905092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000082169050919050565b6000610532826104fb565b9050919050565b6000819050919050565b82818337600083830152505050565b6000600282049050600182168061056a57607f821691505b6020821081141561057e5761057d6105e4565b5b50919050565b61058d82610642565b810181811067ffffffffffffffff821117156105ac576105ab610613565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160201c9050919050565b60008160401c9050919050565b60008061067983610660565b925063ffffffff8316905061068d83610653565b9150915091565b61069d81610527565b81146106a857600080fd5b50565b6106b481610539565b81146106bf57600080fd5b5056fea2646970667358221220af908b6fbf3d016e755e920038669c36c916a77e4b466f902a810eab9d1c1eea64736f6c63430008040033";

type OracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Oracle__factory extends ContractFactory {
  constructor(...args: OracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Oracle> {
    return super.deploy(overrides || {}) as Promise<Oracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Oracle {
    return super.attach(address) as Oracle;
  }
  override connect(signer: Signer): Oracle__factory {
    return super.connect(signer) as Oracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleInterface {
    return new utils.Interface(_abi) as OracleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Oracle {
    return new Contract(address, _abi, signerOrProvider) as Oracle;
  }
}