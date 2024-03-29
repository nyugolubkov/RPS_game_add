const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("https://eth-goerli.g.alchemy.com/v2/Jqrhj3Bzv-oFnGwj7mMySkd6WJUEhgmy"));
const account = "0x91cDa83c363A6F72f81A2041836b1e79b4a01Ab1";
const address = "0xcdF80feb07698544EdB40f05BAE525dE5f0FB437";
const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			}
		],
		"name": "getStake",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			}
		],
		"name": "increase",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]
const otherAddress = "0x429951c3eE5BFD3bd86Cc568D076Ad2E79b12c25";
const otherABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"name": "GameCommit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "GameRegister",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "enum RPS.GameChoice",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "GameReveal",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "enum RPS.GameOutcome",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "GetGameOutcome",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "bothCommitted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bothRevealed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "gameHash",
				"type": "bytes32"
			}
		],
		"name": "commitMove",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endGames",
		"outputs": [
			{
				"internalType": "enum RPS.GameOutcome",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "increaseStake",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "isCommitted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "isRegistered",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "isRevealed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "outcome",
		"outputs": [
			{
				"internalType": "enum RPS.GameOutcome",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "regPlayer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "resetExternal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "choice",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "salt",
				"type": "bytes32"
			}
		],
		"name": "revealChoice",
		"outputs": [
			{
				"internalType": "enum RPS.GameChoice",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stake",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
web3.eth.getBalance(account).then(console.log);
const myContract = new web3.eth.Contract(ABI, address);
const otherContract = new web3.eth.Contract(otherABI, otherAddress);
const privateKey = "b2301c675fac36e9dfd994879b48a1ec4cdf6481f4230f9b43eec0b1f41a867d"
otherContract.methods.stake().call().then(console.log)
async function increaseOtherContract() {
    let tx = {
        from: account,
        to: address,
        gas: 520000,
        value: 50000,
        data: myContract.methods.increase(otherAddress).encodeABI()
    }
    let signature = await web3.eth.accounts.signTransaction(tx, privateKey);
    web3.eth.sendSignedTransaction(signature.rawTransaction)
        .catch(err => console.log(err))
        .then(function(receipt) {
            console.log(receipt)
            console.log('Increased')
            otherContract.methods.stake().call().then(console.log)
            myContract.methods.getStake(otherAddress).call().then(console.log)
        });
}
increaseOtherContract()