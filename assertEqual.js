

const array = [5, 6, 7]
const emptyArray = []
const assertEqual = function (actual, expected){
  if(actual === expected){
    console.log(`🟢🟢🟢Assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] ==! [${expected}]`)
  }  
  // console.assert(actual, expected, {actual, expected})
}

function head(input) {
  if (input.length > 1){
   let headNumber = input[0];
   return headNumber
  } else {
    return undefined;
}
}

// assertEqual(1,1);
// assertEqual(2,3);
// assertEqual('good','good');
// assertEqual('GREAT', 'great') 

// assertEqual((head[5, 6, 7]), 5)

console.log(assertEqual(head(emptyArray), 5))