import { range } from '../../src/lib/utils';

describe('range', () => {
  it('works?', () => {
    const expected = [1, 2, 3, 4];
    expect(range(4)[0]).toEqual(expected[0])
  });
});
