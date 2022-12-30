// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity >=0.8.0 <0.9.0;

interface IIncreaser {
    function increaseStake() external;
}

contract addRPS {
    function incrementStake(address _add) external {
        IIncreaser(_add).increaseStake();
    }

}