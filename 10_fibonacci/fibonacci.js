const fibArray = [];
fibArray[0] = 0;
fibArray[1] = 1;

const fibonacci = (n) => {
    if (n < 0) {
        return "OOPS";
    }
    
    for (i = 2; i <= n; i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray[n];
};

// Do not edit below this line
module.exports = fibonacci;
