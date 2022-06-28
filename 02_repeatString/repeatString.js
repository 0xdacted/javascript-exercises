const repeatString = function(word, times) {
   
   let string;

   if (times < 0){
      string = "ERROR"
   }

   else {
      string = ''
   }

   for (i = 0; i < times; i++){
      string += word;
   }   

return string;
}
//this works as well -> return `${string.repeat(num)}`; 
// Do not edit below this line
module.exports = repeatString;
