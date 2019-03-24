import React from 'react';
import Header from '../Header/Header.jsx';
// import Content from '../Content/Content.jsx';
import DataList from '../DataList/DataList';
import dataListData from '../../mockData/DataListData';

var DashboardStyle = {};

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard' style={DashboardStyle}>
        <Header />\
        <DataList data={dataListData} />
        {/* <Content data={this.props.data}/> */}
      </div>
    );
  }
}

export default Dashboard;
