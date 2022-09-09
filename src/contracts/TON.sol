// SPDX-License-Identifier: GPL-3.0-or-later
// Inspired by Frax
// https://github.com/FraxFinance/frax-solidity/blob/7cbe89981ffa5d3cd0eeaf62dd1489c3276de0e4/src/hardhat/contracts/FXS/FXS.sol
pragma solidity 0.8.13;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./PHO.sol";

contract TON is ERC20Burnable, AccessControl, Ownable {
    uint256 public constant genesis_supply = 100000000 * 10 ** 18;

    address public oracle_address;
    address public timelock_address;
    PHO public pho;

    modifier onlyPools() {
        require(pho.PHO_pools(msg.sender), "Only pho pools can mint or burn TON");
        _;
    }

    modifier onlyByOwnGov() {
        require(
            msg.sender == owner() || msg.sender == timelock_address,
            "You are not an owner or the governance timelock"
        );
        _;
    }

    event TONBurned(address indexed from, address indexed to, uint256 amount);
    event TONMinted(address indexed from, address indexed to, uint256 amount);
    event PHOAddressSet(address newAddress);

    constructor(
        string memory _name,
        string memory _symbol,
        address _oracle_address,
        address _timelock_address
    )
        ERC20(_name, _symbol)
    {
        require(
            (_oracle_address != address(0)) && (_timelock_address != address(0)),
            "Zero address detected"
        );

        oracle_address = _oracle_address;
        timelock_address = _timelock_address;
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _mint(_msgSender(), genesis_supply);
    }

    function setOracle(address new_oracle) external onlyByOwnGov {
        require(new_oracle != address(0), "Zero address detected");
        oracle_address = new_oracle;
    }

    function setTimelock(address new_timelock) external onlyByOwnGov {
        require(new_timelock != address(0), "Timelock address cannot be 0");
        timelock_address = new_timelock;
    }

    function setPHOAddress(address pho_contract_address) external onlyByOwnGov {
        require(pho_contract_address != address(0), "Zero address detected");

        pho = PHO(pho_contract_address);

        emit PHOAddressSet(pho_contract_address);
    }

    function mint(address to, uint256 amount) public onlyPools {
        super._mint(to, amount);
    }

    function pool_mint(address m_address, uint256 m_amount) external onlyPools {
        super._mint(m_address, m_amount);
    }

    function pool_burn_from(address b_address, uint256 b_amount) external onlyPools {
        burnFrom(b_address, b_amount);
    }
}