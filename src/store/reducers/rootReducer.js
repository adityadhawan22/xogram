import authReducer from './authReducer';
import feedReducer from './feedReducer';
import postReducer from './postReducer';
import profileReducer from './profileReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth: authReducer,
	feed: feedReducer,
	profile: profileReducer,
	post: postReducer
});

export default rootReducer;