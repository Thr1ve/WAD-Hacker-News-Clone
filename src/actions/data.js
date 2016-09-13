import { fetchFeedIds, fetchItemsAsMap } from '../lib';

export const IS_FETCHING_LIST = 'IS_FETCHING_LIST';
export const isFetchingList = () => ({ type: IS_FETCHING_LIST });

export const RECEIVE_IDS = 'RECEIVE_IDS';
export const receiveIds = (ids, key) => ({ type: RECEIVE_IDS, ids, key });

export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const receiveItem = (id, item) => ({ type: RECEIVE_ITEM, id, item });

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const receiveItems = items => ({ type: RECEIVE_ITEMS, items });

export const getItems = ids => (dispatch, getState) => {
  return fetchItemsAsMap(ids)
    .then(items => {
      dispatch(receiveItems(items))
      return Promise.resolve(items);
    });
};

export const getNeededItems = ids => (dispatch, getState) => {
  const cachedItems = getState().data.get('cachedItems');
  const neededItems = ids.filter(id => !cachedItems.get(id));
  if (neededItems.length > 0 || neededItems.size > 0) {
  // ^ handle normal array or immutablejs List ^
    return dispatch(getItems(neededItems));
  }
  return Promise.resolve([]);
};

export const getNeededVisibleItems = () => (dispatch, getState) => {
  const visibleItemIds = getState().ui.feed.get('visibleItemIds');
  return dispatch(getNeededItems(visibleItemIds));
}

export const getFeedIds = (feed = 'TOP') => (dispatch, getState) => {
  dispatch(isFetchingList());
  return fetchFeedIds(feed).then(ids => {
    dispatch(receiveIds(ids, feed));
    return Promise.resolve(ids);
  });
};
