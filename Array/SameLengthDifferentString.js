// Given a string array 'words', return *the* maximum value of 'length(word[i]) * length(word[j])' where the two words do not share common letters. If no such two words exist, return '0'. 

function findSameLength(arr) {
    let result = 0;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].length === arr[j].length) {
          let hasCommon = false;
  
          for (let char of arr[i]) {
            if (arr[j].includes(char)) {
              hasCommon = true;
              break; // Exit the loop as soon as a common character is found
            }
          }
  
          if (!hasCommon) {
            const product = arr[i].length * arr[j].length;
            result = Math.max(result, product);
          }
        }
      }
    }
  
    return result;
  }

//testcases

const arr = ['aab', 'sold', 'skt', 'bold'];

console.log(findSameLength(arr));


