"use strict";

define(function (require, exports, module) {
  var React = require('react');

  var Card = function Card() {
    var tweetList = [{
      id: '1',
      account_name: 'taroshuntaro',
      account_id: 'taroshuntaro',
      text: 'Hello World.'
    }, {
      id: '2',
      account_name: 'sample01',
      account_id: 'sample01',
      text: 'Hello Hello Hello.'
    }, {
      id: '3',
      account_name: 'sample02',
      account_id: 'sample02',
      text: 'Hello Hello Hello.'
    }];
    var items = tweetList.map(function (tweet) {
      return React.createElement("li", {
        className: "list-group-item",
        key: tweet.id
      }, React.createElement("div", {
        className: "card",
        style: {
          margin: '5px'
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
      className: "card container"
    }, React.createElement("h2", null, "Card"), React.createElement("div", {
      className: "list container"
    }, React.createElement("ul", {
      className: "list-group"
    }, items)));
  };

  module.exports = Card;
});