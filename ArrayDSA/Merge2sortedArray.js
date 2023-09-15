//mergeing two arrays in asc order
/*Steps for solution 
step1 -- we check if the arrays contains some element, 
step 2-- while loop starts
step 3 -- compares each element with same index in both the array and adds it to result array
step 4 -- increments index 
step 5 -- comes out of the loop
step 6 -- checks if element left inside any array
step 7 -- adds it to the result array
step 8 - return result array

*/

function sortAndMerge ( arr1, arr2) {
    let resArr =[];
    while ( arr1.length !== 0 && arr2.length !== 0){
        if( arr1[0] < arr2[0]){
            resArr.push(arr1[0]);
            arr1.shift();
          
        }else{
            resArr.push(arr2[0]);
            arr2.shift();
        }

    }
    if (arr1.length > arr2.length ) {
        resArr = resArr.concat(arr1);
    } else {
        resArr = resArr.concat(arr2);
    }

    return "array is " +  resArr + " and second largest element " + resArr[resArr.length-2];
    
}

//testcases

const arr1 = [ 1, 7, 10];
const arr2 = [4, 5, 9];

console.log(sortAndMerge(arr1, arr2));