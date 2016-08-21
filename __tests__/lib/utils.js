import { range } from '../../src/lib/utils';

describe('range', () => {
  it('gives a range from 1 to n (inclusive) when called with one argument', () => {
    expect(range(4)).toEqual([1, 2, 3, 4])
  });
});
