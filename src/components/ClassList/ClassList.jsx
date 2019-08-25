import React from 'react';
import DataList from '../DataList/DataList';

class ClassList extends React.Component {
  render() {
    const headers = ['Class Name', 'Start Date', 'Class Day', 'Action'];
    const classes = this.props.data.classes;
    const actions = ['Edit', 'Assign'];

    return (
      <DataList headers={ headers } rows={ classes } actions={ actions }/>
    );
  }
}

export default ClassList;
