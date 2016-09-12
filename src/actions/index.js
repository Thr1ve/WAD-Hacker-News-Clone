import { getFeedIds, receiveItems } from './data';
import { setFeed, dumpVisibleItemIds, setPage, setLoadingThread } from './ui';
import { fetchThreadTree } from '../lib';

export * from './data';
export * from './ui';

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
  dispatch(setLoadingThread(true));
  fetchThreadTree(id).then(items => {
    dispatch(receiveItems(items));
    dispatch(setLoadingThread(false));
  });
};
