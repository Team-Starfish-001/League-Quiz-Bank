import React from 'react';
import Header from '../Header/Header.jsx';
import Welcome from '../Welcome/Welcome';

var DashboardStyle = {};

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard" style={DashboardStyle}>
        <Header />
        <Welcome name='Ian'></Welcome>
        {/* <Content data={this.props.data}/> */}
      </div>
    );
  }
}

export default Dashboard;
