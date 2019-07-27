import * as actions from '../actions/actionConstants';

const initialState = {
  dashboardQuizList: [
    ['Quiz 1', 'John Smith', '10/25/18'],
    ['Quiz 2', 'John Smith', '10/32/18'],
    ['Quiz 3', 'John Smith', '11/7/18'],
    ['Quiz 4', 'John Smith', '11/7/18'],
  ],
};

function dashboard(state = initialState, action) {
  switch (action.type) {
  case actions.SET_QUIZLIST:
    return Object.assign({}, state, { dashboardQuizList: action.payload });
  default:
    return state;
  }
}
export default dashboard;
