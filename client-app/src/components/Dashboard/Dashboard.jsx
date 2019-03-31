import React from 'react';
import Header from '../Header/Header.jsx';
import Welcome from '../Welcome/Welcome';
// import Content from '../Content/Content.jsx';
//import DataList from '../DataList/DataList';
//import dataListData from '../../mockData/DataListData';
import ClassList from '../ClassList/ClassList';
import classListData from '../../mockData/ClassListData.json';

var DashboardStyle = {};

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard" style={DashboardStyle}>
        <Header />
        <div style={ {padding:'50px'} }>
          <Welcome name='Ian'></Welcome>
          <h1>Class List</h1>
          <ClassList data={classListData}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
