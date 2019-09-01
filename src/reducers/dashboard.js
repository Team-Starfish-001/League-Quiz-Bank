import * as actions from '../actions/actionConstants';
import { updateObject } from './utils';

const initialState = {
  isFetchingQuizList: true,
  dashboardQuizList: [],
};

function dashboard(state = initialState, action) {
  switch (action.type) {
  case actions.SET_QUIZLIST:
    return updateObject(state, { dashboardQuizList: action.payload, isFetchingQuizList: false });
  case actions.REQUEST_QUIZLIST:
    return updateObject(state, { isFetchingQuizList: true });

  default:
    return state;
  }
}

export default dashboard;
