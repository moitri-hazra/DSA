/*You are given a large integer represented as an integer array digits, where each digits[i] is the 
ith digit of the integer. The digits are ordered from most significant to least significant
 in left-to-right order. The large integer does not contain any leading 0's.
 
 Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

 */

/* Steps -->

Change nums to string and find the largest possible constructed Number

add +1 to the last digit 

change the string to array and return 

*/

function plusOne(arr){
  let joined = arr.join('');
  console.log(joined);
  let newNum= BigInt(joined)+ BigInt(1); //num
  console.log(newNum);
  let str = newNum.toString();
  let resArr =[];
  for (let i = 0; i < str.length; i++) {
    resArr.push(str[i]);
  }

  return resArr;
}

const arr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

console.log(plusOne(arr));