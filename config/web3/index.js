import web3 from "web3";
import { InjectedConnector } from "@web3-react/injected-connector";

const ETH_NETWORK_CHAIN_ID = 1;
export const connector = new InjectedConnector({
  supportedChainIds: [ETH_NETWORK_CHAIN_ID],
});

export const getLibrary = (provider) => {
  const library = new web3(provider);
  return library;
};
