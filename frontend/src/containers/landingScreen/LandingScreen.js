import React from "react";
import NavBar from './NavBar';
import ArticleList from './ArticleList';
import Cover from './Cover';

function LandingScreen() {
  return (
    <div>
        <NavBar />
        <Cover />
        <ArticleList />
    </div>
    )
}

LandingScreen.propTypes = {

}

export default LandingScreen

