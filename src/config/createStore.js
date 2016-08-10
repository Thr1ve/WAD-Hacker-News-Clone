import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import mainReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    mainReducer,
    applyMiddleware(thunk)
  );

  return store;
}
