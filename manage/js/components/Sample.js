"use strict";

define(function (require, exports, module) {
  var React = require("react");
  /* Box components */


  var Box = function Box(props) {
    return React.createElement("div", {
      className: "box container"
    }, React.createElement("p", null, props.text));
  };
  /* NumberList Components */


  var NumberList = function NumberList() {
    var numbers = [1, 2, 3];
    var items = numbers.map(function (number) {
      return React.createElement("li", {
        className: "list-group-item",
        key: number.toString()
      }, number);
    });
    return React.createElement("div", {
      className: "list container"
    }, React.createElement("ul", {
      className: "list-group"
    }, items));
  };
  /* Sample Components */


  var Sample = function Sample() {
    return React.createElement("div", null, React.createElement(Box, {
      text: "sample project."
    }), React.createElement(NumberList, null));
  };

  module.exports = Sample;
});