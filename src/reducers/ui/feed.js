import {
  ADD_VISIBLE_ITEM_IDS, SET_VISIBLE_ITEM_IDS,
  SET_FEED, DUMP_VISIBLE_ITEM_IDS
} from '../../actions';

const defaultState = {
  visibleItemIds: [],
  currentFeed: 'TOP',
};

export default function feedReducer(state = defaultState, action) {
  switch(action.type) {
    case ADD_VISIBLE_ITEM_IDS:
      return { ...state, visibleItemIds: state.visibleItemIds.concat(action.ids) };
    case SET_VISIBLE_ITEM_IDS:
      return { ...state, visibleItemIds: [...action.ids] };
    case DUMP_VISIBLE_ITEM_IDS:
      return { ...state, visibleItemIds: [] }
    case SET_FEED:
      return { ...state, currentFeed: action.feed };
    default:
      return state;
  }
}