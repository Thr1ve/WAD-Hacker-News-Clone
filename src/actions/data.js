import { addVisibleItemIds } from './ui';

import {
  objectifyItemArray,
  fetchFeedIds, fetchItem, fetchItems
} from '../lib';

export const IS_FETCHING_LIST = 'IS_FETCHING_LIST';
export const isFetchingList = () => ({ type: IS_FETCHING_LIST });

export const RECEIVE_IDS = 'RECEIVE_IDS';
export const receiveIds = (ids, key) => ({ type: RECEIVE_IDS, ids, key });

export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const receiveItem = (id, item) => ({ type: RECEIVE_ITEM, id, item });

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const receiveItems = items => ({ type: RECEIVE_ITEMS, items });

// This may seem a little redundant, but I'd like to keep the
// firebase API as separate as possible from this logic
export const getItem = id => (dispatch, getState) => {
  fetchItem(id).then(item => {
    dispatch(receiveItem(id, item));
  });
};

export const getItems = ids => (dispatch, getState) => {
  return fetchItems(ids).then(items => {
    dispatch(receiveItems(objectifyItemArray(items)))
    return Promise.resolve();
  });
};

export const getFeedIds = (feed = 'TOP') => (dispatch, getState) => {
  dispatch(isFetchingList());
  return fetchFeedIds(feed).then(ids => {
    dispatch(receiveIds(ids, feed));
    return Promise.resolve(ids);
  });
};
