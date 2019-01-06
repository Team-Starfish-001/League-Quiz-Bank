import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from './App';

function AppRouter() {
  return (
    <div>
      <Router history={createHistory()}>
        <Switch>
          <Route path="/" exact component={App} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;