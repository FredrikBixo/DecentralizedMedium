import React from "react";

import Button from "react-bootstrap/Button";

function FullArticle({
  sf,
  readerAddress,
  articleOwner,
  articleBody,
  stopFlow,
}) {
  return (
    <div>
      <div>{articleBody}</div>
      <Button
        variant="primary"
        onClick={async () => await stopFlow(sf, readerAddress, articleOwner)}
      >
        Finish Reading
      </Button>{" "}
    </div>
  );
}

export default FullArticle;
