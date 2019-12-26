"use strict";

define(function (require, exports, module) {
  var React = require("react");

  var Box = function Box(props) {
    return React.createElement("div", {
      className: "box"
    }, React.createElement("p", null, props.date));
  };

  module.exports = Box;
});