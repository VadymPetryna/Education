const obj1 = {
  name: "Vadym",
  age: 20,
  favouriteFood: {
    sweet: "chocolate",
    salty: "pizza",
  },
};

// Shallow (first level)
// spread operator, does not change the original array

const obj2 = {...obj1}


// Object.assign(), does not change the original array

const obj3 = Object.assign({ color: "red" }, obj1)

// Deep 
// JSON (does not work with methods)

const obj4 = JSON.parse(JSON.stringify(obj1))

// lodash clonedeep 

obj2.favouriteFood.sweet = "caramel"
obj2.name = "John";

console.log(obj1);
console.log(obj2);

