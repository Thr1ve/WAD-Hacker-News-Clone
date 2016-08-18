import { createStore, applyMiddleware, compose } from 'redux';
import addListeners from './addListeners';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import mainReducer from '../reducers';

const doNotLog = [
  'RECEIVE_ITEM'
];

const logger = createLogger({
  collapsed: true,
  predicate: function(getState, action) {
    if (doNotLog.some(actionName => action.type === actionName)) {
      return false;
    }
    return true;
  }
});

export default function configureStore(initialState) {
  const store = createStore(
    mainReducer,
    compose(
      applyMiddleware(thunk, logger),
      // This line simply enables the redux dev-tools chrome extension for our app
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  addListeners(store);

  return store;
}
