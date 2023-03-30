async function main() {
  // Grab the contract factory 
  const MyNFT = await ethers.getContractFactory("MyNFT");
  const argramNFT = await MyNFT.deploy();

  // Start deployment, returning a promise that resolves to a contract object
  const txHash = argramNFT.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  console.log("Contract deployed to address:",  txReceipt.contractAddress);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });