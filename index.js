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
  const arr = startingInput
  if (n < arr.length) return arr.slice(0,n);

  for (let i = 2; i < n - 1 ; i++) {
    arr.push(arr[i] + arr[i-1] + arr[i-2]);
  }
  return arr;
}
  
   


module.exports = tribonacci;
