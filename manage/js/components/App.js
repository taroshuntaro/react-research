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

  var App = function App() {
    return React.createElement("div", {
      className: "app container"
    }, React.createElement("h1", {
      className: "display-1"
    }, "Hello World!", React.createElement("span", {
      className: "badge badge-secondary"
    }, "New")), React.createElement(HashRouter, null, React.createElement("div", {
      className: "list container"
    }, React.createElement("ul", {
      className: "list-group"
    }, React.createElement("li", {
      className: "list-group-item"
    }, React.createElement(Link, {
      to: "/home"
    }, "Home")), React.createElement("li", {
      className: "list-group-item"
    }, React.createElement(Link, {
      to: "/about"
    }, "About")))), React.createElement("div", {
      className: "container"
    }, React.createElement(Route, {
      path: "/home",
      component: Home
    }), React.createElement(Route, {
      path: "/about",
      component: About
    }))));
  };

  ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
});