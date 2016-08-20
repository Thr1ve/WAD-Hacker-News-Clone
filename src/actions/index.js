export * from './data';
export * from './ui';

import { getFeedIds, getItems, setVisibleItemIds, dumpVisibleItems } from './';

export const initFeed = (feedName = 'TOP') => (dispatch, getState) => {
  dispatch(dumpVisibleItems());
  // TODO: check route to verify which list to fetch (i.e. 'website.com/top', 'website.com/show', etc.)
  //    - default should be 'TOP'
  // `dispatch(checkUrlRoute());`
  dispatch(getFeedIds(feedName))
  // TODO: Don't add the entirety of the feed's ids to visibleItemIds -- add actions to handle paging or infinite scroll
    .then(ids => dispatch(getItems(ids)))
    .then(() => dispatch(setVisibleItemIds(getState().data.ids[feedName])));
};
