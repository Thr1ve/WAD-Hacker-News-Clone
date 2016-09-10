import { Map, List } from 'immutable';
import commentsReducer, { defaultState } from '../../../src/reducers/ui/comments';

describe('reducers:ui:comments:reducer', () => {

  it('should return the correct default state', () => {
    expect(commentsReducer(undefined, {})).toEqual(defaultState);
  });

  describe('RECEIVE_ITEM', () => {
    it('should add an item as false when defaultCollapsed is false', () => {
      expect(
        commentsReducer(defaultState, { type: 'RECEIVE_ITEM', id: '123456'}).getIn(['collapsed', '123456'])
      ).toEqual(false);
    });

    it('should add an item as true when defaultCollapsed is true', () => {
      const state = defaultState.set('defaultCollapsed', true);

      expect(
        commentsReducer(state, { type: 'RECEIVE_ITEM', id: '123456'}).getIn(['collapsed', '123456'])
      ).toEqual(true);
    });
  });

  describe('UPDATE_COLLAPSED', () => {
    it('should add new items', () => {
      const state = commentsReducer(defaultState, {
        type: 'UPDATE_COLLAPSED',
        items: {
          '123456': true,
          '654321': false,
        }
      });

      expect(state.getIn(['collapsed', '123456'])).toEqual(true);
      expect(state.getIn(['collapsed', '654321'])).toEqual(false);
    });

    it('should update existing items', () => {
      const before = defaultState
        .setIn(['collapsed', '123456'], true)
        .setIn(['collapsed', '654321'], false);
      const after = commentsReducer(before, {
        type: 'UPDATE_COLLAPSED',
        items: {
          '123456': false,
          '654321': true,
        }
      });

      expect(after.getIn(['collapsed', '123456'])).toEqual(false);
      expect(after.getIn(['collapsed', '654321'])).toEqual(true);
    });

    it('should leave old items alone', () => {
      const before = defaultState.setIn(['collapsed', 'foo'], true);
      const after = commentsReducer(before, {
        type: 'UPDATE_COLLAPSED',
        items: {
          '123456': false,
          '654321': true,
        }
      });

      expect(after.getIn(['collapsed', 'foo'])).toEqual(true);
    });
  });
});
