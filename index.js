// Valid parentheses (20 mins)

// CHALLENGE

// Write a function called `tribonacci` that accepts:
// a) an array for the first 3 numbers in the tribonacci series.
// b) the length of the tribonacci series that should be returned
// e.g. `tribonacci([1,1,1],10) ===> [1,1,1,3,5,9,17,31,57,105]`

// NB please check the tests to make sure all cases are covered.  

// TESTING YOUR SOLUTION

// To test your solution, run 'npm install' in the root directory
// and then run 'npm test' to run the automated tests.

// SUBMITTING YOUR SOLUTION

// When done, make sure you're working on a forked repo, push your
// changes to your forked repo and submit a pull request.





function tribonacci(startingInput,n){
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [startingInput[0]];
  }
  let res = startingInput;
  let newNum = res[res.length - 1] + res[res.length - 2] + res[res.length - 3];
  res.push(newNum);
  let i =0;
  while (i < n - 4) {
    tribonacci(res);
    i++;
  }
  return res;
}
  
   


module.exports = tribonacci;
