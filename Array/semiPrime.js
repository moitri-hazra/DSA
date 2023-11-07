// write a function to check if a number is  prime or nor
// first after taking number we find the factors
// then factors in the check prime function
// all the el in the factor array should pass the prime check function then return true or false

function checkPrime(num){ 
    if(num <= 1) return false;
    if(num <= 3) return true;
    if(num%2 ===0 || num%3 === 0) return false;
    for (let i = 5; i <= Math.sqrt(num); i+=6) {
        if(num%i === 0 || num%(i+2)===0) return false;
        
    }

    return true;
}

function getFactors (num){
    let result =[];
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if(num% i===0){
            result.push(i)
            result.push(num/i);
        }
        
    }
    return result;

}


function semiPrime(num){
    let factors = getFactors(num) ;
    let allPrimes = true;

    if(checkPrime(num)){
        allPrimes = false; 
    }
    
    factors.forEach((factor) => {
        if (!checkPrime(factor)) {
          allPrimes = false;
          return;
        }
      });
      
      return allPrimes;
}

console.log(semiPrime(7));
