import { Map, List } from 'immutable';
import feedReducer, { defaultState } from '../../../src/reducers/ui/feed';

describe('reducers:ui:feed:reducer', () => {

  it('should return the correct default state', () => {
    expect(feedReducer(undefined, {})).toEqual(defaultState);
  });

  describe('ADD_VISIBLE_ITEM_IDS', () => {
    it('should add ids to the list of currently visible item ids', () => {
      const before = feedReducer(defaultState, {
        type: 'ADD_VISIBLE_ITEM_IDS',
        ids: ['123456']
      });
      const after = feedReducer(before, {
        type: 'ADD_VISIBLE_ITEM_IDS',
        ids: ['654321']
      });

      expect(before.get('visibleItemIds')).toEqual(List.of('123456'));
      expect(after.get('visibleItemIds')).toEqual(List.of('123456', '654321'));
    });
  });

  describe('SET_VISIBLE_ITEM_IDS', () => {
    it('should replace the current list of visible item ids with a new one', () => {
      const before = defaultState.update('visibleItemIds', v => v.push('123456'))
      const after = feedReducer(before, {
        type: 'SET_VISIBLE_ITEM_IDS',
        ids: ['654321']
      });

      expect(before.get('visibleItemIds')).toEqual(List.of('123456'));
      expect(after.get('visibleItemIds')).toEqual(List.of('654321'));
    });
  });

  describe('DUMP_VISIBLE_ITEM_IDS', () => {
    it('should remove all items from the list of currently visible item ids', () => {
      const before = defaultState.update('visibleItemIds', v => v.push('123456'));
      const after = feedReducer(before, { type: 'DUMP_VISIBLE_ITEM_IDS' });

      expect(before.get('visibleItemIds')).toEqual(List.of('123456'));
      expect(after.get('visibleItemIds')).toEqual(List([]));
    })
  });

  describe('SET_FEED', () => {
    it('should change the current feed', () => {
      const after = feedReducer(defaultState, {
        type: 'SET_FEED',
        feed: 'BEST'
      });

      expect(after.get('currentFeed')).toEqual('BEST');
    })
  });
});
