"use strict";

define(function (require, exports, module) {
  var React = require("react");

  var ReactDOM = require("react-dom");

  var Box = require("components/Box");

  var App = function App() {
    return React.createElement("div", null, React.createElement("h1", null, "Hello."), React.createElement(Box, null));
  };

  ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
});