// hackerrank missing number

function missingNum(input) {
    //Enter your code here
    input = input.split('\n');
    var n = parseInt(input[0]);
    var m = parseInt(input[2]);
    var arr1 = input[1].split(' ').map(num => parseInt(num));
    var arr2 = input[3].split(' ').map(num => parseInt(num));
    var chars = {};
    for(var i=0;i<m;i++){
        if(chars[arr2[i]]){
            chars[arr2[i]]++;
        }else{
            chars[arr2[i]] = 1;
        }
    }

    for(var j=0;j<n;j++){
        chars[arr1[j]]--;
    }

    console.log(Object.keys(chars).filter(char => chars[char] > 0).join(' '));

}

function pairs(input) {
    //Enter your code here
    input = input.split('\n');
    input[0] = input[0].split(' ');
    var n = parseInt(input[0][0]);
    var k = parseInt(input[0][1]);
    var arr = input[1].split(' ').map(num => parseInt(num));
    var hash = {};
    var count = 0;
    for(var i =0;i<n;i++){
        if(hash[arr[i]+k]){
           count++;
        }

        if(hash[arr[i]-k]){
           count++;
        }
        hash[arr[i]] = true;
    }
    console.log(count);


}


// hacker rank sherlock and array
function sherlockArray(a){
    // Complete this function
    var leftSums = [0];
    for(var i=0;i<a.length-1;i++){
        leftSums.push(a[i] + leftSums[i])
    }

    var k = leftSums.length-1;
    var rightSum = 0;
    for(var j=a.length-1;j > -1;j--){
        if(rightSum === leftSums[k]){
            return "YES";
        }
        k--;
        rightSum+= a[j];
    }

    return "NO"
}
