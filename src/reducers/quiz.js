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
  case actionTypes.SET_DESCRIPTION:
    return { ...state, description: action.description };
  case actionTypes.SET_LEVEL:
    return { ...state, level: action.level };
  case actionTypes.SET_QUIZ_CLASS:
    return { ...state, quizClass: action.quizClass };
  case actionTypes.DISPLAY_QUIZ:
    return { ...state, questions: action.questions };
  case actionTypes.ADD_QUESTION:
    return { ...state, questions: [...state.questions, action.newQuestion] };
  case actionTypes.UPDATE_QUESTION:
    return {
      ...state,
      questions: [
        ...state.questions.slice(0, action.questionIndex),
        action.updatedQuestion,
        ...state.questions.slice(action.questionIndex + 1, state.questions.length),
      ],
    };
  case actionTypes.REMOVE_QUESTION:
    return { ...state, questions: [...state.questions.splice(action.questionIndex, 1)] };
  case actionTypes.SAVE_QUIZ:
    console.log(state);
    return state;
  default:
    return state;
  }
}

export default quiz;
