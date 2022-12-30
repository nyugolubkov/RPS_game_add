// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity >=0.8.0 <0.9.0;

contract addRPS {

    function increase(address _add) external {
        IIncreaser(_add).increaseStake();
    }

    function getStake(address _add) external view returns (uint) {
        return IIncreaser(_add).stake();
    }
}

interface IIncreaser {
    function stake() external view returns (uint);
    
    function increaseStake() external;

}