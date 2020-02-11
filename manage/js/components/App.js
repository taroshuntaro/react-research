"use strict";

define(function (require, exports, module) {
  var React = require('react');

  var ReactDOM = require('react-dom');

  var HashRouter = require('react-router-dom').HashRouter;

  var Route = require('react-router-dom').Route;

  var Switch = require('react-router-dom').Switch;

  var Link = require('react-router-dom').Link;

  var Sample = require('./Sample');

  var App = function App() {
    return React.createElement("div", {
      className: "app container"
    }, React.createElement("h1", null, "Sample"), React.createElement(HashRouter, null, React.createElement("nav", {
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
    }, "Sample"))))), React.createElement(Switch, null, React.createElement(Route, {
      path: "/sample",
      exact: true,
      children: React.createElement(Sample, null)
    }))));
  };

  ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
});