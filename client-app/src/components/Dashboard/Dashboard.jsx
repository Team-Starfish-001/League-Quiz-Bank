import React from 'react';
import Header from '../Header/Header.jsx';
import Welcome from '../Welcome/Welcome';
// import Content from '../Content/Content.jsx';
import DataList from '../DataList/DataList';
import dataListData from '../../mockData/DataListData';

var DashboardStyle = {};

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard" style={DashboardStyle}>
        <Header />
        <Welcome name='Ian'></Welcome>
        <DataList data={dataListData} />
      </div>
    );
  }
}

export default Dashboard;
