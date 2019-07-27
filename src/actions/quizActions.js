import * as action from './actionConstants';

// export function addQuiz(name) {
//   return {
//     type: action.ADD_QUIZ,
//     name,
//   };
// }

export function addQuestions(questionArray) {
  return {
    type: action.ADD_QUESTIONS,
    questionArray,
  };
}

export function setQuizTitle(title) {
  return { type: action.SET_TITLE, title };
}
