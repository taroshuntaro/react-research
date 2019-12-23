define(function(require, exports, module) {
  const React = require("react");
  const ReactDOM = require("react-dom");
  const Box = require("components/Box");

  const App = () => {
    return (
      <div>
        <h1>Hello.</h1>
        <Box />
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
