// import * as actionTypes from '../actions/actionConstants';
// import { updateObject, updateItemInArray } from './utils';

const initialQuestionState = {
  questionType: 'single',
  question: 'Why is the sky blue?',
  answers: ['Leprachauns'],
  options: ['Leprachauns', 'Magic', 'Its actually green'],
};

// should we create other initial states for different question
// types that we can use on questionType change?

const question = (state = initialQuestionState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default question;
