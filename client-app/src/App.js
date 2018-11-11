import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const data = {
  "QuizName":"SuperQuiz",
  "QuizDate":"Sunday, November 10",
  "QuizImg":"img",
  "Teacher":"Bob",
  "ClassName":"Frogs",
  "ClassLevel":"Level 2"
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Dashboard/>
      </div>
    );
  }
}

export default App;
