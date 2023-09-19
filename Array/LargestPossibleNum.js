function largestNumber(arr){
    const sortedArr = arr.map(String).sort((a,b)=> (b+a)-(a+b));
    let result = '';

    if(sortedArr[0]=== '0'){
        return '0';
    }else{
        result =sortedArr.join('')
    }
    return result;

}

//testcases

const arr = [2, 10, 33];
console.log(largestNumber(arr));
  