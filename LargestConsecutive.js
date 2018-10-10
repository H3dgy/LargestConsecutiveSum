// Largest consecutive sum (45 mins)

// Write a function that returns the largest
// sum of consecutive integers from an array.
// (Consecutive -> no skipping numbers!)
// For example:
// largestConsecutiveSum([9, -100, 5, 5]) -> 10
// largestConsecutiveSum([2, 2, -3, 2, 2]) -> 5
// largestConsecutiveSum([-1, -1]) -> 0
// largestConsecutiveSum([]) -> 0

function largestConsecutiveSum (arrayOfInts) {
  let max = 0;
  for (let i = 0; i < arrayOfInts.length ; i++) {
    let sum = 0;
    for (let j = i; j < arrayOfInts.length; j++ ) {
      sum = sum + arrayOfInts[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

console.log('first: ',largestConsecutiveSum([-2,2,-3]));

function largestConsecutiveSum2 (arrayOfInts) {

  // call recursion
  return inner(arrayOfInts);

  // recursive function
  function inner (array) {
    console.log(array);
    if (array.length <= 1) return array[0] || 0;
    const min = Math.min(...array);
    if (min >= 0) return arraySum(array);
    const index = array.indexOf(min),
      left = array.slice(0,index),
      right = array.slice(index+1);
    const leftS = arraySum(left),
      rightS = arraySum(right);
      console.log(left,right);
    // check if the break makes sense, thus is left or right > left + right + array
    if (leftS + rightS + array[index] > leftS && leftS + rightS + array[index] > rightS) {
      return (leftS + rightS + array[index]);
    } else {
      if (right.length === 0) {
        return inner(left);
      } else if (left.length ===0) {
        return inner(right);
      } else {
        return leftS > rightS ? inner(left) : inner(right);
      }
    }
  }
};

function arraySum (array) {
  return array.reduce((res,el) => res + el,0);
}

console.log(largestConsecutiveSum2([-3,2,-2]));
