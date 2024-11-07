//Array.prototype.FindIndex()
//array find er motoi protita eliment er majhe diye jabe jokhon true value pabe tokhon return korbe.
// var numbers = [1,2,3,4,5,6,7,8,9];
// var results = numbers.findIndex((CurrentValue, index, arr) => {
//   return !(CurrentValue % 2);
// })
// console.log (results);
var numbers = [ 1,2,3,4,5,6,7,8,9,10];
var results = numbers.findIndex((CurrentValue, index, arr) => {
  return CurrentValue > 20
});
console.log(results);