function groupAnnagram(strs){
    let keyMap = {};
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let sorted_word = word.split('').sort().join('');
        if(keyMap[sorted_word]){
            keyMap[sorted_word].push(word);
        }else{
            keyMap[sorted_word]= [word];
        }
        
    }

    return Object.values(keyMap);
}

const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnnagram(strs));