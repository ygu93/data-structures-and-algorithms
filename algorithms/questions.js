// You are given an array of integers both positive and negative. Find the contiguous sequence with the largest sum. Return the sum.

function contiguous_sub_sum(arr){
  var currentSum = 0;
  var max = -Infinity;
  for(var i = 0; i < arr.length; i++){
    currentSum += arr[i];
    if(currentSum > max){
      max = currentSum;
    }else if(currentSum < 0){
      currentSum = 0;
    }
  }
  return max; 
}
