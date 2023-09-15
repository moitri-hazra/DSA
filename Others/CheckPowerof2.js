/* Given an integer 'n', return *'true' if it is a power of two. Otherwise, return 'false'*. An integer 'n' is a power of two, if there exists an integer 'x' such that 'n == 2^x'. 

EXAMPLE 1:
Input: n = 1
Output: true
Explanation: 20 = 1


EXAMPLE 2:
Input: n = 16
Output: true
Explanation: 24 = 16

EXAMPLE 3:
Input: n = 3
Output: false 

*/

function checkPowerof2(n){

    let testCase = n;
    // if number == 1 -> return true
    while(testCase!==0){
        if ( testCase == 2){ // if testcase is 2 then return true
        return true
    }else{
       let q = testCase/2; // else the store the result of divinding it with 2
       let r = testCase%2; // store the remainder 
       if( r==0){ // if remainder is 0
        testCase = q; // then again pass the result as the testcase which starts the loop again
       }else{
        return false; // if remainder isn't 0 then return false
       }
    }
}

}

//testcases
console.log(checkPowerof2(18));