import { Map, List } from 'immutable';

jest.mock(
  '../../src/lib/firebaseApi',
  () => {
    const fetchItem = id => Promise.resolve(data[id]);
    const fetchItems = ids => Promise.all(ids.map(id => fetchItem(id)))
    const data = {
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 },
      4: { id: 4 },
      1234: { id: 1234 },
      1324: { id: 1324 }
    };
    return { fetchItem, fetchItems };
  }
);

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as dataActions from '../../src/actions/data';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('data:actions:getItem', () => {
  it('should dispatch a RECEIVE_ITEM action once after fetching the item', () => {
    const store = mockStore();
    return store.dispatch(dataActions.getItem(3))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('RECEIVE_ITEM');
        expect(actions.length).toEqual(1);
      })
      .catch(err => console.log(err));
  });
});

describe('data:actions:getItems', () => {
  it('should dispatch a RECEIVE_ITEMS action once after fetching the items', () => {
    const store = mockStore();
    return store.dispatch(dataActions.getItems([3, 4, 1234]))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('RECEIVE_ITEMS');
        expect(actions.length).toEqual(1);
      });
  });
});

describe('data:actions:getNeededItems', () => {
  it('should fetch only the items we don\'t yet have', () => {
    const store = mockStore({
      data: Map({
        cachedItems: Map({})
          .set(3, { id: 3 })
          .set(4, { id: 4 })
          .set(1234, { id: 1234 })
      })
    });
    return store.dispatch(dataActions.getNeededItems(List([3, 4, 1234, 1324])))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('RECEIVE_ITEMS');
        expect(actions.length).toEqual(1);
        expect(actions[0].items).toEqual(Map({}).set(1324, { id: 1324 }));
      });
  });

  it('should not fetch anything if we have all the items', () => {
    const store = mockStore({
      data: Map({
        cachedItems: Map({})
          .set(3, { id: 3 })
          .set(4, { id: 4 })
          .set(1234, { id: 1234 })
      })
    });

    return store.dispatch(dataActions.getNeededItems(List([3, 4])))
      .then(() => {
        const actions = store.getActions();
        expect(actions.length).toEqual(0);
      });
  });
});

// describe('data:actions:getNeededVisibleItems', () => {
// });
