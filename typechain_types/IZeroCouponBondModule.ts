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
} from "./common";

export interface IZeroCouponBondModuleInterface extends utils.Interface {
  functions: {
    "depositBond(uint256)": FunctionFragment;
    "redeemBond()": FunctionFragment;
    "setInterestRate(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "depositBond" | "redeemBond" | "setInterestRate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "depositBond",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemBond",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setInterestRate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "depositBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeemBond", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setInterestRate",
    data: BytesLike
  ): Result;

  events: {
    "BondIssued(address,uint256,uint256)": EventFragment;
    "BondRedeemed(address,uint256)": EventFragment;
    "InterestRateSet(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BondIssued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BondRedeemed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InterestRateSet"): EventFragment;
}

export interface BondIssuedEventObject {
  depositor: string;
  depositAmount: BigNumber;
  mintAmount: BigNumber;
}
export type BondIssuedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  BondIssuedEventObject
>;

export type BondIssuedEventFilter = TypedEventFilter<BondIssuedEvent>;

export interface BondRedeemedEventObject {
  redeemer: string;
  redeemAmount: BigNumber;
}
export type BondRedeemedEvent = TypedEvent<
  [string, BigNumber],
  BondRedeemedEventObject
>;

export type BondRedeemedEventFilter = TypedEventFilter<BondRedeemedEvent>;

export interface InterestRateSetEventObject {
  interestRate: BigNumber;
}
export type InterestRateSetEvent = TypedEvent<
  [BigNumber],
  InterestRateSetEventObject
>;

export type InterestRateSetEventFilter = TypedEventFilter<InterestRateSetEvent>;

export interface IZeroCouponBondModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IZeroCouponBondModuleInterface;

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
    depositBond(
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeemBond(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setInterestRate(
      interestRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  depositBond(
    depositAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeemBond(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setInterestRate(
    interestRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    depositBond(
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    redeemBond(overrides?: CallOverrides): Promise<void>;

    setInterestRate(
      interestRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BondIssued(address,uint256,uint256)"(
      depositor?: PromiseOrValue<string> | null,
      depositAmount?: null,
      mintAmount?: null
    ): BondIssuedEventFilter;
    BondIssued(
      depositor?: PromiseOrValue<string> | null,
      depositAmount?: null,
      mintAmount?: null
    ): BondIssuedEventFilter;

    "BondRedeemed(address,uint256)"(
      redeemer?: PromiseOrValue<string> | null,
      redeemAmount?: null
    ): BondRedeemedEventFilter;
    BondRedeemed(
      redeemer?: PromiseOrValue<string> | null,
      redeemAmount?: null
    ): BondRedeemedEventFilter;

    "InterestRateSet(uint256)"(interestRate?: null): InterestRateSetEventFilter;
    InterestRateSet(interestRate?: null): InterestRateSetEventFilter;
  };

  estimateGas: {
    depositBond(
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeemBond(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setInterestRate(
      interestRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositBond(
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeemBond(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setInterestRate(
      interestRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}