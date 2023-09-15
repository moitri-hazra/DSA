// Q.1 Find a pair with the given sum in an array.

/* 
step 1 -> Create a result array to store the result.
step 2 -> create a count variable to rotate the index of array.
step 3 -> start a loop 
step 4 -> calculate the needed element
step 5 -> if the array contains the needed element then add the index of the current and the matched element.
step 6 -> increment the count variable to start the loop again 
step 7 -> outside of the loop return the result array 

TIME COMPLEXITY - O(n);
*/

function findPair(arr, target) {
    let result = [];
    let c = 0;
    
    for (let i = 0; i < arr.length; i++) {
      let need = target - arr[c];
      
      if (arr[i] === need && i !== c) { //O(n)
        result.push([arr[c], arr[i]]);
        c++;
      }
      
    }
    
    return result;
  }

//testcases
const nums = [8, 7, 2, 5, 3, 1]
console.log(findPair(nums, target));