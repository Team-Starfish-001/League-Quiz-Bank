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

export function setQuizDesc(desc) {
  return { type: action.SET_DESC, desc };
}

export function setQuizLevel(lvl) {
  return { type: action.SET_LEVEL, lvl };
}

export function setQuizClass(class_) {
  return { type: action.SET_QUIZ_CLASS, class_ };
}

export function addQuestion(newQuestion) {
  return {
    type: action.ADD_QUESTION,
    newQuestion,
  };
}

export function updateQuestion(updatedQuestion, index) {
  return {
    type: action.UPDATE_QUESTION,
    updatedQuestion,
    index,
  };
}

export function rmQuestion(index) {
  return {
    type: action.REMOVE_QUESTION,
    index,
  };
}

export function saveQuiz(quiz) {
  return {
    type: action.SAVE_QUIZ,
    quiz,
  };
}
