//Array.prototype.Find()
//protita eliment er majhe diye jabe jokhon true value pabe tokhon return korbe.
var numbers = [1,2,3,4,5,6,7,8,9]
var results = numbers.find(function(CurrentValue ,){
  return CurrentValue >= 7;
});
console.log(results);
