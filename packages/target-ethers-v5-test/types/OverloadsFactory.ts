/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { Overloads } from "./Overloads";

export class OverloadsFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Overloads {
    return new Contract(address, _abi, signerOrProvider) as Overloads;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "input1",
        type: "int256"
      }
    ],
    name: "overload1",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "input1",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "input2",
        type: "uint256"
      }
    ],
    name: "overload1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];