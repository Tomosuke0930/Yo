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
} from "./common";

export declare namespace IMerkleTreeNode {
  export type BatchAddNodeStruct = {
    data: PromiseOrValue<BytesLike>;
    groupId: PromiseOrValue<BigNumberish>;
    groupName: PromiseOrValue<string>;
    index: PromiseOrValue<BigNumberish>;
    level: PromiseOrValue<BigNumberish>;
  };

  export type BatchAddNodeStructOutput = [
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber
  ] & {
    data: string;
    groupId: BigNumber;
    groupName: string;
    index: BigNumber;
    level: BigNumber;
  };

  export type BatchUpdateNodeStruct = {
    data: PromiseOrValue<BytesLike>;
    groupId: PromiseOrValue<BigNumberish>;
    index: PromiseOrValue<BigNumberish>;
    level: PromiseOrValue<BigNumberish>;
  };

  export type BatchUpdateNodeStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & { data: string; groupId: BigNumber; index: BigNumber; level: BigNumber };

  export type BatchUpdateNodeProStruct = {
    data: PromiseOrValue<BytesLike>;
    groupId: PromiseOrValue<BigNumberish>;
    index: PromiseOrValue<BigNumberish>;
    level: PromiseOrValue<BigNumberish>;
    siblingHash: PromiseOrValue<BytesLike>;
  };

  export type BatchUpdateNodeProStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    data: string;
    groupId: BigNumber;
    index: BigNumber;
    level: BigNumber;
    siblingHash: string;
  };

  export type ParentLocateStruct = {
    groupId: PromiseOrValue<BigNumberish>;
    index: PromiseOrValue<BigNumberish>;
    level: PromiseOrValue<BigNumberish>;
  };

  export type ParentLocateStructOutput = [BigNumber, BigNumber, BigNumber] & {
    groupId: BigNumber;
    index: BigNumber;
    level: BigNumber;
  };

  export type MerkleTreeNodeStruct = {
    id: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<BytesLike>;
    groupId: PromiseOrValue<BigNumberish>;
    groupName: PromiseOrValue<string>;
    index: PromiseOrValue<BigNumberish>;
    level: PromiseOrValue<BigNumberish>;
    siblingHash: PromiseOrValue<BytesLike>;
    parent: IMerkleTreeNode.ParentLocateStruct;
  };

  export type MerkleTreeNodeStructOutput = [
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string,
    IMerkleTreeNode.ParentLocateStructOutput
  ] & {
    id: BigNumber;
    data: string;
    groupId: BigNumber;
    groupName: string;
    index: BigNumber;
    level: BigNumber;
    siblingHash: string;
    parent: IMerkleTreeNode.ParentLocateStructOutput;
  };
}

export interface MerkleTreeInterface extends utils.Interface {
  functions: {
    "addNode(bytes32,uint256,string,uint256,uint256)": FunctionFragment;
    "batchAddNode((bytes32,uint256,string,uint256,uint256)[])": FunctionFragment;
    "batchUpdateNode((bytes32,uint256,uint256,uint256)[])": FunctionFragment;
    "batchUpdateNodePro((bytes32,uint256,uint256,uint256,bytes32)[])": FunctionFragment;
    "getAllNodes(uint256)": FunctionFragment;
    "getNode(uint256,uint256,uint256)": FunctionFragment;
    "getNodeByHash(uint256,bytes32)": FunctionFragment;
    "getNodeCounts(uint256)": FunctionFragment;
    "getSameLevelNodesLength(uint256,uint256)": FunctionFragment;
    "merkleTrees(uint256)": FunctionFragment;
    "nums()": FunctionFragment;
    "updateNode(uint256,uint256,uint256,bytes32)": FunctionFragment;
    "updateNodeProperties(uint256,uint256,uint256,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addNode"
      | "batchAddNode"
      | "batchUpdateNode"
      | "batchUpdateNodePro"
      | "getAllNodes"
      | "getNode"
      | "getNodeByHash"
      | "getNodeCounts"
      | "getSameLevelNodesLength"
      | "merkleTrees"
      | "nums"
      | "updateNode"
      | "updateNodeProperties"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addNode",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "batchAddNode",
    values: [IMerkleTreeNode.BatchAddNodeStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchUpdateNode",
    values: [IMerkleTreeNode.BatchUpdateNodeStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchUpdateNodePro",
    values: [IMerkleTreeNode.BatchUpdateNodeProStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllNodes",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNode",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getNodeByHash",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNodeCounts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSameLevelNodesLength",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleTrees",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "nums", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateNode",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateNodeProperties",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "addNode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchAddNode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchUpdateNode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchUpdateNodePro",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllNodes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNodeByHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNodeCounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSameLevelNodesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleTrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nums", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateNode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateNodeProperties",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MerkleTree extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MerkleTreeInterface;

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
    addNode(
      _data: PromiseOrValue<BytesLike>,
      _groupId: PromiseOrValue<BigNumberish>,
      _groupName: PromiseOrValue<string>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batchAddNode(
      txs: IMerkleTreeNode.BatchAddNodeStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batchUpdateNode(
      txs: IMerkleTreeNode.BatchUpdateNodeStruct[],
      overrides?: CallOverrides
    ): Promise<[void]>;

    batchUpdateNodePro(
      txs: IMerkleTreeNode.BatchUpdateNodeProStruct[],
      overrides?: CallOverrides
    ): Promise<[void]>;

    getAllNodes(
      _groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IMerkleTreeNode.MerkleTreeNodeStructOutput[]] & {
        allNodes: IMerkleTreeNode.MerkleTreeNodeStructOutput[];
      }
    >;

    getNode(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IMerkleTreeNode.MerkleTreeNodeStructOutput] & {
        node: IMerkleTreeNode.MerkleTreeNodeStructOutput;
      }
    >;

    getNodeByHash(
      _groupId: PromiseOrValue<BigNumberish>,
      _hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [IMerkleTreeNode.MerkleTreeNodeStructOutput] & {
        node: IMerkleTreeNode.MerkleTreeNodeStructOutput;
      }
    >;

    getNodeCounts(
      _groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nodeCounts: BigNumber }>;

    getSameLevelNodesLength(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { index: BigNumber }>;

    merkleTrees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { groupId: BigNumber }>;

    nums(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateNode(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    updateNodeProperties(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      _siblingHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  addNode(
    _data: PromiseOrValue<BytesLike>,
    _groupId: PromiseOrValue<BigNumberish>,
    _groupName: PromiseOrValue<string>,
    _level: PromiseOrValue<BigNumberish>,
    _index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batchAddNode(
    txs: IMerkleTreeNode.BatchAddNodeStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batchUpdateNode(
    txs: IMerkleTreeNode.BatchUpdateNodeStruct[],
    overrides?: CallOverrides
  ): Promise<void>;

  batchUpdateNodePro(
    txs: IMerkleTreeNode.BatchUpdateNodeProStruct[],
    overrides?: CallOverrides
  ): Promise<void>;

  getAllNodes(
    _groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IMerkleTreeNode.MerkleTreeNodeStructOutput[]>;

  getNode(
    _groupId: PromiseOrValue<BigNumberish>,
    _level: PromiseOrValue<BigNumberish>,
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IMerkleTreeNode.MerkleTreeNodeStructOutput>;

  getNodeByHash(
    _groupId: PromiseOrValue<BigNumberish>,
    _hash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<IMerkleTreeNode.MerkleTreeNodeStructOutput>;

  getNodeCounts(
    _groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSameLevelNodesLength(
    _groupId: PromiseOrValue<BigNumberish>,
    _level: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  merkleTrees(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nums(overrides?: CallOverrides): Promise<BigNumber>;

  updateNode(
    _groupId: PromiseOrValue<BigNumberish>,
    _level: PromiseOrValue<BigNumberish>,
    _index: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  updateNodeProperties(
    _groupId: PromiseOrValue<BigNumberish>,
    _level: PromiseOrValue<BigNumberish>,
    _index: PromiseOrValue<BigNumberish>,
    _siblingHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    addNode(
      _data: PromiseOrValue<BytesLike>,
      _groupId: PromiseOrValue<BigNumberish>,
      _groupName: PromiseOrValue<string>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    batchAddNode(
      txs: IMerkleTreeNode.BatchAddNodeStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    batchUpdateNode(
      txs: IMerkleTreeNode.BatchUpdateNodeStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    batchUpdateNodePro(
      txs: IMerkleTreeNode.BatchUpdateNodeProStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    getAllNodes(
      _groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IMerkleTreeNode.MerkleTreeNodeStructOutput[]>;

    getNode(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IMerkleTreeNode.MerkleTreeNodeStructOutput>;

    getNodeByHash(
      _groupId: PromiseOrValue<BigNumberish>,
      _hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<IMerkleTreeNode.MerkleTreeNodeStructOutput>;

    getNodeCounts(
      _groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSameLevelNodesLength(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleTrees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nums(overrides?: CallOverrides): Promise<BigNumber>;

    updateNode(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateNodeProperties(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      _siblingHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addNode(
      _data: PromiseOrValue<BytesLike>,
      _groupId: PromiseOrValue<BigNumberish>,
      _groupName: PromiseOrValue<string>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batchAddNode(
      txs: IMerkleTreeNode.BatchAddNodeStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batchUpdateNode(
      txs: IMerkleTreeNode.BatchUpdateNodeStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    batchUpdateNodePro(
      txs: IMerkleTreeNode.BatchUpdateNodeProStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllNodes(
      _groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNode(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNodeByHash(
      _groupId: PromiseOrValue<BigNumberish>,
      _hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNodeCounts(
      _groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSameLevelNodesLength(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleTrees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nums(overrides?: CallOverrides): Promise<BigNumber>;

    updateNode(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateNodeProperties(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      _siblingHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addNode(
      _data: PromiseOrValue<BytesLike>,
      _groupId: PromiseOrValue<BigNumberish>,
      _groupName: PromiseOrValue<string>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batchAddNode(
      txs: IMerkleTreeNode.BatchAddNodeStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batchUpdateNode(
      txs: IMerkleTreeNode.BatchUpdateNodeStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    batchUpdateNodePro(
      txs: IMerkleTreeNode.BatchUpdateNodeProStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllNodes(
      _groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNode(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNodeByHash(
      _groupId: PromiseOrValue<BigNumberish>,
      _hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNodeCounts(
      _groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSameLevelNodesLength(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleTrees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nums(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateNode(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateNodeProperties(
      _groupId: PromiseOrValue<BigNumberish>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      _siblingHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
