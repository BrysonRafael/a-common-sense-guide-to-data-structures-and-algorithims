function selectionSort(arr) {
  // Iterate once through array
  for (let i = 0, l = arr.length - 1; i < l; i++) {
    // Set lowest value to starting index
    let lowestValue = arr[i];
    let lowestIndex = i;

    // Iterate second time through array beginning with next value
    for (let x = i + 1, y = arr.length; x < y; x++) {
      // Swap lowest value with current value if current is lower than lowest
      if (arr[x] > lowestValue) {
        lowestValue = arr[x];
        lowestIndex = x;
      }
    }

    // The old switch-a-roo
    let current = arr[i];
    arr[i] = lowestValue;
    arr[lowestIndex] = current;
  }

  return arr;
}

const myArr = [50, 3, 34, 22, 70];
console.log(selectionSort(myArr));
