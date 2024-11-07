//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
var numbers = [1,2,3,4,5,6,7];
var results = numbers.map((num) => {
  return 2 * num;
});
console.log(results);