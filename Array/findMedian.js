function findMedian (arr1, arr2){
    let combined_array = arr1.concat(...arr2);
    let sorted = combined_array.sort((a,b)=> a-b);
    let median = undefined;
    let statement ="";
    if(combined_array.length%2===0){
        let index = parseInt(combined_array.length)/2;
        median = (combined_array[index-1]+ combined_array[index])/2;
    }else{
        median = combined_array[Math.floor(combined_array.length/2)-1];
    }

    if(arr1.includes(median)){
        statement = " from arr1";
    }else if(arr2.includes(median)) {
        statement = " from arr2";
    } else {
        statement = " not from any array"
    }

    return median + statement;
}

let arr1 = [2, 4, 7, 6, 8]
let arr2 = [3, 9, 1, 5]

console.log(findMedian(arr1, arr2));