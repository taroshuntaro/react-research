define(function(require, exports, module) {
  const React = require("react");

  const List = props => {
    const numbers = props.numbers;
    const items = numbers.map(number => (
      <li key={number.toString()}>{number}</li>
    ));

    return (
      <div className="list">
        <ul>{items}</ul>
      </div>
    );
  };

  module.exports = List;
});
