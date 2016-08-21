export function objectifyItemArray(arr) {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

export function range(start, end) {
  if (arguments.length === 1) {
    return Array.from({ length: start }, (v, i) => i + 1);
  }
}
