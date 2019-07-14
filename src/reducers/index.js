import * as actions from '../actions/actionConstants';
// import { createStore } from 'redux';

const initialState = {
  dashboardQuizList: [],
};

function quizReducer(state = initialState, action) {
  switch (action.type) {
  case actions.SET_QUIZLIST: 
    return Object.assign({}, state, { dashboardQuizList: action.payload });
  case actions.DISPLAY_QUIZ:
    return Object.assign({}, state, { dashboardQuizList: action.payload });
  default:
    return state;
  }
}
export default quizReducer;

// const store = createStore(quizReducer, initialState);
