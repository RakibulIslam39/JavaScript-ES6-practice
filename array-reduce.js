//there is no return value from the previous callback.
// Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
// If an initial value is supplied, this is used, and the iteration starts from array element 0.
var numbers = [1,2,3,4,5,6,7,8,9];
var sum = numbers.reduce((previousValue, CurrentValue, CurrentIndex, arr) =>{
  return previousValue + CurrentValue;
}, 0);
console.log(sum);
