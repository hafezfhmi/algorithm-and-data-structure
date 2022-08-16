function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (val < arr[middle]) {
      end = middle - 1;
    } else if (val > arr[middle]) {
      start = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10)
);
