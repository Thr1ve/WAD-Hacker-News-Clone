import {
  IS_FETCHING_LIST, RECEIVE_IDS,
  RECEIVE_ITEM, RECEIVE_ITEMS
} from '../actions';

const defaultState = {
  ids: {
    NEW: [], TOP: [], BEST: [],
    ASK: [], SHOW: [], JOB: []
  },
  cachedItems: {},
  loading: false
};

export default function dataReducer(state = defaultState, action) {
  switch(action.type) {
    case IS_FETCHING_LIST:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_IDS:
      return {
        ...state,
        ids: {
          ...state.ids,
          [action.key]: action.ids
        },
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
    case RECEIVE_ITEMS:
      return {
        ...state,
        cachedItems: {
          ...state.cachedItems,
          ...action.items
        }
      };
    default:
      return state;
  }
}
