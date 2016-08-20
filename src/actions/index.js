export * from './data';
export * from './ui';

import { getFeedIds, getNeededItems } from './data';
import { setVisibleItemIds, dumpVisibleItemIds } from './ui';

  // TODO: check route to verify which list to fetch (i.e. 'website.com/top', 'website.com/show', etc.)
  //    - default should be 'TOP'
  // `dispatch(checkUrlRoute());`
  // TODO: add actions to handle paging or infinite scroll

export const initFeed = (feedName = 'TOP') => (dispatch, getState) => {
  // Remove the currently displayed items
  dispatch(dumpVisibleItemIds());
  // get the ids for the new feed
  dispatch(getFeedIds(feedName))
    .then(ids => {
      const firstPage = ids.slice(0, 19)
      // display the items we already have
      dispatch(setVisibleItemIds(firstPage))
      // and then ask for the rest of them
      dispatch(getNeededItems(firstPage))
    })
};
