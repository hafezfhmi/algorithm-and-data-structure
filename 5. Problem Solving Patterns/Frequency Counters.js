/*
Example 1:
Write a function called same, which accepts two arrays. The function should return true if every value in the 
array has it's corresponding value squared in the second array. The frequency of values must be the same.

Expected input/output:
same([1, 2, 3], [4, 1, 9])  // true
same([1, 2, 3], [1, 9])     // false
same([1, 2, 1], [4, 4, 1])  // false (must be same frequency)
*/

// Naive Solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
}

// Solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // create an object to map the element in arr as key and its frequency as value
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // map the element in arr as key and its frequency as value
  for (let val of arr1) {
    // if val is in frequencyCounter1 as a key (not undefined), return its value + 1, else (not in frequencyCounter1) return 0 + 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // iterate each frequencyCounter1 key
  for (let key in frequencyCounter1) {
    // check if the squared frequencyCounter1[key] is in frequencyCounter2
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    // check if the value of frequency is the same
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

/*
Example 2:
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Expected input/output:
validAnagram('', '')                    // true
validAnagram('aaz', 'zza')              // false
validAnagram('anagram', 'nagaram')      // true
*/

// My solution
function validAnagram(str1, str2) {
  // create frequencyCounter
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // check if str1.length === str2.length, return false if not
  if (str1.length !== str2.length) {
    return false;
  }

  // map str1 and str2 to their respective frequencyCounter
  for (let char of str1) {
    frequencyCounter1[char]
      ? (frequencyCounter1[char] += 1)
      : (frequencyCounter1[char] = 1);
  }
  for (let char of str2) {
    frequencyCounter2[char]
      ? (frequencyCounter2[char] += 1)
      : (frequencyCounter2[char] = 1);
  }

  for (let key in frequencyCounter1) {
    // check if frequencyCounter1 key is in frequencyCounter2 key
    if (!(key in frequencyCounter2)) {
      return false;
    }

    // check frequencyCounter1[key] and frequencyCounter2[key] frequency to be the same
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

// Solution
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < second.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
