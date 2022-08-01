/*
Example 1:
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. Return an 
array that includes both values that sum to zero or undefined if a pair 
does not exist.

Expected input/output:
sumZero([-3, -2, -1, 0, 1, 2, 3])       // [-3, 3]
sumZero([1, 2, 3])                      // undefined
*/

// Naive Solution
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Solution
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

/*
Example 2:
Implement a function called countUniqueValues, which 
accepts a sorted array, and counts the unique values in
the array. There can be negative numbers in the array, 
but it will always be sorted.

Expected input/output:
countUniqueValues([1,1,1,1,1,1,2])                  // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])       // 7
countUniquevALUES([])                               // 0
*/

// Solution
function countUniqueValues(arr) {
  // check if there's enough elements in array (>1)
  if (arr.length < 2) {
    return 0;
  }

  // create pointers, left=0 and right=1
  let left = 0;
  let right = 1;

  // loop while right < arr.length
  while (right < arr.length) {
    // if number is unique from left, add the number to pointer left + 1
    if (arr[right] !== arr[left]) {
      left++;
      arr[left] = arr[right];
    }
    // right ++
    right++;
  }

  // after loop, return left + 1
  return left + 1;
}

console.log(countUniqueValues([1]));
