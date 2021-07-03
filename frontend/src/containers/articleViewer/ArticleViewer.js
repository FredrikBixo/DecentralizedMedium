import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { fDAIxAddress, onePerHour } from "../../constants/superfluid";
import { articleList } from "../../constants/article-list";
import ArticlePreview from "./ArticlePreview";
import FullArticle from "./FullArticle";
import { Loading } from "../../components/Loading";
import { AppContext } from "../../contexts/AppContext";

export function ArticleViewer() {
  const params = useParams();
  const history = useHistory();
  const { id: index } = params;
  const article = articleList[index];
  const appContext = useContext(AppContext);
  const { articleTitle, articleBody, articleOwner } = article;
  const [isArticlePaidFor, setIsArticlePaidFor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { sf, user, userAddress: readerAddress } = appContext;

  useEffect(() => {
    if (!sf) return;
    startFlow(articleOwner);
  }, []);

  async function startFlow(receiverAddress) {
    setIsLoading(true);
    const isArticlePaidFor = await checkIfArticlePaidFor(
      sf,
      readerAddress,
      articleOwner
    );
    if (!isArticlePaidFor) {
      await user.flow({
        recipient: receiverAddress,
        flowRate: onePerHour.toString(),
      });
    }
    setIsArticlePaidFor(true);
    setIsLoading(false);
    console.log(await user.details());
  }

  async function stopFlow(receiverAddress) {
    setIsLoading(true);
    await user.flow({
      recipient: receiverAddress,
      flowRate: "0",
    });
    // Navigate to home page
    history.push("/");
    setIsLoading(false);
    console.log(await user.details());
  }

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div>
        {articleTitle} - By {articleOwner}
      </div>

      {isLoading ? (
        <Loading />
      ) : isArticlePaidFor ? (
        <FullArticle
          articleOwner={articleOwner}
          articleBody={articleBody}
          stopFlow={stopFlow}
        />
      ) : (
        <ArticlePreview
          articleOwner={articleOwner}
          articleBody={articleBody}
          startFlow={startFlow}
        />
      )}
    </div>
  );
}

async function checkIfArticlePaidFor(sf, readerAddress, articleOwner) {
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

export default ArticleViewer;
