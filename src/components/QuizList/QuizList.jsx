import React from 'react';
import DataList from '../DataList/DataList';
import { connect } from 'react-redux';
import { fetchQuizList } from '../../actions/dashboardActions';
import CircularProgress from '@material-ui/core/CircularProgress';

const loadData = props => {
  props.fetchQuizList();
};

class QuizList extends React.Component {
  componentDidMount() {
    loadData(this.props);
  }
  render() {
    console.log(this.props);
    const headers = ['Quiz Name', 'Author', 'Create Date', 'Action'];
    const quizzes = this.props.quizzes;
    const actions = ['Edit', 'Assign'];

    return this.props.isFetchingQuizList ? (
      <CircularProgress />
    ) : (
      <DataList headers={headers} rows={quizzes} actions={actions} />
    );
  }
}

const mapStateToProps = state => ({
  quizzes: state.dashboard.dashboardQuizList,
  isFetchingQuizList: state.dashboard.isFetchingQuizList,
});

export default connect(
  mapStateToProps,
  { fetchQuizList }
)(QuizList);
