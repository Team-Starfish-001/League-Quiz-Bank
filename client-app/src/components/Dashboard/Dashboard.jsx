import React from 'react';
import Header from '../Header/Header.jsx';
// import Content from '../Content/Content.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

var DashboardStyle = {};

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard" style={DashboardStyle}>
        <Header />
        <Sidebar />
        {/* <Content data={this.props.data}/> */}
      </div>
    );
  }
}

export default Dashboard;
