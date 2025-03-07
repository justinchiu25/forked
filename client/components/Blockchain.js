import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
import { TransactionContext } from "../src/context/TransactionContext";
import Transactions from "./Transactions";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
  />
);

const Blockchain = (props) => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
  } = useContext(TransactionContext);
  // const connectWallet = () => { };

  const handleSubmit = (e) => {
    //Destructure properties form form data
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    //if any fields empty break
    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div>
      <div>
        <div>
          <h1>
            {!currentAccount && (
              <button type="button" onClick={connectWallet}>
                <AiFillPlayCircle />
                <p>Connect Wallet</p>
              </button>
            )}
          </h1>
        </div>
      </div>
      <div>
        <Input
          placeholder="Address To"
          name="addressTo"
          type="text"
          handleChange={handleChange}
        />
        <Input
          placeholder="Amount (ETH)"
          name="amount"
          type="number"
          handleChange={handleChange}
        />
        <Input
          placeholder="Keyword (Gif)"
          name="keyword"
          type="text"
          handleChange={handleChange}
        />
        <Input
          placeholder="Enter Message"
          name="message"
          type="text"
          handleChange={handleChange}
        />
        <div />
        {/* {true ? (
          <false />
        ) : ( */}
        <button type="button" onClick={handleSubmit}>
          Send now
        </button>
        {/* )} */}
      </div>
      <div>
        <Transactions />
      </div>
    </div>
  );
};

export default Blockchain;

//Infura is a service that maintains a set of Ethereum nodes with a caching layer for fast reads, which you can access for free through their API. Using Infura as a provider,
//you can reliably send and receive messages to / from the Ethereum blockchain without needing to set up and maintain your own node.

// You can set up Web3 to use Infura as your web3 provider as follows:
// var web3 = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws"));

// window.addEventListener("load", function () {
//   // Checking if Web3 has been injected by the browser (Mist/MetaMask)
//   if (typeof web3 !== "undefined") {
//     // Use Mist/MetaMask's provider
//     web3js = new Web3(web3.currentProvider);
//   } else {
//     // Handle the case where the user doesn't have web3. Probably
//     // show them a message telling them to install Metamask in
//     // order to use our app.
//   }

//   // Now you can start your app & access web3js freely:
//   startApp();
// });

// Once you have your contract's address and ABI, you can instantiate it in Web3 as follows:

// // Instantiate myContract
// var myContract = new web3js.eth.Contract(myABI, myContractAddress);

//send example
// myContract.methods.myMethod(123).send();

//call example
// myContract.methods.myMethod(123).call();

// We can see which account is currently active on the injected web3 variable via:

// var userAccount = web3.eth.accounts[0]

// Because the user can switch the active account at any time in MetaMask,
// our app needs to monitor this variable to see if it has changed and update the UI accordingly.
// var accountInterval = setInterval(function () {
//   // Check if account has changed
//   if (web3.eth.accounts[0] !== userAccount) {
//     userAccount = web3.eth.accounts[0];
//     // Call some function to update the UI with the new account
//     updateInterface();
//   }
// }, 100);

//TASKS
//Create a button that takes an input value, in dollars
//on submit meta mask chrome extension will kick in and present the estimated gas fee for the transaction
//and sends that amount from one test wallet to another via smart contract
//this should simulate the logic that our app will need to send eth from one user to another
//maybe add a request refund feature
//look into truffle/ganache ==> truffle suite, development environment to deploy smart contract to the ropsten test network
//when we request a ride will it go on the blockchain? probably not since that would cost gas, only on acceptance/ride completion
//sends  info through socket io
//drive accepts session and they are connected
//once ride is over
//ride id
//user id
