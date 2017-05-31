function transformEmployeeData(array) {
  // your code here
  var result = [];
  for (i = 0; i < array.length; i++) {
    var value = {};
    for (j = 0; j < array[i].length; j++) {
      value[array[i][j][0]] = array[i][j][1];
    }
    result.push(value);
  }
  return result
}

var example = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

console.log(transformEmployeeData(example));
