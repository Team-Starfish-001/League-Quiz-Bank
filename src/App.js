import React, { Component } from 'react';
// import logo from './logo.svg';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import AppRouter from './AppRouter';

// import { connect } from 'react-redux';
// import { addQuiz } from './actions/quizActions';

// var data = [
//   {
//     QuizName: 'SuperQuiz',
//     QuizDate: 'Sunday, November 10',
//     QuizImg: logo,
//     Teacher: 'Bob',
//     ClassName: 'Frogs',
//     ClassLevel: 'Level 2',
//     QuizId: '1',
//   },
//   {
//     QuizName: 'sadsad',
//     QuizDate: 'Sundatsad',
//     QuizImg: logo,
//     Teacher: 'Bob',
//     ClassName: 'Frogs',
//     ClassLevel: 'Level 2',
//     QuizId: '1',
//   },
//   {
//     QuizName: 'asd',
//     QuizDate: 'asdas',
//     QuizImg: logo,
//     Teacher: 'Bob',
//     ClassName: 'Frogs',
//     ClassLevel: 'Level 2',
//     QuizId: '1',
//   },
// ];

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppRouter />
      </React.Fragment>
    );
  }
}

export default App;

// function mapStateToProps() {}

// function mapDispatchToProps(dispatch) {
//   return {
//     fireAction: function() {
//       dispatch(addQuiz());
//     },
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
