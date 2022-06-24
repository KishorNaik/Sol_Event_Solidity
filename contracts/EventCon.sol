
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract EventCon{

   struct ChatEventModel{
      address toAddress;
      string message;
   }

   // Store Event Data in the blokchain in the form of Transaction Logs.
   event ChatEvent(address indexed fromAddress,ChatEventModel chatEventModel);

   function sendMessage(address _toAddress,string memory _message) public {
      emit ChatEvent(msg.sender, ChatEventModel(_toAddress,_message)); // Trigger Event
   }

}