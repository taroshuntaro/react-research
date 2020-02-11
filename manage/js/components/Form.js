"use strict";

define(function (require, exports, module) {
  var React = require('react');

  var PullDown = function PullDown(props) {
    var items = props.items.value.map(function (item) {
      return React.createElement("option", {
        key: item.toString(),
        value: item.toString()
      }, item);
    });
    return React.createElement("div", {
      className: "form-group"
    }, React.createElement("label", null, props.items.title, "\uFF1A"), React.createElement("select", null, React.createElement("option", {
      value: ""
    }), items));
  };

  var item01 = {
    title: 'pulldown 01',
    value: [1, 2, 3, 4, 5]
  };
  var item02 = {
    title: 'pulldown 02',
    value: ['りんご', 'ぶどう', 'いちご', 'みかん', 'れもん']
  };

  var Form = function Form(props) {
    return React.createElement("div", {
      className: "form container"
    }, React.createElement("form", {
      name: "sample_form",
      method: "post",
      action: ""
    }, React.createElement(PullDown, {
      items: item01
    }), React.createElement(PullDown, {
      items: item02
    })), React.createElement("button", {
      type: "submit",
      className: "btn btn-primary onSubmit"
    }, "\u691C\u7D22"));
  };

  module.exports = Form;
});