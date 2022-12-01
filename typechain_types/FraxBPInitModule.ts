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

export interface FraxBPInitModuleInterface extends utils.Interface {
  functions: {
    "PRICE_PRECISION()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "depositFor(address,uint256)": FunctionFragment;
    "depositHelper(uint256,uint256)": FunctionFragment;
    "frax()": FunctionFragment;
    "fraxBPLp()": FunctionFragment;
    "fraxBPPHOMetapool()": FunctionFragment;
    "fraxBPPool()": FunctionFragment;
    "getUSDPerFraxBP()": FunctionFragment;
    "metapoolBalance(address)": FunctionFragment;
    "moduleManager()": FunctionFragment;
    "owner()": FunctionFragment;
    "pho()": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "redeem()": FunctionFragment;
    "redemptionStartDate()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "saleEndDate()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "usdc()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "PRICE_PRECISION"
      | "deposit"
      | "depositFor"
      | "depositHelper"
      | "frax"
      | "fraxBPLp"
      | "fraxBPPHOMetapool"
      | "fraxBPPool"
      | "getUSDPerFraxBP"
      | "metapoolBalance"
      | "moduleManager"
      | "owner"
      | "pho"
      | "priceOracle"
      | "redeem"
      | "redemptionStartDate"
      | "renounceOwnership"
      | "saleEndDate"
      | "transferOwnership"
      | "usdc"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "PRICE_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFor",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositHelper",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "frax", values?: undefined): string;
  encodeFunctionData(functionFragment: "fraxBPLp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fraxBPPHOMetapool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fraxBPPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUSDPerFraxBP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "metapoolBalance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "moduleManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pho", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "redeem", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redemptionStartDate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "saleEndDate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "usdc", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "PRICE_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositHelper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "frax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fraxBPLp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fraxBPPHOMetapool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fraxBPPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUSDPerFraxBP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "metapoolBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moduleManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pho", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redemptionStartDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "saleEndDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdc", data: BytesLike): Result;

  events: {
    "Deposited(address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Redeemed(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
}

export interface DepositedEventObject {
  depositor: string;
  fraxBPLpAmount: BigNumber;
  phoAmount: BigNumber;
}
export type DepositedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  DepositedEventObject
>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RedeemedEventObject {
  redeemer: string;
  redeemAmount: BigNumber;
}
export type RedeemedEvent = TypedEvent<
  [string, BigNumber],
  RedeemedEventObject
>;

export type RedeemedEventFilter = TypedEventFilter<RedeemedEvent>;

export interface FraxBPInitModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FraxBPInitModuleInterface;

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
    PRICE_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositFor(
      depositor: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositHelper(
      usdcAmount: PromiseOrValue<BigNumberish>,
      fraxAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    frax(overrides?: CallOverrides): Promise<[string]>;

    fraxBPLp(overrides?: CallOverrides): Promise<[string]>;

    fraxBPPHOMetapool(overrides?: CallOverrides): Promise<[string]>;

    fraxBPPool(overrides?: CallOverrides): Promise<[string]>;

    getUSDPerFraxBP(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    metapoolBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    moduleManager(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pho(overrides?: CallOverrides): Promise<[string]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    redeem(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redemptionStartDate(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    saleEndDate(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    usdc(overrides?: CallOverrides): Promise<[string]>;
  };

  PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositFor(
    depositor: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositHelper(
    usdcAmount: PromiseOrValue<BigNumberish>,
    fraxAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  frax(overrides?: CallOverrides): Promise<string>;

  fraxBPLp(overrides?: CallOverrides): Promise<string>;

  fraxBPPHOMetapool(overrides?: CallOverrides): Promise<string>;

  fraxBPPool(overrides?: CallOverrides): Promise<string>;

  getUSDPerFraxBP(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  metapoolBalance(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  moduleManager(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pho(overrides?: CallOverrides): Promise<string>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  redeem(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redemptionStartDate(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  saleEndDate(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  usdc(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositFor(
      depositor: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositHelper(
      usdcAmount: PromiseOrValue<BigNumberish>,
      fraxAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    frax(overrides?: CallOverrides): Promise<string>;

    fraxBPLp(overrides?: CallOverrides): Promise<string>;

    fraxBPPHOMetapool(overrides?: CallOverrides): Promise<string>;

    fraxBPPool(overrides?: CallOverrides): Promise<string>;

    getUSDPerFraxBP(overrides?: CallOverrides): Promise<BigNumber>;

    metapoolBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    moduleManager(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pho(overrides?: CallOverrides): Promise<string>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    redeem(overrides?: CallOverrides): Promise<void>;

    redemptionStartDate(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    saleEndDate(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    usdc(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Deposited(address,uint256,uint256)"(
      depositor?: PromiseOrValue<string> | null,
      fraxBPLpAmount?: null,
      phoAmount?: null
    ): DepositedEventFilter;
    Deposited(
      depositor?: PromiseOrValue<string> | null,
      fraxBPLpAmount?: null,
      phoAmount?: null
    ): DepositedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Redeemed(address,uint256)"(
      redeemer?: PromiseOrValue<string> | null,
      redeemAmount?: null
    ): RedeemedEventFilter;
    Redeemed(
      redeemer?: PromiseOrValue<string> | null,
      redeemAmount?: null
    ): RedeemedEventFilter;
  };

  estimateGas: {
    PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositFor(
      depositor: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositHelper(
      usdcAmount: PromiseOrValue<BigNumberish>,
      fraxAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    frax(overrides?: CallOverrides): Promise<BigNumber>;

    fraxBPLp(overrides?: CallOverrides): Promise<BigNumber>;

    fraxBPPHOMetapool(overrides?: CallOverrides): Promise<BigNumber>;

    fraxBPPool(overrides?: CallOverrides): Promise<BigNumber>;

    getUSDPerFraxBP(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    metapoolBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    moduleManager(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pho(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redemptionStartDate(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    saleEndDate(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    usdc(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    PRICE_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositFor(
      depositor: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositHelper(
      usdcAmount: PromiseOrValue<BigNumberish>,
      fraxAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    frax(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fraxBPLp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fraxBPPHOMetapool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fraxBPPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUSDPerFraxBP(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    metapoolBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    moduleManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pho(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redemptionStartDate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    saleEndDate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    usdc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}