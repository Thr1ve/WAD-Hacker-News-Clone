import 'bulma/css/bulma.css';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, hashHistory } from 'react-router';
import Root from './Root';

import createStore from './config/createStore';

const store = createStore();

ReactDOM.render(
  <Root store={store} history={hashHistory}/>,
  document.getElementById('root')
);
