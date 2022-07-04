const add = (a,b) => { 
  return parseInt(a + b);
};

const subtract = (a,b) => {
	return parseInt(a - b);
};

const sum = (values) => {
	let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
};
return sum;
}

const multiply = (input) => {
let multiply = 1;
for (let i = 0; i < input.length; i++) {
  multiply *= input[i];
}
return multiply;
};

const power = (number, toPower) => {
	return number ** toPower;
};

const factorial = (int) => {
let result = 1;
  for (i = 1; i <= int; i++) {
  result *= i;
}
return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
