import React from "react";
import ArticleList from './ArticleList';
import Cover from './Cover';

function LandingScreen() {
  return (
    <div>
        <Cover />
        <ArticleList />
    </div>
    )
}

LandingScreen.propTypes = {

}

export default LandingScreen

