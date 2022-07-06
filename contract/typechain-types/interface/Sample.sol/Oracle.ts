/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface OracleInterface extends utils.Interface {
  functions: {
    "query(bytes,function)": FunctionFragment;
    "reply(uint256,uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "query" | "reply"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "query",
    values: [PromiseOrValue<BytesLike>, any]
  ): string;
  encodeFunctionData(
    functionFragment: "reply",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "query", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reply", data: BytesLike): Result;

  events: {
    "NewRequest(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewRequest"): EventFragment;
}

export interface NewRequestEventObject {
  arg0: BigNumber;
}
export type NewRequestEvent = TypedEvent<[BigNumber], NewRequestEventObject>;

export type NewRequestEventFilter = TypedEventFilter<NewRequestEvent>;

export interface Oracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    query(
      data: PromiseOrValue<BytesLike>,
      callback: any,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reply(
      requestID: PromiseOrValue<BigNumberish>,
      response: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  query(
    data: PromiseOrValue<BytesLike>,
    callback: any,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reply(
    requestID: PromiseOrValue<BigNumberish>,
    response: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    query(
      data: PromiseOrValue<BytesLike>,
      callback: any,
      overrides?: CallOverrides
    ): Promise<void>;

    reply(
      requestID: PromiseOrValue<BigNumberish>,
      response: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewRequest(uint256)"(arg0?: null): NewRequestEventFilter;
    NewRequest(arg0?: null): NewRequestEventFilter;
  };

  estimateGas: {
    query(
      data: PromiseOrValue<BytesLike>,
      callback: any,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reply(
      requestID: PromiseOrValue<BigNumberish>,
      response: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    query(
      data: PromiseOrValue<BytesLike>,
      callback: any,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reply(
      requestID: PromiseOrValue<BigNumberish>,
      response: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
