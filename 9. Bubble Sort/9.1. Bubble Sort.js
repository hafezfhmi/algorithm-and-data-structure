// 1. Start looping from the end of array to beginning (i)
// 2. Start an inner loop from beginning until < i (j < i)
// 3. If j > j+1, swap
// 4. Return sorted array

function bubbleSort(arr) {
  // 1
  for (let i = arr.length - 1; i > 0; i--) {
    // 2
    for (let j = 0; j < i; j++) {
      // 3
      if (arr[j] > arr[j + 1]) {
        // SWAP
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // 4
  return arr;
}

console.log(bubbleSort([2, 66, 22, 88, -22, 11, 9]));
