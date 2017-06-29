// hacker rank big sorting
function bigSorting() {
    var n = parseInt(readLine());
    var unsorted = [];
    for(var unsorted_i = 0; unsorted_i < n; unsorted_i++){
       unsorted[unsorted_i] = readLine();
    }
    // your code goes here
    unsorted = unsorted.sort((a,b) => {
        if(a.length < b.length){
            return -1;
        }else if(a.length > b.length){
            return 1;
        }else if(a.length === b.length){
            for(var i =0;i<a.length;i++){
                if(parseInt(a[i]) < parseInt(b[i])){
                    return -1
                }else if(parseInt(a[i]) > parseInt(b[i])){
                    return 1;
                }
            }
        }
        return 0;
    })
    unsorted.forEach(num => console.log(num));
}

// hacker rank insertion sort part 1
function insertionSortPartOne(input) {
    //Enter your code here
    input = input.split('\n')
    var s = input[0]
    var arr = input[1].split(' ').map(num => parseInt(num));
    var unsorted = arr[s-1];
    for(var i = s - 2;i > -1;i--){
       if(arr[i] > unsorted){
           arr[i+1] = arr[i];
           console.log(arr.join(' '));
       }else if(arr[i] <= unsorted){
           arr[i + 1] = unsorted;
           console.log(arr.join(' '));
           return;
       }

    }
    arr[0] = unsorted;
    console.log(arr.join(' '))
}

// hacker rank quicksort part 1
function quickSortPartOne(input) {
    //Enter your code here
    input = input.split('\n');
    var n = input[0];
    var arr = input[1].split(' ').map(num => parseInt(num));
    var left = [];
    var right = [];
    var pivot = arr[0];
    for(var i=1;i<n;i++){
        if(arr[i] <= pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    left = left.join(' ');
    right = right.join(' ');
    console.log(`${left} ${pivot} ${right}`)
}


// inplace quicksort using a partition with first element pivot
function quickSort(array, start = 0, end = array.length, comparator){
  if(!comparator){
    comparator = function(a, b){
      return a-b;
    }
  }

  if(end - start < 2){
    return array;
  }

  var pivot = partition(array, start, end, comparator);
  quickSort(array, start, pivot, comparator);
  quickSort(array, pivot+1, end, comparator);
  return array
}

function partition(array, start, length, comparator){
  if(!comparator){
    comparator = function(a, b){
      return a-b;
    }
  }

  var i = start + 1;
  var pivot = array[start];
  var barrier = start;
  while(i< length){
    if(comparator(pivot, array[i]) > 0){
      var temp = array[i];
      array[i] = array[barrier+1];
      array[barrier+1] = temp;
      barrier++;
    }
    i++;
  }

  var temp2 = array[start];
  array[start] = array[barrier];
  array[barrier] = temp2;
  return barrier
}


// hackerrank quicksort with last element used as pivot
function quickSort2(array, start = 0, end = array.length, comparator){
  if(!comparator){
    comparator = function(a, b){
      return a-b;
    }
  }

  if(end - start < 2){
    return array;
  }

  var pivot = partition2(array, start, end, comparator);
  quickSort2(array, start, pivot, comparator);
  quickSort2(array, pivot+1, end, comparator);
  return array
}

function partition2(array, start, end, comparator){


  if(!comparator){
    comparator = function(a, b){
      return a-b;
    }
  }

  var i = start;
  var pivot = array[end-1];
  var barrier = start;
  while(i < end){
    if(comparator(pivot, array[i]) > 0){
      var temp = array[i];
      array[i] = array[barrier];
      array[barrier] = temp;
      barrier++;
    }
    i++;
  }

  var temp2 = array[end - 1];
  array[end - 1] = array[barrier];
  array[barrier] = temp2;
  return barrier
}

// hacker rank counting sort1
function countingSort(n, arr){
   var results = [];
   for(var i = 0;i<100;i++){
       results.push(0);
   }

    for(var j = 0;j<n;j++){
       results[arr[j]]++;
   }

   var sorted = [];
   for(var k = 0;k<n;k++){
       if(results[k] > 0){
         for(var l = 0;l<results[k];l++){
             sorted.push(k);
         }
       }
   }
   return sorted
}


// hacker rank find the median using quick select partition
function findMedian(arr, start =0, end=arr.length){
    if(start === end){
        return arr[start]
    }
    var pivot = qsPartition(arr, start, end);
    var medianIdx = Math.floor(arr.length/2)
    if(pivot === medianIdx){
       return arr[pivot];
    }else if(pivot > medianIdx){
        return findMedian(arr, start, pivot);
    }else if(pivot < medianIdx){
        return findMedian(arr, pivot+1, end)
    }



}

function qsPartition(arr, start, end){
    let pivotIdx = start
    let pivot = arr[start]
    for(var i=start+1;i<end;i++){
        if(arr[i] <= pivot){
            var temp = arr[pivotIdx+1];
            arr[pivotIdx+1] = arr[i];
            arr[i] = temp;
            pivotIdx++;
        }
    }

    var temp2 = arr[pivotIdx];
    arr[pivotIdx] = pivot;
    arr[start] = temp2;
    return pivotIdx;
}



// given an array of objects A an an array of indexes B reorder array A with the given indexes in array B
function reOrder(arr, order){
  var i = 0;
  while(i<arr.length){
    if(order[i] !== i){
      var el = arr[i];
      var pos = order[i];
      arr[i] = arr[pos];
      arr[pos] = el;
      order[i] = order[pos];
      order[pos] = pos;
    }else{
      i++;
    }
  }

  return arr;
}
