import { createStore, applyMiddleware } from 'redux';
import addListeners from './addListeners';
import thunk from 'redux-thunk'
import mainReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    mainReducer,
    applyMiddleware(thunk)
  );

  addListeners(store);

  return store;
}
