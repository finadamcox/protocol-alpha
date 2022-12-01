/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  PriceController,
  PriceControllerInterface,
} from "../PriceController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_phoAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_moduleManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_kernel",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oracleAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_dexPoolAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cooldownPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_priceBand",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_priceMitigationPercentage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSlippage",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CooldownNotSatisfied",
    type: "error",
  },
  {
    inputs: [],
    name: "CooldownPeriodAtLeastOneHour",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughBalanceInStabilizer",
    type: "error",
  },
  {
    inputs: [],
    name: "SameAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "SameValue",
    type: "error",
  },
  {
    inputs: [],
    name: "ValueNotInRange",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroValue",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newCooldownPeriod",
        type: "uint256",
      },
    ],
    name: "CooldownPeriodUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newMaxSlippage",
        type: "uint256",
      },
    ],
    name: "MaxSlippageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newOracleAddress",
        type: "address",
      },
    ],
    name: "OracleAddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newGapFraction",
        type: "uint256",
      },
    ],
    name: "PriceMitigationPercentageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dexPool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenSent",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenReceived",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountReceived",
        type: "uint256",
      },
    ],
    name: "TokensExchanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
    ],
    name: "buyAndBurnPHO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "current_price",
        type: "uint256",
      },
    ],
    name: "checkPriceBand",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "cooldownPeriod",
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
    inputs: [],
    name: "curveFactory",
    outputs: [
      {
        internalType: "contract ICurveFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dexPool",
    outputs: [
      {
        internalType: "contract ICurvePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kernel",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastCooldownReset",
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
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "diff",
        type: "uint256",
      },
    ],
    name: "marketToTargetDiff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSlippage",
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
        name: "phoAmount",
        type: "uint256",
      },
    ],
    name: "mintAndSellPHO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "moduleManager",
    outputs: [
      {
        internalType: "contract IModuleManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pho",
    outputs: [
      {
        internalType: "contract IPHO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceBand",
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
    inputs: [],
    name: "priceMitigationPercentage",
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
    inputs: [],
    name: "priceOracle",
    outputs: [
      {
        internalType: "contract DummyOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newCooldownPeriod",
        type: "uint256",
      },
    ],
    name: "setCooldownPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMaxSlippage",
        type: "uint256",
      },
    ],
    name: "setMaxSlippage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOracleAddress",
        type: "address",
      },
    ],
    name: "setOracleAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newPriceMitigationPercentage",
        type: "uint256",
      },
    ],
    name: "setPriceMitigationPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stabilize",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdc",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052600880546001600160a01b031990811673b9fc157394af804a3578134a6585c0dc9cc990d4179091556009805490911673a0b86991c6218b36c1d19d4a2e9eb0ce3606eb481790553480156200005957600080fd5b5060405162001649380380620016498339810160408190526200007c9162000264565b6200008733620001f7565b6001600160a01b0389161580620000a557506001600160a01b038816155b80620000b857506001600160a01b038716155b80620000cb57506001600160a01b038616155b80620000de57506001600160a01b038516155b15620000fd5760405163d92e233d60e01b815260040160405180910390fd5b610e10841015620001215760405163cc19174960e01b815260040160405180910390fd5b821580620001315750620186a083115b80620001485750811580620001485750620186a082115b806200015f57508015806200015f5750620186a081115b156200017e57604051633759768360e21b815260040160405180910390fd5b600580546001600160a01b03199081166001600160a01b039b8c1617909155600a80548216998b1699909917909855600b80548916978a169790971790965560068054881695891695909517909455600780549096169290961691909117909355600292909255608092909252600155600455620002fb565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200025f57600080fd5b919050565b60008060008060008060008060006101208a8c0312156200028457600080fd5b6200028f8a62000247565b98506200029f60208b0162000247565b9750620002af60408b0162000247565b9650620002bf60608b0162000247565b9550620002cf60808b0162000247565b945060a08a0151935060c08a0151925060e08a015191506101008a015190509295985092959850929598565b60805161132b6200031e600039600081816102c1015261062d015261132b6000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c8063715018a6116100c35780639f58d8821161007c5780639f58d882146102e3578063ae6836d6146102f6578063d2a035c614610309578063d4aae0c414610312578063ebec694d14610325578063f2fde38b1461033857600080fd5b8063715018a61461027457806372b395321461027c57806380ea3de11461028f5780638c04166f146102a25780638da5cb5b146102ab5780639f1bf63e146102bc57600080fd5b80633e413bee116101155780633e413bee146101fd57806342076d161461021057806343f68a49146102235780634c69c00f1461023657806353017a8314610249578063552984b31461025c57600080fd5b806304646a491461015d5780630ddba7fc1461017957806320832ac2146101a15780632630c12f146101aa57806326f30a89146101d55780633d2fa2d2146101ea575b600080fd5b61016660025481565b6040519081526020015b60405180910390f35b61018c61018736600461115d565b61034b565b60408051928352901515602083015201610170565b61016660035481565b6006546101bd906001600160a01b031681565b6040516001600160a01b039091168152602001610170565b6101e86101e336600461115d565b610394565b005b6007546101bd906001600160a01b031681565b6009546101bd906001600160a01b031681565b61016661021e36600461115d565b610427565b6101e861023136600461115d565b610442565b6101e861024436600461118b565b6104ce565b6005546101bd906001600160a01b031681565b610264610576565b6040519015158152602001610170565b6101e86106a4565b600a546101bd906001600160a01b031681565b6101e861029d36600461115d565b6106b8565b61016660045481565b6000546001600160a01b03166101bd565b6101667f000000000000000000000000000000000000000000000000000000000000000081565b6101666102f136600461115d565b61073a565b6008546101bd906001600160a01b031681565b61016660015481565b600b546101bd906001600160a01b031681565b6101666103333660046111af565b61074d565b6101e861034636600461118b565b610801565b600080620f42408310806103615750620f424083145b1561037d5761037383620f42406111e7565b9360009350915050565b61038a620f4240846111e7565b9360019350915050565b61039c61087f565b8015806103ab5750620186a081115b156103c957604051633759768360e21b815260040160405180910390fd5b60015481036103eb5760405163c23f6ccb60e01b815260040160405180910390fd5b60018190556040518181527f0fedf5c6f078697a49253235a8c0d32f83a06314c04d897df1cfcadd22893e8e906020015b60405180910390a150565b600061043161087f565b61043a826108d9565b90505b919050565b61044a61087f565b8015806104595750620186a081115b1561047757604051633759768360e21b815260040160405180910390fd5b60045481036104995760405163c23f6ccb60e01b815260040160405180910390fd5b60048190556040518181527f9c922f6d0c990b250e9dd0a427a5c8da7f44b960f697fecb31cbbd8ba79ec8c29060200161041c565b6104d661087f565b6001600160a01b0381166104fd5760405163d92e233d60e01b815260040160405180910390fd5b6006546001600160a01b039081169082160361052c5760405163367558c360e01b815260040160405180910390fd5b600680546001600160a01b0319166001600160a01b0383169081179091556040517fdd82bdfc28fcc826c53263dc2a2b6083e27e92699ebfee617227e08e21c202f090600090a250565b60006002546003544261058991906111e7565b116105a7576040516314f87ea760e21b815260040160405180910390fd5b42600355600654604080516337fb4b8560e21b815290516000926001600160a01b03169163dfed2e149160048083019260209291908290030181865afa1580156105f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061991906111fe565b90506000806106278361034b565b915091507f000000000000000000000000000000000000000000000000000000000000000082101561065d576000935050505090565b6000610669848461074d565b905081156106805761067a816108d9565b50610699565b61069761069264e8d4a5100083611217565b610cdf565b505b600194505050505090565b6106ac61087f565b6106b6600061110d565b565b6106c061087f565b610e108110156106e35760405163cc19174960e01b815260040160405180910390fd5b60025481036107055760405163c23f6ccb60e01b815260040160405180910390fd5b60028190556040518181527f3b897fd6944545fcb6a5d5b058781d763169157f8559ca1a7f3276b981d099719060200161041c565b600061074461087f565b61043a82610cdf565b600754604051634903b0d160e01b81526000600482018190529182916001600160a01b0390911690634903b0d1906024016020604051808303816000875af115801561079d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c191906111fe565b9050600084600154856107d49190611239565b6107de9190611217565b9050620186a06107ee8284611239565b6107f89190611217565b95945050505050565b61080961087f565b6001600160a01b0381166108735760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61087c8161110d565b50565b6000546001600160a01b031633146106b65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161086a565b6000816000036108fc57604051637c946ed760e01b815260040160405180910390fd5b600a5460405163391b114160e01b8152306004820152602481018490526001600160a01b039091169063391b114190604401600060405180830381600087803b15801561094857600080fd5b505af115801561095c573d6000803e3d6000fd5b505060055460075460405163095ea7b360e01b81526001600160a01b039182166004820152602481018790529116925063095ea7b391506044016020604051808303816000875af11580156109b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d99190611268565b50600854600754604051636f20d6dd60e01b81526001600160a01b0391821660048201526000929190911690636f20d6dd90602401602060405180830381865afa158015610a2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4f9190611283565b90506000816001600160a01b03166382c630666040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab59190611283565b60085460075460055460405163eb85226d60e01b81526001600160a01b039283166004820152908216602482015281841660448201529293506000928392919091169063eb85226d90606401606060405180830381865afa158015610b1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4291906112b2565b5060048054600754604051635e0d443f60e01b8152600f86810b948201949094529284900b6024840152604483018b9052939550919350600092620186a092916001600160a01b0390911690635e0d443f90606401602060405180830381865afa158015610bb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd891906111fe565b610be29190611239565b610bec9190611217565b600754604051630f7c084960e21b8152600f86810b600483015285900b6024820152604481018a9052606481018390529192506000916001600160a01b0390911690633df02124906084016020604051808303816000875af1158015610c56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7a91906111fe565b600554600754604080518c81526001600160a01b038a81166020830152918101859052939450918216929116907ffc00247ef115194c27ea65f95ccd4b3cd769653ebda4c21a38b7e49b635ebd269060600160405180910390a3979650505050505050565b600081600003610d0257604051637c946ed760e01b815260040160405180910390fd5b6009546040516370a0823160e01b815230600482015283916001600160a01b0316906370a0823190602401602060405180830381865afa158015610d4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6e91906111fe565b1015610d8d576040516305e4731760e31b815260040160405180910390fd5b60095460075460405163095ea7b360e01b81526001600160a01b0391821660048201526024810185905291169063095ea7b3906044016020604051808303816000875af1158015610de2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e069190611268565b5060085460075460095460055460405163eb85226d60e01b81526001600160a01b0393841660048201529183166024830152821660448201526000928392169063eb85226d90606401606060405180830381865afa158015610e6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9091906112b2565b50600480546007546040516307211ef760e01b8152600f86810b948201949094529284900b602484015260448301899052939550919350600092620186a092916001600160a01b03909116906307211ef790606401602060405180830381865afa158015610f02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2691906111fe565b610f309190611239565b610f3a9190611217565b600754604051635320bf6b60e11b8152600f86810b600483015285900b602482015260448101889052606481018390529192506000916001600160a01b039091169063a6417ed6906084016020604051808303816000875af1158015610fa4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc891906111fe565b600954600754600554604080518b81526001600160a01b039283166020820152908101859052939450918216929116907ffc00247ef115194c27ea65f95ccd4b3cd769653ebda4c21a38b7e49b635ebd269060600160405180910390a3600554600b5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810184905291169063095ea7b3906044016020604051808303816000875af115801561107a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109e9190611268565b50600a54604051637bd55cfd60e01b8152306004820152602481018390526001600160a01b0390911690637bd55cfd90604401600060405180830381600087803b1580156110eb57600080fd5b505af11580156110ff573d6000803e3d6000fd5b509298975050505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561116f57600080fd5b5035919050565b6001600160a01b038116811461087c57600080fd5b60006020828403121561119d57600080fd5b81356111a881611176565b9392505050565b600080604083850312156111c257600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b6000828210156111f9576111f96111d1565b500390565b60006020828403121561121057600080fd5b5051919050565b60008261123457634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615611253576112536111d1565b500290565b8051801515811461043d57600080fd5b60006020828403121561127a57600080fd5b6111a882611258565b60006020828403121561129557600080fd5b81516111a881611176565b8051600f81900b811461043d57600080fd5b6000806000606084860312156112c757600080fd5b6112d0846112a0565b92506112de602085016112a0565b91506112ec60408501611258565b9050925092509256fea2646970667358221220de101b53bca86d162cee37d72dbfecc68e468d96485154e9d341acd3158b2f8564736f6c634300080d0033";

type PriceControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PriceControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PriceController__factory extends ContractFactory {
  constructor(...args: PriceControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _phoAddress: PromiseOrValue<string>,
    _moduleManager: PromiseOrValue<string>,
    _kernel: PromiseOrValue<string>,
    _oracleAddress: PromiseOrValue<string>,
    _dexPoolAddress: PromiseOrValue<string>,
    _cooldownPeriod: PromiseOrValue<BigNumberish>,
    _priceBand: PromiseOrValue<BigNumberish>,
    _priceMitigationPercentage: PromiseOrValue<BigNumberish>,
    _maxSlippage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PriceController> {
    return super.deploy(
      _phoAddress,
      _moduleManager,
      _kernel,
      _oracleAddress,
      _dexPoolAddress,
      _cooldownPeriod,
      _priceBand,
      _priceMitigationPercentage,
      _maxSlippage,
      overrides || {}
    ) as Promise<PriceController>;
  }
  override getDeployTransaction(
    _phoAddress: PromiseOrValue<string>,
    _moduleManager: PromiseOrValue<string>,
    _kernel: PromiseOrValue<string>,
    _oracleAddress: PromiseOrValue<string>,
    _dexPoolAddress: PromiseOrValue<string>,
    _cooldownPeriod: PromiseOrValue<BigNumberish>,
    _priceBand: PromiseOrValue<BigNumberish>,
    _priceMitigationPercentage: PromiseOrValue<BigNumberish>,
    _maxSlippage: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _phoAddress,
      _moduleManager,
      _kernel,
      _oracleAddress,
      _dexPoolAddress,
      _cooldownPeriod,
      _priceBand,
      _priceMitigationPercentage,
      _maxSlippage,
      overrides || {}
    );
  }
  override attach(address: string): PriceController {
    return super.attach(address) as PriceController;
  }
  override connect(signer: Signer): PriceController__factory {
    return super.connect(signer) as PriceController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceControllerInterface {
    return new utils.Interface(_abi) as PriceControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceController {
    return new Contract(address, _abi, signerOrProvider) as PriceController;
  }
}