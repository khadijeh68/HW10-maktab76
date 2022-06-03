//Are these code fragments equal? In other words, do they behave the same way in
//any circumstances, for any handler functions?
promise.then(f1, f2);
promise.then(f1).catch(f2);



// Promise.resolve(1).then(f1 , f2);
// //1
// Promise.resolve(1).then(f1).catch(f2);
// // //1
// // //3
// function f1(value) {
//   console.log(value);
//   return Promise.reject(3);
// }
// function f2(err) {
//   console.log(err);
// }
