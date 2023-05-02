// let user = {
//   name: "Vadym",
//   lastname: "Petryna",
//   age: 19,
//   "likes dog": true
// };
// // console.log("age: ",user.age);
// // console.log("likes dog " ,user["likes dog"])
// console.log(user.name, user.lastname, user.age, "likes dog: ", user["likes dog"])

// let num = 0;
// for (; num < 5; num++) {
//   console.log(num)
//   if (num == 2) break;
// }
// console.log( `Закінчено num = ${num}`);


// const post = {
//   name : "Vadym",
//   age : 20
// }
// JSON.stringify(post);
// const postStringify = JSON.stringify(post);
// JSON.parse(postStringify);
// console.log(JSON.stringify(post))
// console.log(JSON.parse(postStringify))



// function name() {
// console.log("Vadym")
// }
// console.log("Start")
// setTimeout( name, 1000,)



// const myName = "Vadym Petryna";
// const myCity = "I live in Varash";
// const aboutMe = `${myName} ${myCity}`;
// console.log(aboutMe)



//  const arr = [1, 2, 3, 4, 5,6,7,8,9,10];

// //for
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// //for of
// for (let num of arr) {
//   console.log(num)
// }

// // forEach
// arr.forEach(function (person) {
//   console.log(person)
// })

// // or 

// arr.forEach(person => console.log(person))

// // Map
// const newNum = arr.map(num => {
//   return num
// })
// console.log(newNum)


// function multiplyer(value, mult = 1) {
//   console.log (value * mult)
// }

// multiplyer(2)

// const multiplyer = function(value, mult = 1) {
//   console.log (value * mult)
// }
// multiplyer(2,5)

// const multiplyer = (value, mult = 1) => {
//   console.log (value * mult)
// }
// multiplyer(2,5)


// const fnWithError = () => {
//   throw new Error('Some Error')
// }

// try {
//   fnWithError()
// } catch (error) {
//   console.error(error)
//   console.log(error.message)
// // }
// // console.log("asdasd")


// const myObject = {
//   x: 10,
//   y:"abc",
//   z:true
// }
// for(key in myObject) {
//   console.log(key, myObject[key])
// }


// const myObject = {
//   x: 10,
//   y:"abc",
//   z:true
// }

// Object.keys(myObject).forEach(key =>{
//   console.log(key, myObject[key])
// })



// const myArray = [10,'abc', true,undefined]
// for (const key in myArray) {
//   console.log(myArray[key])
// }


// class Comment  {
//   constructor(text) {
//     this.text = text 
//     this.votesQty = 0
//   }
//   upvote() {
//     this.upvote += 1 
//   }
// }

