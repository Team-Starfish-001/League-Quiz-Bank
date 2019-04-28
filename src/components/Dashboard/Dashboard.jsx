import React from 'react';
import Welcome from '../Welcome/Welcome';
// import Content from '../Content/Content.jsx';
//import DataList from '../DataList/DataList';
//import dataListData from '../../mockData/DataListData';
import ClassList from '../ClassList/ClassList';
import classListData from '../../mockData/ClassListData.json';
import QuizList from '../QuizList/QuizList';
import quizListData from '../../mockData/QuizListData.json';

var DashboardStyle = {};

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard" style={DashboardStyle}>
        <div style={ {padding:'50px'} }>
          <Welcome name='Ian'></Welcome>
          <h1>Classes:</h1>
          <ClassList data={classListData}/>
          <h1>Quizzes:</h1>
          <QuizList data={quizListData}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
