function transformFirstAndLast(array) {
  // your code here
  var transformedObject = {};
  var key = array[0];
  var value = array[array.length - 1];
  transformedObject[key] = value;
  return transformedObject;
}

var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(transformFirstAndLast(arr));
