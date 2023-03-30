# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

Check the node.js version
```shell
node -v
```

Helping
```shell
npx hardhat help
```
.env
```shell
API_URL = "https://eth-sepolia.g.alchemy.com/v2/<API_KEY>"
PRIVATE_KEY = "<Metamask wallet Private key>"
```
Compile project
```shell
npx hardhat compile
```
Deploy the basic ERC721 contract
```shell
npx hardhat run deployments/deploy.js --network sepolia
```
