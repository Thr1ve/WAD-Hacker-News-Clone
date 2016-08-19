import {
  ADD_VISIBLE_ITEM_IDS, SET_VISIBLE_ITEM_IDS,
  SET_FEED
} from '../actions';

const defaultState = {
  visibleItemIds: [],
  currentFeed: 'TOP'
};

export default function uiReducer(state = defaultState, action) {
  switch(action.type) {
    case ADD_VISIBLE_ITEM_IDS:
      return {
        ...state,
        visibleItemIds: state.visibleItemIds.concat(action.ids)
      };
    case SET_VISIBLE_ITEM_IDS:
      return {
        ...state,
        visibleItemIds: [...action.ids]
      };
    case SET_FEED:
      return {
        ...state,
        currentFeed: action.feed
      };
    default:
      return state;
  }
}
