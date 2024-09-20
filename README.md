# NFT Marketplace Smart Contract

This project implements a decentralized NFT (Non-Fungible Token) marketplace using Ethereum smart contracts. It allows users to mint, buy, sell, and manage unique digital assets on the Ethereum blockchain.

## Features

- Mint new NFTs with custom metadata
- List NFTs for sale at a specified price
- Purchase listed NFTs
- Cancel NFT listings
- View NFT listing information

## Technologies Used

- Solidity ^0.8.24
- OpenZeppelin Contracts
- Hardhat (recommended for local development and testing)

## Prerequisites

- Node.js (v12 or later)
- npm (usually comes with Node.js)
- An Ethereum wallet (e.g., MetaMask)
- Some test ETH (if deploying to a testnet)

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/Superior212/NFTorium
   cd  NFTorium
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```
   PRIVATE_KEY=your_private_key_here
   ALCHEMY_MAINNET_API_KEY_URL=your_alchemy_project_id_here
   ```

4. Compile the smart contracts:
   ```
   npx hardhat compile
   ```

## Deployment

To deploy the NFT Marketplace contract:

1. Update the deployment script in `ignition/modules/NFTorium.ts` with the desired initial owner address.

2. Run the deployment script:

   ```
   npx hardhat run ignition/modules/NFTorium.ts --network <network_name>
   ```

   Replace `<network_name>` with the desired network (e.g., `sepolia`, `mainnet`, or `localhost` for local development).

3. Note the deployed contract address for future interaction.

## Usage

### Minting an NFT

```javascript
const tokenURI = "https://example.com/metadata/1";
await nftMarketplace.mint(tokenURI);
```

### Listing an NFT for Sale

```javascript
const tokenId = 1;
const price = ethers.utils.parseEther("0.1"); // 0.1 ETH
await nftMarketplace.listNFT(tokenId, price);
```

### Buying an NFT

```javascript
const tokenId = 1;
const listing = await nftMarketplace.getListing(tokenId);
await nftMarketplace.buyNFT(tokenId, { value: listing.price });
```

### Cancelling a Listing

```javascript
const tokenId = 1;
await nftMarketplace.cancelListing(tokenId);
```

## Testing

Run the test suite:

```
npx hardhat test
```

## Security Considerations

- This contract has not been audited. Use at your own risk.
- Ensure proper access control and input validation when interacting with the contract.
- Consider implementing additional security features like pausability and upgradability for production use.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
