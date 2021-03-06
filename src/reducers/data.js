import { Map, List } from 'immutable';
import {
  IS_FETCHING_LIST, RECEIVE_IDS,
  RECEIVE_ITEM, RECEIVE_ITEMS
} from '../actions';

export const defaultState = Map({
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
      return state.mergeIn(['cachedItems'], action.items);
    default:
      return state;
  }
}

export const getFeedIds = (state, id) => state.getIn(['ids', id]);

// NOTE: this is probably overcomplicating things, but it's a fun use of decorator pattern
const fromDataCache = fn => (state, ...args) => fn(state.data.get('cachedItems'), ...args);

export const _getAllKnownDescendants = (state, id) => {
  if (state.get(id) === undefined || state.get(id).kids === undefined) {
    return [];
  }
  return [
    ...state.get(id).kids,
    ...state.get(id).kids.reduce((prev, cur) => [ ...prev, ..._getAllKnownDescendants(state, cur)], [])
  ];
};

export const _getKids = (state, id) => {
  if (state.get(id) === undefined || state.get(id).kids === undefined) {
    return [];
  }
  return [ ...state.get(id).kids ];
};

export const _getCachedItem = (state, id) => {
  return state.get(id) || state.get(Number(id)) || Map({});
};

export const getAllKnownDescendants = fromDataCache(_getAllKnownDescendants);
export const getKids = fromDataCache(_getKids);
export const getCachedItem = fromDataCache(_getCachedItem);
