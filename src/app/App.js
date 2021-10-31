import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Posts } from "../features/posts/Posts";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { Comments } from "../features/comments/Comments";
import { Hamburger } from "../components/Hamburger";
import { PageTopButton} from "../components/PageTopButton";

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
        <Hamburger />
        <Switch>
          <Route path="/:permalink">
            <Comments />
          </Route>
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </div>
      <PageTopButton />
      {/* <footer>Footer!!!</footer> */}
    </Router>
  );
}

export default App;
