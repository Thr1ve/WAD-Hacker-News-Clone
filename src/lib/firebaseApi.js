// referenced https://github.com/insin/react-hn/blob/master/src/services/HNService.js

import { Map } from 'immutable';
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

export const fetchFeedIds = (feed = 'TOP') => api.child(FEEDNAMES[feed] || 'TOP')
  .once('value')
  .then(snapshot => Promise.resolve(snapshot.val()));

// is using withMutations faster than just using a normal object and calling .fromJS at the end?
export const fetchItemsAsMap = ids => {
  let pending = Map({});
  return Promise.all(ids.map(id => {
    return fetchItem(id).then(item => {
      pending = pending.withMutations(v => v.set(Number(id), Map(item)));
    });
  })).then(() => pending.asImmutable());
};

export const fetchThreadTree = id => {
  let pending = Map({});
  function recurse(id) {
    return fetchItem(id).then(item => {
      pending = pending.withMutations(v => v.set(Number(id), Map(item)));
      if (!!item.kids) {
        return Promise.all(item.kids.map(id => recurse(id)));
      }
    });
  }
  return recurse(id).then(() => pending.asImmutable());
};

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
