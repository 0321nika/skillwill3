// // დავალება 1
// function sumAndMultiply(numbers) {
//     if (numbers.length <= 2 ) {
//       return [0, 0];
//     }
//     const sum = numbers[0] + numbers[1];
  
//     let multiply = 1;
//     for (let i = 2; i < numbers.length; i++) {
//       multiply *= numbers[i]
//     }
  
//     return [sum, multiply]
//   }

//   const numbers = [1, 2, 3, 4, 5]
//   const result = sumAndMultiply(numbers)
//   console.log(result)


// დავალება 2

// function getCity(user) {
//       const { user: { banks: [, , { address: { city } }] } } = user
//       return city

//   }
  

//   const user = {
//     user: {
//       banks: [
//         {},
//         {},
//         {
//           address: {
//             city: 'Tbilisi'
//           }
//         }
//       ]
//     }
//   }
  

//     const city = getCity(user)
//     console.log(city)


// დავალება 3

// function deepCloneObject(obj) {
//     if (typeof obj !== 'object') {
//       return obj;
//     }
//     if (Array.isArray(obj)) {
//       return obj.map((item) => deepCloneObject(item))
//     }
  
//     const clonedObj = {};
//     for (const k in obj) {
//       if (typeof obj == 'object') {
//         clonedObj[k] = deepCloneObject(obj[k]);
//       }
//     }
  
//     return clonedObj;
//   }
  
//   const originalObject = {
//     a: 1,
//     b: [2, 3, 4],
//     c: "nika",
//     d: true
//   };


//   const clonedObject = deepCloneObject(originalObject)
//   clonedObject.c = "kvaratskhelia"
//   console.log(clonedObject)
//   console.log(originalObject)