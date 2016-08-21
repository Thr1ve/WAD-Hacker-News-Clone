import { simpleRange, rangeAround } from '../../src/lib/utils';

describe('range', () => {
  it('gives a range from 1 to n (inclusive) when called with one argument', () => {
    expect(simpleRange(4)).toEqual([1, 2, 3, 4]);
  });
  it('gives a range from a to b (inclusive) when called with two arguments', () => {
    expect(simpleRange(4, 8)).toEqual([4, 5, 6, 7]);
  });
  it('should throw when given incorrect inputs', () => {
    expect(simpleRange(4, 8)).toEqual([4, 5, 6, 7]);
  });
});

describe('rangeAround', () => {
  it('gives a range around a given number in ascending order (odd length)', () => {
    expect(rangeAround(8, 5)).toEqual([6, 7, 8, 9, 10]);
  });
  it('is biased to the left when given an even range', () => {
    expect(rangeAround(8, 4)).toEqual([6, 7, 8, 9]);
  });
  it('should ignore numbers less than or equal to 0', () => {
    expect(rangeAround(2, 4)).toEqual([1, 2, 3]);
    expect(rangeAround(1, 4)).toEqual([1, 2]);
    expect(rangeAround(1, 3)).toEqual([1, 2]);
  });
});
