function getSubArrays(arr) {
    const subArrays = [];
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        const subArray = arr.slice(i, j + i + 1);
        subArrays.push(subArray);
      }
    }
    return subArrays;
  }
  

//testcases
const array = [1, 2, 3]
console.log(getSubArrays(array));