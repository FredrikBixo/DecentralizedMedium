import React, { useState, useEffect } from "react";

import SuperfluidSDK from "@superfluid-finance/js-sdk";
import { Web3Provider } from "@ethersproject/providers";
import { fDAIxAddress, onePerHour } from "../../constants/superfluid";
import ArticlePreview from "./ArticlePreview";
import FullArticle from "./FullArticle";

export function ArticleViewer({ article, readerAddress }) {
  const { articleTitle, articleBody, articleOwner } = article;
  const [sf, setSf] = useState();
  const [isFlowing, setIsFlowing] = useState(false);

  useEffect(() => {
    initSuperFluid().then((sf) => {
      setSf(sf);
      checkIfFlowing(sf, readerAddress, articleOwner).then((result) => {
        setIsFlowing(result);
      });
    });
  }, []);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div>
        {articleTitle} - By {articleOwner}
      </div>
      {isFlowing ? (
        <FullArticle
          sf={sf}
          readerAddress={readerAddress}
          articleOwner={articleOwner}
          articleBody={articleBody}
          stopFlow={stopFlow}
        />
      ) : (
        <ArticlePreview
          sf={sf}
          readerAddress={readerAddress}
          articleOwner={articleOwner}
          articleBody={articleBody}
          startFlow={startFlow}
        />
      )}
    </div>
  );
}

// This can probably be moved up in the component structure once more components
// need superfluid.
async function initSuperFluid() {
  const sf = new SuperfluidSDK.Framework({
    ethers: new Web3Provider(window.ethereum),
  });
  await sf.initialize();
  return sf;
}

async function startFlow(sf, senderAddress, receiverAddress) {
  const sender = sf.user({
    address: senderAddress,
    token: fDAIxAddress,
  });

  await sender.flow({
    recipient: receiverAddress,
    flowRate: onePerHour.toString(),
  });
  console.log(await sender.details());
}

async function stopFlow(sf, senderAddress, receiverAddress) {
  const sender = sf.user({
    address: senderAddress,
    token: fDAIxAddress,
  });

  await sender.flow({
    recipient: receiverAddress,
    flowRate: "0",
  });
  console.log(await sender.details());
}

async function checkIfFlowing(sf, readerAddress, articleOwner) {
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

export default ArticleViewer;
