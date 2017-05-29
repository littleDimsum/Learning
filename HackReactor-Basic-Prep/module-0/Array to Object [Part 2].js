function fromListToObject(array) {
  // your code here
  result = {};
  for (i = 0; i < array.length; i++) {
    var key = array[i][0];
    var value = array[i][1];
    result[key] = value;
  }
  return result;
}

var example = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

console.log(fromListToObject(example));
