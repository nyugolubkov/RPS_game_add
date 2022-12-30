// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity >=0.8.0 <0.9.0;

import "./IIncreaser.sol";

contract addRPS {

    function increase(address _add) external payable {
        IIncreaser(_add).increaseStake();
    }

    function getStake(address _add) external view returns (uint) {
        return IIncreaser(_add).stake();
    }
}