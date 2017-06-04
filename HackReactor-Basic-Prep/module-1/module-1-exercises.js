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
