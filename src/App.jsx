define(function(require, exports, module) {
  const React = require("react");
  const ReactDOM = require("react-dom");
  const Sample = require("./Sample");
  const Card = require("./Card");

  const App = () => {
    return (
      <div className="app container">
        <h1 className="display-1">
          Hello World!
          <span className="badge badge-secondary">New</span>
        </h1>
        <Sample />
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
