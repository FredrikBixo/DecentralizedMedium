import React from "react";

import Button from "react-bootstrap/Button";

function ArticlePreview({
  articleOwner,
  articleBody,
  startFlow,
}) {
  return (
    <div>
      <div>{getPreview(articleBody)}</div>
      <Button
        variant="primary"
        onClick={async () => await startFlow(articleOwner)}
      >
        Read The Rest
      </Button>{" "}
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

export default ArticlePreview;
