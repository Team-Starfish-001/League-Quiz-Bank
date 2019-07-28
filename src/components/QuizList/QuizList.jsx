import React from 'react';
import DataList from '../DataList/DataList';
// import { displayQuiz } from "../../actions/quizActions";
import { connect } from 'react-redux';
// import store from "../../reducers/index.js";

class QuizList extends React.Component {
  render() {
    const headers = ['Quiz Name', 'Author', 'Create Date', 'Action'];
    const quizzes = this.props.quizzes;
    const actions = ['Edit', 'Assign'];
    // store.dispatch(displayQuiz('["Quiz 4", "John Smith", "11/7/18"]'));

    return <DataList headers={headers} rows={quizzes} actions={actions} />;
  }
}

const mapStateToProps = state => ({
  quizzes: state.dashboard.dashboardQuizList,
});

export default connect(mapStateToProps)(QuizList);
