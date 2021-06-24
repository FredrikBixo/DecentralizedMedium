import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ArticleViewer from "../articleViewer";
import LandingScreen from "../landingScreen";
import { initSuperFluid } from "../../utils/superfluid";
import { articleList } from "../../constants/article-list";
import { fDAIxAddress } from "../../constants/superfluid";
import { AppContext } from "../../contexts/AppContext";
import { Loading } from "../../components/Loading";
import { PublishMain } from "../../components/PublishMain";

function Home({ selectedAddress }) {
  const [sf, setSf] = useState();
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // If not address is selected, do not initialize sf
    if (!selectedAddress) return () => {};
    setLoader(true);
    initSuperFluid()
      .then((sf) => {
        // Set the superfluid instance
        setSf(sf);

        // Create the user instance
        const user = sf.user({ address: selectedAddress, token: fDAIxAddress });
        // Set the user instance
        setUser(user);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [selectedAddress]);

  const articleViewer = useCallback(() => {
    return (
      <ArticleViewer article={articleList[0]} readerAddress={selectedAddress} />
    );
  }, [selectedAddress]);

  if (loader) {
    return <Loading />;
  }

  return (
    <AppContext.Provider value={{ sf, user, userAddress: selectedAddress }}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route path="/article/:id">
            <ArticleViewer
              article={articleList[0]}
              readerAddress={selectedAddress}
            />
          </Route>
          <Route path="/publish">
            <PublishMain />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

Home.propTypes = {
  selectedAddress: PropTypes.string.isRequired,
};

export default Home;
