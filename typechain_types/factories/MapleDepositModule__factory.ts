/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MapleDepositModule,
  MapleDepositModuleInterface,
} from "../MapleDepositModule";

const _abi = [
  {
    inputs: [
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
        name: "_pho",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_depositToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mplRewards",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mplPool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CannotReceiveZeroMPT",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotRedeemZeroTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "DepositTokenMustBeMaplePoolAsset",
    type: "error",
  },
  {
    inputs: [],
    name: "MaplePoolNotOpen",
    type: "error",
  },
  {
    inputs: [],
    name: "OverEighteenDecimals",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressDetected",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "phoMinted",
        type: "uint256",
      },
    ],
    name: "MapleDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "redeemer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
    ],
    name: "MapleRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    name: "MapleRewardsReceived",
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
    inputs: [
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositToken",
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
    name: "depositTokenDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "depositedAmount",
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
    name: "getRewardMaple",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "intendToWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "issuedAmount",
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
    name: "mplPool",
    outputs: [
      {
        internalType: "contract IPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mplRewards",
    outputs: [
      {
        internalType: "contract IMplRewards",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract ChainlinkPriceFeed",
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
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakedAmount",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d6538038062001d65833981016040819052620000349162000743565b6200003f3362000365565b600180556001600160a01b03871615806200006157506001600160a01b038616155b806200007457506001600160a01b038516155b806200008757506001600160a01b038416155b806200009a57506001600160a01b038316155b80620000ad57506001600160a01b038216155b80620000c057506001600160a01b038116155b15620000df57604051632887dd7560e11b815260040160405180910390fd5b600280546001600160a01b03808a166001600160a01b0319928316179092556003805489841690831617905560058054888416908316179055600680548784169083161790556004805492861692909116821781556040805163313ce56760e01b8152905163313ce567928281019260209291908290030181865afa1580156200016d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001939190620007d8565b6004805460ff60a01b1916600160a01b60ff93841681029190911791829055601291049091161115620001d95760405163ce69d49560e01b815260040160405180910390fd5b600780546001600160a01b038085166001600160a01b031992831617909255600880548484169216821790556040805163104d95e560e11b815290519286169263209b2bca916004808201926020929091908290030181865afa15801562000245573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200026b919062000804565b6001600160a01b0316146200029357604051630603869560e21b815260040160405180910390fd5b600860009054906101000a90046001600160a01b03166001600160a01b0316631831ccf26040518163ffffffff1660e01b8152600401602060405180830381865afa158015620002e7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200030d919062000822565b6200032b5760405163435bc16960e01b815260040160405180910390fd5b60085460045462000358916001600160a01b039182169116600019620003b5602090811b62000ccc17901c565b5050505050505062000909565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801562000407573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200042d919062000846565b62000439919062000860565b604080516001600160a01b038616602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b1790915291925062000495918691906200049b16565b50505050565b6000620004f7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166200058260201b62000db1179092919060201c565b8051909150156200057d578080602001905181019062000518919062000822565b6200057d5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b505050565b60606200059384846000856200059b565b949350505050565b606082471015620005fe5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840162000574565b600080866001600160a01b031685876040516200061c9190620008b6565b60006040518083038185875af1925050503d80600081146200065b576040519150601f19603f3d011682016040523d82523d6000602084013e62000660565b606091505b50909250905062000674878383876200067f565b979650505050505050565b60608315620006f3578251600003620006eb576001600160a01b0385163b620006eb5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640162000574565b508162000593565b6200059383838151156200070a5781518083602001fd5b8060405162461bcd60e51b8152600401620005749190620008d4565b80516001600160a01b03811681146200073e57600080fd5b919050565b600080600080600080600060e0888a0312156200075f57600080fd5b6200076a8862000726565b96506200077a6020890162000726565b95506200078a6040890162000726565b94506200079a6060890162000726565b9350620007aa6080890162000726565b9250620007ba60a0890162000726565b9150620007ca60c0890162000726565b905092959891949750929550565b600060208284031215620007eb57600080fd5b815160ff81168114620007fd57600080fd5b9392505050565b6000602082840312156200081757600080fd5b620007fd8262000726565b6000602082840312156200083557600080fd5b81518015158114620007fd57600080fd5b6000602082840312156200085957600080fd5b5051919050565b600082198211156200088257634e487b7160e01b600052601160045260246000fd5b500190565b60005b83811015620008a45781810151838201526020016200088a565b83811115620004955750506000910152565b60008251620008ca81846020870162000887565b9190910192915050565b6020815260008251806020840152620008f581604085016020870162000887565b601f01601f19169190910160400192915050565b61144c80620009196000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638f1e1cd1116100a2578063c094121411610071578063c09412141461022b578063c89039c514610251578063d4aae0c414610264578063f2fde38b14610277578063f99318551461028a57600080fd5b80638f1e1cd1146101ea578063a4b58b8b146101fd578063b6b55f2514610210578063be040fb01461022357600080fd5b806372b39532116100e957806372b395321461018b57806373ef9a501461019e5780637dc0d1d0146101a657806383dbec70146101b95780638da5cb5b146101d957600080fd5b80633c1a7ee81461011b5780634a4643f71461012557806353017a8314610158578063715018a614610183575b600080fd5b6101236102aa565b005b610145610133366004611168565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b60055461016b906001600160a01b031681565b6040516001600160a01b03909116815260200161014f565b610123610440565b60025461016b906001600160a01b031681565b610123610454565b60065461016b906001600160a01b031681565b6101456101c7366004611168565b600a6020526000908152604090205481565b6000546001600160a01b031661016b565b60075461016b906001600160a01b031681565b60085461016b906001600160a01b031681565b61012361021e36600461118c565b6104c6565b6101236108fb565b60045461023f90600160a01b900460ff1681565b60405160ff909116815260200161014f565b60045461016b906001600160a01b031681565b60035461016b906001600160a01b031681565b610123610285366004611168565b610c51565b610145610298366004611168565b600b6020526000908152604090205481565b6102b2610dc8565b600760009054906101000a90046001600160a01b03166001600160a01b0316633d18b9126040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561030257600080fd5b505af1158015610316573d6000803e3d6000fd5b505050506000600760009054906101000a90046001600160a01b03166001600160a01b031663d1af0c7d6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561036f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039391906111a5565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156103dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040191906111c2565b90507fcb78fea6f1a1fcac7fa985ddf1e63ee271bfab1ca0de875e3b21c04113d89f028160405161043491815260200190565b60405180910390a15050565b610448610dc8565b6104526000610e22565b565b61045c610dc8565b600860009054906101000a90046001600160a01b03166001600160a01b03166373ef9a506040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156104ac57600080fd5b505af11580156104c0573d6000803e3d6000fd5b50505050565b6104ce610e72565b6004546000906104e990600160a01b900460ff1660126111f1565b6104f490600a6112fa565b6104fe9083611309565b600654600480546040516341976e0960e01b81526001600160a01b0391821692810192909252929350670de0b6b3a764000092909116906341976e0990602401602060405180830381865afa15801561055b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057f91906111c2565b6105899083611309565b6105939190611328565b6004549091506105ae906001600160a01b0316333085610ecb565b33600090815260096020526040812080548492906105cd90849061134a565b9091555050336000908152600a6020526040812080548392906105f190849061134a565b909155505060025460405163391b114160e01b8152336004820152602481018390526001600160a01b039091169063391b114190604401600060405180830381600087803b15801561064257600080fd5b505af1158015610656573d6000803e3d6000fd5b50506008546040516370a0823160e01b8152306004820152600093506001600160a01b0390911691506370a0823190602401602060405180830381865afa1580156106a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c991906111c2565b60085460405163b6b55f2560e01b8152600481018690529192506001600160a01b03169063b6b55f2590602401600060405180830381600087803b15801561071057600080fd5b505af1158015610724573d6000803e3d6000fd5b50506008546040516370a0823160e01b8152306004820152600093508492506001600160a01b03909116906370a0823190602401602060405180830381865afa158015610775573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079991906111c2565b6107a39190611362565b9050806000036107c657604051635c635a0360e11b815260040160405180910390fd5b6008546007546040516313fc8c2b60e11b81526001600160a01b039182166004820152602481018490529116906327f9185690604401600060405180830381600087803b15801561081657600080fd5b505af115801561082a573d6000803e3d6000fd5b505060075460405163534a7e1d60e11b8152600481018590526001600160a01b03909116925063a694fc3a9150602401600060405180830381600087803b15801561087457600080fd5b505af1158015610888573d6000803e3d6000fd5b5050336000908152600b6020526040812080548594509092506108ac90849061134a565b9091555050604080518581526020810185905233917f6f8d7ee5cc15c111f34c826e21fc95e957de0322027a79dbdf448842d3d63ca0910160405180910390a25050506108f860018055565b50565b610903610e72565b336000908152600a60205260408120549081900361093457604051639679ebdd60e01b815260040160405180910390fd5b336000908152600a602052604081208054839290610953908490611362565b9091555050600254604051637bd55cfd60e01b8152336004820152602481018390526001600160a01b0390911690637bd55cfd90604401600060405180830381600087803b1580156109a457600080fd5b505af11580156109b8573d6000803e3d6000fd5b5050600454600092506109d79150600160a01b900460ff1660126111f1565b6109e290600a6112fa565b6109ec9083611328565b600654600480546040516341976e0960e01b81526001600160a01b0391821692810192909252929350670de0b6b3a764000092909116906341976e0990602401602060405180830381865afa158015610a49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6d91906111c2565b610a779083611309565b610a819190611328565b3360009081526009602081815260408084208054600b845291852054939092529394509091839190610ab38380611362565b9091555050336000908152600b602052604081208054839290610ad7908490611362565b9091555050600754604051632e1a7d4d60e01b8152600481018390526001600160a01b0390911690632e1a7d4d90602401600060405180830381600087803b158015610b2257600080fd5b505af1158015610b36573d6000803e3d6000fd5b5050600854604051632e1a7d4d60e01b8152600481018690526001600160a01b039091169250632e1a7d4d9150602401600060405180830381600087803b158015610b8057600080fd5b505af1158015610b94573d6000803e3d6000fd5b50506004805460405163a9059cbb60e01b81523392810192909252602482018690526001600160a01b0316925063a9059cbb91506044016020604051808303816000875af1158015610bea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0e9190611379565b5060405184815233907f899ae0307a9e096235cd720e4d73aa75d310216861b463ea9a44091077cf29eb9060200160405180910390a25050505061045260018055565b610c59610dc8565b6001600160a01b038116610cc35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6108f881610e22565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610d1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4191906111c2565b610d4b919061134a565b6040516001600160a01b0385166024820152604481018290529091506104c090859063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610f03565b6060610dc08484600085610fda565b949350505050565b6000546001600160a01b031633146104525760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610cba565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600260015403610ec45760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610cba565b6002600155565b6040516001600160a01b03808516602483015283166044820152606481018290526104c09085906323b872dd60e01b90608401610d7a565b6000610f58826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610db19092919063ffffffff16565b805190915015610fd55780806020019051810190610f769190611379565b610fd55760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610cba565b505050565b60608247101561103b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610cba565b600080866001600160a01b0316858760405161105791906113c7565b60006040518083038185875af1925050503d8060008114611094576040519150601f19603f3d011682016040523d82523d6000602084013e611099565b606091505b50915091506110aa878383876110b5565b979650505050505050565b6060831561112457825160000361111d576001600160a01b0385163b61111d5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610cba565b5081610dc0565b610dc083838151156111395781518083602001fd5b8060405162461bcd60e51b8152600401610cba91906113e3565b6001600160a01b03811681146108f857600080fd5b60006020828403121561117a57600080fd5b813561118581611153565b9392505050565b60006020828403121561119e57600080fd5b5035919050565b6000602082840312156111b757600080fd5b815161118581611153565b6000602082840312156111d457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168082101561120b5761120b6111db565b90039392505050565b600181815b8085111561124f578160001904821115611235576112356111db565b8085161561124257918102915b93841c9390800290611219565b509250929050565b600082611266575060016112f4565b81611273575060006112f4565b81600181146112895760028114611293576112af565b60019150506112f4565b60ff8411156112a4576112a46111db565b50506001821b6112f4565b5060208310610133831016604e8410600b84101617156112d2575081810a6112f4565b6112dc8383611214565b80600019048211156112f0576112f06111db565b0290505b92915050565b600061118560ff841683611257565b6000816000190483118215151615611323576113236111db565b500290565b60008261134557634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561135d5761135d6111db565b500190565b600082821015611374576113746111db565b500390565b60006020828403121561138b57600080fd5b8151801515811461118557600080fd5b60005b838110156113b657818101518382015260200161139e565b838111156104c05750506000910152565b600082516113d981846020870161139b565b9190910192915050565b602081526000825180602084015261140281604085016020870161139b565b601f01601f1916919091016040019291505056fea26469706673582212205b2e7c2034f54fd229761bfb73cef55916068a68e168ad1cd07326dc14eb591264736f6c634300080d0033";

type MapleDepositModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MapleDepositModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MapleDepositModule__factory extends ContractFactory {
  constructor(...args: MapleDepositModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _moduleManager: PromiseOrValue<string>,
    _kernel: PromiseOrValue<string>,
    _pho: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    _depositToken: PromiseOrValue<string>,
    _mplRewards: PromiseOrValue<string>,
    _mplPool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MapleDepositModule> {
    return super.deploy(
      _moduleManager,
      _kernel,
      _pho,
      _oracle,
      _depositToken,
      _mplRewards,
      _mplPool,
      overrides || {}
    ) as Promise<MapleDepositModule>;
  }
  override getDeployTransaction(
    _moduleManager: PromiseOrValue<string>,
    _kernel: PromiseOrValue<string>,
    _pho: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    _depositToken: PromiseOrValue<string>,
    _mplRewards: PromiseOrValue<string>,
    _mplPool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _moduleManager,
      _kernel,
      _pho,
      _oracle,
      _depositToken,
      _mplRewards,
      _mplPool,
      overrides || {}
    );
  }
  override attach(address: string): MapleDepositModule {
    return super.attach(address) as MapleDepositModule;
  }
  override connect(signer: Signer): MapleDepositModule__factory {
    return super.connect(signer) as MapleDepositModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MapleDepositModuleInterface {
    return new utils.Interface(_abi) as MapleDepositModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MapleDepositModule {
    return new Contract(address, _abi, signerOrProvider) as MapleDepositModule;
  }
}