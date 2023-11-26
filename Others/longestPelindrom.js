// string = abcc 
// max_len_allowed_for_substring = len(string) -> (4)

//loop step 1
// loop while max_len_allowed_for_substring > 1
// substring_array = all possible connected substrings of string abcc -> ["abcc"]
// all elements in this array, if they are palindrome, return that element
// no palindrome then max_len_allowed_for_substring = max_len_allowed_for_substring - 1

//loop step 2
// max_len_allowed_for_substring (3)
// substring_array = all possible connected substrings of string abcc -> ["abc","bcc"]
// all elements in this array, if they are palindrome, return that element
// no palindrome then max_len_allowed_for_substring = max_len_allowed_for_substring - 1

//loop step 3
// max_len_allowed_for_substring (2)
// substring_array = all possible connected substrings of string abcc -> ["ab","bc", "cc"]
// all elements in this array, if they are palindrome, return that element


// function input = string, n 
// function output = array of connected substrings 



//testcases




function connectedSubS(str, max){
    //run a for loop
    //start with the first element and increase i by max and take all the string and put it in an array
    let i = 0;
    let subStrArr =[];
    while(i + max <= str.length){
        subStrArr.push(str.slice(i, i+max)); //abcc
        i++;
    }
    return subStrArr;
}

function checkPal(str){
    let reversed = str.split('').reverse().join('');
    if(str === reversed){
        return true;
    }else{
        return false;
    }
}

function longestPallindrome(str){
    let len = str.length;
    let sub_String_array= connectedSubS(str, len);
    for(let el of sub_String_array){
        console.log(el);
     if(checkPal(el)){
         return el;
     }
     len=len-1;
    }
 }

 let str = 'abcc';
console.log(longestPallindrome(str));
