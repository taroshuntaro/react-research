"use strict";

define(function (require, exports, module) {
  var React = require("react");

  var Box = function Box() {
    return React.createElement("div", {
      className: "box"
    }, "Box 1");
  };

  module.exports = Box;
});