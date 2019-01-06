import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import StudentQuizView from './components/StudentTakeAQuizView/StudentQuizView';

function AppRouter() {
  return (
    <div>
      <Router history={createHistory()}>
        <Switch>
	  <Route path="/" exact component={App} />
          <Route path="/quiz" exact component={StudentQuizView} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;