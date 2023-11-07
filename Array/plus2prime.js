function isPrime(num){
    if(num <= 1) return false;
    if(num <= 3 ) return true;
    if(num% 2 === 0 || num% 3 ===0) return false;
    for (let i = 5; i*i <= num; i+=6) {
        if(num% i === 0 || num% (i+2)===0)return false;
        
    }

    return true;
}

function plus_two_prime(num){
    let nextNum = num +2;
    return isPrime(nextNum) + " for " + num;
}

console.log(plus_two_prime(11));
  