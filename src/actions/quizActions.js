import * as action from './actionConstants';

// export function addQuiz(name) {
//   return {
//     type: action.ADD_QUIZ,
//     name,
//   };
// }

// I think maybe change this to add a single question, then also create editQuestion actions
export function addQuestions(questionArray) {
  return {
    type: action.ADD_QUESTIONS,
    questionArray,
  };
}

export function setQuizTitle(title) {
  return { type: action.SET_TITLE, title };
}
