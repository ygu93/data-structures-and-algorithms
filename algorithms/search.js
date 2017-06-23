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
