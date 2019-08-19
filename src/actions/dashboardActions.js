import * as action from './actionConstants';
const axios = require('axios');

const requestQuizList = () => ({ type: action.REQUEST_QUIZLIST });

export const fetchQuizList = () => dispatch => {
  dispatch(requestQuizList());
  return axios
    .get('http://localhost:8080/getQuizzes')
    .then(function(response) {
      dispatch(setQuizList(response.data.rows));
    })
    .catch(function(error) {
      console.log(error);
    });
};

const setQuizList = quizzes => ({
  type: action.SET_QUIZLIST,
  payload: quizzes,
});
