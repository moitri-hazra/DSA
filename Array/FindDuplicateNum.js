function findDuplicate (arr){
    let sorted = arr.sort(function(a,b) { return a-b; });
    let stack = [];
    for(let i=0; i < arr.length; i++){
        if(stack[stack.length-1] ===arr[i]){
            return arr[i];
        }else{
            stack.push(arr[i]);
        }
    }
}

//testcases

const Array =[3,1,3,4,2];
console.log(findDuplicate(Array));