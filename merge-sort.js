// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Divide the array in half
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort the left half
  left = mergeSort(left);
  // Recursively sort the right half
  right = mergeSort(right);

  // Merge the halves together and return
  return merge(left, right);

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let merged = [];

  // Point to the first value of each array
  let firstA = arrA[0];
  let firstB = arrB[0];

  // While there are still values in each array...
  while (arrA.length > 0 && arrB.length > 0) {
    // Compare the first values of each array
    if (firstA > firstB) {
      merged.push(arrB.shift());
    } else {
      merged.push(arrA.shift());
    }
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    firstA = arrA[0];
    firstB = arrB[0];
  }


  merged = [...merged, ...arrA, ...arrB];

  // Return the return array
  return merged;
}

module.exports = [merge, mergeSort];
