import { Redirect, Route, Switch } from "react-router";

import Articles from "./Articles";
import "./App.css";
import Homepage from "./Homepage";
import ArticlePage from "./ArticlePage";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/articles/:artTitle" exact>
          <ArticlePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
