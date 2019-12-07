import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './routes/LoginPage';
import News from './routes/News';
import Profile from './routes/Profile';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <br />
            <li>
              <Link to="/news">News</Link>
            </li>
            <br />
            <li>
              <Link to="/login">Login</Link>
            </li>
            <br />
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/profile">
            <Profile />
          </Route> */}
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute >
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
