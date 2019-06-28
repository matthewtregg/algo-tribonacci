function tribonacci(startingInput,n){  
  for (let i = 0; i < n-3; i++) { // iterate n times
    startingInput.push(startingInput[i] + startingInput[i+1] + startingInput[i+2]); // add last 3 array items and push to trib
  }
  return startingInput.slice(0, n); //return trib - length of n
}