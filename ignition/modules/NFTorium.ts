// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const owner = "0xe47B685FD028eb63dD020E5641C5bD3Ce4adD610"
const NFToriumModule = buildModule("NFToriumModule", (m) => {
  const NFTorium = m.contract("NFTorium", [owner]);

  return { NFTorium };
});

export default NFToriumModule;
