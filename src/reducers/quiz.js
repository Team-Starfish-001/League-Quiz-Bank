import * as actionTypes from '../actions/actionConstants';
const axios = require('axios');

// import { updateObject, updateItemInArray } from './utils';

const initialOption = { text: '', isAnswer: false };

const initialQuestionState = {
  prompt: '',
  options: [initialOption],
};

const initialState = {
  title: '',
  description: '',
  quizClass: '',
  level: '',
  questions: [initialQuestionState],
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
    return { ...state, questions: [...state.questions, initialQuestionState] };
  case actionTypes.UPDATE_PROMPT:
  case actionTypes.UPDATE_OPTION_TEXT:
  case actionTypes.ADD_OPTION:
  case actionTypes.REMOVE_OPTION:
  case actionTypes.TOGGLE_OPTION_AS_ANSWER:
    return {
      ...state,
      questions: [
        ...state.questions.slice(0, action.questionIndex),
        questionReducer(state.questions[action.questionIndex], action),
        ...state.questions.slice(action.questionIndex + 1, state.questions.length),
      ],
    };
  case actionTypes.REMOVE_QUESTION:
    return { ...state, questions: [...state.questions.slice(0, action.questionIndex).concat(...state.questions.slice(action.questionIndex+ 1))] };
  case actionTypes.SAVE_QUIZ:
    axios.post('http://localhost:8080/getQuiz', {
      state,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    return state;
  default:
    return state;
  }
}

const questionReducer = (questionState = initialQuestionState, action) => {
  switch (action.type) {
  case actionTypes.UPDATE_PROMPT:
    return { ...questionState, prompt: action.prompt };
  case actionTypes.UPDATE_OPTION_TEXT:
    return {
      ...questionState,
      options: [
        ...questionState.options.slice(0, action.optionIndex),
        { ...questionState[action.optionIndex], text: action.optionText },
        ...questionState.options.slice(action.optionIndex + 1, questionState.options.length),
      ],
    };
  case actionTypes.ADD_OPTION:
    return { ...questionState, options: [...questionState.options, initialOption] };
  case actionTypes.REMOVE_OPTION: {
    return {
      ...questionState,
      options: [...questionState.options.slice(0, action.optionIndex).concat(...questionState.options.slice(action.optionIndex+ 1))],
    };
  }
  case actionTypes.TOGGLE_OPTION_AS_ANSWER: {
    return {
      ...questionState,
      options: [
        ...questionState.options.slice(0, action.optionIndex),
        {
          ...questionState[action.optionIndex],
          isAnswer: !questionState[action.optionIndex].isAnswer,
        },
        ...questionState.options.slice(action.optionIndex + 1, questionState.options.length),
      ],
    };
  }
  default:
    return questionState;
  }
};

export default quiz;
