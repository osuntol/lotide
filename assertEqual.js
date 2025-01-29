const assertEqual = function (actual, expected){
  if(actual === expected){
    console.log(`🟢🟢🟢Assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] ==! [${expected}]`)
  }  
  // console.assert(actual, expected, {actual, expected})
}


assertEqual(1,1);
assertEqual(2,3);
assertEqual('good','good');
assertEqual('GREAT', 'great')