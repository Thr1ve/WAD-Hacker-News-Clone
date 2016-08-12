import { fetchTopStories } from '../config/firebase';

export const IS_FETCHING = 'IS_FETCHING';
export const isFetching = () => ({ type: IS_FETCHING });

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const receivePosts = posts => ({ type: RECEIVE_POSTS, posts });

export const fetchPosts = () => (dispatch, getState) => {
  dispatch(isFetching());
  fetchTopStories.then(posts => {
    dispatch(receivePosts(posts));
  });
}
