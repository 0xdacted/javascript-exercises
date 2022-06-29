const removeFromArray = function(...args) {
    const array = args[0];
   let newArray = [];

   array.forEach((item) => {
    if(!args.includes(item)) {
        newArray.push(item);
    } 
   });
   return newArray;
}
// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }
// Do not edit below this line
module.exports = removeFromArray;
