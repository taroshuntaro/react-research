"use strict";

define(function (require, exports, module) {
  var React = require("react");

  var Card = function Card(props) {
    var tweetList = props.tweetList;
    var items = tweetList.map(function (tweet) {
      return React.createElement("li", {
        className: "list-group-item",
        key: tweet.id.toString()
      }, React.createElement("div", {
        className: "card",
        style: {
          margin: "5px"
        }
      }, React.createElement("div", {
        className: "card-body"
      }, React.createElement("h5", {
        className: "card-title"
      }, props.name), React.createElement("h6", {
        className: "card-subtitle mb-2 text-muted"
      }, props.id), React.createElement("p", {
        className: "card-text"
      }, props.text))));
    });
    return React.createElement("div", {
      className: "list container"
    }, React.createElement("ul", {
      className: "list-group"
    }, items));
  };

  module.exports = Card;
});