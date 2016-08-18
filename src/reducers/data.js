import { IS_FETCHING, RECEIVE_IDS, RECEIVE_ITEM } from '../actions';

const defaultState = {
  topIds: [],
  cachedItems: {},
  loading: false
};

export default function dataReducer(state = defaultState, action) {
  switch(action.type) {
    case IS_FETCHING:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_IDS:
      return {
        ...state,
        topIds: [...action.ids],
        loading: false
      };
    case RECEIVE_ITEM:
      return {
        ...state,
        cachedItems: {
          ...state.cachedItems,
          [action.id]: action.item
        }
      };
    default:
      return state;
  }
}
