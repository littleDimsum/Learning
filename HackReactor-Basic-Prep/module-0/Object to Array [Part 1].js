function getAllKeys(obj) {
  // your code here
  var result = [];
  for (var i in obj) {
    console.log(i);
    result.push(i);
  }
  return result;
}

var obj = {
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
};

console.log(getAllKeys(obj));
