"use strict";

define(function (require, exports, module) {
  var React = require("react");

  var ReactDOM = require("react-dom");

  var HashRouter = require("react-router-dom").HashRouter;

  var Route = require("react-router-dom").Route;

  var Link = require("react-router-dom").Link;

  var Sample = require("./Sample");

  var Card = require("./Card");

  var App = function App() {
    var tweetListJSON = [{
      id: "1",
      account_name: "taroshuntaro",
      account_id: "taroshuntaro",
      text: "Hello World."
    }, {
      id: "2",
      account_name: "sample01",
      account_id: "sample01",
      text: "Hello Hello Hello."
    }, {
      id: "3",
      account_name: "sample02",
      account_id: "sample02",
      text: "Hello Hello Hello."
    }];
    return React.createElement("div", {
      className: "app container"
    }, React.createElement("h1", null, "Sample React App"), React.createElement(HashRouter, null, React.createElement("nav", {
      className: "navbar navbar-expand-lg navbar-light bg-light"
    }, React.createElement(Link, {
      to: "/",
      className: "navbar-brand"
    }, "Navbar"), React.createElement("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNav",
      "aria-controls": "navbarNav",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, React.createElement("span", {
      className: "navbar-toggler-icon"
    })), React.createElement("div", {
      className: "collapse navbar-collapse",
      id: "navbarNav"
    }, React.createElement("ul", {
      className: "navbar-nav"
    }, React.createElement("li", {
      className: "nav-item"
    }, React.createElement(Link, {
      to: "/sample",
      className: "nav-link"
    }, "Sample")), React.createElement("li", {
      className: "nav-item"
    }, React.createElement(Link, {
      to: "/card",
      className: "nav-link"
    }, "Card"))))), React.createElement(Route, {
      path: "/sample",
      render: function render() {
        return React.createElement(Sample, null);
      }
    }), React.createElement(Route, {
      path: "/card",
      render: function render() {
        return React.createElement(Card, {
          tweetList: tweetListJSON
        });
      }
    })));
  };

  ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
});