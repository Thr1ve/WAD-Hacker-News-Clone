import { fetchTopStoryIds, fetchItem } from '../config/firebase';

export const IS_FETCHING = 'IS_FETCHING';
export const isFetching = () => ({ type: IS_FETCHING });

export const RECEIVE_IDS = 'RECEIVE_IDS';
export const receiveIds = ids => ({ type: RECEIVE_IDS, ids });

export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const receiveItem = (id, item) => ({ type: RECEIVE_ITEM, id, item });

// This may seem a little redundant, but I'd like to keep the
// firebase API as separate as possible from this logic
export const getItem = id => (dispatch, getState) => {
  fetchItem(id).then(item => {
    dispatch(receiveItem(id, item));
  });
};

export const getTopIds = () => (dispatch, getState) => {
  dispatch(isFetching());
  fetchTopStoryIds().then(ids => {
    dispatch(receiveIds(ids));
    ids.forEach(id => dispatch(getItem(id)));
  });
};
