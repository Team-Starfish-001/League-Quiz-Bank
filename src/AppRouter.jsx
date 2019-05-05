import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import StudentQuizView from './components/StudentTakeAQuizView/StudentQuizView';
import TeacherCreateQuizView from './components/TeacherCreateQuizView/TeacherCreateQuizView';
import Dashboard from './components/Dashboard/Dashboard';

const basename = process.env.REACT_APP_BASENAME;

function AppRouter() {
  return (
    <div>
      <Router basename={basename}>
        <Header />
        <Route path='/' exact component={Dashboard} />
        <Route path='/takeQuiz' exact component={StudentQuizView} />
        <Route path='/makeQuiz' exact component={TeacherCreateQuizView} />
      </Router>
    </div>
  );
}

export default AppRouter;
