const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for, while

//for
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1 2 3 4 5 6 7 8 9 10
}

// while
let num =0
while(num<arr.length) {
  console.log(arr[num]); // 1 2 3 4 5 6 7 8 9 10
  num++
}


// for of, for in

//for of
for (let num of arr) {
  console.log(num) // 1 2 3 4 5 6 7 8 9 10
}

// for in
for(key in arr) {
  console.log(arr[key]) // 1 2 3 4 5 6 7 8 9 10
}


// forEach, map, reduce

// forEach
// doesn't return anything
arr.forEach(function (person) {
  console.log(person) // 1 2 3 4 5 6 7 8 9 10
})

// or 

arr.forEach(person => console.log(person)) // // 1 2 3 4 5 6 7 8 9 10

// Map
arr.map(num => {
  console.log(num) // 1 2 3 4 5 6 7 8 9 10
})
const multipleArr = arr.map(el => el*2);
console.log(multipleArr) // returns new modification array 

// Reduce
// executes a reducer function for array element.
// returns a single value: the function's accumulated result.
// does not execute the function for empty array elements.
// does not change the original array.
console.log(arr.reduce((acc, cur)=>acc+cur)) // 55 