function maximumGap(arr) {
    let sorted_array = arr.sort((a,b)=> a-b);
    let i =0;
    let j =1;
    let max = 0;
    while(j < sorted_array.length) {
        if(max< sorted_array[j]-sorted_array[i]){
            max = sorted_array[j]-sorted_array[i];
        }
        i++;
        j++;
    }

    return max;
}

const array = [10];
console.log(maximumGap(array))