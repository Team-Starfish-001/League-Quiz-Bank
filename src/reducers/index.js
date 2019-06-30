import * as actions from '../actions/actionConstants';
const initialState = {
  dashboardQuizList: [],
};

function quizReducer(state = initialState, action) {
  switch (action.type) {
  case actions.SET_QUIZLIST: {
    return Object.assign({}, state, { dashboardQuizList: action.payload });
  }
  default:
    return state;
  }
}
export default quizReducer;
