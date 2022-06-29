const sumAll = function(i, x) {
    let sum = 0;
    
    if (i < 0 || x < 0)
    {
        return "ERROR"
    }

    if (!Number.isInteger(i) || !Number.isInteger(x)) {
        return "ERROR"
    }
    
    else if (x > i){
    for (i; i <=x; i++) {
        sum += i;
    }}

    else {
        for (x; x <=i; x++) {
            sum+= x;
        } 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
