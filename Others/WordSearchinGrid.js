//check if any of the array contains the first letter of the word
//in the array that exists the letter we move left or right 
//if we dont find the second letter then we move down with the index 
//in second array we do the same
//on our way we keep replacing the original string with "" if we found match

function word_search(grid, word){
    let search_index = 0;
    if(grid[0].includes(word[0])){
        index = grid[0].indexOf(word[0]);
        for (let i = 0; i < grid[0].length; i++) {
            const element = array[i];
            
        }
    }else if(grid[1].includes(word[0])){
        index = grid[1].indexOf(word[0]);
    }else if(grid[2].includes(word[0])){
        index = grid[2].indexOf(word[0]);
    }else{
        return false;
    }
    
}
const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = 'BFD';

console.log(word_search(board, word));