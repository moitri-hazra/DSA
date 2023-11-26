/*
steps--
have three pointers i, j, k
i=0, j=i+1, k=j+1
run a while loop 
check if i+j+k = 0; if yes push in result array, if no i++
*/



function threeSum(nums){
    let result_array =[];
    let i =0;
    let j =1;
    let k=2;

    while(j<nums.length){
        if(nums[i]+nums[j]+nums[k] === 0){
            result_array.push([nums[i],nums[j],nums[k]]);
            i++;
            j++;
            k++;
        }else{
            i++;
            j++;
            k++;
        }
    }

    return result_array;

};


function possibleSubArray(arr){
    let sub_arrays =[];
    for (let i = 0; i < arr.length-2; i++) {
        for (let j = i+1; j < arr.length-1; j++) {
            for (let k = j+1; k < arr.length; k++) {
                let sorted_array= [arr[i], arr[j], arr[k]].sort();
                if(arr[i] + arr[j] + arr[k] === 0){
                    let sub_arr = [arr[i],arr[j],arr[k]].sort((a,b)=>a-b).toString();
                    if(!sub_arrays.includes(sub_arr)){
                        sub_arrays.push(sub_arr);
                    }
                    
                }
                    
                }
                
            }
            
        }
        

    return sub_arrays.map(str => str.split(',').map(Number));
}

const array = [-1,0,1,2,-1,-4];

console.log(threeSum(array));
console.log(possibleSubArray(array));
