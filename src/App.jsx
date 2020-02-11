define(function(require, exports, module) {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const HashRouter = require('react-router-dom').HashRouter;
  const Route = require('react-router-dom').Route;
  const Switch = require('react-router-dom').Switch;
  const Link = require('react-router-dom').Link;
  const Sample = require('./Sample');

  const App = () => {
    return (
      <div className='app container'>
        <h1>Sample</h1>
        <HashRouter>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/' className='navbar-brand'>
              Navbar
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to='/sample' className='nav-link'>
                    Sample
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path='/sample' exact children={<Sample />} />
          </Switch>
        </HashRouter>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById('root'));
});
