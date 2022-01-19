import { Route, Switch } from "react-router";
import "./App.css";
import Homepage from "./Homepage";
import ArticlePage from "./ArticlePage";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Homepage articles={articles} setArticles={setArticles} />
        </Route>
        <Route path="/articles/:artTitle" exact>
          <ArticlePage articles={articles} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
