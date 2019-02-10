import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import QuizList from './components/QuizList/QuizList.jsx';
import DataList from './components/DataList/DataList'
import {connect} from 'react-redux';
import {addQuiz} from './actions/quizActions';

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

// example DataList object (just for planning stuff out)
const dummyData = {
  "headers": [
    "header1": {
      "name": "Quiz Name"
    },
    "header2": {
      "name": "Date"
    },
    "header3": {
      "name": "Score"
    }
  ],
  "rows": [
    "row1": {
      "name": "Quiz 1",
      "date": "10/25/18",
      "score": "95%",
    },
    "row2": {
      "name": "Quiz 2",
      "date": "10/32/18",
      "score": "100%",
    },
    "row3": {
      "name": "Quiz 3",
      "date": "11/7/18",
      "score": "60%",
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <button onClick={this.props.fireAction}>Action</button>
      <Dashboard data={data}/>
			<DataList data= { dummyData }/> 
      </div>
    );
  }
}

function mapStateToProps() {

}

function mapDispatchToProps(dispatch) {
  return {fireAction: function() {
    dispatch(addQuiz())
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
