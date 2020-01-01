define(function(require, exports, module) {
  const React = require("react");
  const ReactDOM = require("react-dom");
  const HashRouter = require("react-router-dom").HashRouter;
  const Route = require("react-router-dom").Route;
  const Link = require("react-router-dom").Link;

  const Sample = require("./Sample");
  const Card = require("./Card");

  const App = () => {
    const tweetListJSON = [
      {
        id: "1",
        account_name: "taroshuntaro",
        account_id: "taroshuntaro",
        text: "Hello World."
      },
      {
        id: "2",
        account_name: "sample01",
        account_id: "sample01",
        text: "Hello Hello Hello."
      },
      {
        id: "3",
        account_name: "sample02",
        account_id: "sample02",
        text: "Hello Hello Hello."
      }
    ];

    return (
      <div className="app container">
        <h1>Sample React App</h1>
        <HashRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/sample" className="nav-link">
                    Sample
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/card" className="nav-link">
                    Card
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/sample" render={() => <Sample />} />
          <Route
            path="/card"
            render={() => <Card tweetList={tweetListJSON} />}
          />
        </HashRouter>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
