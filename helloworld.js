// Writing Custom Functions
// #Prompt 1
function callName(name) {
  return 'Hey ' + name;
}

// #Prompt 2
function subtract(a,b) {
  return a - b;
}

// #Prompt 3
function multiplyTwoNumbers(a,b) {
  return a * b;
}

// #Prompt 3
function multiplyThreeNumbers(a,b,c) {
  return a * b * c;
}

// #Prompt 4
function divideTwoNumbers(a,b) {
  return a / b;
}

// #Prompt 5
function remainder(a,b) {
  let remainder = 0;
    remainder = a % b;
    return remainder.toString();
}


console.log(subtract(5,4));
