import { Map, List } from 'immutable';
import { createStore } from 'redux';
import rootReducer, {
  getLastPage, getPageIds,
  _getAllKnownDescendants, _getKids
} from '../../src/reducers';

describe('reducers:root:selectors', () => {
  describe('getLastPage()', () => {
    it('should correctly get the last possible page for the current feed', () => {
      const initialState = rootReducer(undefined, {});
      const state = {
        ...initialState,
        data: initialState.data
          .setIn(
            ['ids', 'TOP'],
            List([
              // TODO: Assuming page length of 8; I shouldn't have to assume here
              '1', '2', '3', '4', '5', '6', '7', '8',
              '9', '10', '11', '12', '13', '14', '15', '16'
            ])
          )
      };
      expect(getLastPage(state)).toEqual(2);
    });
  });

  describe('getPageIds()', () => {
    it('should correctly get the ids for the given page number', () => {
      const initialState = rootReducer(undefined, {});
      const state = {
        ...initialState,
        data: initialState.data
          .setIn(
            ['ids', 'TOP'],
            List([
              // TODO: Assuming page length of 8; I shouldn't have to assume here
              '1', '2', '3', '4', '5', '6', '7', '8',
              '9', '10', '11', '12', '13', '14', '15', '16'
            ])
          )
      };
      expect(getPageIds(state, 1)).toEqual(List(['1', '2', '3', '4', '5', '6', '7', '8']));
      expect(getPageIds(state, 2)).toEqual(List(['9', '10', '11', '12', '13', '14', '15', '16']));
    });
  });

  describe('getAllKnownDescendants()', () => {
    it('should get all descendants', () => {
      const state = Map({
        1: { kids: ['2', '3'] },
        2: { kids: ['4'] },
        3: { kids: ['5', '6'] },
        4: {}, 5: {}, 6: {},
        7: { kids: ['8', '9']},
        8: {}, 9: {}
      });

      expect(_getAllKnownDescendants(state, '1')).toEqual(['2', '3', '4', '5', '6']);
      expect(_getAllKnownDescendants(state, '3')).toEqual(['5', '6']);
      expect(_getAllKnownDescendants(state, '7')).toEqual(['8', '9']);
    });

    it('should handle children that have not yet been added to state', () => {
      const state = Map({
        1: { kids: ['2', '3'] },
        2: { kids: ['4'] },
        3: { kids: ['5', '6'] },
        4: {}
      });

      expect(_getAllKnownDescendants(state, '1')).toEqual(['2', '3', '4', '5', '6']);
    })
  })

  // describe('getKids()', () => {
  //
  // });
});
