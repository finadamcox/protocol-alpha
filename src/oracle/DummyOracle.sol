// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.13;


contract DummyOracle {

    uint256 public eth_usd_price;
    uint256 public eth_share_price;
    uint256 public share_usd_price;
    uint256 public eth_eusd_price;
    uint256 public eusd_usd_price;
    uint256 public usdc_usd_price;

    constructor() {
        eth_usd_price = 2000 * 10 ** 6; // 2000 usd/eth
        eth_share_price = 200 * 10 ** 18; // 200 SHARE/eth
        eth_eusd_price = 2000 * 10 ** 18; // 2000 eusd/eth
        share_usd_price = 10 ** 6; // 10 dollar/share
        eusd_usd_price = 10 ** 6;
        usdc_usd_price = 10 ** 6;
    }

    function getETHUSDPrice() public view returns(uint256){
        return eth_usd_price;
    }

    function getETHSHAREPrice() public view returns(uint256) {
        return eth_share_price;
    }

    function getShareUSDPrice() public view returns(uint256) {
        return share_usd_price;
    }
 
    function getETHEUSDPrice() public view returns(uint256) {
        return eth_eusd_price;
    }

    function getEUSDUSDPrice() public view returns(uint256) {
        return eusd_usd_price;
    }

    function getUSDCUSDPrice() public view returns(uint256) {
        return usdc_usd_price;
    }

    function setETHUSDPrice(uint256 _price) public {
        eth_usd_price = _price;
    }

    function setETHSharePrice(uint256 _price) public {
        eth_share_price = _price;
    }

    function setShareUSDPrice(uint256 _price) public {
        share_usd_price = _price;
    }

    function setETHEUSDPrice(uint256 _price) public {
        eth_eusd_price = _price;
    }

    function setEUSDUSDPrice(uint256 _price) public {
        eusd_usd_price = _price;
    }

    function setUSDCUSDPrice(uint256 _price) public {
        usdc_usd_price = _price;
    }
}