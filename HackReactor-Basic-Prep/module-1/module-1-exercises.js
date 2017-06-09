function isOldEnoughToDrink(age) {
  // your code here
  return (age >= 21);
}

function isOldEnoughToDrive(age) {
  // your code here
  return (age >= 16);
}

function isOldEnoughToVote(age) {
  // your code here
  return (age >= 18);
}

function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  return false;
}

function getProperty(obj, key) {
  // your code here
  return obj[key];
}

function addProperty(obj, key) {
  // your code here
  return (obj[key] = true);
}

function removeProperty(obj, key) {
  // your code here
  return (delete obj[key]);
}

function checkAge(name, age) {
  // your code here
  if (age < 21) {
    return ('Go home, ' + name + '!');
  } else {
    return ('Welcome, ' + name + '!');
  }
}

function getFullName(firstName, lastName) {
  // your code here
  return (firstName + ' ' + lastName);
}

function getLengthOfWord(word) {
  // your code here
  return (word.length);
}

function getLengthOfTwoWords(word1, word2) {
  // your code here
  return (word1.length + word2.length);
}

function isGreaterThanTen(num) {
  // your code here
  return (num > 10);
}

function isLessThan30(num) {
  // your code here
  return (num < 30);
}

function equalsTen(num) {
  // your code here
  return (num === 10);
}

function isLessThan(num1, num2) {
  // your code here
  return (num2 < num1);
}

function isGreaterThan(num1, num2) {
  // your code here
  return (num2 > num1);
}

function isEqualTo(num1, num2) {
  // your code here
  return (num1 === num2);
}

function isEven(num) {
  // your code here
  return (num%2 === 0);
}

function isOdd(num) {
  // your code here
  return (num%2 === 1);
}

function isSameLength(word1, word2) {
  // your code here
  return (word1.length === word2.length);
}

function areBothOdd(num1, num2) {
  // your code here
  return ((num1%2 === 1) && (num2%2 === 1));
}

function isEitherEven(num1, num2) {
  // your code here
  return ((num1%2 === 0) || (num2%2 === 0));
}

function isOddLength(word) {
  // your code here
  return ((word.length%2) === 1);
}

function isEvenLength(word) {
  // your code here
  return ((word.length%2) === 0);
}

function isEvenAndGreaterThanTen(num) {
  // your code here
  return ((num > 10) && (num%2 === 0));
}

function average(num1, num2) {
  // your code here
  return ((num1 + num2)/2);
}

function computeAreaOfATriangle(base, height) {
  // your code here
  return ((base * height)/2);
}

// exercise 27 (counting 0 to 26 previously)
function cube(num) {
  // your code here
  return (num**3);
}

function square(num) {
  // your code here
  return (num**2);
}

function computeAverageLengthOfWords(word1, word2) {
  // your code here
  var totalLength = word1.length + word2.length;
  return (totalLength/2);
}

function addFullNameProperty(obj) {
  // your code here
  var fullName = (obj.firstName +  ' ' + obj.lastName);
  return (obj.fullName = fullName);
}

var example = {
  firstName: 'Jade',
  lastName: 'Smith'
};

console.log(addFullNameProperty(example));

function addObjectProperty(obj1, key, obj2) {
  // your code here
  return (obj1[key] = obj2);
}

function isPersonOldEnoughToDrinkAndDrive(person) {
  // your code here
  return false;
}

function isPersonOldEnoughToDrive(person) {
  // your code here
  var age = person.age;
  return (age >= 16 ? true : false);
}

function isPersonOldEnoughToVote(person) {
  // your code here
  var age = person.age;
  return (age >= 18 ? true : false);
}

function addArrayProperty(obj, key, arr) {
  // your code here
  return (obj[key] = arr);
}

function getNthElement(array, n) {
  // your code here
  return (array[n]);
}

function getFirstElement(array) {
  // your code here
  return (array[0]);
}

function getLastElement(array) {
  // your code here
  return (array[array.length - 1]);
}

function addToFront(arr, element) {
  // your code here

  arr.unshift(element);
  return arr;
}

var example = [1, 2];
console.log(addToFront(example, 3));

function addToBack(arr, element) {
  // your code here
  arr.push(element);
  return arr
}

function computeAreaOfARectangle(length, width) {
  // your code here
  return (length * width);
}

function computePerimeterOfARectangle(length, width) {
  // your code here
  return (2 * (length + width));
}

function computePerimeterOfATriangle(side1, side2, side3) {
  // your code here
  return (side1 + side2 + side3);
}

function computeTripledAreaOfARectangle(length, width) {
  // your code here
  return (3 * (length * width));
}

function computePerimeterOfACircle(radius) {
  // your code here
  return (2 * radius * Math.PI);
}

function computeAreaOfACircle(radius) {
  // your code here
  return (Math.PI * radius ** 2);
}

function computePower(num, exponent) {
  // your code here
  return (num ** exponent);
}

function computeSquareRoot(num) {
  // your code here
  return Math.sqrt(num);
}

function doubleSquareRootOf(num) {
  // your code here
  return (2 * Math.sqrt(num));
}

function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var allWords = word1 + word2 + word3;
  return allWords.length;
}

function joinArrays(arr1, arr2) {
  // your code here
  return arr1.concat(arr2);
}

function getElementsAfter(array, n) {
  // your code here
  var result = array.slice(n + 1, array.length);
  return result;
}

function getElementsUpTo(array, n) {
  // your code here
  var result = array.slice(0, n);
  return result;
}

var output = getElementsUpTo([], 3);
console.log(output);

function getAllElementsButFirst(array) {
  // your code here
  var result = array.slice(1);
  return result;
}

function getAllElementsButLast(array) {
  // your code here
  var result = array.slice(0, -1);
  return result;
}

function removeFromFront(arr) {
  // your code here
  arr.shift();
  return arr;
}

function removeFromBackOfNew(arr) {
  // your code here
  var result = arr.slice(0, -1);
  return result;
}

function removeFromFrontOfNew(arr) {
  // your code here
  return (arr.slice(1));
}

function countCharacter(str, char) {
  // your code here
  count = 0;
  for (i=0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

function getAllLetters(str) {
  // your code here
  return (str.split(''));
}

function getAllWords(str) {
  // your code here
  if (!str) {
    return []
  }
  else {
  return (str.split(' '));
  }
}

var output = getAllWords('');
console.log(output);

function countWords(str) {
  // your code here
  if (!str) {
    return {};
  } else {
    var words = str.split(' ');
    var result = {};
    for (i = 0; i < words.length; i++) {
      if (words[i] in result) {
        result[words[i]] = (result[words[i]] + 1);
      } else {
        result[words[i]] = 1;
      }
    }
    return result;
  }
}

function removeFromBack(arr) {
  // your code here
  arr.pop();
  return arr;
}

function or(expression1, expression2) {
  // your code here
  if (expression1) {
    return true;
  } else if (!expression1 && expression2) {
    return true;
  } else {
    return false;
  }
}

function isEitherEvenOrAreBoth7(num1, num2) {
  // your code here
  return (num1%2 === 0 || num2%2 === 0) || (num1 ===7 && num2 === 7);
}

function isEitherEvenAndLessThan9(num1, num2) {
  // your code here
  return (num1%2 === 0 || num2%2 === 0) && (num1 < 9 && num2 < 9);
}

function extend(obj1, obj2) {
  // your code here
  for (var i in obj2) {
    if (!(i in obj1)){
      obj1[i] = obj2[i];
    }
  }
  return obj1;
}

function removeNumbersLargerThan(num, obj) {
  // your code here
  for (var i in obj) {
    if (obj[i] > num) {
      delete obj[i];
    }
  }
  return obj;
}

// exercise 70 (counting from 0 to 69)

function removeNumbersLessThan(num, obj) {
  // your code here
  for (var i in obj) {
    if (obj[i] < num) {
      delete obj[i];
    }
  }
  return obj;
}

function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (var i in obj) {
    if (typeof(obj[i]) === 'string' && obj[i].length > num) {
      delete obj[i];
    }
  }
  return obj;
}

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }

function removeEvenValues(obj) {
  // your code here
  for (var i in obj) {
    if (typeof(obj[i]) === 'number' && obj[i]%2 === 0) {
      delete obj[i];
    }
  }
  return obj;
}

function removeOddValues(obj) {
  // your code here
  for (var i in obj) {
    if (typeof(obj[i]) === 'number' && obj[i]%2 === 1) {
      delete obj[i];
    }
  }
  return obj;
}

function removeArrayValues(obj) {
  // your code here
  for (var i in obj) {
    if (obj[i] instanceof Array) {
      delete obj[i];
    }
  }
  return obj;
}

function removeNumberValues(obj) {
  // your code here
  for (var i in obj) {
    if (typeof(obj[i]) === 'number') {
      delete obj[i];
    }
  }
  return obj;
}

function removeStringValues(obj) {
  // your code here
  for (var i in obj) {
    if (typeof(obj[i]) === 'string') {
      delete obj[i];
    }
  }
  return obj;
}

function convertDoubleSpaceToSingle(str) {
  // your code here
  var oneSpace = str.replace(/  +/g, ' ');
  return oneSpace;
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);

function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  return (arr1.concat(arr2, arr3));
}

function addToFrontOfNew(arr, element) {
  // your code here
  var elementArr = [element];
  return (elementArr.concat(arr));
}

function addToBackOfNew(arr, element) {
  // your code here
  return (arr.concat(element));
}

function getAllElementsButNth(array, n) {
  // your code here
  array.splice(n, 1)
  return array;
}

function areValidCredentials(name, password) {
  // your code here
  return (name.length > 3 && password.length >= 8)
}

function getIndexOf(char, str) {
  // your code here
  for (i = 0; i < str.length; i++) {
    console.log(str[i])
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output);

/* function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var shortest = 100;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i].length < shortest) {
      shortest = arguments[i].length;
    }
  }
  return shortest;
}

*/

function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var length = [];
  for (i = 0; i < arguments.length; i++) {
     length.push(arguments[i].length);
    }
  return Math.min(...length);
}

function findMaxLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var lengths = [];
  for (i = 0; i < arguments.length; i++) {
    lengths.push(arguments[i].length);
  }
  return Math.max(...lengths);
}

function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
  var result = [];
  // even though style guide says against it
  // have to use for.. in loop
  // otherwise doesn't pass the test
  for (var i in obj[key]) {
    if (obj[key][i] === 10) {
      result.push(obj[key][i]);
    }
  }
  return result;
}

function select(arr, obj) {
  // your code here
  var result = {};
  for (var i in obj) {
    if (arr.includes(i)) {
      result[i] = obj[i];
    }
  }
  return result;
}

// exercise 89
function getElementsLessThan100AtProperty(obj, key) {
  // your code here
  var result = [];
  if (obj[key]) {
    for (i = 0; i < obj[key].length; i++) {
      if (obj[key][i] < 100) {
        result.push(obj[key][i]);
      }
    }
  }
  return result;
}

function countAllCharacters(str) {
  // your code here
  var result = {};
  if (str) {
    for (i = 0; i < str.length; i++) {
      if (result[str[i]]) {
        result[str[i]] = result[str[i]] + 1;
      } else {
        result[str[i]] = 1;
      }
    }
  }
  return result;
}

/* function getElementsGreaterThan10AtProperty(obj, key) {
  // your code here
  var result = [];
  if (obj[key]) {
    for (i = 0; i < obj[key].length; i++) {
      if (obj[key][i] > 10) {
        result.push(obj[key][i]);
      }
    }
  }
  return result;
}
*/

function removeElement(array, discarder) {
  // your code here
  var result = array.filter(element => element !== discarder);
  return result;
}

function getFirstElementOfProperty(obj, key) {
  // your code here
  if (obj[key] instanceof Array) {
    return obj[key][0];
  }
}

function getNthElementOfProperty(obj, key, n) {
  // your code here
  if (obj[key] instanceof Array) {
    return obj[key][n];
  }
}

function getLastElementOfProperty(obj, key) {
  // your code here
  if (obj[key] instanceof Array) {
    return obj[key][obj[key].length - 1];
  }
}

function keep(array, keeper) {
  // your code here
  var result = array.filter(element => element === keeper);
  return result;
}

function getOddLengthWordsAtProperty(obj, key) {
  // your code here
  var result = [];
  if (obj[key] instanceof Array) {
    for (i = 0; i < obj[key].length; i++) {
      if (obj[key][i].length%2 === 1) {
        result.push(obj[key][i]);
      }
    }
  }
  return result;
}

function computeAverageOfNumbers(nums) {
  // your code here
  var result = 0;
  if (nums.length > 0) {
    nums.forEach(element => result += element);
    return (result/nums.length);
  } else {
    return 0;
  }
}

function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (obj[key] instanceof Array && obj[key].length > 0) {
    var result = 0;
    obj[key].forEach(element => result += element);
    return (result/obj[key].length);
  } else {
    return 0;
  }
}

function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  var result = [];
  if (Array.isArray(obj[key])) {
    for (i = 0; i < obj[key].length; i++) {
      if (obj[key][i].length%2 === 0) {
        result.push(obj[key][i]);
      }
    }
  }
  return result;
}

function filterOddLengthWords(words) {
  // your code here
  var result = words.filter(word => word.length%2 !== 0);
  return result;
}

function getSquaredElementsAtProperty(obj, key) {
  // your code here
  var result = [];
  if (Array.isArray(obj[key])) {
    for (i = 0; i < obj[key].length; i++) {
      result.push(obj[key][i] ** 2);
    }
  }
  return result;
}

function getOddElementsAtProperty(obj, key) {
  // your code here
  var result = [];
  if (Array.isArray(obj[key])) {
    for (i = 0; i < obj[key].length; i++) {
      if (obj[key][i]%2 === 1) {
        result.push(obj[key][i]);
      }
    }
  }
  return result;
}

function getEvenElementsAtProperty(obj, key) {
  // your code here
  var result = [];
  if (Array.isArray(obj[key])) {
    for (i = 0; i < obj[key].length; i++) {
      if (obj[key][i]%2 === 0) {
        result.push(obj[key][i]);
      }
    }
  }
  return result;
}

function filterEvenLengthWords(words) {
  // your code here
  var result = words.filter(word => word.length%2 === 0);
  return result;
}

function getLengthOfLongestElement(arr) {
  // your code here
  var result = 0;
  arr.forEach(function (ele) {
    if (ele.length > result) {
      result = ele.length;
    }
  })
  return result;
}

function getSmallestElementAtProperty(obj, key) {
  // your code here
  if (Array.isArray(obj[key])) {
  var result = obj[key][0];
    obj[key].forEach((ele) => {
      if (ele < result) {
        result = ele
      }
    });
  return result;
  }
}

function getLargestElementAtProperty(obj, key) {
  // your code here
  var result;
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    result = Math.max(...obj[key])
  }
  return result;
}

function getAllButLastElementOfProperty(obj, key) {
  // your code here
  var result = [];
  if (Array.isArray(obj[key])) {
    result = obj[key].slice(0, obj[key].length - 1);
  }
  return result;
}

function getElementOfArrayProperty(obj, key, index) {
  // your code here
  var result;
  if (Array.isArray(obj[key])) {
    result = obj[key][index];
  }
  return result;
}

/* function squareElements(arr) {
  // your code here
  var result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i] ** 2);
  }
  return result;
}

*/

function squareElements(arr) {
  // your code here
  return arr.map(e => e ** 2);
}

function filterOddElements(arr) {
  // your code here
  return arr.filter(e => e%2 === 1);
}

function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length > 0) {
    return arr.reduce((pr, e) => pr * e);
  } else {
    return 0;
  }
}

function filterEvenElements(arr) {
  // your code here
  return arr.filter(e => e%2 === 0);
}

function getLengthOfShortestElement(arr) {
  // your code here
  if (arr.length > 0) {
    var lengths = arr.map(word => word.length);
    return Math.min(...lengths);
  } else {
    return 0;
  }
}

function getLongestElement(arr) {
  // your code here
  if (arr.length > 0) {
    var lengths = arr.map(w => w.length);
    var result = arr.filter(w => w.length === Math.max(...lengths));
    return result[0];
  } else {
    return '';
  }
}

function findSmallestElement(arr) {
  // your code here
  if (arr.length > 0) {
    return Math.min(...arr);
  } else {
    return 0;
  }
}

function findShortestElement(arr) {
  // your code here
  var smallest = '';
  if (arr.length > 0) {
    smallest = arr[0];
    arr.filter(w => {
      if (w.length < smallest.length) {
        smallest = w;
      }
    });
  }
  return smallest;
}

function getLargestElement(arr) {
  // your code here
  return Math.max(...arr);
}

function computeSumOfAllElements(arr) {
  // your code here
  return arr.reduce((acc, val) => acc + val, 0);
}

function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  const TAX = 1.095;
  return ((preTaxAndTipAmount * TAX) + (preTaxAndTipAmount * .15));
}

function getStringLength(string) {
  // your code here
  var count = 0;
  while (string) {
    string = string.slice(count);
    count++;
  }
  return count;
}

function joinArrayOfArrays(arr) {
  // your code here
  var result = [];
  for (i=0; i < arr.length; i++) {
    result = result.concat(arr[i]);
  }
  return result;
}

function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key].reduce((acc, val) => acc * val);
  } else {
    return 0;
  }
}

function sumDigits(num) {
  // your code here
  var string = num.toString();
  var nums = string.split('');
  if (nums[0] === '-') {
    nums.splice(0, 2, (nums[1] * -1));
    nums[0] = nums[0].toString();
  }
  var result = nums.map(element => parseInt(element));
  return result.reduce((acc, val) => acc + val);
}

var output = sumDigits(-316);
console.log(output);

function getSumOfAllElementsAtProperty(obj, key) {
  // your code here
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key].reduce((acc, val) => acc + val);
  } else {
    return 0;
  }
}

/*
function findShortestWordAmongMixedElements(arr) {
  // your code here
  var strings = arr.filter(element => typeof(element) === 'string');
  if (strings.length > 0) {
    var shortest = strings[0];
    for (i = 0; i < strings.length; i++) {
      if (strings[i].length < shortest.length) {
        shortest = strings[i];
      }
    }
    return shortest;
  } else {
    return '';
  }
}
*/

function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  var nums = arr.filter(ele => typeof(ele) === 'number');
  if (nums.length > 0) {
    return Math.min(...nums);
  } else {
    return 0;
  }
}

function getLongestWordOfMixedElements(arr) {
  // your code here
  var longest = "";
  var words = arr.filter(ele => typeof(ele) === 'string');
  words.forEach(function(word) {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}

function getLargestNumberAmongMixedElements(arr) {
  // your code here
  var largest = 0;
  var nums = arr.filter(ele => typeof(ele) === 'number');
  if (nums.length > 0) {
    largest = Math.max(...nums);
  }
  return largest;
}

function computeSummationToN(n) {
  var sum = 0;
  for (i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function convertScoreToGrade(score) {
  // your code here
  if (score < 100 && score >= 90) {
    return 'A';
  } else if (score < 90 && score >= 80) {
    return 'B';
  } if (score < 80 && score >= 70) {
    return 'C';
  } if (score < 70 && score >= 60) {
    return 'D';
  } if (score < 60 && score >= 0) {
    return 'F';
  } else {
    return 'INVALID SCORE';
  }
}

function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
  var sign = '';
  var range = score%10;
  if (range > 7) {
    sign = '+';
  } else if (range <=7 && range > 2) {
    sign = '';
  } else {
    sign = '-';
  }

  var grade = 'INVALID SCORE';
  if (score < 100 && score >= 90) {
    grade = 'A';
  } else if (score < 90 && score >= 80) {
    grade = 'B';
  } if (score < 80 && score >= 70) {
    grade = 'C';
  } if (score < 70 && score >= 60) {
    grade = 'D';
  } if (score < 60 && score >= 0) {
    grade = 'F';
  }


if (score === 100) {
  return 'A+';
} else if (grade !== 'INVALID SCORE' && score > 59) {
  return (grade + sign);
} else {
  return grade;
}

}

function computeFactorialOfN(n) {
  // your code here
    var fac = 1;
    for (i = 2; i <= n; i++) {
      fac *=i;
    }
  return fac;
}

function repeatString(string, num) {
  // your code here
  return string.repeat(num);
}

function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
  var result = arguments[0];
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i].length > result.length) {
      result = arguments[i];
    }
  }
  return result;
}

function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
  var result = arguments[0];
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i].length < result.length) {
      result = arguments[i];
    }
  }
  return result;
}

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  var interestByFreq = interestRate/compoundingFrequency;
  var i = (1 + interestByFreq) ** (compoundingFrequency * timeInYears);
  console.log(i);
  var I = (principal * i) - principal;
  return I;
}

function modulo(num1, num2) {
  // your code here
  if ((!isNaN(num1) && !isNaN(num2)) && num2 !== 0) {
    var remainder = Math.floor(Math.abs(num1/num2));
    var modulo = Math.abs(num1) - (remainder * Math.abs(num2));
    if (num1 < 0) {
      return modulo * -1;
    } else {
      return modulo;
    }
  } else {
    return 'NaN';
  }
}

function multiply(num1, num2) {
  // your code here
  var result = 0;
  for (i = 0; i < Math.abs(num2); i++) {
    result += Math.abs(num1);
  }
  if (num1 < 0 || num2 < 0) {
    result = -result;
    return result;
  } else {
    return result;
  }
}

function isOddWithoutModulo(num) {
  // your code here
  return (num/2 !== Math.round(num/2));
}

function isEvenWithoutModulo(num) {
  // your code here
  return (num/2 === Math.round(num/2));
}

function multiplyBetween(num1, num2) {
  // your code here
  var result = 0;
  if (num1 < num2) {
    result = 1;
    for (i = num1; i < num2; i++) {
      result *= i;
    }
  }
  return result;
}

// exercise 144
function computeSumBetween(num1, num2) {
  // your code here
  var result = 0;
  if (num1 < num2) {
    for (i = num1; i < num2; i++) {
      result += i;
    }
  }
  return result;
}
