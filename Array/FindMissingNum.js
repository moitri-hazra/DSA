/*Question: Find the Missing Number
You are given an array containing n distinct numbers taken from 0, 1, 2, ..., n. However, one number is missing from the sequence. Write a function to find and return the missing number.

For example, given the array [3, 0, 1], the missing number is 2.*/

const array = [3, 5, 2, 1];

function findNum(arr){
let sorted = arr.sort((a,b)=> a-b);
let val = sorted[0];
for(let i =0; i< arr.length; i++){
if(val === arr[i]){
 val=val+1;
}else{
return val;
}
}

}

console.log(findNum(array));