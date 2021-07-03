import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import { articleList } from "../../constants/article-list";
import { ArticleWrapper, CardContainer, CardBody } from "./styles";
import { getPreview } from "../../utils/common-utils";

function ArticleList() {
  const history = useHistory();
  console.log(history, "***");
  const articleMapper = articleList.map((article, index) => {
    const onArticleReadPress = () => {
      history.push(`/article/${index}`);
    };
    return (
      <CardContainer>
        <Card.Header as="h5">{article.articleTitle}</Card.Header>
        <CardBody>{getPreview(article.articleBody, 0.2)}</CardBody>
        <Button onClick={onArticleReadPress} variant="secondary">
          Read more...
        </Button>
      </CardContainer>
    );
  });
  return <ArticleWrapper id="articles">{articleMapper}</ArticleWrapper>;
}

export default ArticleList;
