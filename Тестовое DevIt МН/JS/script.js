// // Task 1
// console.log("############ Task 1 ############");
// let obj1 = {
//     name : 'Nik',
//     city: 'ZP'
// } 
// function cloneDeep(obj){
//     console.log('result: ', Object.assign({}, obj))
// }
// cloneDeep(obj1)


// // Task 2
// console.log("############ Task 2 ############");
// var arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(arrays.reduce((result, addition) => result.concat(addition)));

// // Task 3
// console.log("############ Task 3 ############");
// function MultiplicatorUnitFailure() { }
// function primitiveMultiply(a, b) {
//     if (Math.random() < 0.5)
//         return a * b;
//     else
//         throw new MultiplicatorUnitFailure();
// }
// function reliableMultiply(a, b) {
//     let switchFun;
//     while (!switchFun) {
//         try {
//             switchFun = primitiveMultiply(a, b);
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     return switchFun;
// }
// console.log(reliableMultiply(8, 8));

// var a = function(one, two) {
//     return one + two
//   }
//   var b = function() {
//     return false;
//   }
//   paralell([[a, [1, 2]], [b]], function(results) {

//       console.log(results); // [3, false]
//   });

