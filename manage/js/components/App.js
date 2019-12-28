"use strict";

define(function (require, exports, module) {
  var React = require("react");

  var ReactDOM = require("react-dom");

  var Box = require("./Box");

  var List = require("./List");

  var App = function App() {
    var numbers = [1, 2, 3, 4, 5];
    return React.createElement("div", {
      className: "app"
    }, React.createElement("h1", null, "Hello."), React.createElement(Box, {
      date: "Hello World!"
    }), React.createElement(List, {
      numbers: numbers
    }));
  };

  ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
  /**
   * promise example code
   */

  var Promise = require("es6-promise/auto");

  var result = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(new Date());
    }, 1000);
  });
  result.then(function (value) {
    console.log(value);
  });
});