import React, { useEffect, useState } from "react";

import "./App.css";
import ViewTime from "./components/ViewTime";
import Todo from "./components/Todo";
function App() {
  window.onscroll = function () {
    // console.log(this.scrollY);
    if (window.pageYOffset < 100 && window.pageYOffset > 50) {
      window.scrollTo({ top: window.innerHeight });
    }
    if (
      window.pageYOffset < window.innerHeight - 50 &&
      window.pageYOffset > window.innerHeight - 100
    ) {
      window.scrollTo({ top: window.screenTop });
    }
  };
  return (
    <div className="App">
      <ViewTime />

      <Todo />
    </div>
  );
}

export default App;
