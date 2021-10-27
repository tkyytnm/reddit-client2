import React from "react";
// import logo from "./logo.svg";
import { Posts } from "./features/posts/Posts";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header><h1><FontAwesomeIcon icon={faPaw} className="paw" /> Reddit Dogs</h1></header>
      <Posts />
    </div>
  );
}

export default App;
