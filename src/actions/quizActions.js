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

export function displayQuiz(quizObject) {
  return {
    type: action.DISPLAY_QUIZ,
    quizObject,
  };
}
