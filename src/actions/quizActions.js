import * as action from './actionConstants';

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

export function addQuestion() {
  return {
    type: action.ADD_QUESTION,
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

export function updateQuestionPrompt(prompt, questionIndex) {
  return {
    type: action.UPDATE_PROMPT,
    prompt,
    questionIndex,
  };
}

export function updateOptionText(optionText, optionIndex, questionIndex) {
  return {
    type: action.UPDATE_OPTION_TEXT,
    optionText,
    optionIndex,
    questionIndex,
  };
}

export function addOption(questionIndex) {
  return {
    type: action.ADD_OPTION,
    questionIndex,
  };
}

export function removeQuestionOption(optionIndex, questionIndex) {
  return {
    type: action.REMOVE_OPTION,
    optionIndex,
    questionIndex,
  };
}

export function toggleQuestionOptionAsAnswer(optionIndex, questionIndex) {
  return {
    type: action.TOGGLE_OPTION_AS_ANSWER,
    optionIndex,
    questionIndex,
  };
}
