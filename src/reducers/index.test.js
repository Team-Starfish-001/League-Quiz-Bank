import * as actions from '../actions/actionConstants';
import reducer from './index.js';
// import { SINGLE_SELECT_QUESTION, TRUE, FALSE } from '../constants';
import deepFreeze from 'deep-freeze';
import deepEqual from 'deep-equal';

// const myQuizQuestions = [
//   {
//     type: 'single select',
//     options: ['blah', 'blah', 'blah'],
//     answers: [1],
//     freeTextAnswer: null,
//   },
//   {
//     type: 'multi select',
//     options: ['blah', 'blah', 'blah'],
//     answers: [1, 2],
//     freeTextAnswer: null,
//   },
//   {
//     type: 'free text',
//     options: [],
//     answers: [],
//     freeTextAnswer: 'answer',
//   },
// ];

describe('quiz reducer', () => {
  // it('should create a quiz', () => {
  //   const addQuizAction = {
  //     type: actions.ADD_QUIZ,
  //     payload: {
  //       name: 'test quiz',
  //       questions: [
  //         {
  //           type: SINGLE_SELECT_QUESTION,
  //           options: [TRUE, FALSE],
  //           answers: [0],
  //         },
  //       ],
  //     },
  //   };
  //   const newState = reducer(undefined, addQuizAction);
  //   console.log(newState);
  //   expect(newState.quizList.length).toEqual(1);
  //   expect(newState.quizList[0].name).toEqual('test quiz');
  // });

  test.skip('adds quiz list list to redux', () => {
    const initialState = {
      dashboardQuizList: [],
    };
    const newState = {
      dashboardQuizList: [
        {
          name: 'Quiz 1',
          author: 'Joe Blow',
          dateCreated: '11/21/2018',
        },
      ],
    };
    deepFreeze(initialState);
    const setQuizListAction = {
      type: actions.SET_QUIZLIST,
      payload: [
        {
          name: 'Quiz 1',
          author: 'Joe Blow',
          dateCreated: '11/21/2018',
        },
      ],
    };
    const actualNewState = reducer(initialState, setQuizListAction);
    expect(deepEqual(actualNewState, newState)).toEqual(true);
  });
});
