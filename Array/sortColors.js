function sortColors(arr){
    let result =[];
    let ones=[];
    let index = undefined;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]=== 0){
            result.unshift(arr[i])
        }
        
        if(arr[i]===2){
            result.push(arr[i])
        }

        
        
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===1){
            ones.push(arr[i]);
        }
        
    }


    for (let i = 0; i < result.length; i++) {
        if(result[i]===2){
            index = i-1;
        }
        
    }

    result.splice(index, 0, ...ones);

    return result;

}

const array = [2,0,1]
console.log(sortColors(array));