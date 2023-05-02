// const isUserLoggedIn = true;

// If Else operator

// if (isUserLoggedIn) {
//   console.log("You are logged in")
// } else {
//   console.log("You are not logged in.")
// }

// Ternary operator

// isUserLoggedIn ? console.log("You are logged in") :  console.log("You are not logged in.")

// Switch operator

// const age = 27
// switch(age) {
//   case 20:
//     console.log("you are 20")
//   break;
//   case 27:
//     console.log("you are 27")
//     break
//   }


// 7 відео Функції 

// let name ="vadym"
// console.log(name.toUpperCase())

// let sayHello = function(myName) {
// console.log(myName.toUpperCase())
// }
// sayHello("sadasdsa")

//  let sayHello = (myName) => console.log(myName.toUpperCase())
//  sayHello("vadym")

// const sayHelloToVadym = sayHello('vadym') => console.log(sayHello.toUpperCase())
// sayHelloToVadym()

// const sayHelloToVadym = (myName) => console.log(myName.toUpperCase())
// sayHelloToVadym('vadym')

// const sayHelloToVadym =(myName) => console.log(`Hello ${myName.toUpperCase()}`)
// sayHelloToVadym("vadym")

// const sayHello = (name) => console.log(`Hello ${name.toUpperCase()}`)
// const sayHelloToVadym = sayHello('vadym')

// const userName = 'Vadym'
// function createUserName(name) {
//   const result =userName.toUpperCase()
//   return result
// }
// console.log(createUserName())

// const user = 'Vadym'
// const createUserName=(userName)=>console.log(user.toUpperCase())
// const createUserNameToVadym = createUserName();

// function hello() {
//   return 'hello'
// }
// const greetings = hello();
// console.log(greetings)


// const greetings =(hello)=>'hello'
// const hi = greetings()
// console.log(hi)

// const congratsIfMoreThan100 =[0,1]
// function congrats() {
//   if(congratsIfMoreThan100.length>1){
//     console.log('Congrats you have more than 100 subscribes!')
//   } else {
//     console.log('You have less than 100 subscribes!')
//   }
// }
// congrats()

//ЦИКЛИ
 
// let subscribes = [
//   { name: 'vadym', age:20 },
//   { name: 'valeriy', age:30 },
//   { name: 'anton', age:40 },
//   { name: 'oleksandr', age:50 },
//   { name: 'maxim', age:60 },
//   { name: 'ihor', age:70 },
//   { name: 'andrew', age:80 },
// ]
// for(let i = 0; i < subscribes.length; i++) {
//   console.log(subscribes[i])
// }


// ДЛЯ МАСИВУ
// for (const item of subscribes) {
//   console.log(item);
// }

// const obj = {
// name: 'Vadym',
// age: 20
// }

// for(const key in subscribes) {
//   console.log(subscribes[key]);
// }

// let i =0
// while(i<subscribes.length) {
//   console.log(subscribes[i]);
//   i++
// }

// const num=[1,2,3,4]
// function squar(arr){
// for(let i = 0;i<arr.length;i++) {
//  arr[i]*=arr[i]
// }
// return arr
// }
// console.log(squar(num))

// let obj = [
//   {
//     name:'Vadym',
//     sex:'male'
//   },
//   {
//     name:'Daryna',
//     sex:'female'
//   },
//   {
//     name:'Alex',
//     sex:'male'
//   },
//   {
//     name:'Monica',
//     sex:'female'
//   }
// ]

// obj.forEach(person => person.sex === 'male' ? person.char = 'brutal' : person)
// console.log(obj)

// function addChar(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i].sex === 'male') {
//       arr[i].char = 'brutal'
//     }
//     else{
//       arr[i].char = 'beautiful'
//     }
//   }
//   return arr
// }


// function addChar(arr) {
//   for(let i = 0; i < arr.length; i++) {
//   arr[i].sex ==='male' ? arr[i].char = 'brutal' : arr[i].char = 'beautiful'
//   }
//   return arr
// }
// console.log(addChar(obj))

// obj.forEach(person => person.sex ==='male' ? person.char = 'brutal' : person.char = 'beautifu')
// console.log(obj)

// function speed(s){
//   let d = s*(1000/3600)
//   console.log(Math.frounds(d))
// }
// speed(1.08)

// let arr = [1,2,3,4]
// const mult = arr.reduce((a,b)=>a*b)
// console.log(mult)
// let num = 10
// function numberToString(num) {
//   // Return a string of the number here!
//   console.log(typeof String(num))
// }
// numberToString()

// const arr = [1,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5]
// function repition(numArr,num) {
//   let counter =0;
//   for(item of numArr) {
//   if(item===num){
//     counter++;
//   }
//   }
//   return counter>0 ? counter : 'цього числа немає';
// }
// console.log(repition(arr,3))

let obj = [
  {
    name:'Vadym',
    age: 20,
    sex:'male'
  },
  {
    name:'Daryna',
    age: 18,
    sex:'female'
  },
  {
    name:'Alex',
    age: 23,
    sex:'male'
  },
  {
    name:'Monica',
    age: 30,
    sex:'female'
  }
]

// const objMale = obj.filter(function(item){
//   return item.sex ==='male';
// })
// console.log(objMale);

// const objMale = obj.map(function(item){
//   return item.sex ==='male' ? 'Mr ' + item.name : 'Mrs ' + item.name ;
// })
// console.log(objMale);

// const objSum = obj.reduce(function(accumulator, currentValue){
//   return accumulator + currentValue.age
// }, 0 );
// console.log(objSum);


// const objFound = obj.find(function(item){
//   return item.name === 'Alex'
// },  );
// console.log(objFound);

console.log(['a', 'b'].includes('c'));








