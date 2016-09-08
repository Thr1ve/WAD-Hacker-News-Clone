export * from './data';
export * from './ui';

import { getFeedIds, getNeededItems, getChildrenRecurse } from './data';
import { setFeed, dumpVisibleItemIds, setPage } from './ui';
import { getKids } from '../reducers';

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

export const initFeed = (feedName = 'TOP', pageNumber = 1) => (dispatch, getState) => {
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
  dispatch(getFeedIds(feed)).then(ids => dispatch(setPage(pageNumber)));
};

export const initThreadRoot = id => (dispatch, getState) => {
  console.log('init thread root');
  // Make sure we have the item
  dispatch(getNeededItems([id]))
    // get the item's kids
    // NOTE: what if getNeededItems always returned all the items including the ones we already had?
    // NOTE: compare current performance to getting all ids at once with getChildrenRecurse in actions/data.js --- It chokes on id 12393032 (246 comments currently)
    .then(() => dispatch(getNeededItems(getKids(getState(), id))))
      // and add them to our ui state
};

export const initThread = id => (dispatch, getState) => {
  console.log('init thread');
  // Make sure we have the item
  dispatch(getNeededItems([id]))
    // get the item's kids
    .then(() => dispatch(getNeededItems(getKids(getState(), id))))
      // and add them to our ui state
}
