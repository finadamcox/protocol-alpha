// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

import "./BaseSetup.t.sol";
import "src/interfaces/curve/ICurve.sol";
import "src/interfaces/curve/ICurveFactory.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "src/contracts/PriceController.sol";

contract PriceControllerTest is BaseSetup {
    ICurve public curvePool;
    ICurve public fraxBP;
    ICurve public fraxBPPhoMetapool;
    IERC20 public fraxBPLP;
    IERC20 public frax;
    ICurveFactory public curveFactory;
    PriceController public priceController;

    /// Contract relevant test constants

    uint256 public constant overPegOutBand = 103 * (10 ** 4);
    uint256 public constant overPegInBand = 1005 * (10 ** 3);
    uint256 public constant underPegOutBand = 98 * (10 ** 4);
    uint256 public constant underPegInBand = 995 * (10 ** 3);
    uint256 public constant priceTarget = 10 ** 6;
    uint256 public constant fractionPrecision = 10 ** 5;

    function setUp() public {
        frax = IERC20(fraxAddress);
        fraxBPLP = IERC20(fraxBPLPToken);
        fraxBP = ICurve(fraxBPAddress);
        curveFactory = ICurveFactory(metaPoolFactoryAddress);

        _fundAndApproveUSDC(owner, address(fraxBP), tenThousand_d6, tenThousand_d6);

        uint256[2] memory fraxBPmetaLiquidity;
        fraxBPmetaLiquidity[0] = tenThousand_d18; // frax
        fraxBPmetaLiquidity[1] = tenThousand_d6; // usdc
        uint256 minLPOut = tenThousand_d18;

        vm.startPrank(fraxRichGuy);
        frax.transfer(owner, tenThousand_d18 * 5);
        vm.stopPrank();

        vm.startPrank(owner);

        usdc.approve(address(fraxBP), tenThousand_d6);
        frax.approve(address(fraxBP), tenThousand_d18);

        fraxBP.add_liquidity(fraxBPmetaLiquidity, 0);

        address fraxBPPhoMetapoolAddress = curveFactory.deploy_metapool(
            address(fraxBP), "FRAXBP/PHO", "FRAXBPPHO", address(pho), 200, 4000000, 0
        );

        fraxBPPhoMetapool = ICurve(fraxBPPhoMetapoolAddress);
        pho.approve(address(fraxBPPhoMetapool), tenThousand_d18);
        fraxBPLP.approve(address(fraxBPPhoMetapool), tenThousand_d18);

        uint256[2] memory metaLiquidity;
        metaLiquidity[0] = tenThousand_d18;
        metaLiquidity[1] = tenThousand_d18;

        fraxBPPhoMetapool.add_liquidity(metaLiquidity, 0);

        priceController =
        new PriceController(address(pho), address(priceOracle), fraxBPPhoMetapoolAddress, USDC_ADDRESS, address(curveFactory), owner, 3600, 10 ** 4, 50000);

        pho.addPool(address(priceController));

        vm.stopPrank();

        vm.prank(address(priceController));
        pho.pool_mint(address(priceController), tenThousand_d18);
        _fundAndApproveUSDC(
            address(priceController), address(fraxBPPhoMetapool), tenThousand_d6, tenThousand_d6
        );
        vm.prank(fraxRichGuy);
        frax.transfer(address(priceController), tenThousand_d18);
    }

    /// setOracleAddress

    function testSetOracleAddress() public {
        address newAddress = address(110);
        vm.expectEmit(true, false, false, false);
        emit OracleAddressSet(newAddress);
        vm.prank(owner);
        priceController.setOracleAddress(newAddress);
    }

    function testCannotSetOracleZeroAddress() public {
        vm.expectRevert("Zero address detected");
        vm.prank(owner);
        priceController.setOracleAddress(address(0));
    }

    function testCannotSetOracleNotAllowed() public {
        vm.expectRevert("Not the owner or controller");
        priceController.setOracleAddress(address(0));
    }

    /// setController

    function testSetController() public {
        address newController = address(110);
        vm.expectEmit(true, false, false, false);
        emit ControllerSet(newController);
        vm.prank(owner);
        priceController.setController(newController);
    }

    function testCannotSetControllerZeroAddress() public {
        vm.expectRevert("Zero address detected");
        vm.prank(owner);
        priceController.setController(address(0));
    }

    function testCannotSetControllerNotAllowed() public {
        vm.expectRevert("Not the owner or controller");
        priceController.setController(address(0));
    }

    /// setCooldownPeriod

    function testSetCooldownPeriod() public {
        uint256 newCooldownPeriod = 84600;
        vm.expectEmit(true, true, false, false);
        emit CooldownPeriodUpdated(priceController.cooldownPeriod(), newCooldownPeriod);
        vm.prank(owner);
        priceController.setCooldownPeriod(newCooldownPeriod);
    }

    function testCannotSetCooldownPeriodUnder3600() public {
        uint256 newCooldownPeriod = 100;
        vm.expectRevert("cooldown period cannot be shorter then 1 hour");
        vm.prank(owner);
        priceController.setCooldownPeriod(newCooldownPeriod);
    }

    function testCannotSetCooldownPeriodNotAllowed() public {
        vm.expectRevert("Not the owner or controller");
        priceController.setCooldownPeriod(100);
    }

    /// setPriceBand

    function testSetPriceBand() public {
        uint256 newPriceBand = 2 * 10 ** 4;
        vm.expectEmit(true, true, false, false);
        emit PriceBandUpdated(priceController.priceBand(), newPriceBand);
        vm.prank(owner);
        priceController.setPriceBand(newPriceBand);
    }

    function testCannotSetPriceBandPrice0() public {
        vm.expectRevert("price band cannot be 0");
        vm.prank(owner);
        priceController.setPriceBand(0);
    }

    function testCannotSetPriceBandNotAllowed() public {
        vm.expectRevert("Not the owner or controller");
        priceController.setPriceBand(0);
    }

    /// setGapFraction

    function testSetGapFraction() public {
        uint256 newGapFraction = 20000;
        vm.expectEmit(true, true, false, false);
        emit GapFractionUpdated(priceController.gapFraction(), newGapFraction);
        vm.prank(owner);
        priceController.setGapFraction(newGapFraction);
    }

    function testCannotSetGapFractionNotAllowed() public {
        vm.expectRevert("Not the owner or controller");
        priceController.setGapFraction(0);
    }

    function testCannotSetGapFractionValueNotInRange() public {
        uint256 newGapFractionOver = 102000;
        uint256 newGapFractionUnder = 0;

        vm.expectRevert("value can only be between 0 to 100000");
        vm.prank(owner);
        priceController.setGapFraction(newGapFractionOver);

        vm.expectRevert("value can only be between 0 to 100000");
        vm.prank(owner);
        priceController.setGapFraction(newGapFractionUnder);
    }

    /// setDexPool

    function testSetDexPool() public {
        address newDexPool = address(110);
        vm.expectEmit(true, false, false, false);
        emit DexPoolUpdated(newDexPool);
        vm.prank(owner);
        priceController.setDexPool(newDexPool);
    }

    function testCannotSetDexPoolNotAllowed() public {
        vm.expectRevert("Not the owner or controller");
        priceController.setDexPool(address(110));
    }

    function testCannotSetDexAddressAddressZero() public {
        vm.expectRevert("zero address detected");
        vm.prank(owner);
        priceController.setDexPool(address(0));
    }

    /// setStabilizingToken

    function testSetStabilizingToken() public {
        address newStabilizingToken = address(110);
        vm.expectEmit(true, false, false, false);
        emit StabilizingTokenUpdated(newStabilizingToken);
        vm.prank(owner);
        priceController.setStabilizingToken(newStabilizingToken);
    }

    function testCannotSetStabilizingTokenNotAllowed() public {
        vm.expectRevert("Not the owner or controller");
        priceController.setStabilizingToken(address(110));
    }

    function testCannotSetStabilizingTokenAddressZero() public {
        vm.expectRevert("zero address detected");
        vm.prank(owner);
        priceController.setStabilizingToken(address(0));
    }

    /// checkPriceBand

    function testCheckPriceBand() public {
        bool inBand;
        uint256 priceGap;
        bool trend;

        /// overPeg, out of band, 3 cents above
        priceOracle.setPHOUSDPrice(overPegOutBand);
        (inBand, priceGap, trend) = priceController.checkPriceBand(priceOracle.getPHOUSDPrice());

        assertEq(inBand, false);
        assertEq(priceGap, overPegOutBand - priceTarget);
        assertEq(trend, true);

        /// overPeg, in band, 0.5 cents
        priceOracle.setPHOUSDPrice(overPegInBand);
        (inBand, priceGap, trend) = priceController.checkPriceBand(priceOracle.getPHOUSDPrice());

        assertEq(inBand, true);
        assertEq(priceGap, overPegInBand - priceTarget);
        assertEq(trend, true);

        // underPeg, out of band, 2 cents
        priceOracle.setPHOUSDPrice(underPegOutBand);
        (inBand, priceGap, trend) = priceController.checkPriceBand(priceOracle.getPHOUSDPrice());

        assertEq(inBand, false);
        assertEq(priceGap, priceTarget - underPegOutBand);
        assertEq(trend, false);

        // underPeg, in band, 0.5 cents
        priceOracle.setPHOUSDPrice(underPegInBand);
        (inBand, priceGap, trend) = priceController.checkPriceBand(priceOracle.getPHOUSDPrice());

        assertEq(inBand, true);
        assertEq(priceGap, priceTarget - underPegInBand);
        assertEq(trend, false);
    }

    /// calculateGapInToken

    /// Test terms:
    /// Total pho supply = 100,000
    /// pho price = 1.03
    /// gapFraction = 50%
    /// target price to reach = 1.015;
    /// change in precentage required to reach = 1.456%
    /// totalSupply * change = 1456$
    function testCalculateGapInTokenOverPeg() public {
        priceOracle.setPHOUSDPrice(overPegOutBand);
        uint256 phoPrice = priceOracle.getPHOUSDPrice();
        uint256 phoTotalSupply = pho.totalSupply();
        (bool inBand, uint256 priceGap, bool trend) = priceController.checkPriceBand(phoPrice);

        uint256 gapToMitigate = (priceGap * priceController.gapFraction()) / fractionPrecision;
        /// Assuming gapFraction is 50%
        assertEq(gapToMitigate, priceGap / 2);

        uint256 gapInTokens = priceController.calculateGapInToken(phoPrice, priceGap, trend);
        uint256 expectedGapInTokens =
            phoTotalSupply * (gapToMitigate * fractionPrecision / phoPrice) / fractionPrecision;

        assertEq(gapInTokens, expectedGapInTokens);
    }

    /// Test terms:
    /// Total pho supply = 100,000
    /// pho price = 0.98
    /// gapFraction = 50%
    /// target price to reach = 0.99;
    /// change in precentage required to reach = 1.02%
    /// totalSupply * change = 1020$
    function testCalculateGapInTokenUnderPeg() public {
        priceOracle.setPHOUSDPrice(underPegOutBand);
        uint256 phoPrice = priceOracle.getPHOUSDPrice();
        uint256 phoTotalSupply = pho.totalSupply();
        (bool inBand, uint256 priceGap, bool trend) = priceController.checkPriceBand(phoPrice);

        uint256 gapToMitigate = (priceGap * priceController.gapFraction()) / fractionPrecision;
        /// Assuming gapFraction is 50%
        assertEq(gapToMitigate, priceGap / 2);

        uint256 gapInTokens = priceController.calculateGapInToken(phoPrice, priceGap, trend);
        uint256 expectedGapInTokens =
            phoTotalSupply * (gapToMitigate * fractionPrecision / phoPrice) / fractionPrecision;

        assertEq(gapInTokens, expectedGapInTokens);
    }

    /// exchangeTokens

    function testExchangeTokensPhoIn() public {
        uint256 fraxBPPoolBalanceBefore = fraxBPPhoMetapool.balances(1);
        uint256 phoPoolBalanceBefore = fraxBPPhoMetapool.balances(0);
        uint256 fraxBPPriceControllerBalanceBefore = fraxBPLP.balanceOf(address(priceController));
        uint256 phoPriceConrollerBalanceBefore = pho.balanceOf(address(priceController));

        uint256 phoToExchange = oneThousand_d18;
        uint256 minExpected = fraxBPPhoMetapool.get_dy(0, 1, phoToExchange) * 99 / 100;

        vm.prank(address(priceController));
        (address tokenOut, uint256 tokensReceived) =
            priceController.exchangeTokens(true, phoToExchange);

        uint256 fraxBPPoolBalanceAfter = fraxBPPhoMetapool.balances(1);
        uint256 phoPoolBalanceAfter = fraxBPPhoMetapool.balances(0);
        uint256 fraxBPPriceControllerBalanceAfter = fraxBPLP.balanceOf(address(priceController));
        uint256 phoPriceConrollerBalanceAfter = pho.balanceOf(address(priceController));

        /// taking into account fees and slippage
        assertApproxEqAbs(
            fraxBPPoolBalanceBefore, fraxBPPoolBalanceAfter + tokensReceived, 10 ** 18
        );
        assertEq(phoPoolBalanceBefore, phoPoolBalanceAfter - phoToExchange);
        assertEq(
            fraxBPPriceControllerBalanceBefore, fraxBPPriceControllerBalanceAfter - tokensReceived
        );
        assertEq(phoPriceConrollerBalanceBefore, phoPriceConrollerBalanceAfter + phoToExchange);
    }

    function testExchangeTokensUSDCIn() public {
        vm.prank(owner);
        priceController.setStabilizingToken(USDC_ADDRESS);

        (int128 usdcIndex, int128 phoIndex,) =
            curveFactory.get_coin_indices(address(fraxBPPhoMetapool), address(usdc), address(pho));
        uint256[8] memory underlyingBalancesBefore =
            curveFactory.get_underlying_balances(address(fraxBPPhoMetapool));

        uint256 phoPoolBalanceBefore = underlyingBalancesBefore[uint128(phoIndex)];
        uint256 usdcPriceControllerBalanceBefore = usdc.balanceOf(address(priceController));
        uint256 phoPriceConrollerBalanceBefore = pho.balanceOf(address(priceController));

        /// d18 used to mimic the output of GapInToken function
        uint256 usdcToExchange = oneThousand_d6;
        uint256 usdcToExchange_d18 = oneThousand_d18;
        uint256 expectedPho =
            fraxBPPhoMetapool.get_dy_underlying(usdcIndex, phoIndex, usdcToExchange);

        vm.prank(owner);
        (address tokenOut, uint256 tokensReceived) =
            priceController.exchangeTokens(false, usdcToExchange_d18);

        uint256[8] memory underlyingBalancesAfter =
            curveFactory.get_underlying_balances(address(fraxBPPhoMetapool));

        uint256 phoPoolBalanceAfter = underlyingBalancesAfter[uint128(phoIndex)];
        uint256 usdcPriceControllerBalanceAfter = usdc.balanceOf(address(priceController));
        uint256 phoPriceConrollerBalanceAfter = pho.balanceOf(address(priceController));

        /// taking into account fees and slippage
        assertApproxEqAbs(phoPoolBalanceBefore, phoPoolBalanceAfter + expectedPho, 10 ** 18);
        assertEq(usdcPriceControllerBalanceBefore, usdcPriceControllerBalanceAfter + usdcToExchange);
        assertApproxEqAbs(
            phoPriceConrollerBalanceBefore, phoPriceConrollerBalanceAfter - tokensReceived, 10 ** 18
        );
    }

    function testExchangeTokensFRAXIn() public {
        vm.prank(owner);
        priceController.setStabilizingToken(address(frax));

        (int128 fraxIndex, int128 phoIndex,) =
            curveFactory.get_coin_indices(address(fraxBPPhoMetapool), address(frax), address(pho));
        uint256[8] memory underlyingBalancesBefore =
            curveFactory.get_underlying_balances(address(fraxBPPhoMetapool));

        uint256 phoPoolBalanceBefore = underlyingBalancesBefore[uint128(phoIndex)];
        uint256 fraxPriceControllerBalanceBefore = frax.balanceOf(address(priceController));
        uint256 phoPriceConrollerBalanceBefore = pho.balanceOf(address(priceController));

        uint256 fraxToExchange = oneThousand_d18;
        uint256 expectedPho =
            fraxBPPhoMetapool.get_dy_underlying(fraxIndex, phoIndex, fraxToExchange);

        vm.prank(owner);
        (address tokenOut, uint256 tokensReceived) =
            priceController.exchangeTokens(false, fraxToExchange);

        uint256[8] memory underlyingBalancesAfter =
            curveFactory.get_underlying_balances(address(fraxBPPhoMetapool));

        uint256 phoPoolBalanceAfter = underlyingBalancesAfter[uint128(phoIndex)];
        uint256 fraxPriceControllerBalanceAfter = frax.balanceOf(address(priceController));
        uint256 phoPriceConrollerBalanceAfter = pho.balanceOf(address(priceController));

        /// taking into account fees and slippage
        assertApproxEqAbs(phoPoolBalanceBefore, phoPoolBalanceAfter + expectedPho, 10 ** 18);
        assertEq(fraxPriceControllerBalanceBefore, fraxPriceControllerBalanceAfter + fraxToExchange);
        assertApproxEqAbs(
            phoPriceConrollerBalanceBefore, phoPriceConrollerBalanceAfter - tokensReceived, 10 ** 18
        );
    }

    function testCannotExchangeTokens0Amount() public {
        vm.expectRevert("amount cannot be 0");
        vm.prank(owner);
        priceController.exchangeTokens(false, 0);
    }

    function testCannotExchangeTokensNotAllowed() public {
        vm.expectRevert("Not the owner or controller");
        priceController.exchangeTokens(false, 0);
    }

    function testCannotExchangeTokensNotEnoughBalance() public {
        uint256 priceControllerUSDCBalance = usdc.balanceOf(address(priceController));
        vm.prank(address(priceController));
        usdc.transfer(owner, priceControllerUSDCBalance);

        assertEq(usdc.balanceOf(address(priceController)), 0);

        vm.expectRevert("Stabilizing token does not have enough balance");
        vm.prank(owner);
        priceController.exchangeTokens(false, tenThousand_d18);
    }

    /// stabilize

    function testStabilizeOverPegOutBand() public {
        (int128 phoIndex, int128 fraxBPLPIndex,) =
            curveFactory.get_coin_indices(address(fraxBPPhoMetapool), address(pho), address(fraxBPLP));

        uint256 phoTotalSupplyBefore = pho.totalSupply();
        uint256 fraxBPPriceControllerBalanceBefore = fraxBPLP.balanceOf(address(priceController));

        priceOracle.setPHOUSDPrice(overPegOutBand);
        uint256 phoPrice = priceOracle.getPHOUSDPrice();
        (, uint256 priceGap, bool trend) = priceController.checkPriceBand(phoPrice);
        uint256 gapInToken = priceController.calculateGapInToken(phoPrice, priceGap, trend);
        uint256 expectedFraxBP = fraxBPPhoMetapool.get_dy(phoIndex, fraxBPLPIndex, gapInToken);

        vm.expectEmit(true, true, true, true);
        emit TokensExchanged(
            address(fraxBPPhoMetapool), address(pho), gapInToken, address(fraxBPLP), expectedFraxBP
            );
        vm.prank(owner);
        bool stabilized = priceController.stabilize();

        uint256 phoTotalSupplyAfter = pho.totalSupply();
        uint256 fraxBPPriceControllerBalanceAfter = fraxBPLP.balanceOf(address(priceController));

        assertEq(phoTotalSupplyAfter, phoTotalSupplyBefore + gapInToken);
        assertEq(
            fraxBPPriceControllerBalanceBefore, fraxBPPriceControllerBalanceAfter - expectedFraxBP
        );
        assertTrue(stabilized);
    }

    function testStabilizeUnderPegOutBand() public {
        (int128 usdcIndex, int128 phoIndex,) =
            curveFactory.get_coin_indices(address(fraxBPPhoMetapool), address(usdc), address(pho));

        uint256 phoTotalSupplyBefore = pho.totalSupply();
        uint256 usdcPriceControllerBalanceBefore = usdc.balanceOf(address(priceController));

        priceOracle.setPHOUSDPrice(underPegOutBand);
        uint256 phoPrice = priceOracle.getPHOUSDPrice();
        (, uint256 priceGap, bool trend) = priceController.checkPriceBand(phoPrice);
        uint256 gapInToken = priceController.calculateGapInToken(phoPrice, priceGap, trend);
        uint256 expectedPho =
            fraxBPPhoMetapool.get_dy_underlying(usdcIndex, phoIndex, gapInToken / 10 ** 12);

        /// not checking data since pho returned can vary in a very small amout. Check for pho returned in bottom asserts
        vm.expectEmit(true, true, true, false);
        emit TokensExchanged(
            address(fraxBPPhoMetapool), address(usdc), gapInToken, address(pho), expectedPho
            );
        vm.prank(owner);
        bool stabilized = priceController.stabilize();

        uint256 phoTotalSupplyAfter = pho.totalSupply();
        uint256 usdcPriceControllerBalanceAfter = usdc.balanceOf(address(priceController));

        assertApproxEqAbs(phoTotalSupplyAfter, phoTotalSupplyBefore - expectedPho, 10 ** 18);
        assertEq(
            usdcPriceControllerBalanceBefore,
            usdcPriceControllerBalanceAfter + (gapInToken / 10 ** 12)
        );
        assertTrue(priceController.lastCooldownReset() - block.timestamp < 3600);
        assertTrue(stabilized);
    }

    function testStabilizePricePegged() public {
        vm.prank(owner);
        bool stabilized = priceController.stabilize();
        assertTrue(priceController.lastCooldownReset() - block.timestamp < 3600);
        assertFalse(stabilized);
    }

    function testStabilizePriceInBandOverPeg() public {
        priceOracle.setPHOUSDPrice(overPegInBand);
        vm.prank(owner);
        bool stabilized = priceController.stabilize();

        assertFalse(stabilized);
        assertTrue(priceController.lastCooldownReset() - block.timestamp < 3600);
    }

    function testStabilizePriceInBanUnderPeg() public {
        priceOracle.setPHOUSDPrice(underPegInBand);
        vm.prank(owner);
        bool stabilized = priceController.stabilize();

        assertFalse(stabilized);
        assertTrue(priceController.lastCooldownReset() - block.timestamp < 3600);
    }

    function testCannotStabilizeInCooldown() public {
        vm.prank(owner);
        bool stabilized = priceController.stabilize();
        assertTrue(priceController.lastCooldownReset() - block.timestamp < 3600);
        assertFalse(stabilized);

        vm.warp(block.timestamp + 100);

        priceOracle.setPHOUSDPrice(overPegOutBand);
        vm.expectRevert("cooldown not satisfied");
        vm.prank(owner);
        stabilized = priceController.stabilize();
        assertFalse(stabilized);
    }

    ///Events

    event ControllerSet(address controller_address);
    event OracleAddressSet(address oracle_address);
    event CooldownPeriodUpdated(uint256 previousCooldownPeriod, uint256 newCooldownPeriod);
    event PriceBandUpdated(uint256 previousPriceBand, uint256 newPriceBand);
    event GapFractionUpdated(uint256 previousGapFraction, uint256 newGapFraction);
    event TokensExchanged(
        address dexPool,
        address tokenSent,
        uint256 amountSent,
        address tokenReceived,
        uint256 amountReceived
    );
    event DexPoolUpdated(address newDexPool);
    event StabilizingTokenUpdated(address stabilizingToken);
}
