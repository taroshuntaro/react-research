import React from "react";
import ReactDOM from "react-dom";
import Box from "./Box.js";

const App = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <Box />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
