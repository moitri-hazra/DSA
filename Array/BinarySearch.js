function binarySearch(arr, target) {
    let beginning = 0; // beginning of the array set as the 0th index
    let end = arr.length - 1; // end of the array set as the last index of the array
    let ans = -1; // ans as default set as -1
  
    while (beginning <= end) {
      const mid = Math.floor((beginning + end) / 2); // calculate the middle element
  
      if (arr[mid] === target) {
        ans = mid; // if mid matches with the target, set answer as mid
        end = mid - 1; // search for the left half to find the first occurrence
      } else if (arr[mid] > target) {
        end = mid - 1; // if mid element is greater than the target, adjust the end
      } else {
        beginning = mid + 1; // if the element is smaller than mid, adjust the beginning
      }
    }
  
    return ans; // return the answer
  }
  
  // Testcases
  const array = [3, 5, 10, 16, 20, 21, 25, 30];
  console.log(binarySearch(array, 30)); // This will return 7

 function print(arr) {
  if (arr.length !== 0) {
    let lastElement = arr[arr.length - 1];
    console.log(lastElement); // Print the last element
    arr.pop(); // Remove the last element
    print(arr); // Recursively call print with the updated array
  }
}

const arr = [1, 2, 3, 4, 5];
print(arr);
  