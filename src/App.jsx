define(function(require, exports, module) {
  const React = require("react");
  const ReactDOM = require("react-dom");
  const Box = require("./Box");
  const List = require("./List");

  const App = () => {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <div className="app">
        <h1>Hello.</h1>
        <Box date="Hello World!" />
        <List numbers={numbers} />
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));

  /**
   * promise example code
   */
  const Promise = require("es6-promise/auto");

  let result = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(new Date());
    }, 1000);
  });

  result.then(value => {
    console.log(value);
  });
});
