"use strict";

define(function (require, exports, module) {
  var React = require("react");

  var ReactDOM = require("react-dom");

  var Box = require("components/Box");

  var Promise = require("es6-promise/auto");

  var result = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(new Date());
    }, 1000);
  });
  result.then(function (value) {
    console.log(value);
  });

  var App = function App() {
    return React.createElement("div", null, React.createElement("h1", null, "Hello."), React.createElement(Box, {
      date: "xxxx"
    }));
  };

  ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
});