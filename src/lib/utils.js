import { Map } from 'immutable';

export function objectifyItemArray(arr, cb = v => v) {
  return arr.reduce((obj, item) => {
    obj[item.id] = cb(item);
    return obj;
  }, {});
}

export function itemArrayToMap(arr, cb = v => v) {
  return arr.reduce((obj, item) => {
    return obj.set(item.id, cb(item));
  }, Map({}));
}

export function simpleRange(start, end) {
  if (arguments.length === 1) {
    return Array.from({ length: start }, (v, i) => i + 1);
  } else if (end < start) {
    throw new Error('end must be greater than start');
  }
  return Array.from({ length: end - start }, (v, i) => i + start);
}

// TODO: refactor this to "atOrAbove" and "atOrBelow"
const oneOrAbove = (n) => n > 0 ? n : 1;

// TODO: add optional 'end' parameter and make function ignore numbers above 'end'
export const rangeAround = (middle, length) => simpleRange(
  oneOrAbove(middle - Math.floor(length / 2)),
  middle + Math.ceil(length / 2)
);
