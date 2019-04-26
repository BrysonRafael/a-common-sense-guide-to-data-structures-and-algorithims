function bubbleSort(array) {
  const arr = array;
  let swapped;

  // Plan to iterate once per length of array
  for (let x = arr.length; x > 0; x--) {
    let i = 0;

    if (x === arr.length || swapped) {
      swapped = false;
      i = 0;

      // Iterate through entire array and check index1 and index2 to see if they need swapping
      while (i + 1 < x) {
        let index1 = i;
        let index2 = i + 1;
        let first = arr[index1];
        let second = arr[index2];

        if (first > second && index2 <= arr.length) {
          arr[index2] = first;
          arr[index1] = second;
          swapped = true;
        }

        i++;
      }
    }

    // Break the loop if there weren't any elements swapped in last iteration
    if (!swapped) {
      console.log('Sorted!');
      return arr;
    }
  }
}

const myArr = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90];
console.log(bubbleSort(myArr));

/* --Jay Wengrow implementation

function bubbleSort(array) {
  const arr = array;
  let unsortedUntilIndex = arr.lenth - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < unsortedUntilIndex; i++) {
      let first = arr[i];
      let second = arr[i + 1];

      if (first > second) {
        sorted = false;
        arr[i + 1] = first;
        arr[i] = second;
      }
    }
  }

  console.log('Sorted!');
  return arr;
}

console.log(bubbleSort(myArr));

*/
