/*
Example 1:
Write a function called maxSubarraySum which accepts 
an array of integers and a number called n. The function 
should calculate the maximum sum of n consecutive 
elements in the array. 

Expected input/output:
maxSubarraySum ([1, 2, 5, 2, 8, 1, 5], 2)     // 10
maxSubarraySum ([1, 2, 5, 2, 8, 1, 5], 4)     // 17
*/

// Naive Solution
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Solution
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  // get the sum of the initial window range
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // move the 'window' by adding the value of 1 index forward and minus the value of the starting window index
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
