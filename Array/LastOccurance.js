//Last occurance of an repeated element in an array using binary search 



function lastOccurrence(arr, target) {
    let beginning = 0; // beiginning of the array set as the 0th index
    let end = arr.length - 1; // end of the array set as the last index of the array 
    let ans = -1; // ans as default set as -1
  
    while ( beginning < end) {
      const mid = parseInt((beginning + end) / 2); //counting the middle element
  
      if (arr[mid] === target) {
        ans = mid; // if mid matches with the target set answer as mid
        beginning = mid + 1; // set the beginning as the next element of the mid
      } else if (arr[mid] > target) { // if mid element is smaller than the target 
        end = mid - 1; // then set the end as the previous element of the mid
      } else {
        beginning = mid + 1; // if the element is a larger than mid set the next element of mid as beginning  
      }
    }
  
    return ans; // return the answer
  }
  
  //testcases
  const sortedArray = [1, 2, 2, 2, 3, 4, 5, 5, 5, 6];
  const target = 5;
  console.log(lastOccurrence(sortedArray, target));