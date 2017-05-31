function isOldEnoughToDrink(age) {
  // your code here
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(age) {
  // your code here
  if (age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToVote(age) {
  // your code here
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
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
