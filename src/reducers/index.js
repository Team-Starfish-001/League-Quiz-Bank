import * as actions from '../actions/actionConstants'
const initialState = {
  quizList: [],
}

function quizReducer(state = initialState, action) {
  switch (action.type) {
  case actions.ADD_QUIZ: {
    const myNewQuiz = {
      name: action.name,
      questions: [],
    }
    const newQuizList = [...state.quizList];
    newQuizList.push(myNewQuiz);
    return Object.assign({}, state, {quizList: newQuizList});
  } 

  default: return state
  }
}
export default quizReducer;