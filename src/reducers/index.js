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

export * from './data';
export * from './ui';
