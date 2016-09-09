import { Map, List } from 'immutable';
import {
  IS_FETCHING_LIST, RECEIVE_IDS,
  RECEIVE_ITEM, RECEIVE_ITEMS
} from '../actions';

const defaultState = Map({
  ids: Map({
    NEW: List([]), TOP: List([]), BEST: List([]),
    ASK: List([]), SHOW: List([]), JOB: List([])
  }),
  cachedItems: Map({}),
  loading: false
});

export default function dataReducer(state = defaultState, action) {
  switch(action.type) {
    case IS_FETCHING_LIST:
      return state.set('loading', true);
    case RECEIVE_IDS:
      return state
        .set('loading', false)
        .setIn(['ids', action.key], List(action.ids))
    case RECEIVE_ITEM:
      return state.setIn(['cachedItems', action.id], action.item)
    case RECEIVE_ITEMS:
      return state.update('cachedItems', v => v.merge(Map(action.items)));
    default:
      return state;
  }
}

export const getFeedIds = (state, id) => state.getIn(['ids', id]);
