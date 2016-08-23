import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../reducers';

let middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = require('./configureLogger').default;
  middlewares = [...middlewares, logger];
}

export default function configureStore(initialState) {
  const store = createStore(
    mainReducer,
    compose(
      applyMiddleware(...middlewares),
      // This line simply enables the redux dev-tools chrome extension for our app
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // TODO: add listeners that subsribe to HN-Firebase API and receive change events?

  return store;
}
