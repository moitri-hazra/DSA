//O(n^2)
function findNum2(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          count++;
        }
      }
      result.push(count);
    }
  
    return result; //[ 4, 0, 2, 3, 5, 1 ]
  }

//O(nLogn)
function findNum(arr){

  let keyMap = {};
  let result_array = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    keyMap[arr[i]] = i;
    console.log(keyMap);
  }

  let sorted_array = arr.sort((a,b)=> a-b);

  for (let i = 0; i < sorted_array.length; i++) {
    let position = keyMap[sorted_array[i]];
    result_array[position] = i;
  }

  return result_array;
}

//testcases
const array = [9, 6, 2, 1, 8];
console.log(findNum(array));