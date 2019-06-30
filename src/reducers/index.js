import * as actions from '../actions/actionConstants';
const initialState = {
  quizList: [],
};

function quizReducer(state = initialState, action) {
  switch (action.type) {
  case actions.ADD_QUIZ: {
    const newQuizList = [...state.quizList, action.payload];
    return Object.assign({}, state, { quizList: newQuizList });
  }
  default:
    return state;
  }
}
export default quizReducer;
