

const findTheOldest = function(people) {
    
    people.sort(function(a,b) {
    let lastPerson = a.yearOfDeath - a.yearOfBirth;
    let nextPerson = b.yearOfDeath - b.yearOfBirth;
    if (a.yearOfDeath === undefined) {
        lastPerson = parseInt(new Date().getFullYear()) - a.yearOfBirth;
    }
    if (b.yearOfDeath === undefined){
        nextPerson = parseInt(new Date().getFullYear()) - b.yearOfBirth;
    }
    
    if (lastPerson > nextPerson) {
      return -1;
    } else {
      return 1;
    }
}); 
return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
