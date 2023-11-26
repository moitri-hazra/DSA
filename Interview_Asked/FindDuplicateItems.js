function duplicateItems(arr1, arr2){
    let keyMap = new Map(); // declaring a map
    let result_array =[]; // empty array for storing the result
    for (let i = 0; i < arr1.length; i++) {
        if (!keyMap.has(arr1[i])) { // checking if keyMap does not have the key 
            keyMap.set(arr1[i], [arr1[i]]) // adding a new key + the same value in a value array so we get the specific number of item
        } else {
            keyMap.get(arr1[i]).push(arr1[i]); // if the key is present just simply pushing the value in value array
        }
        
    }

    for (let i = 0; i < arr2.length; i++) { 

        /*only if the keyMap has the value then the appending of values start. 
        It ensures that the element is common in both the array */
        if(keyMap.has(arr2[i])){ 
            keyMap.get(arr2[i]).push(arr2[i]);
            result_array.push(...keyMap.get(arr2[i])) // at the same time pushes all the el that is common in the result array
        }


        
    }
    return result_array; // return result array
 
}

//testcases
let a = [1, 4, 4, 5, 3];
let b = [3, 1, 1, 7, 9];
console.log(duplicateItems(a,b));