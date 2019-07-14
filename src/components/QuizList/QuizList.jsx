import React from 'react';
import DataList from '../DataList/DataList';
import displayData from '../../actions/quizActions';
import store from '../../reducers/index.js';

class QuizList extends React.Component {
  render() {
    const headers = ["Quiz Name", "Author", "Create Date", "Action"];
    const quizzes = this.props.data.quizzes;
    const actions = ["Edit", "Assign"];
    store.dispatch(displayData('["Quiz 4", "John Smith", "11/7/18"]'));

    return (
      <DataList headers={ headers } rows={ quizzes } actions={ actions }/>
    );
  }
}

export default QuizList;
