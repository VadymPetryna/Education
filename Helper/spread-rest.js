const arr1 = [1, 2, 3];
const arr2 = [4, 5];

// Spread operator, spread all elements into array
const spreadArray = [...arr1, ...arr2];
console.log('Concated array:', spreadArray)

// Rest operator
const [firstEl, secondEl, ...restElements] = arr1; // arr1 [firstEl, ...restElements] = [1, 2, 3] arr2
console.log('First el:', firstEl);
console.log('Rest elements:', restElements);
