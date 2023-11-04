function maxDiv(nums, divisors){
    while(divisors.length !== 0){
        let i= 0;
        let c = 0;
        if(nums[i] % divisors[0] ===0){
            c++;
            i++;
        }else{
            i++;
        }
    }
}