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
