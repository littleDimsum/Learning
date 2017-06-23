/*
Problem description (see instructions for how to de-obfuscate).

Flip every pair of characters in a string.

Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
*/
function flipPair(string) {
  return flipChar(string).join('');
}

// split characters into array
function getLetters(string) {
  return string.split('');
}
// iterate over an array and flip characters
function flipChar(string) {
  var output = getLetters(string);
  for (i = 0; i < output.length - 1; i += 2) {
    [output[i], output[i + 1]] = [output[i + 1], output[i]];
  }
  return output;
}

var expected = 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!';

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
assertEqual(flipPair(input), expected, 'test if strings are equal');

/*
Problem description (see instructions for how to de-obfuscate).

Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/

function flipEveryNChar(input, n) {
  return flipBlocks(input.split(''), n).join('');
}

// iterate over an array in blocks of n
function flipBlocks(letters, n) {
   var flippedLetters = [];
   for (let i = 0; i < letters.length; i += n) {
     var block = letters.slice(i, i + n);
     block.reverse();
     flippedLetters = flippedLetters.concat(block);
   }
   return flippedLetters;
}

var input = 'a short example';
var expected = 'ohs axe trelpma';

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

assertEqual(flipEveryNChar(input, 5), expected, 'test if strings are equal');

/*
Problem description (see instructions for how to de-obfuscate).

Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/

function detectOutlierValue(string) {
  // split into array
  return oddsAndEvens(string.split(' ')) + 1;
}
  // iterate over values
function oddsAndEvens(numbers) {
  var odds = [];
  var evens = [];
  numbers.forEach(function (number, i) {
    if (isOdd(number)) {
      odds.push(i);
    } else {
      evens.push(i);
    }
  })
  if (odds.length > evens.length) {
    return evens[0];
  } else {
    return odds[0];
  }
}
  // check it odd or even
function isOdd(number) {
  return number%2 === 1;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('PASSED [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

var input = "2 4 7 8 10";
var output = 3;
assertEqual(detectOutlierValue(input), output, 'test if numbers are equal');

/*
Problem description (see instructions for how to de-obfuscate).

You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W
e o
l r
l l
o d
*/

// could have a much simplier solution by traversing both strings and adding spaces when type of element is undefined
function transposeTwoStrings(array) {
  var letters = intoLetters(array);
  var matched = addSpaces(letters);
  for (let i = 0; i < matched[0].length; i++) {
    console.log(matched[0][i] + ' ' + matched[1][i]);
  }
}
  // split each element into array of letters
function intoLetters(array) {
  var letters = array.map((word) => word.split(''));
  return letters;
}
  // find shorter array
function findShortest(letterArray) {
  if (letterArray[0].length <= letterArray[1].length) {
    return letterArray[0];
  } else {
    return letterArray[1];
  }
}
  // add spaces to shorter array
function addSpaces(letterArray) {
  var shortest = findShortest(letterArray);
  var shortIndex = letterArray.indexOf(shortest);
  var longest = letterArray.filter((word) => word !== shortest)[0];
  while (shortest.length !== longest.length) {
    shortest.push(' ');
  }
  letterArray[shortIndex] = shortest;

  return letterArray;
}

console.log(transposeTwoStrings(['Hello','World']));

/*
Problem description (de-obfuscate with ROT-13 as usual).

Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

function findPairForSum(numbers, sum) {
  // filter numbers higher than sum
  var filtered = numbers.filter((number => number < sum));
  // iterate over numbers
  var pair = [];
  filtered.forEach(function (number, index) {
    for (i = index + 1; i < filtered.length; i++) {
      if (isEqual(number, filtered[i], sum)) {
        pair.push(number, filtered[i]);
      }
    }
  }
  );
  return pair;
}

  // find sum of iteration
function sumOfTwo(n1, n2) {
  return n1 + n2;
}
  // is equals sum
function isEqual(n1, n2, targetSum) {
  var sumOf = sumOfTwo(n1, n2);
  return sumOf === targetSum;
}
  
console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9));  

/*
Problem description (de-obfuscate with ROT-13 as usual).
There's an extra hint in there, too, if you need it!

Focus on getting a working solution with the tools you know well.
Practice the interactive/collaborative interview style that's described in the documentation.

Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (de-obfuscate with ROT-20, there's a dropdown on http://rot13.com to select that)
If you double the string, you'll be to trivially find another string inside it using regular String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '
*/

/* alternative solution from farbodsalimi on GitHub:

function isRotated(str1, str2) {
  var str = str1 + str1;

  if (str.indexOf(str2) !== -1) {
    return true;
  }

  return false;
}

console.log(isRotated('hello world', 'orldhello w'));
*/


function isRotated(str1, str2) {
  var match = new Set();
  for (i = 0; i < str1.length; i++) {
    match.add(str1[i]);
  }
  for (i = 0; i < str2.length; i++) {
    if (!match.has(str2[i])) {
      return false;
    } 
  }
  return true;
}

console.log(isRotated('hello world', 'orldhello w'));

/*
De-obfuscate via rot13 as usual.

Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
*/

function search(array, value) {
 return testMindPoint(array, value, 0, array.length);
}

  // find a middle of the array
function findMiddle(array, startI, endI) {
  var midIndex = Math.floor(endI - startI/2);
  return midIndex;
}
  // slice array up to the middle depending on the number
function testMindPoint(array, value, startI, endI) {
   if (endI < startI) {
    return null;
  }
  
  var midIndex = findMiddle(array, startI, endI);
  var midValue = array[midIndex];
  
  if (midValue === value) {
    return midIndex;
  } else if (midValue < value) {
    return testMindPoint(array, value, midIndex + 1, endI);
  } else {
    return testMindPoint(array, value, startI, midIndex - 1);
  }
}

console.log(search([1, 3, 16, 22, 31, 33, 34], 33));





