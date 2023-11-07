// function spiralOrder(matrix){

//     let resArr = [];

//     if(matrix.length > 0){
//         resArr.push(...matrix[0]);
//         resArr.push(matrix[1].pop());
//         resArr.push(...matrix[2].reverse());
//         resArr.push(...matrix[1]);
//     }

//     return resArr;
// }

function spiralOrder(matrix) {
  const result = [];
  
    result.push(...matrix.shift());

  for (let i = 0; i < matrix.length; i++) {
    result.push(matrix[i].pop());
  }
  const bottomRow = matrix.pop();
      if (bottomRow) {
        result.push(...bottomRow.reverse());
      }
      

  for (let i = matrix.length - 1; i >= 0; i--) {
        result.push(matrix[i].shift());
      }

      for (let i =0; i <matrix.length; i++) {
        result.push(matrix[i].shift());
      }
  
  
  
  return result;
}

  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(spiralOrder(matrix)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
  