import { getNeededVisibleItems } from './data';
import { getPageIds } from '../reducers';

export const ADD_VISIBLE_ITEM_IDS  = 'ADD_VISIBLE_ITEM_IDS';
export const addVisibleItemIds = ids => ({ type: ADD_VISIBLE_ITEM_IDS, ids });

export const SET_VISIBLE_ITEM_IDS  = 'SET_VISIBLE_ITEM_IDS';
export const setVisibleItemIds = ids => ({ type: SET_VISIBLE_ITEM_IDS, ids });

export const DUMP_VISIBLE_ITEM_IDS = 'DUMP_VISIBLE_ITEM_IDS';
export const dumpVisibleItemIds = () => ({ type: DUMP_VISIBLE_ITEM_IDS });

export const SET_FEED = 'SET_FEED';
export const setFeed = feed => ({ type: SET_FEED, feed });

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const setCurrentPage = n => ({ type: SET_CURRENT_PAGE, n });

export const setPage = n => (dispatch, getState) => {
    const state = getState();
  // TODO: check if n is greater than our max number of pages
  if (n > 0) {
    dispatch(setCurrentPage(n));
    dispatch(setVisibleItemIds(getPageIds(state, n)));
    return dispatch(getNeededVisibleItems());
  }
};

export const nextPage = () => (dispatch, getState) =>
  dispatch(setPage(getState().ui.currentPage + 1));

export const previousPage = () => (dispatch, getState) =>
  dispatch(setPage(getState().ui.currentPage - 1));
