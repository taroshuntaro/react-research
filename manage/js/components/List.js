"use strict";

define(function (require, exports, module) {
  var React = require("react");

  var List = function List(props) {
    var numbers = props.numbers;
    var items = numbers.map(function (number) {
      return React.createElement("li", {
        key: number.toString()
      }, number);
    });
    return React.createElement("div", {
      className: "list"
    }, React.createElement("ul", null, items));
  };

  module.exports = List;
});