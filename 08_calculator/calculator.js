const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
  let output = 0
	for(num in arr) {
    output+=arr[num];
  };
  return output
};

const multiply = function(arr) {
  let output = 1
	for(num in arr) {
    output*=arr[num];
  };
  return output
};

const power = function(a,b) {
	let output = 1;
  for(let i =0; i < b; i++) {
    output*=a;
  };
  return output;
};

const factorial = function(a) {
  let output = 1;
	for(let i = 1; i <= a; i++) {
    output*=i;
  };
  return output;
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
