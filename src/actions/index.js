export * from './data';
export * from './ui';

import { getTopIds, getItems, addVisibleItemIds } from './';

export const init = () => (dispatch, getState) => {
  // TODO: check route to verify which list to fetch (i.e. 'website.com/top', 'website.com/show', etc.)
  //    - default should be 'TOP'
  // `dispatch(checkUrlRoute());`
  // TODO: Don't add the entirety of the feed to visibleItemIds -- add actions to handle paging or infinite scroll
  dispatch(getTopIds())
    .then(ids => dispatch(getItems(ids)))
    .then(() => dispatch(addVisibleItemIds(getState().data.ids.TOP)));
};
