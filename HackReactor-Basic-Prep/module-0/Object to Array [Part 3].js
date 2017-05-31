function convertObjectToList(obj) {
  // your code here
  var result = [];
  for (var i in obj) {
    var pair = [];
    pair.push(i, obj[i]);
    result.push(pair);
  }
  return result;
}

var example = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};

console.log(convertObjectToList(example));
