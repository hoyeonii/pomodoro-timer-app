import React, { useEffect, useState } from "react";

import "./App.css";
import ViewTime from "./components/ViewTime";
import Todo from "./components/Todo";
import { Button } from "react-bootstrap";
import Setting from "./components/Setting";
function App() {
  const [modalOn, setModalOn] = useState(false);

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
