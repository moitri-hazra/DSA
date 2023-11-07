function mostWater(arr){
    let i = 0;
    let j = arr.length-1;
    let map ={};
    let area = []; //8, 12, 12, 7
    while(i!==j){
        if(arr[i] > arr[j]){
            let num = arr[j]*(j-i);
            area.push(num);
            map[num] = [arr[i], arr[j]];
            j--;
        }else{
            let num2 = arr[i]*(j-i);
            area.push(num2);
            map[num2] = [arr[i], arr[j]];
            i++;
        }
    }
    return map[Math.max(...area)];

}

//tescases
const array = [2, 4, 6, 7, 8]
console.log(mostWater(array));