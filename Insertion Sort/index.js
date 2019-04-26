function insertionSort(array) {
  // Loop through the array once
  for (let i = 1, l = array.length; i < l; i++) {
    // Save current value to be compared to in variable
    let currentVal = array[i];

    // Create a temporary iterator that we can decrement to compare
    // values to the left of the current index
    let x = i;

    // Loop through values to left of index to see if there are
    // greater values
    while (array[x - 1] > currentVal && x < array.length) {
      // The old switch-a-roo
      let compareVal = array[x - 1];
      array[x - 1] = currentVal;
      array[x] = compareVal;

      // Decrement x to keep comparing values to the left
      x--;
    }
  }

  return array;
}

const myArray = [7, 2, 6, 4, 3, 1];
console.log(insertionSort(myArray));
