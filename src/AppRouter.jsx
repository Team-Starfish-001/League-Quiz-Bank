import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import StudentQuizView from './components/StudentTakeAQuizView/StudentQuizView';
import TeacherCreateQuizView from './components/TeacherCreateQuizView/TeacherCreateQuizView';
import Dashboard from './components/Dashboard/Dashboard';

const basename = process.env.REACT_APP_BASENAME;

function AppRouter() {
  return (
    <div>
      <Router history={createBrowserHistory()} basename={basename}>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/takeQuiz' exact component={StudentQuizView} />
          <Route path='/makeQuiz' exact component={TeacherCreateQuizView} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
