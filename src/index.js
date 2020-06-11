import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {Provider, connect} from "react-redux"

import moduleReducer from './reducers/moduleReducer'
import lessonReducer from "./reducers/lessonReducer";
import topicReducer from './reducers/topicReducer';

import WhiteBoard from './WhiteBoard';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import './WhiteBoard.css';

const reducers = combineReducers({
  moduleReducer, lessonReducer, topicReducer
})
const store = createStore(reducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WhiteBoard/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
