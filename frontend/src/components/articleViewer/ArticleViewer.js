import React, { useState } from "react";

import SuperfluidSDK from "@superfluid-finance/js-sdk";
import { Web3Provider } from "@ethersproject/providers";
import { fDAIxAddress, onePerHour } from "../../constants/superfluid";

import Button from "react-bootstrap/Button";

export function ArticleViewer({ article, readerAddress }) {
  const { articleTitle, articleBody, articleOwner } = article;
  //const sf = initSuperFluid();

  /*const reader = sf.user({
    address: readerAddress,
    token: fDAIxAddress,
});*/

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div>
        {articleTitle} - By {articleOwner}
      </div>
      <div>{getPreview(articleBody)}</div>
      <Button variant="primary">Read The Rest</Button>{" "}
    </div>
  );
}

/**
 * Returns the preview of an article.
 *
 * @param articleBody The body of the given article
 *
 * @return The preview, 10% of the article body followed by '...'
 */
function getPreview(articleBody) {
  const previewPercent = 0.1;
  return (
    articleBody.substring(0, Math.round(articleBody.length * previewPercent)) +
    "..."
  );
}

async function initSuperFluid() {
  const sf = new SuperfluidSDK.Framework({
    ethers: new Web3Provider(window.ethereum),
  });
  await sf.initialize();
  return sf;
}

async function startFlow(senderAddress, receiverAddress) {
  const sf = await initSuperFluid();

  const sender = sf.user({
    address: senderAddress,
    token: fDAIxAddress,
  });

  const flowRate = await sender.flow({
    recipient: receiverAddress,
    flowRate: onePerHour.toString(),
  });
}

export default ArticleViewer;
