function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = cb(arr[i], i, arr);
  }
  return arr;
}

function map(arr, cb) {
  let modify = [];
  for (let i = 0; i < arr.length; i++) {
    modify.push(cb(arr[i], i, arr));
  }
  return modify;
}

function filter(arr, cb) {
  let modify = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) modify.push(arr[i]);
  }
  return modify;
}

function reduce(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

let array = [1, 2, 3, 4, 5];
let forEachData = forEach(array, (val, index) => val * 2);
console.log('forEach  ', forEachData);
let mapData = map(array, (val, index) => val);
console.log('Map ', mapData);
let filterData = filter(array, (val) => val > 2);
console.log('Filter ', filterData);
let reduceSum = reduce(array, (sum, val) => (sum *= val), 1);
console.log('Reduce ', reduceSum);
