export * from './firebase';

export function objectifyItemArray(arr) {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}
