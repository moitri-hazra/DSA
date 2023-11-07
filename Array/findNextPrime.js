function isPrime(num){
    if(num <= 1) return false;
    if(num <= 3 ) return true;
    if(num% 2 === 0 || num% 3 ===0) return false;
    for (let i = 5; i <= Math.sqrt(num); i+=6) { 
        if(num% i === 0 || num% (i+2)===0)return false;
        
    }

    return true;
}

function nextPrime(num){
    let nextNum = num +1;
    while(true){
        if(isPrime(nextNum)){
            return nextNum;
        }else{
            nextNum++;
        }
    }
}
  
  // Example usage:
  const input = 27;
  const prime = nextPrime(input);
  console.log(prime); // Output: 17
  