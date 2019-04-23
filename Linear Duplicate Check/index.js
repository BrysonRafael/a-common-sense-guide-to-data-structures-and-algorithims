function hasDuplicateValue(array) {
  let existingNumbers = [];

  // Iterate once through the array
  for (let i = 0, l = array.lenth; i < l; i++) {
    if (existingNumbers[array[i]] === undefined) {
      // Set value to missing index to 1 if undefined
      existingNumbers[array[i]] = 1;
    } else {
      // Return true if value exists
      return true;
    }
  }

  // Return false if there are not duplicates
  return false;
}

console.log(hasDuplicateValue([3, 5, 8]));
