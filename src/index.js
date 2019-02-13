import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Feed from './components/Feed/Feed';
import Post from './components/Post/Post';
import Create from './components/Create/Create';
import Profile from './components/Profile/Profile';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Redux Store
const store = createStore(rootReducer, 
	composeEnhancers(
		applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
		reduxFirestore(firebaseConfig),
		reactReduxFirebase(firebaseConfig)
	),

);

ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter>
	<Switch>
		<Route exact path="/" component={Feed} />
		<Route exact path="/create" component={Create} />
		<Route exact path="/:uid" component={Profile} />
		<Route exact path="/post/:pid" component={Post} />
	</Switch>
	</BrowserRouter>
	</Provider>
	,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
