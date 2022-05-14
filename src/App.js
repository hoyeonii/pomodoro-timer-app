import React, { useEffect, useState } from "react";

import "./App.css";
import ViewTime from "./components/ViewTime";
import Todo from "./components/Todo";
import { Button } from "react-bootstrap";
import Setting from "./components/Setting";
function App() {
  window.onscroll = function () {
    // console.log(window.pageYOffset);
    // console.log(this.scrollY);
    if (window.pageYOffset < 200 && window.pageYOffset > 100) {
      window.scrollTo({ top: window.innerHeight });
    }
    if (window.pageYOffset < 670 && window.pageYOffset > 570) {
      window.scrollTo({ top: window.screenTop });
    }
  };
  return (
    <div className="App">
      {/* <div className="App-header">
        <Button variant="primary" onClick={() => setModalOn(true)}>
          Setting
        </Button>
        <Setting show={modalOn} onHide={() => setModalOn(false)} />
      </div> */}

      <ViewTime />

      <Todo />
    </div>
  );
}

export default App;
