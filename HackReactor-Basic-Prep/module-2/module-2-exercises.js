var answer = {
  finalValueOfX: -7 // fill this in with your MENTALLY evaluated answer.
};

var answer = {
  finalValueOfX: [4, 6, 1], // FILL THIS IN
  finalValueOfY: [4, 6, 6], // FILL THIS IN
  finalValueOfZ: [4, 6, 1], // FILL THIS IN
};

function assertEqual(actual, expected, testName) {
  // your code here
  if (actual === expected) {
    console.log('console output:');
    console.log('passed');
  } else {
    console.log('console output:');
    console.log('FAILED ' + '[' + testName + ']' + ' Expected ' + expected + ', but got ' + actual);
  }
}

function multiplyByTwo(n) {
  return (n * 2) + 1; // an incorrect implementation
}
var output = multiplyByTwo(2); // returns 5
assertEqual(output, 4, 'it doubles 2 to 4');

function assertArraysEqual(actual, expected, testName) {
  // your code here
  var areEqualValues = actual.every((element, i) => element === expected[i]);
  var areEqualLengths = (actual.length === expected.length);
  if (areEqualValues && areEqualLengths) {
    console.log('console output:')
    console.log('passed');
  } else {
    console.log('console output:');
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

var expected = [1, 1, 2, 3, 5, 8, 13];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');

function assertObjectsEqual(actual, expected, testName) {
  // your code here
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('console output:')
    console.log('passed');
  } else {
    console.log('Failed [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, 'detects that two objects are equal');
// console output:
// FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}

function assertWithinRange(low, high, actual, testName) {
  // your code here
  if (actual >= low && actual <= high) {
    console.log('console ouput:');
    console.log('passed');
  } else {
    console.log('console output:');
    console.log('FAILED [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
  }
}

var price = 101;
assertWithinRange(1, 100, price, 'price should be between 1 and 100');

var dieRoll = 1;
assertWithinRange(1, 6, dieRoll, 'die roll should be between 1 and 6');


function square(n) {
  var squaredN = n * n;
  return squaredN;
}

function assertEqual(actual, expected, testName) {
  // your code here
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual);
  }
}

var output = square(5);
assertEqual(output, 25, 'should return a square of a number');
assertEqual(square(-10), 25, 'should return a square of a number');
assertEqual(square(0), 0, 'should return a square of a number');

// Note: This is a simple implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;
  array.forEach(function(element) {
    doesEveryElementMatch = callbackFunction(element);
  });
  return doesEveryElementMatch;
}

function assertEqual(actual, expected, testName) {
  // your code here
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '" but got "' + actual + '"');
  }
}

var sample = [1, 2, 3];
assertEqual(sample, [1, 2, 3], 'checks if arrays are equal')

function map(array, callbackFunction) {
  var newArray = [];
  array.forEach(function(element) {
    newArray = newArray + callbackFunction(element);
  });
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n;
  });
}

function assertArraysEqual(actual, expected, testName) {
  // your code here
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

var sample1 = [1, 2, 3];
var sample2 = [1, 4, 9];
var output1 = cubeAll(sample1)
var output2 = map(sample1, function (a) {
  return a;
});
assertArraysEqual(output2, 123, 'test if arrays have equal values');

function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj[lastName];

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}

function assertObjectsEqual(actual, expected, testName) {
  // your code here
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', bot got ' + actual);
  }
}

var sample = {
  firstName: 'Kyle',
  lastName: 'Rocks'
};
var output = {
  firstName: 'Kyle',
  lastName: 'Rocks',
  fullName: 'Kyle Rocks'
};
assertObjectsEqual(addFullNameProp(sample), output, 'test if objects are equal');

function average(numbers) {
  // process array of numbers
  var sum = numbers.reduce((acc, val) => acc + val);
  return sum/numbers.length;
}

function sum(numbers) {
  var sum = numbers.reduce((acc, val) => acc + val);
  return sum;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', bot got ' + actual);
  }
}

var sample = [1, 2, 3];
assertEqual(sum(sample), 2, 'test if numbers are equal');
assertEqual(average(sample), 2, 'test if numbers are equal');

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  // your code here
  var newClassList = [];
  for (i = 0; i < classList.length; i++) {
    var classlistWithAges = {};
    classlistWithAges.name = classList[i];
    classlistWithAges.age = getRandomIntInclusive(10, 11);
    newClassList.push(classlistWithAges);
  }
  return newClassList;
}

var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];
console.log(decorateClassListWithAges(classList));

function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  var isogram = new Set(text);
  return (isogram.size === text.length);
}

function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  var letters = word.split('');
  // Count the instances of each letter
  var wordCount = {};
  for (i = 0; i < letters.length; i++) {
    if (!wordCount[letters[i]]) {
      wordCount[letters[i]] = 1;
    } else {
      wordCount[letters[i]] = wordCount[letters[i]] + 1;
    }
  }
  // Iterate all the counts and find the highest
  var max = 0;
  for (var l in wordCount) {
    if (wordCount[l] > max) {
      max = wordCount[l];
    }
  }
  // Return this word's max repeat count
  return max;
}
//console.log(findMaxRepeatCountInWord('start'));

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  var words = text.split(' ');
  // For each word...
  for (w = 0; w < words.length; w++) {
    var repeatCountForWord = findMaxRepeatCountInWord(words[w]);
    //  If that max repeat count is higher than the overall max repeat count, then
    if (repeatCountForWord > maxRepeatCountOverall) {
      //    update maxRepeatCountOverall
      maxRepeatCountOverall = repeatCountForWord;
      //    update wordWithMaxRepeatCount
      wordWithMaxRepeatCount = words[w];
    }
  }
  return wordWithMaxRepeatCount;
}

console.log(findFirstWordWithMostRepeatedChars('i wanna check for the word with longest characters'));

function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  // your code here
  string = this.getAreaCode() + this.getExchangeCode() + '-' + this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
  return this.parenthesize(this.slice(0, 3));
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
  return this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
  return this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ') ';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

var sample = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
console.log(sample.render());

function findLongestPalindrome(sentence) {
  // split sentence into words
  var words = sentence.split(' ');
  // iterate words and collect the palindromes
  var palindromes = [];
  for (w = 0; w < words.length; w++) {
    if (isPalindrome(words[w])) {
      palindromes.push(words[w])
    }
  }
  // sort the list of palindromes by word length
  for (p = 0; p < palindromes.length - 1; p++) {
    if (sortAscendingByLength(palindromes[p], palindromes[p + 1]) === 1) {
      [palindromes[p], palindromes[p + 1]] = [palindromes[p + 1], palindromes[p]];
    }
  }
  // return the largest item in the sorted list
  return palindromes[palindromes.length - 1];
}
//console.log(findLongestPalindrome('Hah racecar Civic your mom is driving'));


function reverseString(string) {
  var reverse = '';
  var getLetters = string.split('');
  for (l = 0; l < string.length; l++) {
    var letter = getLetters.pop();
    reverse += letter;
  }
  return reverse;
}
//console.log(reverseString('workedOrNot?'));

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return (word.toLocaleLowerCase() === reverseString(word).toLocaleLowerCase());
}
//console.log(isPalindrome('Hah'))

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

function renderInventory(inventory) {
  // your code here
  // hint: before you just dive into coding...
  // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
  // iterate over items in inventory
  for (i = 0; i < inventory.length; i++) {
    // iterate over shoes
    for (s = 0; s < inventory[i].shoes.length; s++) {
      // print designer name, shoe name, price
      console.log(inventory[i].name + ', ' + inventory[i].shoes[s].name + ', ' + inventory[i].shoes[s].price);
    }
  }
}

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

console.log(renderInventory(currentInventory));

// your code here...

// what's a good main function name to choose?
function shoeAverageCost(inventory) {
// what does your outline look like?  don't just dive into coding and make a mess! :)
  var designerAveragePrice = { 'designers': []};
  // iterate over designers in inventory
  for (d = 0; d < inventory.length; d++) {
    // add each designer to designers
    var eachDesigner = {};
    eachDesigner.name = inventory[d].name;
    var totalCost = 0;
    // iterate over each shoe
    for (s = 0; s < inventory[d].shoes.length; s++) {
      totalCost += inventory[d].shoes[s].price;
    }
    // calculate and add averagePrice to designers array
    eachDesigner.averagePrice = totalCost/inventory[d].shoes.length;
    designerAveragePrice.designers.push(eachDesigner);
  }
  return designerAveragePrice;
}

function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

assertEqual(shoeAverageCost(inventory), expected, 'test if list items are equal');

// your code here
function renderBlackShoes(inventory) {
// make it very clean and organized, please! :)
  // iterate over each designer item in inventory
  for (i = 0; i < inventory.length; i++) {
    // iterate over each shoe in designer item
    for (s = 0; s < inventory[i].shoes.length; s++) {
      // if name contains black, print designer name, shoe name, and price
      if (inventory[i].shoes[s].name.includes('black')) {
        console.log(inventory[i].name + ',' + inventory[i].shoes[s].name + ',' + inventory[i].shoes[s].price);
      }
    }
  }
}

var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

console.log(renderBlackShoes(inventory));

// your code here!
function renderNamesWithLace(inventory) {
// Don't just dive into coding! Make a plan.
  var namesWithLaces = [];
  // iterate over each designer item in inventory
  for (d = 0; d < inventory.length; d++) {
    // iterate over each shoe in designer item
    for (s = 0; s < inventory[d].shoes.length; s++) {
      var nameWithLace = {};
      // if name containes lace
      if (inventory[d].shoes[s].name.includes('lace')) {
        // split the name into words
        nameWithLace.nameWords = inventory[d].shoes[s].name.split(' ');
        // add index of the lace to nameWithLace
        for (i = 0; i < nameWithLace.nameWords.length; i++) {
          if (nameWithLace.nameWords[i].includes('lace')) {
            nameWithLace.targetWordIndex = i;
          }
        }
      // add nameWithLace to namesWithLaces
      namesWithLaces.push(nameWithLace);
      }
    }
  }
  return namesWithLaces;
}

var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

renderNamesWithLace(inventory);

function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

var expected = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];

assertEqual(renderNamesWithLace(inventory), expected, 'test if data structures are equal');
