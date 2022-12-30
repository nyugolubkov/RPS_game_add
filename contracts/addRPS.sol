// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity >=0.8.0 <0.9.0;

contract addRPS {
    event Response(bool success, bytes data);

    function increaseStake(address payable _contract) external payable {
        (bool success, bytes memory data) = _contract.call{value: msg.value}(
            abi.encodeWithSignature("increaseStake()")
        );
        require(success, "Failed to send Ether");

        emit Response(success, data);
    }
}