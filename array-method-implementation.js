// for Each Implementation
function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = cb(arr[i], i, arr);
  }
  return arr;
}
// map Implementation
function map(arr, cb) {
  let modify = [];
  for (let i = 0; i < arr.length; i++) {
    modify.push(cb(arr[i], i, arr));
  }
  return modify;
}
// filter Implementation
function filter(arr, cb) {
  let modify = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) modify.push(arr[i]);
  }
  return modify;
}
// reduce Implementation
function reduce(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}
// find Implementation
function find(arr, cb) {
  let data = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
  return data;
}
// find Index
function findIndex(arr, cb) {
  let dataIndex = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
  return dataIndex;
}

let array = [1, 2, 3, 4, 5];

let forEachData = forEach(array, (val) => val * 2);
console.log('forEach  ', forEachData);

let mapData = map(array, (val) => val);
console.log('Map ', mapData);

let filterData = filter(array, (val) => val > 2);
console.log('Filter ', filterData);

let reduceSum = reduce(array, (sum, val) => (sum *= val), 1);
console.log('Reduce ', reduceSum);

let findData = find(array, (val) => val > 6);
console.log('Find ', findData);

let findDataIndex = findIndex(array, (val) => val > 6);
console.log('Find Index ', findDataIndex);
