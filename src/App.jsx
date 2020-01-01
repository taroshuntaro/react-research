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
  const Test = () => (
    <div>
      <h2>Test</h2>
      Testページです
    </div>
  );

  const App = () => {
    return (
      <div className="app container">
        <h1>Title</h1>
        <HashRouter>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              Navbar
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/test" className="nav-link">
                    Test
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/test" component={Test} />
        </HashRouter>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
