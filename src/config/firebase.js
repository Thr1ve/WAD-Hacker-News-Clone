// referenced https://github.com/insin/react-hn/blob/master/src/services/HNService.js

import Firebase from 'firebase';

const api = new Firebase('https://hacker-news.firebaseio.com/v0');

export const _api = api;

const getItemRef = id => api.child(`item/${id}`);

const fetchItem = id => getItemRef(id)
  .once('value')
  .then(snapshot => Promise.resolve(snapshot.val()));

const fetchTopStoryIds = api.child('topstories')
  .once('value')
  .then(snapshot => Promise.resolve(snapshot.val()));

export const fetchTopStories = fetchTopStoryIds
  .then(ids => ids.map(id => fetchItem(id)))
  .then(items => Promise.all(items));



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
