// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity >=0.8.0 <0.9.0;

contract addRPS {
    event Response(bool success, bytes data);

    function increaseStake(address _contract) external payable {
        (bool success, bytes memory data) = _contract.call{value: msg.value, gas: 5000}(
            abi.encodeWithSignature("increaseStake()")
        );

        emit Response(success, data);
    }
}