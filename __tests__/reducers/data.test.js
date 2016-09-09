import { Map, List } from 'immutable';
import dataReducer from '../../src/reducers/data';

describe('reducers:data', () => {
  describe('IS_FETCHING_LIST', () => {
    it('should set loading to true', () => {
      const state = dataReducer(undefined, {});
      expect(
        dataReducer(state, { type: 'IS_FETCHING_LIST'}).get('loading')
      ).toEqual(true);
    });
  });

  describe('RECEIVE_IDS', () => {
    it('should replace the correct ids', () => {
      const state = dataReducer(undefined, {});
      expect(
        dataReducer(state, { type: 'RECEIVE_IDS', key: 'NEW', ids: ['123456', '654321']})
          .getIn(['ids', 'NEW'])
      ).toEqual(List(['123456', '654321']));
    });

    it('should set loading to false', () => {
      const state = dataReducer(undefined, {});
      expect(
        dataReducer(state, { type: 'RECEIVE_IDS', key: 'NEW', ids: ['123456', '654321']})
          .get('loading')
      ).toEqual(false);
    });
  });

  describe('RECEIVE_ITEM', () => {
    it('should add an item to the cached items', () => {
      const state = dataReducer(undefined, {});
      expect(
        dataReducer(state, { type: 'RECEIVE_ITEM', id: '123456', item: { foo: 'bar' } })
          .getIn(['cachedItems', '123456'])
      ).toEqual({ foo: 'bar' });
    });
  });

  describe('RECEIVE_ITEMS', () => {
    it('should add items to the cached items', () => {
      const initial = dataReducer(undefined, {});
      const state = dataReducer(state, { type: 'RECEIVE_ITEMS', items: {
        '123456': { foo: 'bar' },
        '654321': { beep: 'boop' }
      }}).get('cachedItems');
      expect(state).toEqual(Map({
        '123456': { foo: 'bar' },
        '654321': { beep: 'boop' }
      }));
    });

    it('should keep old items', () => {
      const initial = dataReducer(undefined, {});
      const before = dataReducer(initial, {
        type: 'RECEIVE_ITEMS',
        items: {
          '123456': { foo: 'bar' },
          '654321': { beep: 'boop' }
        }
      });
      const after = dataReducer(before, {
        type: 'RECEIVE_ITEMS',
        items: {
          '123654': { fizz: 'buzz' },
          '654123': { harrison: 'ford' }
        }
      }).get('cachedItems');

      expect(after.get('123456')).toEqual({ foo: 'bar' });
      expect(after.get('123654')).toEqual({ fizz: 'buzz' });
      expect(after.get('654321')).toEqual({ beep: 'boop' });
      expect(after.get('654123')).toEqual({ harrison: 'ford' });
    });

    it('should overwrite existing items', () => {
      const initial = dataReducer(undefined, {});
      const before = dataReducer(initial, {
        type: 'RECEIVE_ITEMS',
        items: {
          '123456': { foo: 'bar' },
        }
      });
      const after = dataReducer(before, {
        type: 'RECEIVE_ITEMS',
        items: {
          '123456': { foo: 'notbar' },
        }
      }).get('cachedItems');

      expect(after.size).toEqual(1);
      expect(after.get('123456')).toEqual({ foo: 'notbar' });
    });
  });
});
