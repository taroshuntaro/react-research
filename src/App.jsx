define(function(require, exports, module) {
  const React = require("react");
  const ReactDOM = require("react-dom");
  const BrowserRouter = require("react-router-dom").BrowserRouter;
  const Route = require("react-router-dom").Route;
  const Link = require("react-router-dom").Link;

  const App = () => {
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

    return (
      <div className="app container">
        <h1 className="display-1">
          Hello World!
          <span className="badge badge-secondary">New</span>
        </h1>
        <BrowserRouter>
          <div className="list container">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-group-item">
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
