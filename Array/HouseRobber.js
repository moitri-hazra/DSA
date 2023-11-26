function houseRobber(nums) {
    let max_money= 0;
    let current_money1=0;
    let current_money2=0;
    for (let i = 0; i < nums.length; i+=2) {
        current_money1+=nums[i];
        
    }
    for (let i = 1; i < nums.length; i+=2) {
        current_money2+=nums[i];
        
    }

    if (current_money1 > current_money2 ) {
        max_money = current_money1;
    }else{
        max_money = current_money2;
    }

    return max_money;
}

const nums =[1,2];
console.log(houseRobber(nums))