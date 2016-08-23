import { combineReducers } from 'redux';

import data, { getFeedIds } from './data';
import ui from './ui';

const PAGE_SIZE = 8;

export default combineReducers({ data, ui });

export const getLastPage = state =>
  getFeedIds(state.data, state.ui.currentFeed).length / Math.ceil(PAGE_SIZE);

export const getPageIds = (state, n) => getFeedIds(state.data, state.ui.currentFeed)
  .slice((n - 1) * PAGE_SIZE, (n - 1) * PAGE_SIZE + PAGE_SIZE);
