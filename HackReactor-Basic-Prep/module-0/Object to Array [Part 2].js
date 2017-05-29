function listAllValues(obj) {
  // your code here
  var result = [];
  for (var i in obj) {
    var value = obj[i];
    result.push(value);
  }
  return result;
}

var example = {
  name : 'Krysten',
  age : 33,
  hasPets : false
};

console.log(listAllValues(example));
