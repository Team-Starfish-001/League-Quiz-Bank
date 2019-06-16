import * as actions from '../actions/actionConstants';
import reducer from './index.js';
import { SINGLE_SELECT_QUESTION, TRUE, FALSE } from '../constants';

const myQuizQuestions = [
  {
    type: 'single select',
    options: ['blah', 'blah', 'blah'],
    answers: [1],
    freeTextAnswer: null
  },
  {
    type: 'multi select',
    options: ['blah', 'blah', 'blah'],
    answers: [1, 2],
    freeTextAnswer: null
  },
  {
    type: 'free text',
    options: [],
    answers: [],
    freeTextAnswer: 'answer'
  }
];

describe('quiz reducer', () => {
  it('should create a quiz', () => {
    const addQuizAction = {
      type: actions.ADD_QUIZ,
      name: 'test quiz'
    };
    const newState = reducer(undefined, addQuizAction);
    console.log(newState);
    expect(newState.quizList.length).toEqual(1);
    expect(newState.quizList[0].name).toEqual('test quiz');
  });

  it('adds another quiz to the list', () => {
    const initialState = {
      quizList: []
    };
    const newState = {
      quizList: [
        {
          name: 'Quiz 1',
          questions: [
            {
              type: SINGLE_SELECT_QUESTION,
              options: [TRUE, FALSE],
              answers: [0]
            }
          ]
        }
      ]
    };
  });
});
