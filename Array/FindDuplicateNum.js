/*Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3 

*/


function findDuplicate (arr){
    let sorted = arr.sort(function(a,b) { return a-b; }); // sorting the array so the duplicate values are side by side
    let stack = []; // creating an ampty array so can check if the value already exists or not
    for(let i=0; i < arr.length; i++){
        if(stack[stack.length-1] ===arr[i]){ //checking if the last element of new array is equal to the arr[i]
            return arr[i]; // if true returning the duplicate value
        }else{
            stack.push(arr[i]); // if false pushing the value in stack
        }
    }
}

//testcases

const Array =[3,1,3,4,2];
console.log(findDuplicate(Array));