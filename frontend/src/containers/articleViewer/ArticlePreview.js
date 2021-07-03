import React from "react";

import Button from "react-bootstrap/Button";
import { getPreview } from '../../utils/common-utils';

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

export default ArticlePreview;
