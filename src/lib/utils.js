export function objectifyItemArray(arr) {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

export function simpleRange(start, end) {
  if (arguments.length === 1) {
    return Array.from({ length: start }, (v, i) => i + 1);
  } else if (end < start) {
    throw new Error('end must be greater than start');
  }
  return Array.from({ length: end - start }, (v, i) => i + start);
}

const oneOrAbove = (n) => n > 0 ? n : 1;

export const rangeAround = (middle, length) => simpleRange(
  oneOrAbove(middle - Math.floor(length / 2)),
  middle + Math.ceil(length / 2)
);
