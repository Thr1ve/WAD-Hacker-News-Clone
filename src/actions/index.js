export * from './data';
export * from './ui';

import { getTopIds, getItems, addVisibleItemIds } from './';

export const init = () => (dispatch, getState) => {
  // TODO: check route to verify which list to fetch (i.e. 'website.com/top', 'website.com/show', etc.)
  //    - default should be 'TOP'
  // `dispatch(checkUrlRoute());`
  dispatch(getTopIds())
    .then(ids => dispatch(getItems(ids)))
    .then(() => dispatch(addVisibleItemIds(getState().ui.currentFeed)));
};
