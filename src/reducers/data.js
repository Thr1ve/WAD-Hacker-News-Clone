// import { } from '../actions';

const defaultState = {
  foo: 'bar'
};

export default function dataReducer(state = defaultState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
