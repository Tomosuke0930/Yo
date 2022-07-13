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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace IGroup {
  export type GroupStruct = {
    id: PromiseOrValue<BigNumberish>;
    nullfier: PromiseOrValue<BigNumberish>;
    name: PromiseOrValue<string>;
    criteria: PromiseOrValue<BigNumberish>;
    attr_key: PromiseOrValue<string>;
  };

  export type GroupStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string
  ] & {
    id: BigNumber;
    nullfier: BigNumber;
    name: string;
    criteria: BigNumber;
    attr_key: string;
  };
}

export interface GroupInterface extends utils.Interface {
  functions: {
    "getGroup(uint256)": FunctionFragment;
    "getGroups()": FunctionFragment;
    "groupIds(uint256)": FunctionFragment;
    "groupNullfiers(uint256)": FunctionFragment;
    "groups(uint256)": FunctionFragment;
    "initialGroups(tuple[49])": FunctionFragment;
    "size()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getGroup"
      | "getGroups"
      | "groupIds"
      | "groupNullfiers"
      | "groups"
      | "initialGroups"
      | "size"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getGroup",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getGroups", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "groupIds",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "groupNullfiers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "groups",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialGroups",
    values: [IGroup.GroupStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "size", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getGroup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getGroups", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "groupIds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "groupNullfiers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "groups", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialGroups",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "size", data: BytesLike): Result;

  events: {};
}

export interface Group extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GroupInterface;

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
    getGroup(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IGroup.GroupStructOutput] & { group: IGroup.GroupStructOutput }
    >;

    getGroups(
      overrides?: CallOverrides
    ): Promise<
      [IGroup.GroupStructOutput[]] & { _groups: IGroup.GroupStructOutput[] }
    >;

    groupIds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    groupNullfiers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    groups(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber, string] & {
        id: BigNumber;
        nullfier: BigNumber;
        name: string;
        criteria: BigNumber;
        attr_key: string;
      }
    >;

    initialGroups(
      _groups: IGroup.GroupStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    size(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getGroup(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IGroup.GroupStructOutput>;

  getGroups(overrides?: CallOverrides): Promise<IGroup.GroupStructOutput[]>;

  groupIds(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  groupNullfiers(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  groups(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, BigNumber, string] & {
      id: BigNumber;
      nullfier: BigNumber;
      name: string;
      criteria: BigNumber;
      attr_key: string;
    }
  >;

  initialGroups(
    _groups: IGroup.GroupStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  size(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getGroup(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IGroup.GroupStructOutput>;

    getGroups(overrides?: CallOverrides): Promise<IGroup.GroupStructOutput[]>;

    groupIds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    groupNullfiers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    groups(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber, string] & {
        id: BigNumber;
        nullfier: BigNumber;
        name: string;
        criteria: BigNumber;
        attr_key: string;
      }
    >;

    initialGroups(
      _groups: IGroup.GroupStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    size(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getGroup(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGroups(overrides?: CallOverrides): Promise<BigNumber>;

    groupIds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    groupNullfiers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    groups(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialGroups(
      _groups: IGroup.GroupStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    size(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getGroup(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGroups(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    groupIds(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    groupNullfiers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    groups(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialGroups(
      _groups: IGroup.GroupStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    size(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}