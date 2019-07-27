import * as actionTypes from '../actions/actionConstants';

/*      DEFAULT QUESTION: {
            id: 0,
            questionType: "single",
            question: "",
            answers:[],
            options:[]
        }
*/

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
