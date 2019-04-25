import React from 'react';
import DataList from '../DataList/DataList';

class QuizList extends React.Component {
  render() {
    const headers = ["Quiz Name", "Author", "Create Date", "Action"];
    const quizzes = this.props.data.quizzes;
    const actions = ["Edit", "Assign"];

    return (
      <DataList headers={ headers } rows={ quizzes } actions={ actions }/>
    )
  }
}

export default QuizList;
