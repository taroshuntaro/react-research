define(function(require, exports, module) {
  const React = require("react");
  const ReactDOM = require("react-dom");
  const HashRouter = require("react-router-dom").HashRouter;
  const Route = require("react-router-dom").Route;
  const Link = require("react-router-dom").Link;

  const Home = () => (
    <div>
      <h2>Home</h2>
      Homeページです
    </div>
  );
  const About = () => (
    <div>
      <h2>About</h2>
      Aboutページです
    </div>
  );

  const App = () => {
    return (
      <div className="app container">
        <h1 className="display-1">
          Hello World!
          <span className="badge badge-secondary">New</span>
        </h1>
        <HashRouter>
          <div className="list container">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="list-group-item">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </HashRouter>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
