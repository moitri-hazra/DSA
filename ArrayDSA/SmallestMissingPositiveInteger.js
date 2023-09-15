/*Given an unsorted integer array nums, return the smallest missing positive integer.

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.

step 1 -- sort the array
step 2 -- check every element from the begining of the array and delete whichever is equal to or smaller than zero.
step 3 - check if the 0th element of sorted array is 1
step 4 - if 1 , set a variable c as 1 and loop through array 
step 5 - if not 1, return 1 as answer
*/ 

function smallestPositive( arr) {
    let sortedArr = arr.sort(function (a, b) {  return a - b;  });
    let finalArr = sortedArr.filter((item,
        index) => sortedArr.indexOf(item) === index);

    while(finalArr[0] <= 0){
        finalArr.shift();
    }
    if ( finalArr[0] !==1){
        return 'smallest positive is 1'
    }else{
        let c = 1;
        while(finalArr[0]==c){
            console.log(finalArr);
            finalArr.shift();
            console.log(finalArr);
            c++
        }
        return "smallest positive number is " + c ;
    }

}

//testcases

const array2 =[7,8,9,11,12];

console.log(smallestPositive(array2));
