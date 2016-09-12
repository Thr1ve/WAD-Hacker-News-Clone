import { Map } from 'immutable';
import { combineReducers } from 'redux';

import data, { getFeedIds } from './data';
import ui from './ui';

// TODO: this should be part of the state; adjust depending on screen size
const PAGE_SIZE = 8;

// TODO: use custom combineReducers to make entire state tree immutable
export default combineReducers({ data, ui });

// TODO: Should these be in reducers/ui/feed?
export const getLastPage = state =>
  Math.ceil(getFeedIds(state.data, state.ui.feed.get('currentFeed')).size / PAGE_SIZE);

export const getPageIds = (state, n) => getFeedIds(state.data, state.ui.feed.get('currentFeed'))
  .slice((n - 1) * PAGE_SIZE, (n - 1) * PAGE_SIZE + PAGE_SIZE);

// TODO: Should these be in reducers/data?
// NOTE: this is probably overcomplicating things, but is a fun use of decorator pattern
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
}

export const getAllKnownDescendants = fromDataCache(_getAllKnownDescendants);
export const getKids = fromDataCache(_getKids);
export const getCachedItem = fromDataCache(_getCachedItem);
