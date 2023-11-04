// O(n log n) solution

function missingNum (array) {
    const sorted = array.sort((a,b)=> a-b);
    let count = sorted[0];
    for (let index = 0; index < sorted.length; index++) {
        if(array[index] === count){
            count++;
            
        }else{
            return count;
        }
        
    }
}

const arr = [ 3, 6, 5, 7];
console.log(missingNum(arr));