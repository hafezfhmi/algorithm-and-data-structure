// OPTIMIZATION: Will break out of loop if there's no swap done on an outer iteration,
// meaning that all elements is sorted and there's no further sorting loop required.

function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([2, 66, 22, 88, -22, 11, 9]));
