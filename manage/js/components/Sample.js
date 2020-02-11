"use strict";

define(function (require, exports, module) {
  var React = require('react');

  var Form = require('./Form');
  /* Sample Components */


  var Sample = function Sample() {
    return React.createElement("div", {
      className: "container"
    }, React.createElement("h2", null, "Sample"), React.createElement(Form, null));
  };

  module.exports = Sample;
});