"use strict";

define(function (require, exports, module) {
  var React = require("react");

  var ReactDOM = require("react-dom");

  var HashRouter = require("react-router-dom").HashRouter;

  var Route = require("react-router-dom").Route;

  var Link = require("react-router-dom").Link;

  var Home = function Home() {
    return React.createElement("div", null, React.createElement("h2", null, "Home"), "Home\u30DA\u30FC\u30B8\u3067\u3059");
  };

  var About = function About() {
    return React.createElement("div", null, React.createElement("h2", null, "About"), "About\u30DA\u30FC\u30B8\u3067\u3059");
  };

  var Test = function Test() {
    return React.createElement("div", null, React.createElement("h2", null, "Test"), "Test\u30DA\u30FC\u30B8\u3067\u3059");
  };

  var App = function App() {
    return React.createElement("div", {
      className: "app container"
    }, React.createElement("h1", null, "Title"), React.createElement(HashRouter, null, React.createElement("nav", {
      class: "navbar navbar-expand-lg navbar-light bg-light"
    }, React.createElement(Link, {
      to: "/",
      className: "navbar-brand"
    }, "Navbar"), React.createElement("button", {
      class: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNav",
      "aria-controls": "navbarNav",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, React.createElement("span", {
      class: "navbar-toggler-icon"
    })), React.createElement("div", {
      class: "collapse navbar-collapse",
      id: "navbarNav"
    }, React.createElement("ul", {
      class: "navbar-nav"
    }, React.createElement("li", {
      class: "nav-item"
    }, React.createElement(Link, {
      to: "/home",
      className: "nav-link"
    }, "Home")), React.createElement("li", {
      class: "nav-item"
    }, React.createElement(Link, {
      to: "/about",
      className: "nav-link"
    }, "About")), React.createElement("li", {
      class: "nav-item"
    }, React.createElement(Link, {
      to: "/test",
      className: "nav-link"
    }, "Test"))))), React.createElement(Route, {
      path: "/home",
      component: Home
    }), React.createElement(Route, {
      path: "/about",
      component: About
    }), React.createElement(Route, {
      path: "/test",
      component: Test
    })));
  };

  ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
});