import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import quizReducer from './reducers/index.js';

const store = createStore(quizReducer, applyMiddleware(thunk));
export default store;
