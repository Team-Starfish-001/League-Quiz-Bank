import {createStore} from 'redux';
import quizReducer from './reducers/index.js';

const store = createStore(quizReducer);
export default store;
