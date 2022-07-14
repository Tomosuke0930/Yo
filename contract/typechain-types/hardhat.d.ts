/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "SemaphoreCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SemaphoreCore__factory>;
    getContractFactory(
      name: "ISemaphoreCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISemaphoreCore__factory>;
    getContractFactory(
      name: "IVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVerifier__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Commitment",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Commitment__factory>;
    getContractFactory(
      name: "Group",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Group__factory>;
    getContractFactory(
      name: "ERC1238",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1238__factory>;
    getContractFactory(
      name: "ERC1238Approval",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1238Approval__factory>;
    getContractFactory(
      name: "ERC1238Collection",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1238Collection__factory>;
    getContractFactory(
      name: "ERC1238URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1238URIStorage__factory>;
    getContractFactory(
      name: "IERC1238Collection",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1238Collection__factory>;
    getContractFactory(
      name: "IERC1238URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1238URIStorage__factory>;
    getContractFactory(
      name: "IERC1238",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1238__factory>;
    getContractFactory(
      name: "IERC1238Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1238Receiver__factory>;
    getContractFactory(
      name: "IVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVerifier__factory>;
    getContractFactory(
      name: "IYoMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYoMinter__factory>;
    getContractFactory(
      name: "MerkleTree",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleTree__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Verifier__factory>;
    getContractFactory(
      name: "YoMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YoMinter__factory>;
    getContractFactory(
      name: "YoV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YoV1__factory>;

    getContractAt(
      name: "SemaphoreCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SemaphoreCore>;
    getContractAt(
      name: "ISemaphoreCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISemaphoreCore>;
    getContractAt(
      name: "IVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVerifier>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Commitment",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Commitment>;
    getContractAt(
      name: "Group",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Group>;
    getContractAt(
      name: "ERC1238",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1238>;
    getContractAt(
      name: "ERC1238Approval",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1238Approval>;
    getContractAt(
      name: "ERC1238Collection",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1238Collection>;
    getContractAt(
      name: "ERC1238URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1238URIStorage>;
    getContractAt(
      name: "IERC1238Collection",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1238Collection>;
    getContractAt(
      name: "IERC1238URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1238URIStorage>;
    getContractAt(
      name: "IERC1238",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1238>;
    getContractAt(
      name: "IERC1238Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1238Receiver>;
    getContractAt(
      name: "IVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVerifier>;
    getContractAt(
      name: "IYoMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYoMinter>;
    getContractAt(
      name: "MerkleTree",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleTree>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Verifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Verifier>;
    getContractAt(
      name: "YoMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YoMinter>;
    getContractAt(
      name: "YoV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YoV1>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
