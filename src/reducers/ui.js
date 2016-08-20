import {
  ADD_VISIBLE_ITEM_IDS, SET_VISIBLE_ITEM_IDS,
  SET_FEED, DUMP_VISIBLE_ITEM_IDS,
  SET_CURRENT_PAGE
} from '../actions';

const defaultState = {
  visibleItemIds: [],
  currentFeed: 'TOP',
  currentPage: 1
};

export default function uiReducer(state = defaultState, action) {
  switch(action.type) {
    case ADD_VISIBLE_ITEM_IDS:
      return { ...state, visibleItemIds: state.visibleItemIds.concat(action.ids) };
    case SET_VISIBLE_ITEM_IDS:
      return { ...state, visibleItemIds: [...action.ids] };
    case DUMP_VISIBLE_ITEM_IDS:
      return { ...state, visibleItemIds: [] }
    case SET_FEED:
      return { ...state, currentFeed: action.feed };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.n };
    default:
      return state;
  }
}
