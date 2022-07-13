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

export declare namespace IMerkleTreeNode {
  export type BatchAddNodeStruct = {
    hash: PromiseOrValue<BytesLike>;
    groupId: PromiseOrValue<BigNumberish>;
    groupName: PromiseOrValue<BytesLike>;
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
    hash: string;
    groupId: BigNumber;
    groupName: string;
    index: BigNumber;
    level: BigNumber;
  };

  export type BatchUpdateNodeStruct = {
    hash: PromiseOrValue<BytesLike>;
    groupId: PromiseOrValue<BigNumberish>;
    index: PromiseOrValue<BigNumberish>;
    level: PromiseOrValue<BigNumberish>;
  };

  export type BatchUpdateNodeStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & { hash: string; groupId: BigNumber; index: BigNumber; level: BigNumber };

  export type BatchUpdateNodeProStruct = {
    groupId: PromiseOrValue<BigNumberish>;
    index: PromiseOrValue<BigNumberish>;
    level: PromiseOrValue<BigNumberish>;
    parentIndex: PromiseOrValue<BigNumberish>;
    parentLevel: PromiseOrValue<BigNumberish>;
    siblingHash: PromiseOrValue<BytesLike>;
  };

  export type BatchUpdateNodeProStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    groupId: BigNumber;
    index: BigNumber;
    level: BigNumber;
    parentIndex: BigNumber;
    parentLevel: BigNumber;
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
    hash: PromiseOrValue<BytesLike>;
    groupId: PromiseOrValue<BigNumberish>;
    groupName: PromiseOrValue<BytesLike>;
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
    hash: string;
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
    "addNode(address,bytes32,uint256,bytes32,uint256,uint256)": FunctionFragment;
    "batchAddNode(address,(bytes32,uint256,bytes32,uint256,uint256)[])": FunctionFragment;
    "batchUpdateNode(address,(bytes32,uint256,uint256,uint256)[])": FunctionFragment;
    "batchUpdateNodePro(address,(uint256,uint256,uint256,uint256,uint256,bytes32)[])": FunctionFragment;
    "getAllNodes(uint256)": FunctionFragment;
    "getNode(uint256,uint256,uint256)": FunctionFragment;
    "getNodeByHash(uint256,bytes32)": FunctionFragment;
    "getNodeCounts(uint256)": FunctionFragment;
    "getSameLevelNodesLength(uint256,uint256)": FunctionFragment;
    "merkleTrees(uint256)": FunctionFragment;
    "nums()": FunctionFragment;
    "updateNodeHash(address,uint256,bytes32)": FunctionFragment;
    "updateNodeProperties(address,uint256,uint256,uint256,bytes32)": FunctionFragment;
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
      | "updateNodeHash"
      | "updateNodeProperties"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addNode",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "batchAddNode",
    values: [PromiseOrValue<string>, IMerkleTreeNode.BatchAddNodeStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchUpdateNode",
    values: [PromiseOrValue<string>, IMerkleTreeNode.BatchUpdateNodeStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchUpdateNodePro",
    values: [PromiseOrValue<string>, IMerkleTreeNode.BatchUpdateNodeProStruct[]]
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
    functionFragment: "updateNodeHash",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateNodeProperties",
    values: [
      PromiseOrValue<string>,
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
  decodeFunctionResult(
    functionFragment: "updateNodeHash",
    data: BytesLike
  ): Result;
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
      _signer: PromiseOrValue<string>,
      _hash: PromiseOrValue<BytesLike>,
      _groupId: PromiseOrValue<BigNumberish>,
      _groupName: PromiseOrValue<BytesLike>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batchAddNode(
      _signer: PromiseOrValue<string>,
      txs: IMerkleTreeNode.BatchAddNodeStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batchUpdateNode(
      _signer: PromiseOrValue<string>,
      txs: IMerkleTreeNode.BatchUpdateNodeStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batchUpdateNodePro(
      _signer: PromiseOrValue<string>,
      txs: IMerkleTreeNode.BatchUpdateNodeProStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    updateNodeHash(
      _signer: PromiseOrValue<string>,
      _groupId: PromiseOrValue<BigNumberish>,
      _hash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateNodeProperties(
      _signer: PromiseOrValue<string>,
      _groupId: PromiseOrValue<BigNumberish>,
      _parentLevel: PromiseOrValue<BigNumberish>,
      _parentIndex: PromiseOrValue<BigNumberish>,
      _siblingHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addNode(
    _signer: PromiseOrValue<string>,
    _hash: PromiseOrValue<BytesLike>,
    _groupId: PromiseOrValue<BigNumberish>,
    _groupName: PromiseOrValue<BytesLike>,
    _level: PromiseOrValue<BigNumberish>,
    _index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batchAddNode(
    _signer: PromiseOrValue<string>,
    txs: IMerkleTreeNode.BatchAddNodeStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batchUpdateNode(
    _signer: PromiseOrValue<string>,
    txs: IMerkleTreeNode.BatchUpdateNodeStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batchUpdateNodePro(
    _signer: PromiseOrValue<string>,
    txs: IMerkleTreeNode.BatchUpdateNodeProStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  updateNodeHash(
    _signer: PromiseOrValue<string>,
    _groupId: PromiseOrValue<BigNumberish>,
    _hash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateNodeProperties(
    _signer: PromiseOrValue<string>,
    _groupId: PromiseOrValue<BigNumberish>,
    _parentLevel: PromiseOrValue<BigNumberish>,
    _parentIndex: PromiseOrValue<BigNumberish>,
    _siblingHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addNode(
      _signer: PromiseOrValue<string>,
      _hash: PromiseOrValue<BytesLike>,
      _groupId: PromiseOrValue<BigNumberish>,
      _groupName: PromiseOrValue<BytesLike>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    batchAddNode(
      _signer: PromiseOrValue<string>,
      txs: IMerkleTreeNode.BatchAddNodeStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    batchUpdateNode(
      _signer: PromiseOrValue<string>,
      txs: IMerkleTreeNode.BatchUpdateNodeStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    batchUpdateNodePro(
      _signer: PromiseOrValue<string>,
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

    updateNodeHash(
      _signer: PromiseOrValue<string>,
      _groupId: PromiseOrValue<BigNumberish>,
      _hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateNodeProperties(
      _signer: PromiseOrValue<string>,
      _groupId: PromiseOrValue<BigNumberish>,
      _parentLevel: PromiseOrValue<BigNumberish>,
      _parentIndex: PromiseOrValue<BigNumberish>,
      _siblingHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addNode(
      _signer: PromiseOrValue<string>,
      _hash: PromiseOrValue<BytesLike>,
      _groupId: PromiseOrValue<BigNumberish>,
      _groupName: PromiseOrValue<BytesLike>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batchAddNode(
      _signer: PromiseOrValue<string>,
      txs: IMerkleTreeNode.BatchAddNodeStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batchUpdateNode(
      _signer: PromiseOrValue<string>,
      txs: IMerkleTreeNode.BatchUpdateNodeStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batchUpdateNodePro(
      _signer: PromiseOrValue<string>,
      txs: IMerkleTreeNode.BatchUpdateNodeProStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
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

    updateNodeHash(
      _signer: PromiseOrValue<string>,
      _groupId: PromiseOrValue<BigNumberish>,
      _hash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateNodeProperties(
      _signer: PromiseOrValue<string>,
      _groupId: PromiseOrValue<BigNumberish>,
      _parentLevel: PromiseOrValue<BigNumberish>,
      _parentIndex: PromiseOrValue<BigNumberish>,
      _siblingHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addNode(
      _signer: PromiseOrValue<string>,
      _hash: PromiseOrValue<BytesLike>,
      _groupId: PromiseOrValue<BigNumberish>,
      _groupName: PromiseOrValue<BytesLike>,
      _level: PromiseOrValue<BigNumberish>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batchAddNode(
      _signer: PromiseOrValue<string>,
      txs: IMerkleTreeNode.BatchAddNodeStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batchUpdateNode(
      _signer: PromiseOrValue<string>,
      txs: IMerkleTreeNode.BatchUpdateNodeStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batchUpdateNodePro(
      _signer: PromiseOrValue<string>,
      txs: IMerkleTreeNode.BatchUpdateNodeProStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
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

    updateNodeHash(
      _signer: PromiseOrValue<string>,
      _groupId: PromiseOrValue<BigNumberish>,
      _hash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateNodeProperties(
      _signer: PromiseOrValue<string>,
      _groupId: PromiseOrValue<BigNumberish>,
      _parentLevel: PromiseOrValue<BigNumberish>,
      _parentIndex: PromiseOrValue<BigNumberish>,
      _siblingHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}