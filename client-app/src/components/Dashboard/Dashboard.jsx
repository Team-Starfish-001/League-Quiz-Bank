import  React from 'react';
import Header from '../Header/Header.jsx';
import Content from '../Content/Content.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import DataList from '../DataList/DataList';
import { dummyData } from '../../mockData/DataListData';

var DashboardStyle = {

}

class Dashboard extends React.Component {
  render(){
    return(
      <div className='dashboard' style={ DashboardStyle }>
        <Header/>
        <Sidebar />
        <Content data={ this.props.data }/>
        <DataList data={ dummyData }/>
      </div>
    );
   }
}

export default Dashboard;
