import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import QuizList from './components/QuizList/QuizList.jsx';
var data =[{
	"QuizName": "SuperQuiz",
	"QuizDate": "Sunday, November 10",
       "QuizImg": logo,
	"Teacher": "Bob",
	"ClassName": "Frogs",
	"ClassLevel": "Level 2",
	"QuizId": "1"
    },{
    "QuizName":"sadsad",
    "QuizDate":"Sundatsad",
    "QuizImg": logo,
    "Teacher": "Bob",
    "ClassName": "Frogs",
    "ClassLevel": "Level 2",
    "QuizId": "1"
    },{ 
    "QuizName":"asd",
    "QuizDate":"asdas",
    "QuizImg": logo,
    "Teacher": "Bob",
    "ClassName": "Frogs",
    "ClassLevel": "Level 2",
    "QuizId": "1"
}
]

class App extends Component {
  render() {
    return (
      <div className="App">
      <Dashboard/>
      <QuizList data={data} />
      </div>
    );
  }
}

export default App;
