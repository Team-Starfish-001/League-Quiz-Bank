import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import StudentQuizView from './components/StudentTakeAQuizView/StudentQuizView';
import Dashboard from './components/Dashboard/Dashboard';
import LoginView from './components/LoginView/LoginView';

function AppRouter() {
  return (
    <div>
      <Router history={createHistory()}>
        <Switch>
          <Route path="/login" exact component={LoginView} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/quiz" exact component={StudentQuizView} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
