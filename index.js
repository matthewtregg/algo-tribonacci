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
  if (n === 0 ) return [];
  if (n === 1 ) return [1];

  const nextNum = startingInput.reduce((a, b) => a + b);
  const result = [...startingInput, nextNum];
  let final = result.slice();

  while (final.length !== n) {
    let last3 = final.slice(-3);
    final.push(last3.reduce((a, b) => a + b));
  }
  return final;
}




module.exports = tribonacci;
