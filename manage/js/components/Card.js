"use strict";

define(function (require, exports, module) {
  var React = require("react");

  var Card = function Card(props) {
    var tweetList = props.tweetList;
    var items = tweetList.map(function (tweet) {
      return React.createElement("li", {
        className: "list-group-item",
        key: tweet.id
      }, React.createElement("div", {
        className: "card",
        style: {
          margin: "5px"
        }
      }, React.createElement("div", {
        className: "card-body"
      }, React.createElement("h5", {
        className: "card-title"
      }, tweet.account_name), React.createElement("h6", {
        className: "card-subtitle mb-2 text-muted"
      }, tweet.account_id), React.createElement("p", {
        className: "card-text"
      }, tweet.text))));
    });
    return React.createElement("div", {
      className: "container"
    }, React.createElement("h2", null, "Card"), React.createElement("div", {
      className: "list container"
    }, React.createElement("ul", {
      className: "list-group"
    }, items)));
  };

  module.exports = Card;
});