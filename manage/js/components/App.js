"use strict";

define(function (require, exports, module) {
  var React = require("react");

  var ReactDOM = require("react-dom");

  var Sample = require("./Sample");

  var Card = require("./Card");

  var App = function App() {
    return React.createElement("div", {
      className: "app container"
    }, React.createElement("h1", {
      className: "display-1"
    }, "Hello World!", React.createElement("span", {
      className: "badge badge-secondary"
    }, "New")), React.createElement(Sample, null));
  };

  ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
});