import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Posts } from "../features/posts/Posts";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { CurrentPost } from "../features/currentPost/CurrentPost";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>
            <Link to="/">
              <FontAwesomeIcon icon={faPaw} className="paw" /> Reddit Dogs
            </Link>
          </h1>
        </header>

        <Switch>
          <Route path="/:permalink">
            <CurrentPost />
          </Route>
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </div>
      <footer>Footer!!!</footer>
    </Router>
  );
}

export default App;
