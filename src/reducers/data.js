import { IS_FETCHING, RECEIVE_POSTS } from '../actions';

const defaultState = {
  posts: [],
  loading: false
};

export default function dataReducer(state = defaultState, action) {
  switch(action.type) {
    case IS_FETCHING:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: [...action.posts],
        loading: false
      };
    default:
      return state;
  }
}
