// Object.values() - returns an array of object property values.

const icecreamColors = {
  chocolate: 'brown',
   vanilla: 'white',
   strawberry: 'red',
}
const colors = Object.values(icecreamColors); // arr colors  ["brown", "white", "red"]


// Object.keys() - The method returns an array consisting of keys (property names) of the object

const iceColors = {
  chocolate: 'brown',
  vanilla: 'white',
  strawberry: 'red',
}
const types = Object.keys(iceColors); // arr types ["chocolate", "vanilla", "strawberry"]


// Object.entries() - returns an array whose elements are object [key, value] pairs.

const weather = {
  rain: 0,
  temperature: 24,
  humidity: 33,
}
const entries = Object.entries(weather); // [['rain', 0], ['temperature', 24], ['humidity', 33]]


// Object.assign() - The method allows you to combine objects.

const firstObject = {
  firstName: 'Robert'
}

const secondObject = {
  lastName: 'Cooper'
}

const combinedObject = Object.assign(firstObject, secondObject); // { firstName: 'Robert', lastName: 'Cooper' }