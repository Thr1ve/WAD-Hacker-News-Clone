import { Map, List } from 'immutable';
import {
  ADD_VISIBLE_ITEM_IDS, SET_VISIBLE_ITEM_IDS,
  SET_FEED, DUMP_VISIBLE_ITEM_IDS
} from '../../actions';

export const defaultState = Map({
  visibleItemIds: List([]),
  currentFeed: 'TOP',
});

export default function feedReducer(state = defaultState, action) {
  switch(action.type) {
    case ADD_VISIBLE_ITEM_IDS:
      return state.update('visibleItemIds', v => v.concat(action.ids))
    case SET_VISIBLE_ITEM_IDS:
      return state.set('visibleItemIds', List(action.ids))
    case DUMP_VISIBLE_ITEM_IDS:
      return state.set('visibleItemIds', List([]));
    case SET_FEED:
      return state.set('currentFeed', action.feed);
    default:
      return state;
  }
}
