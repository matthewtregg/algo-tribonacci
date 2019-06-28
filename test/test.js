require('chai').should();

const tribonacci = require('../index.js');

describe('Basic Tests', function () {

  it('works with a normal starting input', function () {
    tribonacci([1,1,1],10).should.deep.equal([1,1,1,3,5,9,17,31,57,105]);
    tribonacci([1,2,3],10).should.deep.equal([1,2,3,6,11,20,37,68,125,230]);
    tribonacci([3,2,1],10).should.deep.equal([3,2,1,6,9,16,31,56,103,190]);
  });

  it('works with ones and zeroes in the starting input', function () {
    tribonacci([0,0,1],10).should.deep.equal([0,0,1,1,2,4,7,13,24,44]);
    tribonacci([0,1,1],10).should.deep.equal([0,1,1,2,4,7,13,24,44,81]);
    tribonacci([1,0,0],10).should.deep.equal([1,0,0,1,1,2,4,7,13,24]);
    tribonacci([0,0,0],10).should.deep.equal([0,0,0,0,0,0,0,0,0,0]);
  });

  it('works with 0 and 1 length series', function () {
    tribonacci([1,1,1],1).should.deep.equal([1]);
    tribonacci([300,200,100],0).should.deep.equal([]);
  });
  

  
});
