define(function(require, exports, module) {
  const React = require("react");

  const Box = props => {
    return (
      <div className="box">
        <p>{props.date}</p>
      </div>
    );
  };

  module.exports = Box;
});
