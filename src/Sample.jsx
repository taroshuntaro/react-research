define(function(require, exports, module) {
  const React = require("react");

  /* Box components */
  const Box = props => {
    return (
      <div className="box container">
        <p>{props.text}</p>
      </div>
    );
  };

  /* NumberList Components */
  const NumberList = () => {
    const numbers = [1, 2, 3];
    const items = numbers.map(number => (
      <li className="list-group-item" key={number.toString()}>
        {number}
      </li>
    ));

    return (
      <div className="list container">
        <ul className="list-group">{items}</ul>
      </div>
    );
  };

  /* Sample Components */
  const Sample = () => {
    return (
      <div>
        <Box text="sample project." />
        <NumberList />
      </div>
    );
  };
  module.exports = Sample;
});
