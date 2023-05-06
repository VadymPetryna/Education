// Array elements methods

// Insert element 
[1,2,3].push(4) // [1, 2, 3, 4]
[1,2,3].unshift(0) // [0, 1 ,2, 3]
['a', 'b'].concat('c') // ['a', 'b', 'c'] and with ['c']
// [1, 2, 3, ...someArray]; // spread operator

// Remove element
[1,2,3].pop() // [1, 2] returns last elements, change array, TODO: provide example
[1,2,3].shift() // [2, 3]
['a', 'b', 'c'].slice(1) // ['a', 'b']

// Join
// return concatenated string of all elements with separator between them: [].join(separator)
['a', 'b', 'c'].join('-') // a-b-c

// Element index
['a', 'b', 'c'].indexOf('b') // 1, find element position index; If not exist return -1
[2, 4, 3, 5].findIndex((n)=> n % 2 !== 0) // 2, returns index of first odd elements 

// Element by index
[3, 5, 7, 8].at(-2) // 7, return elements with this index

// loop block
[3, 4, 8, 6].map((n) => n * 2) // [6, 8, 16, 12], iterate over the array and each element multiplies by 2
[1, 4, 7, 8].filter((n) => n % 2 === 0) // [4, 8], iterate over the array and returns even numbers
[3, 5, 6, 8].find((n) => n % 2 === 0) // 6, if not found return undefined, return first even numbers


['a', 'c'].includes('c') // true,  if not exist return false
[2, 3, 4, 5].every((x) => x < 6) // true, return boolean if ALL of array elements < 6
[3, 5, 6, 8].some((n) => n > 6) // true, return boolean if ONE of array elements > 6


// modification or operation methods
[1, 2, 3, 4].reverse() // [4, 3, 2, 1], reverse all element on array

[2, 4, 3, 7].reduce((acc, cur) => acc + cur) // 16, TODO: add more examples in example folder