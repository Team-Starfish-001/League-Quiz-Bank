import * as action from './actionConstants';

// export function addQuiz(name) {
//   return {
//     type: action.ADD_QUIZ,
//     name,
//   };
// }

export function displayQuiz(questionArray) {
  return {
    type: action.SAVE_QUIZ,
    questionArray,
  };
}

// I think maybe change this to add a single question, then also create editQuestion actions
export function setQuizTitle(title) {
  return { type: action.SET_TITLE, title };
}

export function setQuizDescription(description) {
  return { type: action.SET_DESCRIPTION, description };
}

export function setQuizLevel(level) {
  return { type: action.SET_LEVEL, level };
}

export function setQuizClass(quizClass) {
  return { type: action.SET_QUIZ_CLASS, quizClass };
}

export function addQuestion(newQuestion) {
  return {
    type: action.ADD_QUESTION,
    newQuestion,
  };
}

export function updateQuestion(updatedQuestion, questionIndex) {
  return {
    type: action.UPDATE_QUESTION,
    updatedQuestion,
    questionIndex,
  };
}

export function removeQuestion(questionIndex) {
  return {
    type: action.REMOVE_QUESTION,
    questionIndex,
  };
}

export function saveQuiz(quiz) {
  return {
    type: action.SAVE_QUIZ,
    quiz,
  };
}
