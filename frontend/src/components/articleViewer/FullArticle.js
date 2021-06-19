import React from "react";

import Button from "react-bootstrap/Button";

function FullArticle({ readerAddress, articleOwner, articleBody, stopFlow }) {
  return (
    <div>
      <div>{articleBody}</div>
      <Button
        variant="primary"
        onClick={async () => await stopFlow(readerAddress, articleOwner)}
      >
        Finish Reading
      </Button>{" "}
    </div>
  );
}

export default FullArticle;
