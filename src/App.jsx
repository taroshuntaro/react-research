define(function(require, exports, module) {
  const React = require("react");
  const ReactDOM = require("react-dom");
  const Box = require("components/Box");

  const Promise = require("es6-promise/auto");

  let result = new Promise(function(resolve) {
    resolve(new Date());
  });
  console.log(result._result.getDate());

  const App = () => {
    return (
      <div>
        <h1>Hello.</h1>
        <Box date={result._result.getDate()} />
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
