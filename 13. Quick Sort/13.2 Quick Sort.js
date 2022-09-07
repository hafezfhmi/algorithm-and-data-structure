function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the start and resulting swapIdx element (our last moved element)
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

function quickSort(arr, left = 0, right = arr.length - 1) {
  // console.log(arr);
  // Our break case. As the recursion become smaller, left and right gap become smaller until it meets. Singifies that we have sorted all elements that our left is more than right.
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    // sorting the left side
    quickSort(arr, left, pivotIndex - 1);
    // sorting the right side
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
