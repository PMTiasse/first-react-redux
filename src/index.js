import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorsActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //bootstrap-theme.min.css
import '../node_modules/toastr/build/toastr.min.css';

const store =
  configureStore(/*initialState which would override the initial state of the reducer. */);
//  initialState good for server-rendered app. InitialState would come from the server or local storage.

store.dispatch(loadAuthors());
store.dispatch(loadCourses());

//  Provider makes the store available to all the components of the app
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
