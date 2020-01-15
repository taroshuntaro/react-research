define(function(require, exports, module) {
  const React = require('react');
  const useState = require('react').useState;

  const Count = () => {
    const [count, setCount] = useState(0);

    return (
      <div className="count container">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click!</button>
      </div>
    );
  };
  module.exports = Count;
});
