"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Box = _interopRequireDefault(require("./Box.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react.default.createElement("div", null, _react.default.createElement("h1", null, "Hello."), _react.default.createElement(_Box.default, null));
};

_reactDom.default.render(_react.default.createElement(App, null), document.getElementById("root"));