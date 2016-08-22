// referenced https://github.com/insin/react-hn/blob/master/src/services/HNService.js

import Firebase from 'firebase';

const FEEDNAMES = {
  NEW: 'newstories',
  TOP: 'topstories',
  BEST: 'beststories',
  ASK: 'askstories',
  SHOW: 'showstories',
  JOB: 'jobstories'
}

const api = new Firebase('https://hacker-news.firebaseio.com/v0');

const getItemRef = id => api.child(`item/${id}`);

export const fetchItem = id => getItemRef(id)
  .once('value')
  .then(snapshot => Promise.resolve(snapshot.val()));

export const fetchItems = ids => Promise.all(ids.map(id => fetchItem(id)));

export const fetchFeedIds = (feed = 'TOP') => api.child(FEEDNAMES[feed] || 'TOP')
  .once('value')
  .then(snapshot => Promise.resolve(snapshot.val()));

// NOTE: currently unused
export const fetchFeedItems = feed => fetchFeedIds(feed).then(ids => fetchItems(ids));

// The new Firebase API (3.5) requires an apiKey; since there's no way to
// get one for the public HN API that I've been able to find, we're
// simply using an older version of firebase (2.4.2)

// Structure using new API:
// const config = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   storageBucket: ""
// };
//
//  const api = firebase.initializeApp(config);