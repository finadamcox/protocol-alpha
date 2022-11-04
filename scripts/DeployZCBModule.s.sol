// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "@protocol/interfaces/IPHO.sol";
import "@protocol/interfaces/IKernel.sol";
import "@protocol/interfaces/IModuleManager.sol";
import "@modules/zeroCouponBondModule/ZeroCouponBondModule.sol";
import "./Addresses.sol";

/// Script to deploy ZCB module
contract DeployZCBModule is Script, Addresses {
    ZeroCouponBondModule public zeroCouponBondModule;
    address depositToken = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
    string bondTokenName = "Test USDC Bond";
    string bondTokenSymbol = "USDC-TEST";
    uint256 interestRate = 1000;
    uint256 depositWindowOpen = block.timestamp + 1 days;
    uint256 depositWindowEnd = block.timestamp + 1000 days;
    address depositTokenAddress = usdcAddress;

    function run() external {
        vm.startBroadcast();

        zeroCouponBondModule = new ZeroCouponBondModule(
            moduleManagerAddress,
            kernelAddress,
            phoAddress,
            depositTokenAddress,
            bondTokenName,
            bondTokenSymbol,
            interestRate,
            depositWindowOpen,
            depositWindowEnd
        );

        console.log(
            "Deployed zeroCouponBondModule address: ",
            address(zeroCouponBondModule)
        );

        vm.stopBroadcast();
    }
}