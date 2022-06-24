import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


describe("Event-Example", function () {
  it("#Test1 - Event-Success", async function () {
    //https://ethereum.stackexchange.com/questions/110004/testing-for-emitted-events-in-hardhat
    try
    {
      const [owner,add1,add2]=await ethers.getSigners();

      const Contract = await ethers.getContractFactory("EventCon");
      const contract = await Contract.deploy();
      await contract.deployed();

      // Assert
      let tx=await contract.connect(owner).sendMessage(add1.address,"Hi I am Owner");
      tx=await contract.connect(add1).sendMessage(owner.address,"Hi I am Eshaan");

      // Iterate Transaction Logs
      const receipt=await tx.wait();

      for (const event of receipt.events) {
        console.log(`Event ${event.event} with args ${event.args}`);
      }

      // Test
      expect(true).to.equal(true);
    }
    catch(ex)
    {
      console.log((<Error>ex).message);
      expect(false).to.equal(true);
    }
  });



});