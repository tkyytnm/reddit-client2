import React from "react";
// import logo from "./logo.svg";
import { Posts } from "./features/posts/Posts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header><h1>Reddit Dogs</h1></header>
      <Posts />
    </div>
  );
}

export default App;
