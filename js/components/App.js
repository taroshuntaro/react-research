"use strict";

define(function (require, exports, module) {
  var React = require("react");

  var ReactDOM = require("react-dom");

  var Box = require("components/Box");

  var Promise = require("es6-promise/auto");

  var result = new Promise(function (resolve) {
    resolve(new Date());
  });
  console.log(result._result.getDate());

  var App = function App() {
    return React.createElement("div", null, React.createElement("h1", null, "Hello."), React.createElement(Box, {
      date: result._result.getDate()
    }));
  };

  ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
});