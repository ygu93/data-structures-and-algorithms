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


// inplace quicksort using a partition
function quickSort(array, start = 0, end = array.length, comparator){
  if(!comparator){
    comparator = function(a, b){
      return a-b;
    }
  }

  if(end - start < 2){
    return array;
  }

  pivot = partition(array, start, end, comparator);
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
    if(comparator(pivot, array[i]) > 0 && barrier + 1 === i ){
      barrier++;
    }else if(comparator(pivot, array[i]) > 0 && barrier + 1 !== i){
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
