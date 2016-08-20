export * from './data';
export * from './ui';

import { getFeedIds } from './data';
import { setFeed, dumpVisibleItemIds, setPage } from './ui';

  // TODO: check route to verify which list to fetch (i.e. 'website.com/top', 'website.com/show', etc.)
  //    - default should be 'TOP'
  // `dispatch(checkUrlRoute());`
  // TODO: add actions for infinite scroll

export const initFeed = (feedName = 'TOP') => (dispatch, getState) => {
  // set the new feed
  dispatch(setFeed(feedName));
  // remove the currently displayed items
  dispatch(dumpVisibleItemIds());
  // get the ids for the new feed, then reset to first page
  dispatch(getFeedIds(feedName)).then(ids => dispatch(setPage(1)));
};
