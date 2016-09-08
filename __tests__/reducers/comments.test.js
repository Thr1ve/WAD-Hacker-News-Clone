import { createStore } from 'redux';
// import reducer from '../../src/reducers/ui/comments';
import { _getAllKnownDescendants } from '../../src/reducers';

describe('reducers:selectors:getAllKnownDescendants', () => {

  it('should get all descendants', () => {
    const state = {
      1: { kids: [2, 3] },
      2: { kids: [4] },
      3: { kids: [5, 6] },
      4: {}, 5: {}, 6: {},
      7: { kids: [8, 9]},
      8: {}, 9: {}
    };

    expect(_getAllKnownDescendants(state, 1)).toEqual([2, 3, 4, 5, 6]);
    expect(_getAllKnownDescendants(state, 3)).toEqual([5, 6]);
    expect(_getAllKnownDescendants(state, 7)).toEqual([8, 9]);
  });

  it('should handle children that have not yet been added to state', () => {
    const state = {
      1: { kids: [2, 3] },
      2: { kids: [4] },
      3: { kids: [5, 6] },
      4: {}
    };

    expect(_getAllKnownDescendants(state, 1)).toEqual([2, 3, 4, 5, 6]);
  })
});

// describe('data:actions:getItem', () => {
//   it('', () => {
//     const store = storeFactory();
// });
