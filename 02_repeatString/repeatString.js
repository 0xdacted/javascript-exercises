const repeatString = function(string, num) {
   let finalString;
    for (i = 1; i <= num; i++){
   if (i === 1) {
    finalString = string;
   }
   else {
    finalString += string;
   }
};
return finalString;
}
// this works as well -> return `${string.repeat(num)}`; 
// Do not edit below this line
module.exports = repeatString;
