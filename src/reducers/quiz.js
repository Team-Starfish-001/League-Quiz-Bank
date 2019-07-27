import * as actionTypes from '../actions/actionConstants';
// import { updateObject, updateItemInArray } from './utils';

const initialState = {
  title: '',
  description: '',
  quizClass: '',
  level: '',
  questions: [],
};

function quiz(state = initialState, action) {
  switch (action.type) {
  case actionTypes.SET_TITLE:
    return { ...state, title: action.title };

  default:
    return state;
  }
}

export default quiz;
