# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

Helping
```shell
npx hardhat help
```


Check the node.js version (please use new version)
```shell
node -v
```

install the package
```shell
npm i
```

create new .env file and set the API and private key
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
npx hardhat run scripts/deploy.js --network sepolia
```
Expect output:
```html
Contract deployed to address: 0x12356789abcdef....
```
