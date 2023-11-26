//Longest Uncommon subsequence

// step 1 --> sort the elements
// step 2 --> make hashmap out of all the el 

function isSubsequence(s1, s2) {
    let i = 0, j = 0;
    while (i < s1.length && j < s2.length) {
      if (s1[i] === s2[j]) {
        i++;
      }
      j++;
    }
    return i === s1.length;
  }
  
  function findLUSlength(strs) {
    strs.sort((a, b) => b.length - a.length);
  
    for (let i = 0; i < strs.length; i++) {
      let isUncommon = true;
      for (let j = 0; j < strs.length; j++) {
        if (i !== j && isSubsequence(strs[i], strs[j])) {
          isUncommon = false;
          break;
        }
      }
      if (isUncommon) {
        return strs[i].length;
      }
    }
  
    return -1;
  }
  

  
const strs = ["aba","cdc","eae"];
console.log(uncommon_Sub(strs));