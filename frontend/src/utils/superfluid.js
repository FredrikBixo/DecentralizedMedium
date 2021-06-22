import SuperfluidSDK from "@superfluid-finance/js-sdk";
import { Web3Provider } from "@ethersproject/providers";
import { fDAIxAddress } from '../constants/superfluid';

export async function initSuperFluid() {
  const sf = new SuperfluidSDK.Framework({
    ethers: new Web3Provider(window.ethereum),
    tokens: ["fDAI"],
  });
  await sf.initialize();
  return sf;
}

export async function checkIfArticlePaidFor(sf, readerAddress, articleOwner) {
  if (readerAddress.toLowerCase() === articleOwner.toLowerCase()) {
    return true;
  }
  const sender = sf.user({
    address: readerAddress,
    token: fDAIxAddress,
  });
  const { cfa } = await sender.details();
  const outFlows = cfa.flows.outFlows;
  // Note: this approach is inherently flawed as it allows a reader to access
  // all of a given user's articles if they pay for one. But this is simple so
  // it's done for now.
  console.log("reader", cfa);
  const filteredFlows = outFlows.filter(
    (f) =>
      f.sender.toLowerCase() === readerAddress.toLowerCase() &&
      f.receiver.toLowerCase() === articleOwner.toLowerCase()
  );
  return filteredFlows.length !== 0;
}
