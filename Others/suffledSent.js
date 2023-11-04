/* A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence. */

function reconstructSentence(s) {
  let wordArr = s.split(' ');
  let resArr = new Array(wordArr.length);

  for(let word of wordArr){
    let index = word[word.length-1];
    let realWord = word.slice(0, -1);
    resArr[index-1]= realWord;
  }

  return resArr.join(' ');
}

const shuffledSentence = "Home2 Going1 not4 easy5 is3";
const originalSentence = reconstructSentence(shuffledSentence);
console.log(originalSentence);