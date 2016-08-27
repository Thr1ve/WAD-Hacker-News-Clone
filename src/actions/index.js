export * from './data';
export * from './ui';

import { getFeedIds } from './data';
import { setFeed, dumpVisibleItemIds, setPage } from './ui';

// TODO: add actions for infinite scroll

// TODO: Redundant...remove...
const feeds = {
  'best': 'BEST',
  'top': 'TOP',
  'new': 'NEW',
  'ask': 'ASK',
  'show': 'SHOW',
  'job': 'JOB'
};

export const initFeed = (feedName = 'TOP') => (dispatch, getState) => {
  const feed = feeds[feedName];
  if (feed === undefined) {
    // redirect to TOP
    console.log('UNKNOWN FEED');
  }
  // set the new feed
  dispatch(setFeed(feed));
  // remove the currently displayed items
  dispatch(dumpVisibleItemIds());
  // get the ids for the new feed, then reset to first page
  dispatch(getFeedIds(feed)).then(ids => dispatch(setPage(1)));
};
