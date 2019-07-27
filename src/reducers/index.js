import { combineReducers } from 'redux';
import dashboard from './dashboard';
import quiz from './quiz';

export default combineReducers({ dashboard, quiz });
