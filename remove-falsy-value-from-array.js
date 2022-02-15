const arr = [null, "hello", undefined, "", 0, false, 2, true, 1, NaN];

//using boolean constructor
console.log(arr.filter(Boolean)); //[ 'hello', 2, true, 1 ]

console.log(arr.filter((x) => !!x)); //[ 'hello', 2, true, 1 ]
console.log(arr.filter((x) => x)); //[ 'hello', 2, true, 1 ]

//when you want to retain 0 and remove all falsy value
console.log(arr.filter((x) => x === 0 || x)); // [ 'hello', 0, 2, true, 1 ]
