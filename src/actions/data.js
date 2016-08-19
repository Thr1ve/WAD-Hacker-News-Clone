import { fetchTopStoryIds, fetchItem, fetchItems } from '../config/firebase';
import { addVisibleItemIds } from './ui';

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

export const getTopIds = () => (dispatch, getState) => {
  dispatch(isFetchingList());
  return fetchTopStoryIds().then(ids => {
    dispatch(receiveIds(ids, 'TOP'));
    return Promise.resolve(ids);
  });
};

export const init = () => (dispatch, getState) => {
  // TODO: check route to verify which list to fetch (i.e. 'website.com/top', 'website.com/show', etc.)
  //    - default should be 'TOP'
  // `dispatch(checkUrlRoute());`
  dispatch(getTopIds())
    .then(ids => dispatch(getItems(ids)))
    .then(() => dispatch(addVisibleItemIds(getState().ui.currentFeed)));
};

function objectifyItemArray(arr) {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}
