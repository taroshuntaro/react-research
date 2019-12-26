define(function(require, exports, module) {
  const React = require("react");
  const ReactDOM = require("react-dom");
  const Box = require("Box");

  const App = () => {
    return (
      <div>
        <h1>Hello.</h1>
        <Box date="xxxx" />
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
