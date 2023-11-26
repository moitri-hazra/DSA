function get_all_nums(str) {
    let numbers_array=[];
    let split_array=str.split('');
    let index=1;
    while(index < split_array.length+1) {
        numbers_array.push(split_array.slice(0, index).join(''));
        index++;
    }

    return numbers_array;
}

function divisibilityArray(str, m) {
    let nums = get_all_nums(str);
    let divisibilty =[];
    for (let i = 0; i < nums.length; i++) {
        if(Number(BigInt(nums[i])% BigInt(m)) === 0){
            
            divisibilty.push(1);
        }else{
            console.log(BigInt(nums[i]));
            divisibilty.push(0);
        }
        
    }

    return divisibilty;
}


let word = "86217457695827338571";
let m = 8;

console.log(divisibilityArray(word, m));