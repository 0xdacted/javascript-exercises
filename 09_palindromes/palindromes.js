const palindromes = (text) => {
    let string = text.toString();
    const filteredString = string.replace(/[\W_]/g, '').replace(/\s/g, '').toLowerCase();
    
    let word = '';

    for (let i = filteredString.length - 1; i >= 0; i--) {
        word += filteredString[i];
    }
       if (word === filteredString) {
        return true;
       }
       else {
        return false;
       }
}; 


// Do not edit below this line
module.exports = palindromes; 
